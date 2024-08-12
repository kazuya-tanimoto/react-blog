import { screen, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { NewQueryClientProvider } from "@/utils/NewQueryClientProvider";
import { renderWithRouter } from "@/utils/RenderWithRouter";
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

test("displays a list of user qualifications", async () => {
  renderWithRouter(
    <NewQueryClientProvider>
      <Qualifications />
    </NewQueryClientProvider>,
  );

  // Show placeholder while fetching
  expect(screen.getByTestId("placeholder")).toBeInTheDocument();

  // Wait for placeholder to disappear
  await waitFor(
    () => {
      expect(screen.queryByTestId("placeholder")).not.toBeInTheDocument();
    },
    { timeout: 10000 },
  );

  // Show user data after fetching
  await screen.findByText("プロジェクトマネージャ(2011/06)");
});

test("handles server error", async () => {
  // Suppresses console error output.
  const consoleErrorMock = vi
    .spyOn(console, "error")
    .mockImplementation(() => {});

  server.use(
    http.get("https://jsonplaceholder.typicode.com/users", () => {
      return new HttpResponse("Internal Server Error", { status: 500 });
    }),
  );

  renderWithRouter(
    <NewQueryClientProvider>
      <Qualifications />
    </NewQueryClientProvider>,
  );

  // Show placeholder while fetching
  expect(screen.getByTestId("placeholder")).toBeInTheDocument();

  // Wait for placeholder to disappear
  await waitFor(
    () => {
      expect(screen.queryByTestId("placeholder")).not.toBeInTheDocument();
    },
    { timeout: 10000 },
  );

  // Wait for error message to be displayed
  await screen.findByRole("alert");

  // Restore console error output.
  consoleErrorMock.mockRestore();
});
