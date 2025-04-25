import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Create a client
const queryClient: QueryClient = new QueryClient();

const root = document.getElementById("root");
root != null &&
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <ChakraProvider>
          <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ChakraProvider>
      </BrowserRouter>
    </React.StrictMode>,
  );
