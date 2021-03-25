import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../src/components/Header";


import Homeautism from "../src/Homecomponents/Homeautism";
import Homeaboutus from "../src/Homecomponents/Homeaboutus";
import Homeourwork from "../src/Homecomponents/Homeourwork";
import Homenew from "../src/Homecomponents/Homenew";
import Homeperson from "../src/Homecomponents/Homeperson";
import Footer from "../src/components/Footer";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";

const useStyle = makeStyles((theme) => ({}));

export default function Home(props) {
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
        <h1>{f("hello")}</h1>
        <h1>{f("welcomeMessage")}</h1>
        <Homeautism></Homeautism>
        <Homeaboutus></Homeaboutus>
        <Homeourwork></Homeourwork>
        <Homenew></Homenew>
        <Homeperson></Homeperson>
        <Footer></Footer>
      </main>
    </React.Fragment>
  );
}
