import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { FhraiseLogo } from "./components/fhraise-logo";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Fhraise",
    };
  }, head: <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta property="og:title" content="Fhraise"/>
    <meta property="og:description" content="HSAS Foodies"/>
  </>, logo: <FhraiseLogo/>, project: {
    link: "https://github.com/fhraise/Fhraise",
  }, docsRepositoryBase: "https://github.com/fhraise/fhraise.github.io", footer: {
    text: `© ${new Date().getFullYear()} HSAS Foodies.`,
  }, toc: { backToTop: true },
};

export default config;
