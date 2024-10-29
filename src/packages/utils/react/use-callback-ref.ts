import { useSafeLayoutEffect } from "@/packages/utils/react/use-safe-layout-effect";
import * as React from "react";

export function useCallbackRef<T extends (...args: any[]) => any>(
  fn: T | undefined,
): T {
  const ref = React.useRef(fn);

  useSafeLayoutEffect(() => {
    ref.current = fn;
  });

  return React.useCallback(((...args) => ref.current?.(...args)) as T, []);
}
