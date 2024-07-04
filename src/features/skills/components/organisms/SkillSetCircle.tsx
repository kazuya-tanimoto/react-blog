import { type JSX } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { SkillCircle } from "@/features/skills/components/molecules/SkillCircle";
import { skills } from "@/features/skills/data/Skill";

export const SkillSetCircle = (): JSX.Element => (
  <Box className="container mx-auto py-10">
    <Heading size="xl" color="gray.600">
      Skills
    </Heading>
    <Flex direction="column" gap={12}>
      {skills.map((skill, index) => (
        <Flex key={index} direction="column" gap={4}>
          <Heading as="h2" size="lg" color="gray.600">
            {skill.category}
          </Heading>
          <Flex gap={8} wrap="wrap">
            {skill.items.map((item, itemIndex) => (
              <SkillCircle
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
