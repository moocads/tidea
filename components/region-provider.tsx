"use client";

import {createContext, useContext, useMemo, useState} from "react";
import type {ReactNode} from "react";
import {REGION_COOKIE, type Region} from "@/lib/region";

type RegionContextValue = {
  region: Region;
  setRegion: (region: Region) => void;
};

const RegionContext = createContext<RegionContextValue | null>(null);

export function RegionProvider({
  children,
  initialRegion,
}: {
  children: ReactNode;
  initialRegion: Region;
}) {
  const [region, setRegionState] = useState(initialRegion);

  const value = useMemo<RegionContextValue>(
    () => ({
      region,
      setRegion(nextRegion) {
        document.cookie = `${REGION_COOKIE}=${nextRegion}; Path=/; Max-Age=31536000; SameSite=Lax`;
        setRegionState(nextRegion);
      },
    }),
    [region],
  );

  return (
    <RegionContext.Provider value={value}>{children}</RegionContext.Provider>
  );
}

export function useRegion() {
  const context = useContext(RegionContext);

  if (!context) {
    throw new Error("useRegion must be used within RegionProvider");
  }

  return context;
}
