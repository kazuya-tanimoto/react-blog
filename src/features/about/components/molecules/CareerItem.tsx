import type { JSX } from "react";
import { memo } from "react";
import { Flex } from "@chakra-ui/react";
import type { CareerItem as Props } from "../../types/Career.ts";
import { DateRange } from "../atoms/DateRange.tsx";
import { ProjectSummary } from "../atoms/ProjectSummary.tsx";

export const CareerItem = memo(
  ({ title, summary, keywords, color, from, to }: Props): JSX.Element => {
    return (
      <Flex
        px={4}
        py={2}
        w={500}
        borderWidth={1}
        borderColor={color}
        rounded="full"
        gap={2}
        h={125}
        align="center"
        _hover={{ opacity: 0.8, cursor: "pointer" }}
      >
        <DateRange color={color} from={from} to={to} />
        <ProjectSummary title={title} summary={summary} keywords={keywords} />
      </Flex>
    );
  },
);
