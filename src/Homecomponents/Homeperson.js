import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import { Grid, Button } from "@material-ui/core";
import Link from "../Link";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";


const useStyle = makeStyles((theme) => ({
  TeamContainer: {
    backgroundColor: "#fff",
    height: "auto",
    backgroundSize: "cover",
    paddingTop: 40,
    paddingBottom: 100,
    [theme.breakpoints.down("lg")]: {
     
      paddingTop: 5,
    },
    [theme.breakpoints.down("md")]: {
      paddingBottom: 60,
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 20,
      paddingTop: 0,
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 10,
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
  TeamTypo3: {
    fontSize: 24,
    [theme.breakpoints.down("lg")]: {
      fontSize: 18,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 8,
    },
  },
  TeamTypo2: {
    fontFamily: "Raleway",
    color: "#000",
    fontWeight: "bold",
    paddingBottom: 35,
    paddingTop: 10,
    [theme.breakpoints.down("lg")]: {
      paddingTop: 0,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 6,
    },
  },
  TeamTypo1: {
    color: "#F26705",
    [theme.breakpoints.down("lg")]: {
      fontSize: 32,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  person: {
    width: 250,
    borderRadius: "50%",
    [theme.breakpoints.down("lg")]: {
      width: 140,
    },
    [theme.breakpoints.down("md")]: {
      width: 100,
    },
    [theme.breakpoints.down("sm")]: {
      width: 70,
    },
    [theme.breakpoints.down("xs")]: {
      width: 65,
    },
  },
  
  personCenter: {
    textAlign: "center",
  },
  buttonMore: {
    backgroundColor: "#F26705",
    color: "#fff",
    fontSize: 24,
    marginTop: "auto",
    '&:focus': {
      backgroundColor: "#ED9B61"
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
    textAlign: "center",
    marginTop: 20,
    [theme.breakpoints.down("xs")]: {
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
        <Grid container className={classes.TeamContainer}>
          <Container maxWidth="xl" className={classes.BlogContainer}>
            <Grid container>
              <Grid item xs={12} align="center">
                <div>
                  <Typography variant="h2" className={classes.TeamTypo1}>
                  {f("team")}
                  </Typography>
                </div>
                <div>
                  <Typography variant="h5" className={classes.TeamTypo2}>
                    DIRECTOR AND PERSONNEL
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={4}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                className={classes.personCenter}
              >
                <div>
                  <img className={classes.person} src="/0.png" />
                </div>
               
                  <Typography className={classes.TeamTypo3} variant="h5" align="center">
                    นพ สุชาติ พหลภาคย์
                  </Typography>
                
                <div>
                  <Typography className={classes.TeamTypo3} variant="h5" align="center">
                    Suchat Paholpak
                  </Typography>
                </div>
                <div>
                  <Typography className={classes.TeamTypo3} variant="h5" align="center">
                  {f("team2")}
                  </Typography>
                </div>
              </Grid>

              <Grid
                item
                xs={4}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                className={classes.personCenter}
              >
                <div>
                  <img className={classes.person} src="/000.png" />
                </div>
                
                  <Typography className={classes.TeamTypo3} variant="h5" align="center">
                    นาย บุรี เสรีโยธิน
                  </Typography>
                
                <div>
                  <Typography className={classes.TeamTypo3} variant="h5" align="center">
                    Buree Seriyothin
                  </Typography>
                </div>
                <div>
                  <Typography className={classes.TeamTypo3} variant="h5" align="center">
                  {f("team2")}
                  </Typography>
                </div>
              </Grid>

              <Grid
                item
                xs={4}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                className={classes.personCenter}
              >
                <div>
                  <img className={classes.person} src="/1.png" />
                </div>
               
                  <Typography className={classes.TeamTypo3} variant="h5" align="center">
                    รศ. ดร. ปิยะวรรณ ศรีสุรักษ์
                  </Typography>
               
                <div>
                  <Typography className={classes.TeamTypo3} variant="h5" align="center">
                    Piyawan Srisuruk
                  </Typography>
                </div>
                <div>
                  <Typography className={classes.TeamTypo3} variant="h5" align="center">
                  {f("team3")}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} className={classes.BTalign}>
                  <Button
                  color="warning"
                  component={Link}
                  href="/team"
                    variant="contained"
                    size="large"
                    className={classes.buttonMore}
                  >
                   {f("button")}
                  </Button>
                </Grid>
            </Grid>
          </Container>
        </Grid>
      </main>
    </React.Fragment>
  );
}
