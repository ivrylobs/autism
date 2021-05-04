import React from "react";
import { makeStyles } from "@material-ui/styles";

import Container from "@material-ui/core/Container";
import { Grid, Typography } from "@material-ui/core";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";

const useStyle = makeStyles((theme) => ({
    Container: {
        height: "auto",
        backgroundColor: "#fff",
        paddingBottom: 45,
        paddingTop: 54,
        [theme.breakpoints.down("xs")]: {
            paddingTop: 20,
        },
    },
    ContainerLayout1: {
        height: " auto",
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
            maxWidth: 320,
        },
    },
    content: {
        textAlign: "center",
        padding: 165,
        paddingBottom: 25,
        paddingTop: 25,
        [theme.breakpoints.down("lg")]: {
            padding: 130,
            paddingBottom: 25,
            paddingTop: 25,
        },
        [theme.breakpoints.down("md")]: {
            paddingBottom: 25,
            paddingTop: 25,
        },
        [theme.breakpoints.down("sm")]: {
            padding: 45,
            paddingBottom: 25,
            paddingTop: 25,
        },
        [theme.breakpoints.down("xs")]: {
            padding: 28,
            paddingBottom: 25,
            paddingTop: 25,
        },
    },
    adress: {
        fontWeight: "bold",
        [theme.breakpoints.down("xs")]: {
            fontSize: 16,
        },
    },
    phoneNumber: {
        fontWeight: "bold",
        [theme.breakpoints.down("xs")]: {
            fontSize: 14,
        },
    },
}));

export default function Donate(props) {
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
                <Header />
                <Grid container className={classes.Container}>
                    <Container maxWidth="lg" className={classes.ContainerLayout1}>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Grid item xs={12} className={classes.content}>
                                <Typography className={classes.adress} variant="h5">
                                    {f("address")}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.contentfooter}>
                                <Typography className={classes.phoneNumber} variant="h6">
                                    {f("phone")}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Footer></Footer>
            </main>
        </React.Fragment>
    );
}
