import { useBreakpointValue } from "@chakra-ui/react";

interface ScreenResolution {
  isBase: boolean | undefined;
  isSm: boolean | undefined;
  isMd: boolean | undefined;
  isLg: boolean | undefined;
  isXl: boolean | undefined;
}
export const useScreenResolution = (): ScreenResolution => {
  const isBase = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  });
  const isSm = useBreakpointValue({
    base: false,
    sm: true,
    md: false,
    lg: false,
    xl: false,
  });
  const isMd = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: false,
    xl: false,
  });
  const isLg = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: false,
  });
  const isXl = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: true,
  });

  return { isBase, isSm, isMd, isLg, isXl };
};
