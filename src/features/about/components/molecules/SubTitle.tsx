import { type JSX, type ReactNode } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

const DefaultLineItems = 6;

interface Props {
  lineItems?: number;
  children: ReactNode;
}

export const SubTitle = ({
  lineItems = DefaultLineItems,
  children,
}: Props): JSX.Element => {
  const colors = ["blue.600", "purple.800", "yellow.700"];

  return (
    <Flex justifyContent="center" direction="column" gap={1}>
      <Heading as="h2" size="lg" textAlign="center">
        {children}
      </Heading>
      <Flex justifyContent="center" gap={1}>
        {Array<undefined>(lineItems)
          .fill(undefined)
          .map((_, index) => (
            <Box
              key={index}
              w={6}
              h={1}
              bg={colors[index % colors.length]}
              data-testid={`line-item-${index}`}
            />
          ))}
      </Flex>
    </Flex>
  );
};
