import { Text, type TextProps } from "@chakra-ui/react";
import type { JSX, ReactNode } from "react";

interface ContentTextProps extends TextProps {
  children: ReactNode;
}

export const ModalContentText = ({
  children,
  ...props
}: ContentTextProps): JSX.Element => {
  return (
    <Text mb={4} ml={4} color="gray.700" {...props}>
      {children}
    </Text>
  );
};
