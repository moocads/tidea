import createMiddleware from "next-intl/middleware";
import {NextRequest} from "next/server";
import {routing} from "./i18n/routing";
import {
  DETECTED_REGION_COOKIE,
  isRegion,
  REGION_COOKIE,
} from "./lib/region";

const handleI18nRouting = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const selectedRegion = request.cookies.get(REGION_COOKIE)?.value;
  const detectedCountry = request.headers.get("x-vercel-ip-country");
  const region = isRegion(selectedRegion)
    ? selectedRegion
    : detectedCountry === "CA"
      ? "CA"
      : "US";

  const forwardedRequest = new NextRequest(request, {
    headers: new Headers(request.headers),
  });
  forwardedRequest.cookies.set(DETECTED_REGION_COOKIE, region);

  return handleI18nRouting(forwardedRequest);
}

export const config = {
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
