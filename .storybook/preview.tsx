import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import { ChakraProvider } from "@chakra-ui/react";
import { initialize, mswDecorator } from "msw-storybook-addon";

initialize();

const preview: Preview = {
  decorators: [
    withRouter,
    mswDecorator,
    (Story) => (
      <ChakraProvider>
        <Story />
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
