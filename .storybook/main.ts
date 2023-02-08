import type { StorybookConfig } from '@storybook/svelte-vite';
import path from "path"

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/svelte-vite",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  },
  viteFinal: async (config) => ({
    ...config,
    resolve: {
      alias: {
        ...config.resolve?.alias,
        '@app': path.join(__dirname, "../src"),
      }
    }
  })
};
export default config;
