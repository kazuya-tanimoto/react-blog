import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { JSX, ReactNode } from "react";

/*
 * QueryClientの設定
 * キャッシュを相互に影響させないように都度新しいQueryClientを生成する
 */
interface NewQueryClientProviderProps {
  children: ReactNode;
}

export const NewQueryClientProvider = ({
  children,
}: NewQueryClientProviderProps): JSX.Element => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  );
};
