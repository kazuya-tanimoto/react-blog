import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    include: ["src/**/*.{test,spec}.ts?(x)"],
    globals: true,
    setupFiles: "./vitest.setup.ts"
  }
});
