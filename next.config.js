const withNextra = require("nextra")({
  theme: "nextra-theme-docs", themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  i18n: {
    locales: ["zh-CN"], defaultLocale: "zh-CN",
  },
});
