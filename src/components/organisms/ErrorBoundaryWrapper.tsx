import { Box } from "@chakra-ui/react";
import type { JSX, ReactNode } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

const ErrorFallbackContent = ({ error }: FallbackProps): JSX.Element => {
  return (
    <Box
      role="alert"
      p={4}
      borderWidth={1}
      borderRadius="md"
      borderColor="red.500"
    >
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{(error as Error).message}</pre>
    </Box>
  );
};

interface ErrorFallbackProps {
  children: ReactNode;
}
export const ErrorBoundaryWrapper = ({
  children,
}: ErrorFallbackProps): JSX.Element => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackContent}>
      {children}
    </ErrorBoundary>
  );
};
