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
                  src="/news11.jpeg"
                  alt="news11"
                  className={classes.BgNews}
                />
              </Grid>
              <Grid item sm={7} md={8} className={classes.gridItem1}>
                <Typography variant="h4" className={classes.Typography1}>
                  อาการของเด็กที่มีภาวะออทิซึมสเปกตรัมเป็นอย่างไร ?
                  มาทำความเข้าใจเพิ่มเติมเกี่ยวกับลักษณะอาการของ
                  บุคคลที่มีภาวะออทิซึมสเปกตรัมกันค่ะ
                </Typography>
                <Typography variant="caption" className={classes.Typography2}>
                  เผยแพร่โดยสถาบันวิจัยและบริการด้านออทิซึม
                </Typography>
                <br />
                <Typography variant="caption" className={classes.Typography2}>
                  วันที่ 23/07/2563
                </Typography>
                <Box>
                  <Typography variant="subtitle1" className={classes.bgBox}>
                    มาทำความเข้าใจเพิ่มเติมเกี่ยวกับลักษณะอาการของบุคคลที่มีภาวะออทิซึมสเปกตรัมกันค่ะ
                    ภาวะออทิซึมสเปกตรัม เป็นความผิดปกติทางสมองชนิดหนึ่ง
                    ซึ่งเป็นตั้งแต่กำเนิด อาการจะค่อย ๆ
                    เห็นชัดตอนที่เด็กเริ่มโตขึ้นอาการจะแตกต่างกันเป็นราย ๆ
                    ในขณะที่รูปร่างหน้าตาจะปกติ
                    ภาวะนี้มักเป็นในเด็กผู้ชายมากกว่าเด็กผู้หญิง
                    อาการของเด็กที่มีภาวะออทิซึมสเปกตรัม มีดังนี้ 1)
                    มีความบกพร่องทางด้านอารมณ์ที่เกี่ยวกับการปฏิสัมพันธ์ทางสังคม
                    (Social - emotional reciprocity) •
                    วิธีการเข้าหาเพื่อการสังคมผิดปกติ •
                    มีความยากสนทนาแบบเขาบ้างเราบ้าง หรือสนทนาไป สนทนามา •
                    มีความยากมีความสนใจร่วม • มีความยากมีอารมณ์ร่วม •
                    มีความยากแสดงสีหน้าอารมณ์ร่วม •
                    มีความยากเป็นฝ่ายเริ่มต้นปฏิสัมพันธ์ทางสังคม
                    หรือตอบสนองปฏิสัมพันธ์ทางสังคม 2)
                    มีความบกพร่องในการสื่อสารแบบอวัจนะภาษา (Non-verbal
                    communicative behaviors) เพื่อการปฏิสัมพันธ์ทางสังคม •
                    การบูรณาการการสื่อสารระหว่างการใช้ภาษาถ้อยคำ (วัจนะ)
                    กับการใช้กิริยา ท่าทาง น้ำเสียง แววตา ได้ (อวัจนะ) ไม่ดี •
                    การสบตาผิดปกติ • ภาษากายผิดปกติ •
                    ด้อยความสามารถในการเข้าใจท่าทาง •
                    ด้อยความสามารถในการใช้ท่าทางประกอบการสื่อสาร •
                    ไม่มีการแสดงสีหน้า 3)
                    มีความบกพร่องในการเข้าใจเรื่องสัมพันธภาพ •
                    การปรับพฤติกรรมตนเองเพื่อให้เข้ากับบริบทสังคมต่าง ๆ ทำได้ยาก
                    • การแบ่งปันการเล่นตามบทจินตนาการทำได้ยาก •
                    การสร้างความเป็นมิตรทำได้ยาก หรืออาจมีอาการไม่สนใจเพื่อนเลย
                    4) มีพฤติกรรม ความสนใจ ที่เป็นแบบแผนตายตัว หรือซ้ำ ๆ •
                    การเคลื่อนไหว การใช้สิ่งของ หรือคำพูดเป็นแบบแผนตายตัว
                    หรือซ้ำ ๆ • ความสามารถในการยืดหยุ่นน้อย
                    เคยทำอย่างไรก็ต้องทำอย่างนั้นเหมือนเดิม • มีความสนใจที่จำกัด
                    ยึดติดกับความสนใจนั้นจนผิดปกติ • บางคนอาจมีการตอบสนองที่มาก
                    หรือน้อยเกินไปต่อประสาทรับสัมผัสของสิ่งแวดล้อม เช่น
                    ความเจ็บปวด อุณหภูมิ เสียง เนื้อผิว กลิ่น แสง การเคลื่อนไหว
                    ที่มา:
                    เกณฑ์การวินิจฉัยโรคออทิซึมสเปกตรัมของสมาคมจิตแพทย์อเมริกัน
                    ฉบับพิมพ์ครั้งที่ 5 (Diagnostic and Statistical Manual of
                    Mental Disorders, Fifth Edition – DSM-IV)
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
