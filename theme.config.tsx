import {DocsThemeConfig, useConfig} from "nextra-theme-docs";
import React from "react";
import {FhraiseLogo} from "./components/fhraise-logo";

const config: DocsThemeConfig = {
    head() {
        const {frontMatter} = useConfig();

        return (<>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:title" content={frontMatter.title ? `${frontMatter.title} - Fhraise` : "Fhraise"}/>
            <meta property="og:description" content="HSAS Foodies"/>
        </>);
    }, logo: <FhraiseLogo/>, project: {
        link: "https://github.com/fhraise/Fhraise",
    }, docsRepositoryBase: "https://github.com/fhraise/fhraise.github.io", footer: {
        content: (<span>© ${new Date().getFullYear()} HSAS Foodies.</span>),
    }, toc: {backToTop: true},
};

export default config;
