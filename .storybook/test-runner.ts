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