import type React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { Qualifications } from "./Qualifications";

// モックAPIハンドラーを定義
const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json([
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
    ]);
  }),
];

// MSWサーバーをセットアップ
const server = setupServer(...handlers);

// MSWサーバーのライフサイクルを管理
beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

// QueryClientの設定
const queryClient = new QueryClient();

const renderWithClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
};

test("displays a list of user qualifications", async () => {
  renderWithClient(<Qualifications />);

  expect(screen.getByText(/Loading/i)).toBeInTheDocument();

  await screen.findByText("Leanne Graham");
});

test("handles server error", async () => {
  server.use(
    http.get("https://jsonplaceholder.typicode.com/users", () => {
      return new HttpResponse("Internal Server Error", { status: 500 });
    }),
  );

  renderWithClient(<Qualifications />);

  await screen.findByRole("alert");
  expect(screen.getByText(/Something went wrong:/i)).toBeInTheDocument();
});
