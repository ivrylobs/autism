import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import { Button, Grid } from "@material-ui/core";
import Link from "../Link";

const useStyle = makeStyles((theme) => ({
  NewsContainer: {
    backgroundColor: "#fff",
    height: "auto",
    backgroundSize: "100%",
    paddingBottom: 50,
    paddingTop: 70,
    [theme.breakpoints.down("md")]: {
      paddingBottom: 40,
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 30,
      paddingTop: 45,
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 20,
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
  imagenew1: {
    width: "100%",
    height: "auto",
  },
  imagenew2: {
    width: "100%",
    height: "auto",
  },
  Griditemnew1: {
    marginTop: 25,
    padding: 15,
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
      padding: 10,
    },
  },
  Griditemnew2: {
    marginTop: 25,
    padding: 15,
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
      padding: 10,
    },
  },
  Griditemnew3: {
    marginTop: 25,
    padding: 15,
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
      padding: 10,
    },
  },
  Griditemnew4: {
    marginTop: 25,
    padding: 15,
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
      padding: 10,
    },
  },
  buttonnew: {
    background: "#ADE8FF",
    marginLeft: 620,
    marginTop: 20,
    width: "100px",
  },
  NewsTypo2: {
    fontFamily: "Raleway",
    color: "#000",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 6,
    },
  },
  NewsTypo1: {
    color: "#3AC7FD",
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  NewsTypo3: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "left",
    paddingRight: 62,
    [theme.breakpoints.down("xl")]: {
      fontSize: 24,
    },
    [theme.breakpoints.down("lg")]: {
      paddingRight: 0,
      fontSize: 18,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 9,
    },
  },
  NewsTypo4: {
    color: "#3AC7FD",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      fontSize: 9,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 6,
    },
  },
  buttonMore: {
    background: "#ADE8FF",
    color: "#fff",
    width: 190,
    fontSize: 24,
    marginTop: 40,
    marginBottom: 30,
    [theme.breakpoints.down("md")]: {
      width: 150,
      fontSize: 20,
    },
    [theme.breakpoints.down("sm")]: {
      width: 96,
      height: 30,
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      width: 80,
      height: 25,
      fontSize: 10,
    },
  },
  alignButton: {
    textAlign: "center",
  },
}));

export default function Home(props) {
  const classes = useStyle();

  return (
    <React.Fragment>
      <main>
        <Grid container className={classes.NewsContainer}>
          <Container maxWidth="xl" className={classes.BlogContainer}>
            <Grid container>
              <Grid item xs={12} align="center">
                <Typography variant="h2" className={classes.NewsTypo1}>
                  ข่าวสารและประชาสัมพันธ์
                </Typography>
                <Typography variant="h5" className={classes.NewsTypo2}>
                  NEWS AND PUBLIC RELATIONS
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={classes.Griditemnew1}
              >
                <Typography variant="h5" className={classes.NewsTypo3}>
                  ได้รับเชิญเป็นวิทยากรการอบรมเชิงปฏิบัติการพัฒนาศักยภาพผู้ปกครอง
                  ผู้ดูแล และเครือข่ายสู่การเป็นต้นแบบ ครั้งที่ 1 เรื่อง
                  “การพัฒนาสู่สุขภาวะ”
                </Typography>

                <Typography variant="caption" className={classes.NewsTypo4}>
                  สถาบันวิจัยและบริการด้านออทิซึม - 19/02/2564
                </Typography>
                <div>
                  <img className={classes.imagenew1} src="news1.jpeg" />
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={classes.Griditemnew2}
              >
                <Typography variant="h5" className={classes.NewsTypo3}>
                  คณะผู้ตรวจสอบภายใน กองตรวจสอบภายใน สำนักงานอธิการบดี
                  เข้าตรวจสอบหน่วยงาน เพื่อแจ้งขอบเขตการตรวจสอบ ประจำปีงบประมาณ
                  2564
                </Typography>

                <Typography variant="caption" className={classes.NewsTypo4}>
                  สถาบันวิจัยและบริการด้านออทิซึม - 17/02/2564
                </Typography>
                <div>
                  <img className={classes.imagenew1} src="news2.jpeg" />
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={classes.Griditemnew3}
              >
                <Typography variant="h5" className={classes.NewsTypo3}>
                  สถาบันวิจัยและบริการด้านออทิซึมจัดกิจกรรมลานเพลิน
                  ภายใต้โครงการ
                  โครงการศูนย์การเรียนรู้เพื่อบุคคลออทิสติกตามแนวเศรษฐกิจพอเพียง
                  ณ ศูนย์การเรียนรู้เกษตรผสมผสาน บ้านโนนกู่ ต.สาวะถี อ.เมือง
                  จ.ขอนแก่น
                </Typography>

                <Typography
                  variant="h5"
                  variant="caption"
                  className={classes.NewsTypo4}
                >
                  สถาบันวิจัยและบริการด้านออทิซึม - 28/01/2564
                </Typography>
                <div>
                  <img className={classes.imagenew2} src="news3.jpg" />
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={classes.Griditemnew4}
              >
                <Typography variant="h5" className={classes.NewsTypo3}>
                  สถาบันวิจัยและบริการด้วนออทิซึม ขอแสดงความยินดี ดร.ธิรากร
                  มณีรัตน์ที่ได้รับการแต่งตั้งให้ดำรงตำแหน่ง
                  ประธานสภาคนพิการทุกประเภทจังหวัดขอนแก่น
                </Typography>

                <Typography variant="caption" className={classes.NewsTypo4}>
                  สถาบันวิจัยและบริการด้านออทิซึม - 26/01/2564
                </Typography>

                <div>
                  <img className={classes.imagenew2} src="news4.jpeg" />
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.alignButton}
              >
                <Button
                component={Link}
                href="/blog"
                  variant="contained"
                  size="large"
                  className={classes.buttonMore}
                >
                  เพิ่มเติม
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </main>
    </React.Fragment>
  );
}
