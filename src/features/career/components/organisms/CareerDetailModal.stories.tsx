import { useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  CareerDetailModal,
  type CareerDetailModalProps,
} from "./CareerDetailModal";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "career/organisms/CareerDetailModal",
  component: CareerDetailModal,
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
} satisfies Meta<typeof CareerDetailModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Blue: Story = (args: CareerDetailModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <CareerDetailModal
      id={args.id}
      color={args.color}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};

Blue.args = {
  id: 1,
  color: "blue.600",
  onClose: () => {},
  isOpen: false,
};

export const Purple: Story = (args: CareerDetailModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <CareerDetailModal
      id={args.id}
      color={args.color}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};

Purple.args = {
  id: 1,
  color: "purple.800",
  onClose: () => {},
  isOpen: false,
};
export const Yellow: Story = (args: CareerDetailModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <CareerDetailModal
      id={args.id}
      color={args.color}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};

Yellow.args = {
  id: 1,
  color: "yellow.700",
  onClose: () => {},
  isOpen: false,
};
