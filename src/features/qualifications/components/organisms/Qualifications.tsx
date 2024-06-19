import { type JSX, Suspense } from "react";
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

const sleep = async (ms: number): Promise<never> => {
  return await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const fetchData = async () => {
  const result = await axios
    .get<Users[]>("https://jsonplaceholder.typicode.com/users")
    .then(await sleep(2000));

  return result.data;
};
const Fallback = ({ error }: FallbackProps) => {
  console.log(error);

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error}</pre>
    </div>
  );
};

const QualificationsList = () => {
  const data = useSuspenseQuery<Users[]>({
    queryKey: ["qualifications"],
    queryFn: fetchData,
  });
  console.log(data);

  const qualifications = [
    { item: "プロジェクトマネージャ(2011/06)" },
    { item: "データベーススペシャリスト(2010/06)" },
    { item: "OracleSilver 10g(2010/01)" },
    { item: "システムアーキテクト(2009/12)" },
    { item: "ソフトウェア開発技術者(2008/12)" },
  ];

  return (
    <NestedList spacing={4} color="green.500" listItems={qualifications} />
  );
};
export const Qualifications = (): JSX.Element => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Suspense fallback={<div>Loading...</div>}>
        <QualificationsList />
      </Suspense>
    </ErrorBoundary>
  );
};
