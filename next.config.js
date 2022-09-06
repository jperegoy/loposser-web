module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */

  const nextConfig = {
    images: {
      domains: ["picsum.photos"],
    },
    rewrites: () => [
      {
        source: "/cms/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://localhost:3333/cms/:path*"
            : "/cms/index.html",
      },
    ],
  };

  return nextConfig;
};
