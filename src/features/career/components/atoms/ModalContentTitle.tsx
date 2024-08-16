import type { JSX, ReactNode } from "react";
import { Text, type TextProps } from "@chakra-ui/react";

interface Props extends TextProps {
  children: ReactNode;
}

/**
 * Title component
 * @param children
 * @param props
 * @constructor
 */

export const ModalContentTitle = ({
  children,
  ...props
}: Props): JSX.Element => {
  return (
    <Text fontSize="lg" {...props}>
      {children}
    </Text>
  );
};
