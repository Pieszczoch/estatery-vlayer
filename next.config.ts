import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule: { test: { test: (arg0: string) => any } }) =>
        rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              expandProps: true,
              svgProps: {
                width: "{props.width || 24}",
                height: "{props.width || 24}",
              },
              replaceAttrValues: {
                "#333": "{props.color || 'currentColor'}",
              },
            },
          },
        ],
      }
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },

  images: {
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
