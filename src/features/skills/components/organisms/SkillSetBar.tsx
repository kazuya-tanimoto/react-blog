import { type JSX } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { SkillBar } from "@/features/skills/components/molecules/SkillBar";
import { skills } from "@/features/skills/data/Skill";

export const SkillSetBar = (): JSX.Element => (
  <Box className="container mx-auto py-10">
    <Heading size="xl" color="gray.600">
      Skills
    </Heading>
    <Flex direction="column" gap={8}>
      {skills.map((skill, index) => (
        <Flex key={index} direction="column" gap={2}>
          <Heading as="h2" size="lg" mb={4} color="gray.600">
            {skill.category}
          </Heading>
          <Flex direction="column" gap={5}>
            {skill.items.map((item, itemIndex) => (
              <SkillBar
                key={itemIndex}
                name={item.name}
                icon={item.icon}
                years={item.years}
              />
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  </Box>
);
