
# react-template

## references

### react router

- [Tutorial v6.14.1 | React Router](https://reactrouter.com/en/main/start/tutorial)

### vitest

- [Managing Vitest config file | Vitest](https://vitest.dev/config/file.html)
- [Vite + React + TypeScript に テスト環境 Vitest をステップbyステップで作る](https://zenn.dev/longbridge/articles/9d9ec773cb3814)
- [Vitest テストの方法](https://zenn.dev/longbridge/scraps/c3c01b1c03f5da)

### jest + testing-library

- [Vite+React+TypeScriptに テスト環境 Jest＋TestingLibrary をステップbyステップで作る](https://zenn.dev/longbridge/articles/9e9758181c8846)

### project structure

- [bulletproof-react/docs/project-structure.md](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)

### atomic components

- [A brief look at Atomic Components[和訳] - Qiita](https://qiita.com/kahirokunn/items/b599d2cf04d2580c412c)

### TanStack Query

- [TanStack Query | React Query, Solid Query, Svelte Query, Vue Query](https://tanstack.com/query/v4/docs/react/overview)
- [TanStack Queryは神フレームワーク](https://zenn.dev/mitsuruokura/articles/7372ae1be233c4)

### Storybook

- [TypeScript+Reactで始めるStorybook 7入門 | アールエフェクト](https://reffect.co.jp/react/react-typescript-storybook7/)
- [StorybookをReact, Typescriptな環境に導入する - RoadMovie](https://tech-mr-myself.hatenablog.com/entry/2020/02/05/214226)
- [React + TypeScript: Storybookを使ってみる - Qiita](https://qiita.com/FumioNonaka/items/7394f96f7d0090f2b10c)
- [Storybook Tutorials](https://storybook.js.org/tutorials/intro-to-storybook/react/ja/get-started/)
  - 古いVerかつNo-TypeScriptなのであくまで参考程度
- [React/Next.jsでAtomic Designを導入する初心者がとりあえず読む記事](https://zenn.dev/hisachii/articles/2544d6ea10033d#chakra-ui)
- [Storybookを導入する際にやるべきこと3選](https://zenn.dev/sum0/articles/9463d16d9d40e2)
- [Component Story Format 3.0](https://storybook.js.org/blog/component-story-format-3-0/)
- [Storybook Tutorials](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/)

#### Testing Storybook

- [UI Testing Handbook | Storybook Tutorials](https://storybook.js.org/tutorials/ui-testing-handbook/)

### Mocking with Storybook / Chakra / Vitest

- [Storybook(v7)をVitestで再利用するとき](https://zenn.dev/pluto0004/articles/3bab7d07805cff)

## create a project

- create

```bash
yarn create vite react-blog --template=react-ts; react-blog
```

- change a yarn version

## update packages with npm-check-updates (ncu)

- list updatable packages

```bash
ncu
```

- update packages

```bash
ncu -u
```

- install packages

```bash
yarn install
```

## enable non-relative imports

- install plugin

```bash
yarn add -D vite-tsconfig-paths
```

- edit `vite.config.ts`

```diff
   ︙
  import react from '@vitejs/plugin-react'
+ import tsconfigPaths from "vite-tsconfig-paths";

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [
      react(),
+     tsconfigPaths()
    ],
  })
```

- edit `tsconfig.json`

```diff
     ︙
    "skipLibCheck": true,
+   "baseUrl": "src",
+   "paths": {
+     "@/*": ["./*"]
+   },
```

## enable ErrorBoundary
- install plugin

```bash
yarn add react-error-boundary
```

## setup Biome
- install plugin
```bash
yarn add --dev --exact @biomejs/biome
```

- setup
```bash
yarn biome init
```

- update `biome.jsonc`

```jsonc
{
  "$schema": "https://biomejs.dev/schemas/1.5.3/schema.json",
  "organizeImports": {
    "enabled": true,
    "ignore": [
      "src/dev/**/*",
      "src/stories/**/*"
    ]
  },
  "linter": {
    "enabled": true,
    "ignore": [
      "src/dev/**/*",
      "src/stories/**/*"
    ],
    "rules": {
      // 基本ルールセット
      "recommended": true,
      "complexity": {
        // 複雑度が高いコードはエラー
        "noExcessiveCognitiveComplexity": "error",
        // 冗長な論理式はエラー
        "useSimplifiedLogicExpression": "error"
      },
      "performance": {
        "noReExportAll": "error"
      }
    }
  },
  "formatter": {
    "enabled": true,
    "ignore": [
      "src/dev/**/*",
      "src/stories/**/*"
    ],
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 80,
    "formatWithErrors": true
  }
}
```

- edit `package.json`

```diff
   ︙
  "scripts": {
   ︙
-   "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
-   "preview": "vite preview"
+   "preview": "vite preview",
+   "check": "biome check {src,tests}/**/*.{js,jsx,ts,tsx,html,css,less,sass,scss}",
+   "check:ts": "tsc --noEmit",
+   "check:all": "yarn check:ts && yarn check",
+   "fix": "biome check --write {src,tests}/**/*.{js,jsx,ts,tsx,html,css,less,sass,scss}",
```

- configure Biome in JetBrains IDE:
  - Install the "Biome" plugin from JetBrains Marketplace
  - Open Settings > Languages & Frameworks > Biome
  - Select "Automatic Biome configuration"
  - Set "Run biome for files" to: `**/*.{js,jsx,ts,tsx,html,css,less,sass,scss,json}`
  - Enable the following options:
    - Enable LSP-based code formatting
    - Run format on save
    - Run safe fixes on save
  - Click Apply and OK

## setup simple-git-hooks & lint-staged

- install plugin

```bash
yarn add -D simple-git-hooks lint-staged
```

- edit `package.json`

```diff
   ︙
   "scripts": {
   ︙
+   "lint-staged": "lint-staged",
+   "prepare": "npx simple-git-hooks || :"
    "preinstall": "npx typesync || :"
   },
   ︙
  "devDependencies": {
   ︙
-  }
+  },
+  "lint-staged": {
+    "src/**/*.{js,jsx,ts,tsx}": [
+      "prettier --write --loglevel=warn",
+      "eslint --fix --quiet"
+      "stylelint --fix --quiet",
+    ],
+    "src/**/*.{html,css,less,sass,scss}": [
+      "prettier --write --loglevel=warn",
+      "stylelint --fix --quiet"
+    ],
+    "src/**/*.{json,gql,graphql}": [
+      "prettier --write --loglevel=warn"
+    ]
+  },
+  "simple-git-hooks": {
+    "pre-commit": "yarn lint-staged"
+  }
   ︙
```

- create git hook

```bash
yarn simple-git-hooks
```

## update packages

- list updatable packages

```bash
ncu
```

- update packages

```bash
ncu -u
```

## setup vitest

### reference

[Vite + React + TypeScript に テスト環境 Vitest をステップbyステップで作る](https://zenn.dev/longbridge/articles/9d9ec773cb3814#vitest-%E3%81%AE%E8%A8%AD%E5%AE%9A)

### setup

- install plugin and msw

```bash
yarn add -D vitest @vitest/ui @vitest/coverage-v8 jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @testing-library/dom eslint-plugin-testing-library eslint-plugin-jest-dom msw
```

- create `vitest.setup.ts`

```typescript
import "@testing-library/jest-dom";
```

- edit `.eslintignore`

```diff
  vite.config.ts
+ vitest.setup.ts
```

− edit `vite.config.ts`

```diff　
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
+ test: {
+   coverage: {
+     provider: "v8",
+     include: ["src/**/*"],
+     exclude: [ "**/stories/*", "**/*.stories.tsx", "**/types/*.ts", "**/*.d.ts", "**/data/*.ts"]
+   },
+   environment: "jsdom",
+   globals: true,
+   setupFiles: "./vitest.setup.ts",
+ },
});
```

- edit `tsconfig.json`

```diff
  "compilerOptions": {
   ︙
    "baseUrl": "src",
+   "types": [
+     "vitest/globals"
+   ],
```

- edit `package.json`

```diff
   ︙
  "scripts": {
   ︙
    "fix": "npm run --silent format; npm run --silent lint:fix",
+   "test": "vitest",
+   "test:run": "vitest run",
+   "test:coverage": "vitest --coverage",
+   "test:ui": "vitest --ui",
    "lint-staged": "lint-staged",
  },
  "dependencies": {
   ︙
``` 

- edit `.eslintrc.json`

```diff
   ︙
  "overrides": [
+   {
+     "files": [
+       "src/**/__tests__/**/*.{js,jsx,ts,tsx}",
+       "src/**/*.{test,spec}.{js,jsx,ts,tsx}"
+     ],
+     "extends": [
+       "plugin:jest-dom/recommended",
+       "plugin:testing-library/react"
+     ],
+     "plugins": [
+       "jest-dom",
+       "testing-library"
+     ]
+   }
  ],
   ︙
```

### test typescript code

- create `add.ts`

```ts
export const add = (a: number, b: number): number => a + b;
```

- create `add.test.ts`

```ts
import { describe, expect, it } from "vitest"
import { add } from "./add"

describe("add", () => {
  it("1 + 2 = 3", () => {
    const result = add(1, 2)

    expect(result).toBe(3)
  })
})
```

- run test

```bash
yarn test
```

### test react code

- create `MyComponent.tsx`

```tsx
import React from 'react'

const title = 'Hello Test'

export function MyComponent() {
  return <div>{title}</div>
}
```

- create `MyComponent.test.tsx`

```tsx
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MyComponent } from "./MyComponent.tsx";

test("「Hello Test」が描画されている", () => {
  render(<MyComponent />);
  // screen.debug();
  expect(screen.getByText("Hello Test")).toBeInTheDocument();
});
```

## setup react router

- install plugin

```bash
yarn add react-router-dom
```

- edit `main.tsx`

```diff
import React from 'react'
+ import { ChakraProvider } from "@chakra-ui/react"
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root");
root != null &&

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
+     <BrowserRouter>
        <App />
+     </BrowserRouter>
    </React.StrictMode>,
  );
```

## setup chakra-ui

- install plugin

```bash
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion @chakra-ui/icons
```

- edit `main.tsx`

```diff
import React from 'react'
+ import { ChakraProvider } from "@chakra-ui/react"
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root");
root != null &&
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
+     <ChakraProvider>
        <App />
+     </ChakraProvider>
    </React.StrictMode>,
  );
```

## setup React Query
- install plugin

```bash
yarn add axios react-query
yarn add -D @tanstack/eslint-plugin-query @tanstack/react-query-devtools
```

- edit `main.tsx`

```diff
 import React from "react";
 import { ChakraProvider } from "@chakra-ui/react";
+import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
+import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
 import ReactDOM from "react-dom/client";
 import { BrowserRouter } from "react-router-dom";
 import App from "./App";
 import "./index.css";
 
+// Create a client
+const queryClient: QueryClient = new QueryClient();
 
 const root = document.getElementById("root");
 root != null &&
   ReactDOM.createRoot(root).render(
     <React.StrictMode>
       <BrowserRouter>
         <ChakraProvider>
+          <QueryClientProvider client={queryClient}>
             <App />
+            <ReactQueryDevtools initialIsOpen={false} />
+          </QueryClientProvider>
         </ChakraProvider>
       </BrowserRouter>
     </React.StrictMode>,
   );
```

## enable Masonry Layout
- install plugin
```bash
yarn add react-masonry-css
```

## setup Playwright

- install plugin

```bash
yarn create playwright
```

```bash
✔ Where to put your end-to-end tests? · tests
✔ Add a GitHub Actions workflow? (y/N) · true
✔ Install Playwright browsers (can be done manually via 'yarn playwright install')? (Y/n) · true
```

- edit `tsconfig.json`

```diff
   ︙
  "include": [
    "src",
+   "tests"
  ],
   ︙
```

- edit `package.json`

```diff
   ︙
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
-   "lint:es": "eslint 'src/**/*.{js,jsx,ts,tsx}'",
-   "lint:es:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx}'",
-   "lint:style": "stylelint 'src/**/*.{html,css,less,sass,scss,jsx,tsx}'",
-   "lint:style:fix": "stylelint --fix 'src/**/*.{html,css,less,sass,scss,jsx,tsx}'",
+   "lint:es": "eslint '{src,tests}/**/*.{js,jsx,ts,tsx}'",
+   "lint:es:fix": "eslint --fix '{src,tests}/**/*.{js,jsx,ts,tsx}'",
+   "lint:style": "stylelint '{src,tests}/**/*.{html,css,less,sass,scss,jsx,tsx}'",
+   "lint:style:fix": "stylelint --fix '{src,tests}/**/*.{html,css,less,sass,scss,jsx,tsx}'",
       "lint": "npm run --silent lint:style; npm run --silent lint:es",
    "lint:fix": "npm run --silent lint:style:fix; npm run --silent lint:es:fix",
    "pretty": "prettier --write --log-level=warn  '{src,tests}/**/*.{js,jsx,ts,tsx,html,json,css,gql,graphql,md,yml}'",
    "fix": "npm run --silent format; npm run --silent lint:fix",
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest --coverage",
   ︙
  "lint-staged": {
-   "src/**/*.{js,ts}": [
+   "{src,tests}/**/*.{js,ts}": [
      "prettier --write --loglevel=warn",
      "eslint --fix --quiet"
    ],
-   "src/**/*.{jsx,tsx}": [
+   "{src,tests}/**/*.{jsx,tsx}": [
      "prettier --write --loglevel=warn",
      "eslint --fix --quiet",
      "stylelint --fix --quiet"
    ],
-   "src/**/*.{html,css,less,sass,scss}": [
+   "{src,tests}/**/*.{html,css,less,sass,scss}": [
      "prettier --write --loglevel=warn",
      "stylelint --fix --quiet"
    ],
-   "src/**/*.{json,gql,graphql}": [
+   "{src,tests}/**/*.{json,gql,graphql}": [
      "prettier --write --loglevel=warn"
    ]
   ︙
```

### Enable corepack on GitHub Actions

- edit `.github/workflows/playwright.yml`

```diff
   ︙
-   - uses: actions/checkout@v3
-   - uses: actions/setup-node@v3
-     with:
-       node-version: 18
-   - name: Install dependencies
-     run: npm install -g yarn && yarn
+   - uses: actions/checkout@v4
+   - uses: actions/setup-node@v4
+     with:
+       node-version: 20
+   - run: corepack enable
+   - name: Install dependencies
+     run: yarn
```

### exclude e2e test from vitest

- edit `vite.config.ts`

```diff
   ︙
-import { defineConfig } from "vitest/config";
+import { configDefaults, defineConfig } from "vitest/config";
  test: {
    globals: true,
    environment: "jsdom",
+   exclude: [...configDefaults.exclude, "tests/**/*"],
    setupFiles: "./vitest.setup.ts"
  }
   ︙
```

## setup Storybook

- install plugin

```bash
npx storybook@latest init
```

### fix dependencies(for yarn v1.x)

- yarn 1.x を使用する場合、yarnのバグにより下記が発生する。
- yarn stable を使う場合は気にしなくてOK

- Storybook導入に伴い依存性が変更となり、lintでエラーが発生する。そのため、依存性を修正する。
- 下記は最新VerではCommonJSのエクスポートに対応しておらず、linter側でimportできない為古いバージョンに落とす
  - string-width
  - strip-ansi
- 下記はpostcss-syntaxとpostcssのバージョン不整合が問題?
  - stylelint/postcss

- edit `package.json`

```diff
   ︙
+ "resolutions": {
+   "stylelint/postcss": "8.4.14",
+   "strip-ansi": "6.0.1",
+   "string-width": "4.2.3"
+ },
```

- update packages

```bash
yarn install
```

### disable PnP(for yarn v2.x+)

- yarn 2.x以降のPnPを利用する場合、npmとの互換性の問題で動作しないプラグイン等がある
- 互換性は極力維持する為にPnPではなくnode_modulesを利用するように設定する

- create `.yarnrc.yml`

```yaml
nodeLinker: node-modules
```

### setup Storybook add-on(react-router, chakra-ui, test-runner, a11y)

- reference
  - [Chakra UI + Storybook - Chakra UI](https://chakra-ui.com/getting-started/with-storybook)

- install plugin

```bash
yarn add -D @storybook/test-runner storybook-addon-remix-react-router @chakra-ui/storybook-addon @storybook/addon-a11y playwright axe-playwright
```

- edit `package.json`

```diff
   ︙
   "scripts": {
   ︙
-   "storybook": "storybook dev -p 6006",
-   "build-storybook": "storybook build"
+   "sb": "storybook dev -p 6006",
+   "sb:build": "storybook build",
+   "sb:test": "test-storybook",
+   "sb:test:watch": "test-storybook --watch",
+   "sb:test:detail": "test-storybook --verbose"
```

- rename `.storybook/main.js` to `.storybook/main.ts`
- edit `.storybook/main.ts`

```diff
   ︙
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
+   getAbsolutePath("@chakra-ui/storybook-addon"),
+   getAbsolutePath("@storybook/addon-a11y"),
  ],
   ︙
  docs: {
    autodocs: "tag",
  },
+ features: {
+   // @ts-ignore
+   emotionAlias: false,
+ },
+ // @ts-ignore
+ webpackFinal: async (baseConfig) => {
+   return {
+     ...baseConfig,
+     resolve: {
+       ...baseConfig.resolve,
+       alias: {
+         ...baseConfig.resolve?.alias,
+         // @ts-ignore
+         "@app": path.resolve(__dirname, "../app/"),
+         // @ts-ignore
+         "@": path.resolve(__dirname, "../"),
+       },
+     },
+   };
+ },
```

- rename `.storybook/preview.ts` to `.storybook/preview.tsx`
- edit `.storybook/preview.tsx`

```diff
 import type { Preview } from "@storybook/react";
+import { withRouter } from "storybook-addon-remix-react-router";
+import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

initialize();

+ // Create a client
+ const queryClient: QueryClient = new QueryClient();

const preview: Preview = {
+ decorators: [
+   withRouter,
+   (Story) => (
+   <ChakraProvider>
+     <QueryClientProvider client={queryClient}>
+       <Story />
+     </QueryClientProvider>
+   </ChakraProvider>
+   ),
+ ],
```

- edit `tsconfig.json`

```diff
   ︙
    "types": [
      "vitest/globals",
+     "axe-playwright"
    ],
   ︙
 ```

- create `test-runner.ts`

```ts
import { Page } from "playwright";
import { checkA11y, injectAxe } from "axe-playwright";

export const preVisit = async (page: Page): Promise<void> => {
  await injectAxe(page);
};

export const postVisit = async (page: Page): Promise<void> => {
  await checkA11y(page, "#storybook-root", {
    detailedReport: true,
    detailedReportOptions: {
      html: true
    }
  });
};
```

### install Storybook MSW addon

- install plugin
  - msw-storybook-addon2.1.xはmsw2.xに対応していないのかエラーが発生する為、カナリヤバージョンを導入
    - [Breaks on building Storybook · Issue #131 · mswjs/msw-storybook-addon](https://github.com/mswjs/msw-storybook-addon/issues/131)
    - [Support for MSW 2.0.0 · Issue #121 · mswjs/msw-storybook-addon](https://github.com/mswjs/msw-storybook-addon/issues/121)

```bash
# yarn add -D msw-storybook-addon
yarn add msw-storybook-addon@2.0.0--canary.122.b3ed3b1.0
```

- initialize addon

```bash
yarn msw init public/
```

- edit `.storybook/preview.tsx`

```diff
import type { Preview } from "@storybook/react";
import "../src/index.css";
+ import { initialize, mswDecorator } from "msw-storybook-addon";

+ initialize();

const preview: Preview = {
  decorators: [
+   mswDecorator,
    (Story) => (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    )
  ],
const preview: Preview = {
+ decorators: [mswDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
```

## setup Chromatic

- install plugin

```bash
yarn add -D chromatic
```

- Sign in and [create a new project](https://www.chromatic.com/docs/setup/) and grab your project-token.

- edit `package.json`

```diff
   ︙
 "scripts": {
   "sb:test:detail": "test-storybook --verbose",
+  "build-storybook": "storybook build",
   ︙
 ```

- first run

```bash
npx chromatic --project-token=<project-token>
```

```bash
⚠ No 'chromatic' script found in your package.json
Would you like me to add it for you? [y/N]y
```

- add `.env`

```
CHROMATIC_PROJECT_TOKEN=<project-token>
```

- edit `.gitingore`

```
+ storybook-static/*
+ .env
```

### Setup GitHub Actions for UI testing

- Edit `App.tsx` to the following contents.

```tsx
import { type JSX } from "react";
import "./App.css";
import { Page } from "./stories/Page.tsx";

const App = (): JSX.Element => {
  return <Page />;
};

export default App;
```

- remove `.github/workflows/playwright.yml`
- add `.github/workflows/ui-tests.yml`

```yml
name: UI Tests
on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
jobs:
  interaction-and-accessibility-tests:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Commit
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Enable corepack(yarn v4)
        run: corepack enable
      - name: Install dependencies
        run: yarn
      - name: Install Playwright
        run: npx playwright install --with-deps
      - name: Build Storybook
        run: yarn build-storybook --quiet
      - name: Server Storybook and run tests
        run: |
          npx concurrently -k -s first -n "SB,TEST" -c "magenta,blue" \
          "npx http-server storybook-static --port 6006 --silent" \
          "npx wait-on tcp:6006 && yarn test-storybook"
  publish-to-chromatic:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Commit
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Enable corepack(yarn v4)
        run: corepack enable
      - name: Install dependencies
        run: yarn
      - name: Publish to Chromatic
        uses: chromaui/action@v1
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
  e2e-tests:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Commit
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Enable corepack(yarn v4)
        run: corepack enable
      - name: Install dependencies
        run: yarn
      - name: Install Playwright Browsers
        run: yarn playwright install --with-deps
      - name: Run Playwright tests
        run: yarn playwright test
      - name: Playwright Report
        uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30
```

- Set the `CHROMATIC_PROJECT_TOKEN` secret in the repository settings.
  - `Settings` > `Secrets and variables` > `Actions` > `Secrets` > `New repository secret`
    - Name: `CHROMATIC_PROJECT_TOKEN`
    - Secret: `<project-token>`
  - `Add secret`

## make directory structure

- make directories

```bash
mkdir src/components
mkdir src/config
mkdir src/features
mkdir src/hooks
mkdir src/lib
mkdir src/providers
mkdir src/routes
mkdir src/schemas
mkdir src/stores
mkdir src/types
mkdir src/utils

touch src/components/.gitkeep
touch src/config/.gitkeep
touch src/features/.gitkeep
touch src/hooks/.gitkeep
touch src/lib/.gitkeep
touch src/providers/.gitkeep
touch src/routes/.gitkeep
touch src/schemas/.gitkeep
touch src/stores/.gitkeep
touch src/types/.gitkeep
touch src/utils/.gitkeep

mkdir -p src/components/atoms
mkdir -p src/components/molecules
mkdir -p src/components/organisms
mkdir -p src/components/templates
mkdir -p src/components/pages
touch src/components/atoms/.gitkeep
touch src/components/molecules/.gitkeep
touch src/components/organisms/.gitkeep
touch src/components/templates/.gitkeep
touch src/components/pages/.gitkeep

mkdir -p src/features/blog/api
mkdir -p src/features/blog/assets
mkdir -p src/features/blog/components
mkdir -p src/features/blog/hooks
mkdir -p src/features/blog/routes
mkdir -p src/features/blog/schemas
mkdir -p src/features/blog/stores
mkdir -p src/features/blog/types
mkdir -p src/features/blog/utils
mkdir -p src/features/blog/index.ts

touch src/features/blog/api/.gitkeep
touch src/features/blog/assets/.gitkeep
touch src/features/blog/components/.gitkeep
touch src/features/blog/hooks/.gitkeep
touch src/features/blog/routes/.gitkeep
touch src/features/blog/schemas/.gitkeep
touch src/features/blog/stores/.gitkeep
touch src/features/blog/types/.gitkeep
touch src/features/blog/utils/.gitkeep
touch src/features/blog/index.ts/.gitkeep

mkdir -p src/features/blog/components/atoms
mkdir -p src/features/blog/components/molecules
mkdir -p src/features/blog/components/organisms
mkdir -p src/features/blog/components/templates
mkdir -p src/features/blog/components/pages
touch src/features/blog/components/atoms/.gitkeep
touch src/features/blog/components/molecules/.gitkeep
touch src/features/blog/components/organisms/.gitkeep
touch src/features/blog/components/templates/.gitkeep
touch src/features/blog/components/pages/.gitkeep

cp -rp src/features/blog src/features/about
cp -rp src/features/blog src/features/career
cp -rp src/features/blog src/features/contact
cp -rp src/features/blog src/features/qualifications
cp -rp src/features/blog src/features/skills
cp -rp src/features/blog src/features/works

```

- edit `.eslintrc.json`

```diff
   ︙
  "overrides": [
+   {
+     "files": [
+       "src/**/__tests__/**/*.{js,jsx,ts,tsx}",
+       "src/**/*.{test,spec}.{js,jsx,ts,tsx}"
+     ],
+     "extends": [
+       "plugin:jest-dom/recommended",
+       "plugin:testing-library/react"
+     ],
+     "plugins": [
+       "jest-dom",
+       "testing-library"
+     ]
+   }
  ],
   ︙
```

- edit `eslintrc.json`

```diff
   ︙
  "rules": {
   ︙
    "no-restricted-imports": [
      "error",
      {
        "patterns": [
          "@/features/*/*"
        ]
      }
    ]
  }
```
