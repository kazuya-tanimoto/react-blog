import { screen, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { NewQueryClientProvider } from "@/utils/NewQueryClientProvider";
import { renderWithRouter } from "@/utils/RenderWithRouter";
import { BlogCardCollection } from "./BlogCardCollection";

const server = setupServer(
  http.get("https://jsonplaceholder.typicode.com/posts", () => {
    return HttpResponse.json([
      { userId: 1, id: 1, title: "Test Post", body: "Test Body" },
    ]);
  }),
);

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

describe("BlogCardCollection", () => {
  it("renders loading state initially", () => {
    renderWithRouter(
      <NewQueryClientProvider>
        <BlogCardCollection />
      </NewQueryClientProvider>,
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders posts after fetch", async () => {
    renderWithRouter(
      <NewQueryClientProvider>
        <BlogCardCollection />
      </NewQueryClientProvider>,
    );

    await screen.findByText("Test Post", {}, { timeout: 10000 });
  });

  it("handles server error", async () => {
    // Suppresses console error output.
    const consoleErrorMock = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    server.use(
      http.get("https://jsonplaceholder.typicode.com/posts", () => {
        return new HttpResponse("Internal Server Error", { status: 500 });
      }),
    );

    renderWithRouter(
      <NewQueryClientProvider>
        <BlogCardCollection />
      </NewQueryClientProvider>,
    );

    await screen.findByRole("alert", {}, { timeout: 10000 });

    // Restore console error output.
    consoleErrorMock.mockRestore();
  });

  it("renders multiple posts after fetch", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/posts", () => {
        return HttpResponse.json([
          { userId: 1, id: 1, title: "Test Post 1", body: "Test Body 1" },
          { userId: 2, id: 2, title: "Test Post 2", body: "Test Body 2" },
        ]);
      }),
    );

    renderWithRouter(
      <NewQueryClientProvider>
        <BlogCardCollection />
      </NewQueryClientProvider>,
    );

    await screen.findByText("Test Post 1", {}, { timeout: 10000 });
    await screen.findByText("Test Post 2", {}, { timeout: 10000 });
  });

  it("renders no posts when API returns empty array", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/posts", () => {
        return HttpResponse.json([]);
      }),
    );

    renderWithRouter(
      <NewQueryClientProvider>
        <BlogCardCollection />
      </NewQueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.queryByText("Test Post")).not.toBeInTheDocument();
    });
  });

  it("renders error message when API returns 404", async () => {
    // Suppresses console error output.
    const consoleErrorMock = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    server.use(
      http.get("https://jsonplaceholder.typicode.com/posts", () => {
        return new HttpResponse("Internal Server Error", { status: 500 });
      }),
    );

    server.use(
      http.get("https://jsonplaceholder.typicode.com/posts", () => {
        return new HttpResponse("Page Not Found", { status: 404 });
      }),
    );

    renderWithRouter(
      <NewQueryClientProvider>
        <BlogCardCollection />
      </NewQueryClientProvider>,
    );

    await screen.findByRole("alert", {}, { timeout: 10000 });

    // Restore console error output.
    consoleErrorMock.mockRestore();
  });
});
