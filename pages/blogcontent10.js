import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import { Grid, Container, Typography, Box } from "@material-ui/core";
import Update from "../src/Blogcomponents/NewsUpdate";

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
    height: 700,
    [theme.breakpoints.down("sm")]: {
      height: 500,
    },
    [theme.breakpoints.down("xs")]: {
      height: 260,
    },
  },
  BgContainer: {
    height: "auto",
    paddingBottom: 0,
  },
  Typography1: {
    paddingRight: 66,
    paddingBottom: 40,
    [theme.breakpoints.down("md")]: {
      fontSize: 28,
      paddingRight: 18,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
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
}));

export default function Home(props) {
  const classes = useStyle();

  return (
    <React.Fragment>
      <main>
        <Header></Header>
        <Grid container className={classes.bgContainer}>
          <Container maxWidth="xl" className={classes.Container}>
            <Grid container>
              <Grid item xs={12} className={classes.BgContainer}>
                <img
                  src="/news10.jpeg"
                  alt="news10"
                  className={classes.BgNews}
                />
              </Grid>
              <Grid item sm={7} md={8} className={classes.gridItem1}>
                <Typography variant="h4" className={classes.Typography1}>
                  สถาบันวิจัยและบริการด้านออทิซึม มหาวิทยาลัยขอนแก่น
                  ได้จัดโครงการวิจัยผลการใช้โปรแกรมการปลูกพืชผักสวนครัว
                  สำหรับบุคคลที่มีภาวะออทิซึมสเปกตรัม
                </Typography>
                <Typography variant="caption" className={classes.Typography2}>
                  เผยแพร่โดยสถาบันวิจัยและบริการด้านออทิซึม
                </Typography>
                <br />
                <Typography variant="caption" className={classes.Typography2}>
                  วันที่ 20/08/2563
                </Typography>
                <Box>
                  <Typography variant="subtitle1" className={classes.bgBox}>
                    เมื่อวันที่ 20 สิงหาคม 2563 สถาบันวิจัยและบริการด้านออทิซึม
                    มหาวิทยาลัยขอนแก่น
                    ได้จัดโครงการวิจัยผลการใช้โปรแกรมการปลูกพืชผักสวนครัวสำหรับบุคคลที่มีภาวะออทิซึมสเปกตรัม
                    ณ ศูนย์การเรียนรู้โคกหนองนาโมเดล บ้านโนนกู่ ต.สาวะถี อ.เมือง
                    จ.ขอนแก่น
                    เพื่อให้บุคคลที่มีภาวะออทิซึมสเปกตรัมได้ร่วมกันปลูกดอกดาวเรือง
                    กิจกรรมนี้ช่วยส่งเสริมให้บุคคลที่มีภาวะออทิซึมสเปกตรัมมีปฏิสัมพันธ์การทำงานร่วมกับผู้อื่น
                    เสริมสร้างความสามัคคีในหมู่คณะ
                    ช่วยฝึกทักษะการทำงานที่เป็นขั้นตอน
                    ให้สัมผัสและเรียนรู้จากธรรมชาติ
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={5} md={4} className={classes.gridItem2}>
                <Update />
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Footer></Footer>
      </main>
    </React.Fragment>
  );
}
