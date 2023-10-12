import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/[lang]/(auth)", "/[lang]/(dashboard)", "/[lang]/404"],
    },
  };
}
