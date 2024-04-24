import { useBreakpointValue } from "@chakra-ui/react";
import { useScreenResolution } from "./useScreenResolution.ts";

it("returns isBase as true when base breakpoint is active", () => {
  vi.mocked(useBreakpointValue).mockReturnValue(true);
  const { isBase } = useScreenResolution();
  expect(isBase).toBe(true);
});

it("returns isBase as false when base breakpoint is not active", () => {
  const { isBase } = useScreenResolution();
  expect(isBase).toBe(false);
});

it("returns isBase as undefined when no breakpoint is active", () => {
  vi.mocked(useBreakpointValue).mockReturnValue(undefined);
  const { isBase } = useScreenResolution();
  expect(isBase).toBeUndefined();
});
