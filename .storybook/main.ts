import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook"
  ],

  framework: { name: "@storybook/react-vite", options: {} },

  docs: {},

  features: {
    // @ts-ignore
    emotionAlias: false,
  },

  // @ts-ignore
  webpackFinal: async (baseConfig) => {
    return {
      ...baseConfig,
      resolve: {
        ...baseConfig.resolve,
        alias: {
          ...baseConfig.resolve?.alias,
          // @ts-ignore
          "@app": path.resolve(__dirname, "../app/"),
          // @ts-ignore
          "@": path.resolve(__dirname, "../"),
        },
      },
    };
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
