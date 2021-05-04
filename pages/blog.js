import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Typography, Container, Grid, Paper, IconButton, Button, TextField } from "@material-ui/core";
import Blog1 from "../src/Blogcomponents/Blog1";
import Update from "../src/Blogcomponents/NewsUpdate";
import Fuse from "fuse.js";
import SearchIcon from "@material-ui/icons/Search";
import { Pagination } from "@material-ui/lab";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            marginTop: theme.spacing(2),
        },
    },
    BlogContainer: {
        height: "auto",
        backgroundColor: "#fff",
        paddingBottom: 45,
    },
    Container: {
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
            maxWidth: 370,
        },
    },
    title: {
        paddingTop: 54,
        [theme.breakpoints.down("lg")]: {
            fontSize: 60,
        },
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
        width: 200,
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
        [theme.breakpoints.down("sm")]: {
            padding: 8,
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
    // Require for bi-language
    const router = useRouter();
    const { locale, locales, defaultLocale } = router;
    const { formatMessage } = useIntl();
    const f = (id) => formatMessage({ id });
    // End of Requirement

    const classes = useStyles();
    const [postsData, setPostsData] = React.useState(posts);
    const [searchText, setSearchText] = React.useState("text");
    // const [page, setPage] = React.useState(0);
    // const [countPost, setCountPost] = React.useState(6);
    // const [pagePost, setPagePost] = React.useState([]);

    const keyPress = (e) => {
        if (e.key == "Enter") {
            searchData(searchText);
        }
    };

    const onEnter = (e) => {
        searchData(searchText);
    };

    const onTextChange = (e) => {
        setSearchText(e.target.value);
    };

    const searchData = (searchField) => {
        if (searchField != "") {
            const options = {
                includeScore: true,
                findAllMatches: true,
                useExtendedSearch: true,
                keys: ["title", "description", "content"],
            };

            const fuse = new Fuse(posts, options);
            const result = fuse.search(searchField);
            const mappedResult = result.map((item) => item.item);
            setPostsData(mappedResult);
        } else {
            setPostsData(posts);
        }
    };

    return (
        <React.Fragment>
            <main>
                <Header />
                <Grid container maxWidth="lg" className={classes.BlogContainer}>
                    <Container container className={classes.Container}>
                        <Grid item xs={12}>
                            <Typography variant="h1" className={classes.title}>
                                {f("menuNews")}
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
                                            <TextField
                                                type="search"
                                                placeholder={f("find")}
                                                variant="standard"
                                                className={classes.title3}
                                                onKeyPress={keyPress}
                                                onChange={onTextChange}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button
                                                variant="contained"
                                                className={classes.buttonSearch}
                                                onClick={onEnter}
                                            >
                                                {f("found")}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container direction="row">
                            <Grid item sm={8} md={9}>
                                <Grid container>
                                    {postsData[0] ? (
                                        postsData.slice(0, 6).map((post) => (
                                            <Grid key={post.id} item sm={12} md={6} className={classes.NewsContainer}>
                                                <Blog1 post={post} url={`/post/${post.id}`} />
                                            </Grid>
                                        ))
                                    ) : (
                                        <h1>{f("nonfind")}</h1>
                                    )}
                                </Grid>
                            </Grid>
                            <Grid item sm={4} md={3} className={classes.PaperUpdate}>
                                <Update posts={posts} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.root}>
                                <Pagination
                                    size="large"
                                    // onChange={(event, value) => {
                                    //     const postCount = value * 6;
                                    //     const changePage = value - 1 * 6;
                                    //     setPage(changePage);
                                    //     setCountPost(postCount);
                                    //     console.log(displayPosts);
                                    // }}
                                    count={postsData[0] ? Math.ceil(postsData.length / 6) : 1}
                                />
                            </div>
                        </Grid>
                    </Container>
                </Grid>
                <Footer />
            </main>
        </React.Fragment>
    );
}

export async function getServerSideProps() {
    const res = await fetch("https://cms.rsiakku.com/blogs");
    const data = await res.json();

    const sortedData = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    return {
        props: { posts: sortedData },
    };
}
