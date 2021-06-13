import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "../Link";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Button, Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";

import Fade from "react-reveal/Fade";

const useStyle = makeStyles((theme) => ({
  AboutContainer: {
    backgroundColor: "#fff",
    height: "auto",
    backgroundSize: "100%",
    paddingTop: 15,
    [theme.breakpoints.down("lg")]: {
      paddingTop: 48,
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: 30,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 25,
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
  Dividerlinear1: {
    width: 30,
    height: 15,
    border: 2,
    background: "#B1BE12",
    marginTop: 0,
    [theme.breakpoints.down("xl")]: {
      height: 10,
      width: 60,
    },
    [theme.breakpoints.down("md")]: {
      height: 8,
      width: 40,
    },
    [theme.breakpoints.down("sm")]: {
      height: 6,
      width: 48,
    },
    [theme.breakpoints.down("xs")]: {
      height: 5,
      marginTop: 5,
      width: 30,
    },
  },

  CarditemAbotus: {
    paddingTop: 34,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
    },
  },
  imagabout: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  paperabout3: {
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      padding: 20,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
      padding: 20,
    },
  },
  paperabout4: {
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      padding: 20,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 20,
      paddingTop: 0,
    },
  },
  paperabout5: {
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      padding: 20,
      textAlign: "center",
      paddingTop: 0,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
      padding: 20,
    },
  },
  GridPaper: {
    padding: 5,
  },
  buttonMore: {
    background: "#B1BE12",
    color: "#fff",
    fontSize: 24,
    marginTop: 10,
    '&:focus': {
      backgroundColor: "#DBE0A5"
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: 10,
    },
    [theme.breakpoints.down("md")]: {
      
      fontSize: 20,
      marginTop: 0,
    },
    [theme.breakpoints.down("sm")]: {
     
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      
      fontSize: 10,
    },
  },
  our: {
    color: "#B1BE12",
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      textAlign: "center",
    },
  },
  info: {
    color: "#B1BE12",
    fontWeight: 700,
    paddingTop: 10,
    [theme.breakpoints.down("lg")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 5,
      fontSize: 14,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 15,
      fontSize: 12,
    },
  },
  us: {
    fontFamily: "Raleway",
    fontWeight: "bold",
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 6,
      textAlign: "center",
    },
  },
  TypoSpace: {
    textIndent: 20,
    paddingTop: 11,
    paddingBottom: 15,
    fontSize: 24,
    [theme.breakpoints.down("lg")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 5,
      fontSize: 12,
    },
    [theme.breakpoints.down("xs")]: {},
  },
  AboutMid: {
    padding: 5,
    paddingLeft: 35,
    paddingRight: 18,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20,
    },
    [theme.breakpoints.down("xs")]: {
      paddding: 10,
    },
  },
  alignButton: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
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
        <Grid container className={classes.AboutContainer}>
          <Container maxWidth="xl" className={classes.BlogContainer}>
            <Grid container className={classes.CarditemAbotus}>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={5}
                className={classes.GridPaper}
              >
                <img className={classes.imagabout} src="/about1.jpg" />
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                className={classes.AboutMid}
              >
                <div>
                <Fade left>
                  <Typography variant="h2" className={classes.our}>
                  {f("menuAbout")}
                  </Typography>

                  <Typography variant="h5" className={classes.us}>
                    ABOUT US
                  </Typography>
                  </Fade>
                  <Typography variant="h5" className={classes.info}>
                  {f("about")}
                  </Typography>
                  <Divider className={classes.Dividerlinear1} />
               
                </div>
                <br></br>

                <Typography className={classes.TypoSpace}>
                {f("about1")}
                </Typography>
                    <div className={classes.alignButton}>
                      <Button
                        component={Link}
                        href="/about"
                        variant="contained"
                        size="large"
                        className={classes.buttonMore}
                      >
                       {f("button")}
                      </Button>
                    </div>
                  
              </Grid>

              <Grid item xs={12} sm={12} md={2} lg={3} >
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={12}
                    lg={12}
                    xl={12}
                    className={classes.paperabout3}
                  >
                    <Typography variant="h5" className={classes.info}>
                    {f("team")}
                    </Typography>
                    <Divider className={classes.Dividerlinear1} />
                    <Typography className={classes.TypoSpace}>
                    {f("team1")}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={12}
                    lg={12}
                    xl={12}
                    className={classes.paperabout4}
                  >
                    <Typography variant="h5" className={classes.info}>
                    {f("related")}
                    </Typography>
                    <Divider className={classes.Dividerlinear1} />

                    <Typography className={classes.TypoSpace}>
                    {f("related1")}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </main>
    </React.Fragment>
  );
}
