/** @type {import('next').NextConfig} */

const supportedLocales = ["en", "nl", "nl-BE", "en-US", "fr-CA"];
module.exports = {
  async redirects() {
    return process.env.Node_ENV === "production"
      ? [
          {
            source: "/docs/i18n",
            destination: "/404",
            permanent: false,
          },
        ]
      : [];
  },
  reactStrictMode: true,
  i18n: {
    locales: supportedLocales,
    defaultLocale: "en",
  },
  env: {
    supportedLocales: supportedLocales.join(","),
    baseUrl: "https://localhost:3000",
  },
};
