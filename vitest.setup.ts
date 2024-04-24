import "@testing-library/jest-dom";
import { useBreakpointValue } from "@chakra-ui/react";

/*
 * https://github.com/chakra-ui/chakra-ui/issues/7201
 * https://vitest.dev/api/vi.html#vi-importactual
 * https://vitest.dev/api/vi.html#vi-mocked
 */
vi.mock("@chakra-ui/react", async () => {
  const module = await vi.importActual("@chakra-ui/react");

  return {
    ...module,
    useBreakpointValue: vi.fn(),
  };
});

beforeEach(() => {
  vi.mocked(useBreakpointValue).mockReturnValue(false);
});