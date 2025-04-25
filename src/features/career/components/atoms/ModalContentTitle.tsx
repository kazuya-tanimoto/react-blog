import { Text, type TextProps } from "@chakra-ui/react";
import type { JSX, ReactNode } from "react";

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
