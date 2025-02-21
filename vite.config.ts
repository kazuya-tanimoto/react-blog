import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
  ],
  test: {
    coverage: {
      provider: "v8",
      include: ["src/**/*"],
      exclude: [ "**/stories/*", "**/*.stories.tsx", "**/types/*.ts", "**/*.d.ts", "**/data/*.ts", "src/dev/**/*" ],
    },
    environment: "jsdom",
    exclude: [...configDefaults.exclude, "tests/**/*"],
    globals: true,
    setupFiles: "./vitest.setup.ts"
  }
});
