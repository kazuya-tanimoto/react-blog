import { type JSX } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { SkillItem } from "@/features/skills/components/molecules/SkillItem";
import { skills } from "@/features/skills/data/Skill";

export const SkillList = (): JSX.Element => (
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
              <SkillItem
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
