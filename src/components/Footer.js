import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "../Link";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Button, Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Fab from '@material-ui/core/Fab';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";

const useStyle = makeStyles((theme) => ({
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
    FooterTypo1: {
        fontSize: 20,
        [theme.breakpoints.down("md")]: {
            fontSize: 18,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 14,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 12,
        },
    },
    FooterTypo2: {
        fontFamily: "Raleway",
        color: "#000",
        fontWeight: "bold",
        [theme.breakpoints.down("lg")]: {
            fontSize: 10,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: 10,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 12,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 8,
        },
    },
    boxText: {
        textIndent: 20,
        [theme.breakpoints.down("lg")]: {
            fontSize: 12,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: 10,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 10,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 8,
        },
    },

    Paper1: {
        width: "100%",
        height: "500px",
        backgroundColor: "grey",
    },
    Containeraboutus: {
        marginTop: 20,
    },
    logo: {
        maxHeight: 120,
        marginLeft: "40px",
    },
    Gridcontainer3: {
        marginTop: 30,
        marginLeft: 30,
    },
    Dividerlinear1: {
        height: "5px",
        border: "2",
        background: "black",
        width: "40px",
    },
    button: {
        ...theme.typography.tab,
        borderRadius: 5,
        fontSize: 20,
        fontWeight: 700,
        height: 45,
        color: "white",
        marginTop: 60,
        backgroundColor: "#F26705",
        '&::after': {
          backgroundColor: "#ED9B61"
        },
        [theme.breakpoints.down("sm")]: {
            height: 35,
            fontSize: 16,
            marginTop: 22,
        },
        [theme.breakpoints.down("xs")]: {
            width: 65,
            height: 25,
            fontSize: 9,
            marginLeft: 0,
        },
    },
    mapgoogle: {
        marginTop: 20,
        width: "100%",
        height: 250,
        [theme.breakpoints.down("xs")]: {
            height: 190
        },
    },
    iconfooter1: {
        color: "#B1BE12",
        fontSize: 55,
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            fontSize: 35,
        },
    },
    iconfooter2: {
        fontSize: 55,
        color: "#EF5666",
        marginTop: "60px",
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            fontSize: 35,
        },
    },
    imageIcon: {
        height: 55,
        marginTop: 25,
        [theme.breakpoints.down("xs")]: {
            height: 35,
        },
    },
    iconRoot: {
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            padding: 0,
        },
    },
    contentfooter: {
        textAlign: "left",
        padding: 20,
    },
    CarditemAbotus: {
        marginTop: 10,
        [theme.breakpoints.down("sm")]: {
            marginTop: 15,
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: 5,
        },
    },
    iconfooter: {
        textAlign: "center",
    },
    Typographyfacebookfooter: {
        marginTop: 40,
        display: "grid",
        [theme.breakpoints.down("lg")]: {
           
            marginTop: 56
        },
        [theme.breakpoints.down("md")]: {
           
        },
        [theme.breakpoints.down("sm")]: {
           
            marginTop: 55,
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: 55,
        },
        [theme.breakpoints.down("xs")]: {},
    },

    phoneNumber: {
        marginTop: 10,
        [theme.breakpoints.down("lg")]: {
            fontSize: 14,
            marginTop: 54
        },
        [theme.breakpoints.down("md")]: {
            fontSize: 12,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 10,
            marginTop: 55,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 8,
        },
    },
    FooterContact: {
        textIndent: 20,
        [theme.breakpoints.down("lg")]: {
            fontSize: 14,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: 12,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 10,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 8,
        },
    },
    footerRight: {
        [theme.breakpoints.down("sm")]: {
            fontSize: 10,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 8,
        },
    },
    AlignButton: {
        textAlign: "right"
    },
    FabArrow: {
        margin: 5,
        marginBottom: 15,
        backgroundColor: "#B1BE12",
        '&:focus': {
          backgroundColor: "#3AC7FD"
        },
        position:'fixed',
        bottom: 0
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
                <Container maxWidth="xl" className={classes.BlogContainer}>
                    <Grid container className={classes.CarditemAbotus} spacing={3}>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={5}>
                            <Typography className={classes.FooterTypo1} variant="h4">
                            {f("rsia")}
                            </Typography>
                            <Typography className={classes.FooterTypo2} variant="caption">
                            {f("rsiakku")}
                            </Typography>
                            <br></br>
                            <Divider className={classes.Dividerlinear1} variant="fullWidth" />
                            <br></br>
                            <Typography className={classes.boxText} variant="subtitle2">
                            {f("footerInfo")}
                            </Typography>
                            <Button variant="contained" className={classes.button} endIcon={<ArrowRightIcon />}>
                            {f("menuDonate")}
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} lg={3} xl={4}>
                            <Typography className={classes.FooterTypo1} variant="h4">
                            {f("contact")}
                            </Typography>
                            <Typography className={classes.FooterTypo2} variant="caption">
                            {f("contact1")}
                            </Typography>
                            <Divider className={classes.Dividerlinear1} variant="fullWidth" />
                            <img alt="logo" src="/map.png" className={classes.mapgoogle} />
                        </Grid>

                        <Grid item xs={6} sm={6} md={6} lg={2} xl={1} className={classes.iconfooter}>
                            <LocationOnIcon fontSize="large" className={classes.iconfooter1}></LocationOnIcon>
                            <br></br>
                            <AddIcCallIcon fontSize="large" className={classes.iconfooter2}></AddIcCallIcon>
                            <br></br>
                            <IconButton
                                component={Link}
                                href="https://www.facebook.com/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%A7%E0%B8%B4%E0%B8%88%E0%B8%B1%E0%B8%A2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%97%E0%B8%B4%E0%B8%8B%E0%B8%B6%E0%B8%A1-RSIA-1079148915621457"
                                classes={{ root: classes.iconRoot }}
                                fontSize="large"
                            >
                                <img className={classes.imageIcon} src="/facebook-24px.svg" />
                            </IconButton>
                        </Grid>

                        <Grid item xs={6} sm={6} md={6} lg={3} xl={2} className={classes.contentfooter}>
                            <div>
                                <Typography className={classes.FooterContact} variant="subtitle1">
                                {f("address")}
                                </Typography>
                            </div>

                            <Typography className={classes.phoneNumber} variant="subtitle1">
                            {f("phone")}
                            </Typography>

                            <div className={classes.Typographyfacebookfooter}>
                                <Typography className={classes.footerRight} variant="caption">
                                    Privacy Policy
                                </Typography>
                                <Typography className={classes.footerRight} variant="caption">
                                    Terms and Conditions
                                </Typography>
                                <Typography className={classes.footerRight} variant="caption">
                                {f("licences")}
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.AlignButton}>
                    <Fab
                    className={classes.FabArrow}
                        onClick={(event) => {
                            const anchor = (event.target.ownerDocument || document).querySelector(
                                "#back-to-top"
                            );

                            if (anchor) {
                                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
                            }
                        }}
                    >
                        <KeyboardArrowUpIcon />
                    </Fab>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}
