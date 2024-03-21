import type { Meta, StoryObj } from "@storybook/react";
import type { CareerItems } from "../../types/Career.ts";
import { CareerTimeline } from "./CareerTimeline.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "about/organisms/CareerTimeline",
  component: CareerTimeline,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // }, // rounded="md",
} satisfies Meta<typeof CareerTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

const data: CareerItems = {
  items: [
    {
      title: "社内ポータルシステム開発",
      summary: "障害者支援業務にて利用するポータルサイト構築案件に参画中",
      keywords: "React, Laravel, Tailwind, Docker, AWS, PM, 要件定義〜保守",
      // color: "#182AB3",
      color: "blue.600",
      from: "2022/09",
    },
    {
      title: "医薬品購入者向け問診システム開発",
      summary:
        "通販サイト（楽天、Shopify）の医薬品購入者向けのオンライン問診システム構築に参画",
      keywords: "Codeigniter, jQuery, LAMP, Docker, 要件定義〜実装",
      // color: "#7D3DAB",
      color: "purple.800",
      to: "2022/08",
      from: "2021/01",
    },
    {
      title: "ーーーー＋ーーーー１ーーーー＋ーーー９",
      summary:
        "ーーーー＋ーーーー１ーーーー＋ーーーー２ーーーー＋ーーーー３ーーーー＋ーーーー４ーーーー＋ーーーー５",
      keywords: "----+----1----+----2----+----3----+----4----+----5----+-7",
      // color: "#897400",
      color: "yellow.700",
      to: "2020/12",
      from: "2018/09",
    },
  ],
};

export const Default: Story = {
  args: {
    items: data.items,
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

export const FirstItem: Story = {
  args: {
    items: [data.items[0]],
  },
};
export const ManyItems: Story = {
  args: {
    items: [
      ...data.items,
      ...data.items,
      ...data.items,
      ...data.items,
      ...data.items,
      ...data.items,
      ...data.items,
    ],
  },
};
