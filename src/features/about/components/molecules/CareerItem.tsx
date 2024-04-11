import type { JSX } from "react";
import { Flex } from "@chakra-ui/react";
import type { CareerItem as Props } from "../../types/Career.ts";
import { DateRange } from "../atoms/DateRange.tsx";
import { ProjectSummary } from "../atoms/ProjectSummary.tsx";

export const CareerItem = ({
  title,
  summary,
  keywords,
  color,
  from,
  to,
}: Props): JSX.Element => (
  <Flex
    direction={{ base: "column", sm: "row" }}
    px={4}
    py={1}
    w={{ base: "full", sm: 500 }}
    borderWidth={1}
    borderColor={color}
    rounded="full"
    gap={{ base: 0, sm: 2 }}
    minH={125}
    align="center"
    _hover={{ opacity: 0.8, cursor: "pointer" }}
  >
    <DateRange color={color} from={from} to={to} />
    <ProjectSummary title={title} summary={summary} keywords={keywords} />
  </Flex>
);
