import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../src/components/Header";

import Homeautism from "../src/Homecomponents/Homeautism";
import Homeaboutus from "../src/Homecomponents/Homeaboutus";
import Homeourwork from "../src/Homecomponents/Homeourwork";
import Homenews from "../src/Homecomponents/Homenews";
import Homeperson from "../src/Homecomponents/Homeperson";
import Footer from "../src/components/Footer";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";

const useStyle = makeStyles((theme) => ({}));

export default function Home({ posts }) {
  const classes = useStyle();

  // Require for bi-language
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  // End of Requirement

  return (
    <React.Fragment>
      <main>
        <Header></Header>
        {/*<h1>{f("hello")}</h1>
        <h1>{f("welcomeMessage")}</h1>*/}
        <Homeautism></Homeautism>
        <Homeaboutus></Homeaboutus>
        <Homeourwork></Homeourwork>
        <Homenews posts={posts}></Homenews>
        <Homeperson></Homeperson>
        <Footer></Footer>
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
