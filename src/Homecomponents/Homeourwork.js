import React from "react";
import ReactPlayer from 'react-player/youtube'
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Button, Grid, Paper } from "@material-ui/core";
import Link from "../Link";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";


const useStyle = makeStyles((theme) => ({
  WorkContainer: {
    backgroundColor: "#fff",
    height: "auto",
    backgroundSize: "100%",
    paddingTop: 46,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 10,
    },
  },
  BlogContainer: {
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
  WorkTypo4: {
    paddingTop: 12,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    [theme.breakpoints.down("lg")]: {
      paddingTop: 37,
      fontSize: 20
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: 12,
      fontSize: 18
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 10
    },
    [theme.breakpoints.down("xs")]: {
     
    },
  },
  WorkTypo3: {
    color: "#000",
    textIndent: 50,
    paddingRight: 26,
    fontSize: 24,
    [theme.breakpoints.down("lg")]: {
      fontSize:20,
    },
    [theme.breakpoints.down("md")]: {
      fontSize:13,
      paddingRight: 12,
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: 0,
      textIndent: 47,
      
    },
  },
  WorkTypo2: {
    fontFamily: "Raleway",
    color: "#000",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 6,
      textAlign: "center"
    },
  },
  WorkTypo1: {
    color: "#EF5666",
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      textAlign: "center"
    },
  },

  paperVideo: {
    width: "100%",
    height: 498,
    backgroundColor: "#F5F5F5",
    [theme.breakpoints.down("md")]: {
      height: 356,
    },
    [theme.breakpoints.down("sm")]: {
      height: 339,
    },
    [theme.breakpoints.down("xs")]: {
      height: 225,
    },
  },
  buttonMore: {
    background: "#EF5666",
    color: "#fff",
    fontSize: 24,
    marginTop: "auto",
    '&:focus': {
      backgroundColor: "#EAA0A8"
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  BTalign: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      marginBottom: 20
    },
    VideoCard: {
      width: "100%"
    }
   
  }
}));

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
        <Grid container className={classes.WorkContainer}>
          <Container maxWidth="xl" className={classes.BlogContainer}>
            <Grid container className={classes.CarditemAbotus}>
              <Grid item xs={12} sm={6} md={5} lg={5} xl={5}>
                <div>
                  <Typography variant="h2" className={classes.WorkTypo1}>
                  {f("menuWork")}
                  </Typography>

                  <Typography variant="h5" className={classes.WorkTypo2}>
                    OUR WORK
                  </Typography>
                </div>
                <br></br>
                <div>
                  <Typography className={classes.WorkTypo3}>
                  {f("researchwork1")}
                    
                  </Typography>
                </div>
                <br></br>
                <div className={classes.BTalign}>
                  <Button
                  component={Link}
                  href="/works/research"
                    variant="contained"
                    size="large"
                    className={classes.buttonMore}
                  >
                    {f("button")}
                  </Button>
                </div>
              </Grid>

              <Grid item xs={12} sm={6} md={7} lg={7} xl={7}>
                <Paper className={classes.paperVideo}>
                <ReactPlayer
          url='https://www.youtube.com/watch?v=7hxRP5skmuw&t=326s'
          width='100%'
          height='100%'
        />
                </Paper>
                <Typography variant="h5" className={classes.WorkTypo4}>
                {f("videoWork")}
                  </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </main>
    </React.Fragment>
  );
}
