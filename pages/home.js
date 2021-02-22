import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../src/components/Header";



import Homeautism from  "../src/components/Homecomponents/Homeautism";
import Homeaboutus from  "../src/components/Homecomponents/Homeaboutus";
import Homeourwork from  "../src/components/Homecomponents/Homeourwork";
import Homenew from  "../src/components/Homecomponents/Homenew";
import Homeperson from  "../src/components/Homecomponents/Homeperson";







const useStyle = makeStyles((theme) => ({
 
}));

export default function Home(props) {
  const classes = useStyle();

  return (
    <React.Fragment>
      <main>
        <Header></Header>
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
