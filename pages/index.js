import React from "react";
import Header from "../src/components/Header";

import Homeautism from "../src/Homecomponents/Homeautism";
import Homeaboutus from "../src/Homecomponents/Homeaboutus";
import Homeourwork from "../src/Homecomponents/Homeourwork";
import Homenews from "../src/Homecomponents/Homenews";
import Homeperson from "../src/Homecomponents/Homeperson";
import Footer from "../src/components/Footer";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";

export default function Home({ posts }) {
    // Require for bi-language
    const router = useRouter();
    const { locale, locales, defaultLocale } = router;
    const { formatMessage } = useIntl();
    const f = (id) => formatMessage({ id });
    // End of Requirement

    return (
        <React.Fragment>
            <main>
                <Header />
                <Homeautism />
                <Homeaboutus />
                <Homeourwork />
                <Homenews posts={posts} />
                <Homeperson />
                <Footer />
            </main>
        </React.Fragment>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://cms.rsiakku.com/blogs");
    const data = await res.json();

    const sortedData = data.sort((a, b) => {
        return new Date(b.updated_at) - new Date(a.updated_at);
    });

    return {
        props: { posts: sortedData },
    };
}
