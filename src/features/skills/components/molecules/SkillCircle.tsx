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
      <CircularProgress value={progressValue} color="blue.400" size={24}>
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

// import { type JSX } from "react";
// import {
//   Box,
//   Flex,
//   Text,
//   Image,
//   CircularProgress,
//   CircularProgressLabel,
// } from "@chakra-ui/react";
// import { FiRepeat } from "react-icons/fi";
// import { type Skill } from "@/features/skills/types/Skill";
//
// export const SkillCircle = ({ name, icon, years }: Skill): JSX.Element => {
//   const progressValue = Math.min(years, 10) * 10;
//   const displayYears = years >= 10 ? "10y+" : `${years}y+`;
//
//   return (
//     <Flex alignItems="center" gap={4}>
//       <CircularProgress value={progressValue} color="blue.500">
//         {/* <Box boxSize={16} as={Image} src={icon} alt={"aaa"} /> */}
//         <Box boxSize={16}>
//           <Image src={icon} alt={name} boxSize={16} />
//           {/* <FiRepeat size={16} /> */}
//         </Box>
//       </CircularProgress>
//       <Flex direction="column" gap={0}>
//         <Text fontSize="xl" fontWeight="semibold" color="gray.600" ml={0.5}>
//           {name}
//         </Text>
//         <Flex alignItems="center" gap={2}>
//           <Box
//             bg="gray.200"
//             h={5}
//             w={96}
//             rounded="full"
//             position="relative"
//             mr={2}
//           >
//             <Box
//               bg="blue.500"
//               h={5}
//               width={`${progressValue}%`}
//               rounded="full"
//               position="absolute"
//               top="0"
//               left="0"
//             />
//           </Box>
//           <Text fontSize="xl" color="gray.600">
//             {displayYears}
//           </Text>
//         </Flex>
//       </Flex>
//     </Flex>
//   );
// };
