import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Blogpaper: {
    width: "100%",
    height: 650,
    [theme.breakpoints.down("lg")]: {
      height: 600,
    },
    [theme.breakpoints.down("md")]: {
      height: 440,
    },
  },
  Typo1: {
    color: "#3AC7FD",
    paddingTop: 10,
  },
  Typo2: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    [theme.breakpoints.down("lg")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      fontSize: 16,
    },
  },
  PaddingText: {
    padding: 28,
    [theme.breakpoints.down("md")]: {
      padding: 14,
    },
  },
  imgNews: {
    height: 460,
    [theme.breakpoints.down("lg")]: {
      height: 350,
    },
    [theme.breakpoints.down("md")]: {
      height: 242,
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  },
}));

export default function Blog1(props) {
  const classes = useStyles(props);

  return (
    <React.Fragment>
      <Card className={classes.Blogpaper}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="blog1"
            className={classes.imgNews}
            image="/news17.png"
            title="blog1"
          />
          <CardContent className={classes.PaddingText}>
            <Typography
              gutterBottom
              variant="caption"
              className={classes.Typo1}
            >
              สถาบันวิจัยและบริการด้านออทิซึม - 24/03/2563
            </Typography>
            <Typography variant="subtitle1" className={classes.Typo2}>
              การปฏิบัติงานที่บ้านของบุคลากร กรณีเพื่อการป้องกันการระบาด
              ของโรคติดเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ 2019 (COVID-19)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
}
