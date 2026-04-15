import { useEffect, useRef, useState } from "react";

export type AsyncState<T> =
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: Error };

/**
 * Fetches when `key` changes. Always invokes the latest `load` without listing it in deps
 * (avoids unstable function identity from inline arrows).
 */
export function useAsyncData<T>(key: string, load: () => Promise<T>): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({ status: "loading" });
  const loadRef = useRef(load);
  loadRef.current = load;

  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading" });
    loadRef
      .current()
      .then((data) => {
        if (!cancelled) setState({ status: "success", data });
      })
      .catch((e) => {
        if (!cancelled)
          setState({
            status: "error",
            error: e instanceof Error ? e : new Error(String(e)),
          });
      });
    return () => {
      cancelled = true;
    };
  }, [key]);

  return state;
}
