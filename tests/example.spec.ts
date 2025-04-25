import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  // eslint-disable-next-line testing-library/prefer-screen-queries
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    // eslint-disable-next-line testing-library/prefer-screen-queries
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});
