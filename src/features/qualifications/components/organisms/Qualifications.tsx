import { type JSX, Suspense } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { NestedList } from "@/components/molecules/NestedList";

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
