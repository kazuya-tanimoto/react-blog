import type { Meta, StoryObj } from "@storybook/react";

import { ProjectSummary } from "./ProjectSummary.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "about/molecules/ProjectSummary",
  component: ProjectSummary,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // }        // rounded="md",
} satisfies Meta<typeof ProjectSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FirstItem: Story = {
  args: {
    title: "社内ポータルシステム開発",
    summary: "障害者支援業務にて利用するポータルサイト構築案件に参画中",
    keywords: "React, Laravel, Tailwind, Docker, AWS, PM, 要件定義〜保守",
    // color: "#182AB3",
    color: "blue.600",
    from: "2022/09",
  },
};

export const SecondItem: Story = {
  args: {
    title: "医薬品購入者向け問診システム開発",
    summary:
      "通販サイト（楽天、Shopify）の医薬品購入者向けのオンライン問診システム構築に参画",
    keywords: "Codeigniter, jQuery, LAMP, Docker, 要件定義〜実装",
    // color: "#7D3DAB",
    color: "purple.800",
    to: "2022/08",
    from: "2021/01",
  },
};
export const ThirdItem: Story = {
  args: {
    title: "ーーーー＋ーーーー１ーーーー＋ーーーー２",
    summary:
      "ーーーー＋ーーーー１ーーーー＋ーーーー２ーーーー＋ーーーー３ーーーー＋ーーーー４ーーーー＋ーーーー５ーー",
    keywords: "----+----1----+----2----+----3----+----4----+----5----+----6",
    // color: "#897400",
    color: "yellow.700",
    to: "2020/12",
    from: "2018/09",
  },
};
