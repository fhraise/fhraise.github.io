import {DocsThemeConfig, useConfig} from "nextra-theme-docs";
import {useRouter} from "nextra/hooks";
import React from "react";
import {FhraiseLogo} from "./components/fhraise-logo";

const config: DocsThemeConfig = {
    head() {
        const config = useConfig();
        const {locale, route} = useRouter();

        const isDefault = route === `/${locale}` || !config.title;

        const title = !isDefault ? `${config.title} - Fhraise` : "Fhraise";

        return (<>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content="HSAS Foodies"/>
        </>);
    }, logo: <FhraiseLogo/>, project: {
        link: "https://github.com/fhraise/Fhraise",
    }, docsRepositoryBase: "https://github.com/fhraise/fhraise.github.io", footer: {
        content: (<span>© ${new Date().getFullYear()} HSAS Foodies.</span>),
    }, toc: {backToTop: true},
};

export default config;
