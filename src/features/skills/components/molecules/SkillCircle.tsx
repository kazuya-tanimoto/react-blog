import { type JSX } from "react";
import {
  CircularProgress,
  Image,
  CircularProgressLabel,
  Flex,
  Text,
} from "@chakra-ui/react";
import { type Skill } from "@/features/skills/types/Skill";

export const SkillCircle = ({ name, icon, years }: Skill): JSX.Element => {
  // export const SkillCircle = ({ years }) => {
  const progressValue = Math.min(years, 10) * 10;
  const displayYears = years >= 10 ? "10y+" : `${years}y+`;

  return (
    <Flex direction="column" alignItems="center" gap={0}>
      <CircularProgress
        value={progressValue}
        color="blue.400"
        size={24}
        aria-label={`${name} skill level, ${years} years experience`}
      >
        <CircularProgressLabel p={4}>
          <Image src={icon} alt={name} boxSize={16} />
        </CircularProgressLabel>
      </CircularProgress>
      <Text fontSize="xl" fontWeight="semibold" color="gray.600">
        {name}
      </Text>
      <Text fontSize="lg" color="gray.600">
        {`(${displayYears})`}
      </Text>
    </Flex>
  );
};
