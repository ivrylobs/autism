import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../src/components/Header";
import Footer from '../src/components/Footer';



import Homeautism from  "../src/Homecomponents/Homeautism";
import Homeaboutus from  "../src/Homecomponents/Homeaboutus";
import Homeourwork from  "../src/Homecomponents/Homeourwork";
import Homenew from  "../src/Homecomponents/Homenew";
import Homeperson from  "../src/Homecomponents/Homeperson";


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
