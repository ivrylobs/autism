import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import {
  Typography,
  Container,
  Grid,
  Paper,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  ButtonGroup,
} from "@material-ui/core";
import Blog17 from "../src/Blogcomponents/Blog17";
import Blog18 from "../src/Blogcomponents/Blog18";
import Blog19 from "../src/Blogcomponents/Blog19";
import Blog20 from "../src/Blogcomponents/Blog20";
import Blog21 from "../src/Blogcomponents/Blog21";
import Blog22 from "../src/Blogcomponents/Blog22";
import Blog23 from "../src/Blogcomponents/Blog23";
import Blog24 from "../src/Blogcomponents/Blog24";
import Pagination from "@material-ui/lab/Pagination";

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
      paddingTop: 20
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
        padding: 0
      },
   
  },
  NextButton: {
    padding: 25,
    paddingTop: 0,
  },
  update: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0
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
      fontSize: 8
    },
  },
  TypoNews: {},
  updateLink: {
      padding: 0
  },
  PaperUpdate: {
    marginTop: 15
}
}));

export default function Blog(props) {
  const classes = useStyles(props);

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
                      <Typography
                        variant="subtitle1"
                        className={classes.title3}
                      >
                        ค้นหาหัวข้อหลัก
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        variant="contained"
                        className={classes.buttonSearch}
                      >
                        ค้นหา
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            <Grid item sm={7} md={9}>
              <Grid container>
                <Grid item sm={12} md={6} className={classes.NewsContainer}>
                  <Blog17 />
                </Grid>
                <Grid item sm={12} md={6} className={classes.NewsContainer}>
                  <Blog18 />
                </Grid>
                <Grid item sm={12} md={6} className={classes.NewsContainer}>
                  <Blog19 />
                </Grid>
                <Grid item sm={12} md={6} className={classes.NewsContainer}>
                  <Blog20 />
                </Grid>
                <Grid item sm={12} md={6} className={classes.NewsContainer}>
                  <Blog21 />
                </Grid>
                <Grid item sm={12} md={6} className={classes.NewsContainer}>
                  <Blog22 />
                </Grid>
                <Grid item sm={12} md={6} className={classes.NewsContainer}>
                  <Blog23 />
                </Grid>
                <Grid item sm={12} md={6} className={classes.NewsContainer}>
                  <Blog24 />
                </Grid>
                <Grid item sm={12} className={classes.NextButton}>
                  <Pagination
                    className={classes.NextButton2}
                    count={4}
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={5} md={3} className={classes.PaperUpdate}>
              <Paper elevation={1} className={classes.NewsUpdate}>
                <Typography
                  variant="h6"
                  align="left"
                  className={classes.TypoNews}
                >
                  อัพเดตล่าสุด
                </Typography>
                <Divider />
                <List className={classes.update}>
                  <ListItem component={Button} className={classes.updateLink}>
                    <ListItemText>
                      <Typography
                        variant="caption"
                        className={classes.NewsUpdate2}
                      >
                        สถาบันวิจัยและบริการด้านออทิซึม - 19/02/2564
                      </Typography>
                      <Typography variant="subtitle2">
                        ได้รับเชิญเป็นวิทยากรการอบรมเชิง
                        ปฏิบัติการพัฒนาศักยภาพผู้ปกครอง ผู้ดูแล
                        และเครือข่ายสู่การเป็นต้นแบบ ครั้งที่ 1 เรื่อง
                        “การพัฒนาสู่สุขภาวะ”
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <Divider />
                  <ListItem component={Button} className={classes.updateLink}>
                    <ListItemText>
                      <Typography
                        variant="caption"
                        className={classes.NewsUpdate2}
                      >
                        สถาบันวิจัยและบริการด้านออทิซึม - 17/02/2564
                      </Typography>
                      <Typography variant="subtitle2">
                        คณะผู้ตรวจสอบภายในกองตรวจสอบภายในสำนักงานอธิการบดี
                        เข้าตรวจสอบหน่วยงานเพื่อแจ้งขอบเขตการตรวจสอบ
                        ประจำปีงบประมาณ 2564
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <Divider />
                  <ListItem component={Button} className={classes.updateLink}>
                    <ListItemText>
                      <Typography
                        variant="caption"
                        className={classes.NewsUpdate2}
                      >
                        สถาบันวิจัยและบริการด้านออทิซึม - 28/01/2564
                      </Typography>
                      <Typography variant="subtitle2">
                        สถาบันวิจัยและบริการด้านออทิซึมจัดกิจกรรมลานเพลิน
                        ภายใต้โครงการ โครงการศูนย์การเรียนรู้เพื่อบุคคล
                        ออทิสติกตามแนวเศรษฐกิจพอเพียง ณ ศูนย์การเรียนรู้เกษตรผสมผสาน บ้านโนนกู่ ต.สาวะถี อ.เมือง
                        จ.ขอนแก่น
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <Divider />
                  <ListItem component={Button} className={classes.updateLink}>
                    <ListItemText>
                      <Typography
                        variant="caption"
                        className={classes.NewsUpdate2}
                      >
                        สถาบันวิจัยและบริการด้านออทิซึม - 26/01/2564
                      </Typography>
                      <Typography variant="subtitle2">
                        สถาบันวิจัยและบริการด้วนออทิซึม ขอแสดงความยินดี
                        ดร.ธิรากร มณีรัตน์ ที่ได้รับการแต่งตั้งให้ดำรงตำแหน่ง
                        ประธานสภาคนพิการทุกประเภท จังหวัดขอนแก่น
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <Divider />
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Footer></Footer>
      </main>
    </React.Fragment>
  );
}
