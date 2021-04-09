import React from "react";
import axios from "axios";
import { fetchAPI } from "../../lib/api";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";

import { Grid, Container, Typography, Avatar } from "@material-ui/core";
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
  BgNews: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      height: 500,
    },
    [theme.breakpoints.down("xs")]: {
      height: 260,
    },
  },
  BgContainer: {
    height: 800,
    [theme.breakpoints.down("sm")]: {
      height: 500,
    },
    [theme.breakpoints.down("xs")]: {
      height: 260,
    },
  },
  Typography1: {
    textAlign: "left",
    paddingBottom: 40,
    paddingRight: 30,
    [theme.breakpoints.down("lg")]: {
      fontSize: 54,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
      paddingBottom: 30,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
      paddingBottom: 20,
      paddingRight: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 24,
    },
  },
  Typography2: {
    fontWeight: 600,
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
  },
}));

const Post = ({ post }) => {
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
          <Container maxWidth="xl" className={classes.Container}>
            <Grid container direction="column" justify="center">
              <Grid item xs={12} className={classes.gridItem1}>
                <Typography variant="h2" className={classes.Typography1}>
                  {post.title}
                </Typography>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Avatar
                      alt="public"
                      src="/logo.png"
                      className={classes.large}
                    />
                    <Typography
                      variant="caption"
                      className={classes.Typography2}
                    >
                      เผยแพร่โดยสถาบันวิจัยและบริการด้านออทิซึม
                    </Typography>
                  </Grid>
                </Grid>
                <br />
              </Grid>
              <Grid item xs={12} className={classes.BgContainer}>
                <img
                  src={"https://cms.rsiakku.com" + post.cover.url}
                  alt="news1"
                  className={classes.BgNews}
                />
              </Grid>
              <br />
              <Grid item xs={12}>
                <Grid container direction="row" justify="center">
                  <Grid item sm={7} md={8} className={classes.RightPadding}>
                    <Typography
                      variant="caption"
                      className={classes.Typography2}
                    >
                      เผยแพร่{" "}
                      {moment(post.published_at).locale(locale).format("lll")}
                    </Typography>
                    <ReactMarkdown
                      transformImageUri={(uri) => {
                        console.log(uri);
                        return "https://cms.rsiakku.com" + uri;
                      }}
                      children={post.content}
                    />
                  </Grid>
                  <Grid item sm={5} md={4} className={classes.gridItem2}>
                    <Update />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Footer></Footer>
      </main>
    </React.Fragment>
  );
};

export async function getStaticPaths() {
  const blogs = await fetchAPI("/blogs");
  return {
    paths: blogs.map((blog) => ({
      params: {
        id: blog.id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await instance.get(`/blogs/${params.id}`);

  return {
    props: {
      post: post.data,
    },
  };
}

export default Post;
