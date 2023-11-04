/** @type {import('next').NextConfig} */
import nextIntl from "next-intl/plugin";
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "api.omidshabab.com",
    ],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

// Use nextIntl to extend your configuration with the next-intl plugin
const withNextIntl = nextIntl("./i18n.ts");

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
  experimental: {
    mdxRs: true,
  },
});

export default withNextIntl(withMDX(nextConfig));
