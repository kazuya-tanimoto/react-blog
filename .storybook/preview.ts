import type { Preview } from "@storybook/react";
// import { initialize, mswLoader } from 'msw-storybook-addon';
import { initialize, mswDecorator } from "msw-storybook-addon";

initialize();

const preview: Preview = {
  decorators: [mswDecorator],
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
