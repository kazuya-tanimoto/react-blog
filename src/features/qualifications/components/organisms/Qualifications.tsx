import { type JSX, Suspense } from "react";
import { Skeleton, Box, Stack } from "@chakra-ui/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { NestedList } from "@/components/molecules/NestedList";

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const sleep = async (ms: number): Promise<void> => {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const fetchData = async () => {
  await sleep(1000); // Delay for 2 seconds
  const result = await axios.get<Users[]>(
    "https://jsonplaceholder.typicode.com/users",
  );

  return result.data;
};

const ErrorFallback = ({ error }: FallbackProps) => {
  console.error(error);

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

const FallBack = (w: number, lineCount: number) => {
  return (
    <Stack w={w} spacing={4} p={4}>
      {Array.from({ length: lineCount }).map((_, index) => (
        <Skeleton key={index} h={5} w={`${60 + Math.random() * 40}%`} />
      ))}
    </Stack>
  );
};

const QualificationsList = () => {
  const { data } = useSuspenseQuery<Users[]>({
    queryKey: ["qualifications"],
    queryFn: fetchData,
  });

  const qualifications = data.map((user) => {
    return { item: user.name };
  });

  // qualifications = [
  //   { item: "プロジェクトマネージャ(2011/06)" },
  //   { item: "データベーススペシャリスト(2010/06)" },
  //   { item: "OracleSilver 10g(2010/01)" },
  //   { item: "システムアーキテクト(2009/12)" },
  //   { item: "ソフトウェア開発技術者(2008/12)" },
  // ];

  return (
    <NestedList spacing={4} color="green.500" listItems={qualifications} />
  );
};

export const Qualifications = (): JSX.Element => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={FallBack(80, 5)}>
        <QualificationsList />
      </Suspense>
    </ErrorBoundary>
  );
};
