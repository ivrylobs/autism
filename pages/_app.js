import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/components/Theme";

// pages/_app.js
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
// import all locales through barrel file

import * as locales from "../content/locale";

export default function MyApp(props) {
    const { Component, pageProps } = props;

    const router = useRouter();
    const { locale, defaultLocale, pathname } = router;
    const localeCopy = locales[locale];
    const messages = localeCopy[pathname];

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages}>
            <Head>
                <title>สถาบันวิจัยและบริการด้านออทิซึม</title>
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </IntlProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
