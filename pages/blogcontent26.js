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
                  src="/news26.jpeg"
                  alt="news26"
                  className={classes.BgNews}
                />
              </Grid>
              <Grid item sm={7} md={8} className={classes.gridItem1}>
                <Typography variant="h4" className={classes.Typography1}>
                  ได้เข้าร่วม “งานวันคนพิการสากล จังหวัดขอนแก่น ประจำปี 2562”
                </Typography>
                <Typography variant="caption" className={classes.Typography2}>
                  เผยแพร่โดยสถาบันวิจัยและบริการด้านออทิซึม
                </Typography>
                <br />
                <Typography variant="caption" className={classes.Typography2}>
                  วันที่ 19/12/2562
                </Typography>
                <Box>
                  <Typography variant="subtitle1" className={classes.bgBox}>
                    เมือวันที่ 19 ธันวาคม 2562
                    บุคลากรสถาบันวิจัยและบริการด้านออทิซึม ได้เข้าร่วม
                    “งานวันคนพิการสากล จังหวัดขอนแก่น ประจำปี 2562” จัดโดย
                    สำนักงานพัฒนาและความมั่นคงของมนุษย์ จังหวัดขอนแก่น ณ
                    ศูนย์การค้าเซ็นทรัลพลาซ่าขอนแก่น
                    ซึ่งการจัดงานครั้งนี้มีวัตถุประสงค์เพื่อส่งเสริมโอกาสให้คนพิการได้แสดงศักยภาพ
                    เข้าถึงสิทธิประโยชน์ สร้างความเป็นธรรม ความเสมอภาค เท่าเทียม
                    และเชิดชูเกียรติให้แก่บุคคล หน่วยงาน องค์กร
                    ในการสนับสนุนงานด้านคนพิการ
                    และคนพิการที่เป็นแบบอย่างทางสังคม
                    ตลอดจนเสริมสร้างเจตคติเชิงสร้างสรรค์ของคนพิการ
                    ครอบครัวคนพิการ และสังคมที่มีต่อคนพิการและความพิการ
                    ซึ่งจะส่งผลให้คนพิการได้รับโอกาสทางสังคมเท่าเทียมกับคนทั่วไป
                    ซึ่งมีคนพิการและผู้ดูแลคนพิการ ตลอดจนเครือข่าย
                    เข้าร่วมงานโดยมีผู้ว่าราชการจังหวัดขอนแก่น
                    เป็นประธานในพิธีเปิด
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
