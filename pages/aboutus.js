import React from "react";
import Header from "../src/components/Header";

import {
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Box,
} from "@material-ui/core";
import Footer from "../src/components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyle = makeStyles((theme) => ({
  AboutContainer: {
    height: "auto",
    backgroundColor: "#fff",
    paddingBottom: 45,
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  },
  BgContainer: {
    backgroundImage: `url(${"bgAboutus.png"})`,
    height: 770,
    backgroundSize: "100%",
    paddingTop: 668,
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  },
  BgContainer1: {
    marginTop: 1000,
    height: "auto",
    backgroundColor: "#fff",
    padding: 40,
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  },
  BgContainer2: {
    marginTop: 10,
    height: "auto",
    backgroundColor: "#fff",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
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
  aboutTypo1: {
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      textAlign: "center",
    },
  },
  aboutTypo2: {
    fontFamily: "Raleway",
    fontWeight: "bold",
    color: "#EF5666",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 6,
      textAlign: "center",
    },
  },
  aboutTypo3: {
    fontWeight: "bold",
    fontSize: 44,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      textAlign: "center",
    },
  },
  aboutTypo4: {
    fontWeight: "bold",
    fontSize: 44,
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      textAlign: "center",
    },
  },
  aboutTypo5: {
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      textAlign: "center",
    },
  },
  aboutVision: {
    fontWeight: "bold",
    color: "#EF5666",
    marginTop: -200,
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 6,
      textAlign: "center",
    },
  },
  aboutVision1: {
    marginTop: 15,
    paddingLeft: 125,
    paddingRight: 125,
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 6,
      textAlign: "center",
    },
  },
  aboutVision2: {
    fontWeight: "bold",
    color: "#EF5666",
    marginTop: -236,
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 6,
      textAlign: "center",
    },
  },
  aboutVision3: {
    fontWeight: "bold",
    color: "#EF5666",
    marginTop: -310,
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 6,
      textAlign: "center",
    },
  },

  Paper1: {
    width: "100%",
    height: "500px",
    backgroundColor: "grey",
  },
  container1: {
    marginTop: 40,
  },
  Paper2: {
    width: "100%",
    height: "560px",
    backgroundColor: "grey",
    marginTop: 40,
  },
  Griditem2: {
    paddingLeft: "60px",
    marginTop: 237,
  },
  Griditem3: {
    border: "20px",
    borderColor: "pink",
    textAlign: "center",
  },
  Griditem4: {
    paddingLeft: 60,
  }, 
  Griditem5: {
    paddingLeft: 60,
    marginTop: 30,
  },
  Paper3: {
    width: "100%",
    height: "150px",
    backgroundColor: "grey",
    marginTop: 40,
  },
  boxcontent: {
    marginTop: 50,
    textAlign: "center",
    backgroundColor: "#EF5666",
    paddingTop: 50,
    paddingBottom: 50,
    marginLeft: 250,
    marginRight: 250,
    borderRadius: 5,
    color: "white",
  },
  box: {
    marginTop: 70,
    backgroundColor: "#EF5666",
    height: "340px",
    textAlign: "center",
    paddingTop: 80,
  },
  buttonbox: {
    marginTop: 25,
    height: 50,
    backgroundColor: "#EF5666",
    color: "#fff",
  },
  box2: {
    marginTop: 45,
  },
  Paper4: {
    width: "100%",
    height: "300px",
    backgroundColor: "grey",
  },
  imagabout: {
    width: "100%",
    height: "auto",
  },
  imagabout1: {
    paddingTop: 20,
    width: "100%",
    height: "auto",
  },
  imagabout2: {
    width: "100%",
    height: 450,
  },
  Box2: {
    marginTop: 100,
  },
  aboutBox: {
    textIndent: 30,
  },
}));

export default function Aboutas() {
  const classes = useStyle();

  return (
    <main>
      <Header></Header>
      <Grid container className={classes.AboutContainer}>
        <Container maxWidth="xl" className={classes.BlogContainer}>
          <Grid container className={classes.BgContainer}>
            <Grid item xs={6}>
              <Typography variant="h1" className={classes.aboutTypo1}>
                เกี่ยวกับเรา
              </Typography>
              <Typography variant="h4" className={classes.aboutTypo2}>
                ABOUT AS
              </Typography>
              <br></br>

              <Typography variant="h3" className={classes.aboutTypo3}>
                ความเป็นมาและวัตถุประสงค์
              </Typography>
              <br></br>
              <Typography variant="h6" className={classes.aboutBox}>
                สถาบันวิจัยและบริการด้านออทิซึม สำนักงานอธิการบดี
                มหาวิทยาลัยขอนแก่น ได้รับอนุมัติขึ้นตามข้อสั่งการของนายกรัฐมนตรี
                พลเอกประยุทธ์ จันทร์โอชา ณ วันที่ 21 มิถุนายน 2560
                เป็นหน่วยงานสนับสนุนภารกิจและยุทธศาสตร์ของมหาวิทยาลัยขอนแก่น
                ในการดูแลบุคคลออทิซึมให้สามารถช่วยเหลือตนเองและอยู่ร่วมกับสังคมอย่างมีความสุข
                ตามยุทธศาสตร์ชาติ 20 ปี ยุทธศาสตร์ที่ 4
                การสร้างโอกาสและความเสมอภาคทางสังคม
                และแผนพัฒนาเศรษฐกิจและสังคมแห่งชาติ ฉบับที่ 12 พ.ศ.2560-2564
                การสร้างความเป็นธรรมและลดความเหลื่อมล้ำในสังคม
                อีกทั้งนโยบายของรัฐบาลในการลดความเหลื่อมล้ำของสังคมและการสร้างโอกาสการเข้าถึงบริการของรัฐและการยกระดับคุณภาพบริการด้านสาธารณสุขและสุขภาพของประชาชน
              </Typography>
              <img className={classes.imagabout1} src="about2.jpg" />
            </Grid>

            <Grid item xs={6} className={classes.Griditem2}>
              <div>
                <Typography
                  align="left"
                  variant="h6"
                  className={classes.aboutBox}
                >
                  เนื่องจากประเทศไทยมีกลุ่มบุคคลที่เป็นโรคความผิดปกติแต่กำเนิดของพัฒนาการทางสมอง
                  หรือโรคออทิซึมสเปกตรัม (Autistic Spectrum Disorder)
                  ซึ่งพบบ่อยในเด็กส่งผลต่อความบกพร่องต่อความบกพร่องทางสมอง 3
                  ด้าน คือ ด้านสังคม ภาษา และพฤติกรรม ร่วมกับความผิดปกติอื่น ๆ
                  เช่น มีปฏิสัมพันธ์ทางสังคม ไม่สบตา ไม่สนใจคู่สนทนา
                  อ่านใจคนอื่นไม่ออก อยู่ในโลกของตนเอง ทำอะไรซ้ำ ๆ เป็นต้น
                  ความรุนแรงจะมีความแตกต่างกันขึ้นอยู่กับพัฒนาการทางภาษา
                  ระดับสติปัญญา และความบกพร่องต่าง ๆ จะมีความต่อเนื่องตลอดชีวิต
                  การวินิจฉัยและการรักษาตั้งแต่ในวัยเด็กจะทำให้เด็กออทิซึมสเปกตรัม
                  ได้มีโอกาสพัฒนาได้ดีกว่าการรักษาเมื่ออายุมากขึ้น
                  การบำบัดรักษาโรคออทิซึมสเปกตรัมต้องดำเนินการอย่างถูกต้อง
                  เหมาะสมและเข้มข้น โดยการผสมผสานวิธีการต่าง ๆ ทั้งทางการแพทย์
                  การส่งเสริมพัฒนาการ การจัดรูปแบบการศึกษาที่เหมาะสม
                  การส่งเสริมอาชีพและการมีงานทำ
                  มีสวัสดิการสังคมและการดำเนินชีวิตในชุมชน ดังนั้น
                  การบำบัดจึงต้องมีบุคลากรจากสหวิชาชีพ
                </Typography>
              </div>
              <br></br>
              <Paper elevation={0}>
                <img className={classes.imagabout} src="vision1.png" />
                <Typography
                  className={classes.aboutVision}
                  variant="h5"
                  align="center"
                >
                  วิสัยทัศน์
                </Typography>
                <Typography
                  className={classes.aboutVision1}
                  variant="h6"
                  align="center"
                >
                  “พัฒนาคุณภาพชีวิตและสุขภาพของบุคคลออทิซึมสเปกตรัมด้วยงานวิจัยด้านการแพทย์
                  การศึกษา การสังคม และการกฎหมาย”
                </Typography>
              </Paper>
              <br></br>
              <Box className={classes.Box2}>
                <Typography>
                  แต่ที่ผ่านมาพบปัญหาสำคัญคือ ประชาชนยังมีความเข้าใจเรื่อง
                  โรคออทิซึมสเปกตรัมน้อย
                  เป็นผลทำให้จำนวนผู้เข้าถึงบริการทางการแพทย์ การศึกษา
                  และการช่วยเหลือทางสังคมมีน้อย โดยพบเพียงร้อยละ 15
                  ของผู้ป่วยออทิซึม
                  หรือตามรายงานการสำรวจจำนวนผู้ป่วยทางสุขภาพจิตของประเทศตามเขตสาธารณสุขรายจังหวัด
                  ในปี 2555 มีผู้ป่วยออทิซึมที่เข้าถึงบริการเพียง 25,537 ราย
                </Typography>
                <br></br>
                <Typography>
                  ดังนั้น จากเหตุผลและความจำเป็นดังกล่าว มหาวิทยาลัยขอนแก่น
                  จึงได้จัดตั้ง “สถาบันวิจัยและบริการด้านออทิซึม”
                  สำนักงานอธิการบดี มหาวิทยาลัยขอนแก่น ตั้งแต่วันที่ 7 มิถุนายน
                  2561 เพื่อรองรับการบริการบุคคลออทิซึมให้มีมาตรฐาน
                  และมีการพัฒนาบุคคลออทิซึมในทุกระดับ ทุกเพศทุกวัย
                  รวมไปถึงผู้ปกครอง ครู แพทย์ พยาบาล และบุคคลที่เกี่ยวข้องต่าง ๆ
                  พร้อมกับการดำเนินการวิจัยร่วมกับการบริการที่มีคุณภาพ
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container className={classes.BgContainer1}>
            <Grid item xs={12} className={classes.boxcontent}>
              <Typography variant="h3" className={classes.aboutTypo4}>
                ร่วมเป็นส่วนหนึ่งกับเรา
              </Typography>
              <br></br>
              <Typography variant="h5" className={classes.aboutTypo5}>
                พัฒนางานวิจัยและบริการที่มีคุณภาพแก่กลุ่มบุคคลออทิซึม
                และบุคคลต่าง ๆ ที่เกี่ยวข้อง
              </Typography>

              <Button
                variant="outlined"
                className={classes.buttonbox}
                startIcon={<FacebookIcon />}
              >
                <Typography variant="h5" className={classes.aboutTypo5}>
                  สถาบันวิจัยและบริการด้านออทิซึม
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container className={classes.BgContainer2}>
            <Grid item xs={6}>
              <Paper elevation={0}>
                <img className={classes.imagabout2} src="vision1.png" />
                <Typography
                  className={classes.aboutVision3}
                  variant="h5"
                  align="center"
                >
                  พันธกิจ
                </Typography>
                <Typography
                  className={classes.aboutVision1}
                  variant="h6"
                  align="center"
                >
                  “สถาบันวิจัยและบริการด้านออทิซึมจะปรับปรุงสุขภาพ
                  และคุณภาพชีวิตของบุคคลออทิซึมสเปกตรัม ผ่านกระบวนการวิจัย
                  กระบวนการวิชาการ กระบวนการให้บริการ
                  และกระบวนการทางกฎหมายโดยผู้เชี่ยวชาญ
                  และผู้มีส่วนเกี่ยวข้องอื่น ๆ
                  รวมทั้งครอบครัวของบุคคลที่มีภาวะออทิซึมสเปกตรัม”
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} className={classes.Griditem4}>
              <img className={classes.imagabout} src="about4.jpg" />
            </Grid>
            <Grid item xs={6}>
              <img className={classes.imagabout} src="about3.jpg" />
            </Grid>
            <Grid item xs={6} className={classes.Griditem5}>
              <Typography variant="h3" className={classes.aboutTypo3}>
                วัตถุประสงค์การจัดตั้ง
              </Typography>
              <br></br>
              <Typography
                align="left"
                variant="h6"
                className={classes.aboutBox}
              >
                1) เพื่อให้บริการแก่บุคคลออทิซึมให้ได้รับการบริการอย่างทั่วถึง
                และครอบคลุมในทุกด้านให้สามารถอยู่ร่วมกับสังคมได้อย่างมีความสุข
              </Typography>
              <br></br>
              <Typography
                align="left"
                variant="h6"
                className={classes.aboutBox}
              >
                2)
                เพื่อพัฒนาศักยภาพบุคลากรทางการแพทย์และที่เกี่ยวข้องในการดูแลบุคคลออทิซึมได้ตามความต้องการของประเทศ
              </Typography>
              <br></br>
              <Typography
                align="left"
                variant="h6"
                className={classes.aboutBox}
              >
                3) เพื่อวิจัยค้นหาสาเหตุของโรคออทิซึม วิธีป้องกัน
                วิธีรักษาให้สามารถนำมาเป็นองค์ความรู้เพื่อการป้องกันการรักษาโรคออทิซึม
              </Typography>
              <br></br>
              <Typography
                align="left"
                variant="h6"
                className={classes.aboutBox}
              >
                4) เพื่อพัฒนาเครื่องมือคัดกรอง การวินิจฉัย
                คู่มือการดูแลบุคคลออทิซึมที่ได้มาตรฐาน
                สามารถนำไปใช้ได้อย่างแพร่หลายได้อย่างสะดวกสบาย
              </Typography>
              <br></br>
              <Typography
                align="left"
                variant="h6"
                className={classes.aboutBox}
              >
                5)
                เพื่อส่งเสริมเครือข่ายความร่วมมือเพื่อให้บริการทางการแพทย์และการรักษาพยาบาลแก่บุคคลออทิซึม
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Footer></Footer>
    </main>
  );
}
