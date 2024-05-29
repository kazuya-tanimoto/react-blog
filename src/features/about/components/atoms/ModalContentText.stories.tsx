import type { Meta, StoryObj } from "@storybook/react";
import { ModalContentText } from "./ModalContentText";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "about/atoms/ModalContentText",
  component: ModalContentText,
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
} satisfies Meta<typeof ModalContentText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Summary: Story = {
  args: {
    children: "障がい者支援業務にて利用するポータルサイト構築案件に参画中",
  },
};

export const Technology: Story = {
  args: {
    children:
      "AWS(EC2, RDS, VPC, ALB, CodeCommit, CodeBuild, CodeDeploy, CloudWatch, S3, CloudFront, Route53, WAF, Inspector, etc)",
  },
};
export const Role: Story = {
  args: {
    children:
      "開発メンバーのタスク管理、開発オフショア（外国籍）メンバーへの作業指示",
  },
};
