import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["default", "en", "fa"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "default",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
