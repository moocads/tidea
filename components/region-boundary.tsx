import {cookies} from "next/headers";
import type {ReactNode} from "react";
import {RegionProvider} from "@/components/region-provider";
import {
  DETECTED_REGION_COOKIE,
  isRegion,
  REGION_COOKIE,
} from "@/lib/region";

export async function RegionBoundary({children}: {children: ReactNode}) {
  const cookieStore = await cookies();
  const selectedRegion = cookieStore.get(REGION_COOKIE)?.value;
  const detectedRegion = cookieStore.get(DETECTED_REGION_COOKIE)?.value;
  const region = isRegion(selectedRegion)
    ? selectedRegion
    : isRegion(detectedRegion)
      ? detectedRegion
      : "US";

  return <RegionProvider initialRegion={region}>{children}</RegionProvider>;
}
