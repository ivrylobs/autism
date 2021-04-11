import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Typography, Container, Grid, Paper, IconButton, Button } from "@material-ui/core";
import Blog1 from "../src/Blogcomponents/Blog1";
import Blog2 from "../src/Blogcomponents/Blog2";
import Blog3 from "../src/Blogcomponents/Blog3";
import Blog4 from "../src/Blogcomponents/Blog4";
import Blog5 from "../src/Blogcomponents/Blog5";
import Blog6 from "../src/Blogcomponents/Blog6";
import Blog7 from "../src/Blogcomponents/Blog7";
import Blog8 from "../src/Blogcomponents/Blog8";
import Pagination from "@material-ui/lab/Pagination";
import Update from "../src/Blogcomponents/NewsUpdate";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
    BlogContainer: {
        height: "auto",
        backgroundColor: "#fff",
        paddingBottom: 45,
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {},
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
            maxWidth: 350,
        },
    },
    title: {
        paddingTop: 54,
        [theme.breakpoints.down("md")]: {
            fontSize: 48,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 42,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 18,
            textAlign: "left",
            paddingTop: 20,
        },
    },
    title2: {
        fontFamily: "Raleway",
        fontWeight: "bold",
        color: "#EF5666",
        [theme.breakpoints.down("lg")]: {
            fontSize: 28,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: 20,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 14,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 6,
            textAlign: "left",
        },
    },
    title3: {
        paddingTop: 15,
        textAlign: "left",
    },
    SearchButton: {
        paddingTop: 18,
    },
    SearchContainer: {},
    fixedHeightPaper: {
        height: 60,
        width: 400,
    },
    buttonSearch: {
        backgroundColor: "#ADE8FF",
        marginTop: 12,
    },
    Blogpaper: {
        maxWidth: 345,
    },
    NewsContainer: {
        padding: 15,
        [theme.breakpoints.down("xs")]: {
            paddingBottom: 15,
            padding: 0,
        },
    },
    NextButton: {
        padding: 25,
        paddingTop: 0,
    },
    update: {
        [theme.breakpoints.down("xs")]: {
            paddingTop: 0,
        },
    },
    NewsUpdate: {
        borderRadius: 10,
        padding: 20,
    },
    NewsUpdate2: {
        color: "#3AC7FD",
        fontSize: 10,
        [theme.breakpoints.down("sm")]: {
            fontSize: 8,
        },
    },
    TypoNews: {},
    updateLink: {
        padding: 0,
    },
    PaperUpdate: {
        marginTop: 15,
    },
}));

export default function Blog({ posts }) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <main>
                <Header></Header>
                <Container maxWidth="xl" className={classes.BlogContainer}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h1" className={classes.title}>
                                ข่าวสารและประชาสัมพันธ์
                            </Typography>
                            <Typography variant="h4" className={classes.title2}>
                                NEWS AND PUBLIC RELATIONS
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid
                                container
                                maxWidth="xs"
                                direction="row"
                                justify="center"
                                className={classes.SearchContainer}
                            >
                                <Paper className={classes.fixedHeightPaper}>
                                    <Grid container>
                                        <Grid item xs={2}>
                                            <IconButton className={classes.SearchButton}>
                                                <SearchIcon />
                                            </IconButton>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="subtitle1" className={classes.title3}>
                                                ค้นหาหัวข้อหลัก
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button variant="contained" className={classes.buttonSearch}>
                                                ค้นหา
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid item sm={7} md={9}>
                            <Grid container>
                                {posts
                                    ? posts.map((post) => (
                                          <Grid key={post.id} item sm={12} md={6} className={classes.NewsContainer}>
                                              <Blog1 post={post} url={`/post/${post.id}`} />
                                          </Grid>
                                      ))
                                    : "Loading Data"}
                            </Grid>
                        </Grid>
                        <Grid item sm={5} md={3} className={classes.PaperUpdate}>
                            <Update posts={posts} />
                        </Grid>
                    </Grid>
                </Container>
                <Footer></Footer>
            </main>
        </React.Fragment>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://cms.rsiakku.com/blogs");
    const data = await res.json();

    return {
        props: { posts: data },
    };
}
