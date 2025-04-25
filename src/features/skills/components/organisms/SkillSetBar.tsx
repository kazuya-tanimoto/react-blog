import { SubTitle } from "@/components/molecules/SubTitle";
import { SkillBar } from "@/features/skills/components/molecules/SkillBar";
import { skills } from "@/features/skills/data/Skill";
import { Flex, Heading } from "@chakra-ui/react";
import type { JSX } from "react";

export const SkillSetBar = (): JSX.Element => (
  <Flex direction="column" gap={4}>
    <SubTitle lineItems={4}>Skills</SubTitle>
    <Flex direction="column" gap={12}>
      {skills.map((skill) => (
        <Flex key={skill.category_id} direction="column" gap={4}>
          <Heading
            as="h2"
            size="lg"
            color="gray.600"
            textAlign={{ base: "center", sm: "left" }}
          >
            {skill.category_name}
          </Heading>
          <Flex direction="column" gap={5}>
            {skill.items.map((item) => (
              <SkillBar
                key={item.id}
                name={item.name}
                icon={item.icon}
                years={item.years}
              />
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  </Flex>
);
