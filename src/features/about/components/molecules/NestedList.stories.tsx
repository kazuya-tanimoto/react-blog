import type { Meta, StoryObj } from "@storybook/react";
import { NestedList } from "./NestedList.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "about/molecules/NestedList",
  component: NestedList,
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
} satisfies Meta<typeof NestedList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

const colors = ["blue.600", "purple.800", "yellow.700"];

export const NoData: Story = {
  args: {
    spacing: 4,
    color: colors[0],
    listItems: [],
  },
};

export const FirstLevel: Story = {
  args: {
    spacing: 4,
    color: colors[0],
    listItems: [
      {
        item: "項目1",
      },
      {
        item: "項目2",
      },
      {
        item: "項目3",
      },
    ],
  },
};

export const SecondLevel: Story = {
  args: {
    spacing: 4,
    color: colors[1],
    listItems: [
      {
        item: "項目1",
        subItem: [
          {
            item: "子項目1",
          },
          {
            item: "子項目2",
          },
        ],
      },
      {
        item: "項目2",
        subItem: [
          {
            item: "子項目1",
          },
          {
            item: "子項目2",
          },
        ],
      },
      {
        item: "項目3",
        subItem: [
          {
            item: "子項目1",
          },
          {
            item: "子項目2",
          },
        ],
      },
    ],
  },
};
export const ThirdLevel: Story = {
  args: {
    spacing: 4,
    color: colors[2],
    listItems: [
      {
        item: "項目1",
        subItem: [
          {
            item: "子項目1",
            subItem: [
              {
                item: "孫項目1",
              },
              {
                item: "孫項目2",
              },
            ],
          },
          {
            item: "子項目2",
            subItem: [
              {
                item: "孫項目1",
              },
              {
                item: "孫項目2",
              },
            ],
          },
        ],
      },
      {
        item: "項目2",
        subItem: [
          {
            item: "子項目1",
            subItem: [
              {
                item: "孫項目1",
              },
              {
                item: "孫項目2",
              },
            ],
          },
          {
            item: "子項目2",
            subItem: [
              {
                item: "孫項目1",
              },
              {
                item: "孫項目2",
              },
            ],
          },
        ],
      },
      {
        item: "項目3",
        subItem: [
          {
            item: "子項目1",
            subItem: [
              {
                item: "孫項目1",
              },
              {
                item: "孫項目2",
              },
            ],
          },
          {
            item: "子項目2",
            subItem: [
              {
                item: "孫項目1",
              },
              {
                item: "孫項目2",
              },
            ],
          },
        ],
      },
    ],
  },
};
export const FourthLevel: Story = {
  args: {
    spacing: 4,
    color: colors[2],
    listItems: [
      {
        item: "項目1",
        subItem: [
          {
            item: "子項目1",
            subItem: [
              {
                item: "孫項目1",
                subItem: [
                  {
                    item: "ひ孫項目1",
                  },
                  {
                    item: "ひ孫項目2",
                  },
                ],
              },
              {
                item: "孫項目2",
                subItem: [
                  {
                    item: "ひ孫項目1",
                  },
                  {
                    item: "ひ孫項目2",
                  },
                ],
              },
            ],
          },
          {
            item: "子項目2",
            subItem: [
              {
                item: "孫項目1",
                subItem: [
                  {
                    item: "ひ孫項目1",
                  },
                  {
                    item: "ひ孫項目2",
                  },
                ],
              },
              {
                item: "孫項目2",
                subItem: [
                  {
                    item: "ひ孫項目1",
                  },
                  {
                    item: "ひ孫項目2",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        item: "項目2",
        subItem: [
          {
            item: "子項目1",
            subItem: [
              {
                item: "孫項目1",
                subItem: [
                  {
                    item: "ひ孫項目1",
                  },
                  {
                    item: "ひ孫項目2",
                  },
                ],
              },
              {
                item: "孫項目2",
                subItem: [
                  {
                    item: "ひ孫項目1",
                  },
                  {
                    item: "ひ孫項目2",
                  },
                ],
              },
            ],
          },
          {
            item: "子項目2",
            subItem: [
              {
                item: "孫項目1",
                subItem: [
                  {
                    item: "ひ孫項目1",
                  },
                  {
                    item: "ひ孫項目2",
                  },
                ],
              },
              {
                item: "孫項目2",
                subItem: [
                  {
                    item: "ひ孫項目1",
                  },
                  {
                    item: "ひ孫項目2",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        item: "項目3",
        subItem: [
          {
            item: "子項目1",
            subItem: [
              {
                item: "孫項目1",
                subItem: [
                  {
                    item: "ひ孫項目1",
                  },
                  {
                    item: "ひ孫項目2",
                  },
                ],
              },
              {
                item: "孫項目2",
                subItem: [
                  {
                    item: "ひ孫項目1",
                  },
                  {
                    item: "ひ孫項目2",
                  },
                ],
              },
            ],
          },
          {
            item: "子項目2",
            subItem: [
              {
                item: "孫項目1",
                subItem: [
                  {
                    item: "ひ孫項目1",
                  },
                  {
                    item: "ひ孫項目2",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
