import { type JSX, useState } from "react";
import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import viteLogo from "../public/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button
          type={"button"}
          colorScheme={"teal"}
          color={"whitesmoke"}
          w={64}
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          This is Button
          <Spinner ml={4} />
        </Button>
        <Text fontSize={"xl"} color={"GrayText"}>
          count is {count}
        </Text>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Box
        alignItems="center"
        as="a"
        aria-label="Sponsor Chakra UI on Open Collective"
        target="_blank"
        rel="noopener noreferrer"
        bg="gray.50"
        borderWidth="1px"
        borderColor="gray.200"
        px="1em"
        minH="36px"
        borderRadius="md"
        fontSize="sm"
        color="gray.800"
        outline="0"
        transition="all 0.3s"
        display={{ base: "none", md: "flex" }}
        _hover={{
          bg: "gray.100",
          borderColor: "gray.300",
        }}
        _active={{
          borderColor: "gray.200",
        }}
        _focus={{
          boxShadow: "outline",
        }}
      >
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </Box>
    </>
  );
};

export default App;
