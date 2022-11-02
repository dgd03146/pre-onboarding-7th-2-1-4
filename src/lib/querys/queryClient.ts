import { useError } from "../hooks/useError";
import { QueryClient } from "@tanstack/react-query";

// query error
function queryErrorHandler(error: unknown): void {
  const title =
    error instanceof Error ? error.message : "error connecting to server";
  useError(title);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 600000,
      cacheTime: 900000,
      refetchOnWindowFocus: false,
      suspense: true
    }
  }
});
