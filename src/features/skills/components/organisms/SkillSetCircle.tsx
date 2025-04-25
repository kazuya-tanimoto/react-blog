import { SubTitle } from "@/components/molecules/SubTitle";
import { SkillCircle } from "@/features/skills/components/molecules/SkillCircle";
import { skills } from "@/features/skills/data/Skill";
import { Flex, Heading } from "@chakra-ui/react";
import type { JSX } from "react";

export const SkillSetCircle = (): JSX.Element => (
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
          <Flex gap={8} wrap="wrap" justify={{ base: "center", sm: "start" }}>
            {skill.items.map((item) => (
              <SkillCircle
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
