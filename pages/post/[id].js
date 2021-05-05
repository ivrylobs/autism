import React from "react";
import axios from "axios";
import { FacebookShareButton } from "react-share";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { FacebookIcon } from "../../node_modules/react-share/es/";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";

import { Grid, Container, Typography } from "@material-ui/core";
import Update from "../../src/Blogcomponents/NewsUpdate";

const instance = axios.create({
    baseURL: "https://cms.rsiakku.com",
});

const useStyle = makeStyles((theme) => ({
    bgContainer: {
        height: "auto",
        backgroundColor: "#fff",
        paddingBottom: 25,
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {},
    },
    Container: {
        [theme.breakpoints.down("lg")]: {
            maxWidth: 1100,
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
    BgNews: {
        width: "100%",
        height: "100%",
        paddingRight: 20,
    },
    BgContainer: {
        height: "auto",
        marginTop: 15,
    },
    Typography1: {
        textAlign: "left",
        paddingRight: 20,
        fontSize: 24,
        [theme.breakpoints.down("lg")]: {
            paddingRight: 20,
        },
        [theme.breakpoints.down("md")]: {
            paddingRight: 20,
        },
        [theme.breakpoints.down("sm")]: {
            paddingRight: 0,
        },
        [theme.breakpoints.down("xs")]: {},
    },
    Typography2: {
        fontWeight: 600,
        color: "#3AC7FD",
        [theme.breakpoints.down("md")]: {
            fontSize: 16,
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
        textIndent: 96,
        margin: 40,
        padding: 15,
        paddingLeft: 0,
        marginLeft: 0,
        [theme.breakpoints.down("md")]: {
            margin: 18,
            padding: 10,
            marginRight: 12,
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 0,
            marginLeft: 0,
            textIndent: 56,
        },
        [theme.breakpoints.down("xs")]: {
            margin: 10,
            padding: 0,
            fontSize: 14,
        },
    },
    gridItem1: {
        marginTop: 15,
    },
    gridItem2: {
        marginTop: 15,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    RightPadding: {
        paddingRight: 25,
        [theme.breakpoints.down("sm")]: {
            paddingRight: 0,
        },
    },
}));

const Post = ({ post, posts }) => {
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
                <Header></Header>
                <Grid container className={classes.bgContainer}>
                    <Container maxWidth="lg" className={classes.Container}>
                        <Grid container direction="row" justify="center">
                            <Grid item xs={12} md={8}>
                                <Grid container>
                                    <Grid item xs={12} className={classes.BgContainer}>
                                        <img
                                            src={"https://cms.rsiakku.com" + post.cover.url}
                                            alt="news1"
                                            className={classes.BgNews}
                                        />
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridItem1}>
                                        <Typography variant="h2" className={classes.Typography1}>
                                            {locale == "th" ? post.title : post.titeEn}
                                        </Typography>
                                        <br />
                                        <FacebookShareButton
                                            url={"https://rsiakku.com/post/" + post.id}
                                            quote={post.title}
                                        >
                                            <FacebookIcon size={32} round />
                                        </FacebookShareButton>
                                    </Grid>
                                    <br />
                                    <Grid item xs={12}>
                                        <Grid container direction="row" justify="left">
                                            <Grid item className={classes.RightPadding}>
                                                <Typography variant="caption" className={classes.Typography2}>
                                                    {locale == "th" ? "เผยแพร่" : "Published"}{" "}
                                                    {moment(post.published_at).locale(locale).format("lll")}
                                                </Typography>
                                                <ReactMarkdown
                                                    components={{
                                                        img: ({ node, ...props }) => (
                                                            <img
                                                                style={{
                                                                    width: "100%",
                                                                }}
                                                                {...props}
                                                            />
                                                        ),
                                                        p: ({ node, ...props }) => (
                                                            <p
                                                                style={{
                                                                    fontSize: 18,
                                                                }}
                                                                {...props}
                                                            />
                                                        ),
                                                    }}
                                                    transformImageUri={(uri) => {
                                                        console.log(uri);
                                                        return "https://cms.rsiakku.com" + uri;
                                                    }}
                                                    children={locale == "th" ? post.content : post.contentEn}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={4} className={classes.gridItem2}>
                                <Update posts={posts} />
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Footer></Footer>
            </main>
        </React.Fragment>
    );
};

export async function getServerSideProps({ params }) {
    const post = await instance.get(`/blogs/${params.id}`);
    const posts = await instance.get("/blogs");

    const sortedPosts = posts.data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    return {
        props: {
            posts: sortedPosts,
            post: post.data,
        },
    };
}

export default Post;
