import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";



const useStyle = makeStyles((theme) => ({
  HomeContainer: {
    backgroundImage: `url(${"bg.png"})`,
    height: 1080,
    backgroundSize: "100%",
    paddingTop: 90,
    [theme.breakpoints.down("lg")]: {
      height: 840,
      paddingTop: 48,
      
    },
    [theme.breakpoints.down("md")]: {
      height: 640,
      paddingTop: 30,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      height: 370,
     
    },
    [theme.breakpoints.down("xs")]: {
      height: 200,
    },
  },
  BlogContainer: {
    textAlign: "center",
    [theme.breakpoints.down("xl")]: {
      maxWidth: 1720,
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: 1200,
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 900,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 590,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 599,
    },
  },
  Typography1: {
   
    color: "black",
    [theme.breakpoints.down("lg")]: {
      fontSize: 60,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 47,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  Typography2: {
    fontFamily: "Raleway",
    fontSize: 38,
    marginTop: 10,
    color: "black",
    fontWeight: 600,
    [theme.breakpoints.down("lg")]: {
      marginTop: 20,
      fontSize: 27,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 19,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      marginTop: 4,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 8,
      marginTop: 0,
    },
  },
  paperhome1: {
    width: "90%",
    height: "300px",
    backgroundColor: "grey",
  },
  paperhome2: {
    width: "30%",
    height: "70px",
    backgroundColor: "grey",
  },

  Dividerlinear1: {
    height: "5px",
    border: "2",
    background: "#B1BE12",
    width: "40px",
  },
  bgBox: {
    margin: 40,
    backgroundColor: "#fff",
    border: 1,
    opacity: 0.7,
    padding: 30,
    [theme.breakpoints.down("sm")]: {
      margin: 18,
      padding: 10,
    },
    [theme.breakpoints.down("xs")]: {
      margin: 10,
      padding: 5,
    },
  }
}));

export default function Home(props) {
  const classes = useStyle();

  return (
    <React.Fragment>
      <main>
        <Grid container className={classes.HomeContainer}>
          <Container maxWidth="xl" className={classes.BlogContainer}>
            <Grid container className={classes.Fontent}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className={classes.bgBox}>
                <Typography variant="h1" className={classes.Typography1}>
                  สถาบันวิจัยและบริการด้านออทิซึม
                </Typography>
                <Typography variant="h4" className={classes.Typography2}>
                  Research And Service Institute For Autism Khon Kaen University
                </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </main>
    </React.Fragment>
  );
}
