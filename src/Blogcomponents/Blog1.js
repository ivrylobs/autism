import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardActionArea, CardContent, CardMedia } from "@material-ui/core";
import moment from "moment";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
  Blogpaper: {
    width: "100%",
    height: 600,
    [theme.breakpoints.down("lg")]: {
      height: 500,
    },
    [theme.breakpoints.down("md")]: {
      height: 370,
    },
    [theme.breakpoints.down("sm")]: {
      height: 470,
    },
    [theme.breakpoints.down("xs")]: {
      height: 460,
    },
  },
  Typo1: {
    color: "#3AC7FD",
  },
  Typo2: {
    padding: 10,
    fontSize: 20,
    [theme.breakpoints.down("lg")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      fontSize: 14,
    },
  },
  PaddingText: {
   padding: 0,
   [theme.breakpoints.down("sm")]: {
    padding: 10,
  },
  },
  imgNews: {
    height: 415,
    marginBottom: 15,
    [theme.breakpoints.down("lg")]: {
      height: 350,
    },
    [theme.breakpoints.down("md")]: {
      height: 242,
    },
    [theme.breakpoints.down("sm")]: {
      height: 275
    },
    [theme.breakpoints.down("xs")]: {},
  },
}));

export default function Blog1({ url, post }) {
  const classes = useStyles();

  // Require for bi-language
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  // End of Requirement

  return (
    <React.Fragment>
      <Card className={classes.Blogpaper}>
        <CardActionArea href={url}>
          <CardMedia component="img" alt="blog1" className={classes.imgNews} image={"https://cms.rsiakku.com" + post.cover.url} title="blog1" />
          <CardContent className={classes.PaddingText}>
            <Typography gutterBottom variant="caption" className={classes.Typo1}>
              สถาบันวิจัยและบริการด้านออทิซึม - {moment(post.updated_at).locale(locale).format("l")}
            </Typography>
            <Typography variant="subtitle1" className={classes.Typo2}>
              {post.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
}
