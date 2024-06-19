import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import { ChakraProvider } from "@chakra-ui/react";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

initialize();

// Create a client
const queryClient: QueryClient = new QueryClient();

const preview: Preview = {
  decorators: [
    withRouter,
    mswDecorator,
    (Story) => (
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
        <Story />
        </QueryClientProvider>
      </ChakraProvider>
    )
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // loaders: [mswLoader],
};

export default preview;
