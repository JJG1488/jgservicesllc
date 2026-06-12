import { useSyncExternalStore } from "react";

/* Stable no-op store: never notifies, so the snapshot is read exactly once
   per render. Server snapshot is false, client snapshot is true, which makes
   the hook hydration-safe (first client render matches SSR) without a
   setState-in-effect. */
const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * Returns false during SSR and the initial (hydrating) client render,
 * true on every render after hydration completes.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}
