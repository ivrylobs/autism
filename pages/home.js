import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from '../src/components/Header';
import Typography from "@material-ui/core/Typography";


import Container from "@material-ui/core/Container";
import { Button, Grid, Paper } from "@material-ui/core";



import Divider from "@material-ui/core/Divider";




const useStyle = makeStyles((theme) => ({
  Fontent: {
    padding: "30px",
    backgroundImage: `url(${"bghome2.png"})`,
    height: "1080px",
  },
  Dividerlinear: {
    height: "2px",
    border: "2",
    background: "white",
    marginTop: 40,
  },
  Typography3: {
    marginTop: 40,
    color: "white",
  },
  Typography2: {
    marginTop: 40,
    color: "white",
  },
  Typography1: {
    marginTop: 40,
    color: "white",
  },
  Aboutascontainer: {
    width: "100%",
    background: "linear-gradient(40deg, #EF5666 40%,#792B33 95%)",
    padding: theme.spacing(3),
    height: "auto",
    justifyContent: "center",
  },
  TypographyAbout: {
    color: "white",
  },
  CarditemAbotus: {
    padding: 40,
  },
  switchbar: {
    marginTop: 20,
  },
  iconfacebook: {
    marginTop: 20,
    marginLeft: 10,
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 120,
    width: "16rem",
    backgroundColor: "#B1BE12",
  },
  Dropdownlink: {
    display: "flex",
    color: "white",
    padding: "0.5rem , 1rem",
    fontSize: "1.1rem",
    alignItems: "center",
    justifyContent: "space-between",
    transition: ".3s",
    "&:hover": {
      backgroundColor: "white",
      color: "#B1BE12",
    },
  },
  paperhome: {
    width: "90%",
    height: "300px",
    backgroundColor: "grey",
    marginTop: 100,
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
  buttonaboutas: {
    background: "#B1BE12",
  },
  buttonaboutas2: {
    background: "#EAA0A8",
  },
  paperhome3: {
    width: "85%",
    height: "300px",
    backgroundColor: "grey",
    marginLeft: 90,
  },
  imagenew1: {
    width: "100%",
    height: "400px",
  },
  imagenew2: {
    width: "100%",
    height: "400px",
  },
  Griditemnew2: {
    marginTop: 25,
  },
  Griditemnew3: {
    marginTop: 25,
  },
  buttonnew: {
    background: "#ADE8FF",
    marginLeft: 620,
    marginTop: 20,
    width: "100px",
  },
  person1: {
    marginTop: 20,
    marginLeft: 110,
  },
  person2: {
    marginTop: 20,
    marginLeft: 110,
  },
  person3: {
    marginTop: 20,
    marginLeft: 110,
  },
  logocompany: {
    backgroundImage: `url(${"bglogo.png"})`,
    backgroundSize: "100%",
    position: "relative",
  },
}));


export default function Home(props) {
  const classes = useStyle();


  return (
      <main>
      <Header></Header>
      <Container maxWidth="xl">
        <Grid container className={classes.Fontent}>
          <Grid item xs={6}>
            <Paper className={classes.paperhome}>IMAGE</Paper>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h2" className={classes.Typography1}>
              สถาบันวิจัยและบริการด้านออทิซึม
            </Typography>
            <Typography variant="h4" className={classes.Typography2}>
              Research And Service Institute For Autism Khon Kaen University
            </Typography>

            <Divider className={classes.Dividerlinear} variant="middle" />

            <Typography variant="h6" className={classes.Typography3}>
              เป็นสถาบันที่จัดตั้งขึ้นเพื่อให้บริการแก่บุคคลออทิซึม
              เพื่อได้รับบริการอย่างทั่วถึง และครอบคลุมในทุกด้าน
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl">
        <Grid container className={classes.CarditemAbotus}>
          <Grid item xs={4}>
            <Paper className={classes.paperhome1}>IMAGE</Paper>
          </Grid>

          <Grid item xs={4}>
            <div>
              <Typography variant="h4">เกี่ยวกับเรา</Typography>

              <Typography variant="title">ABOUT AS</Typography>
              <br></br>
              <br></br>
              <Typography variant="title">ความเป็นมาและวัตถุประสงค์</Typography>
              <br></br>
              <br></br>
              <Divider className={classes.Dividerlinear1} variant="fullWidth" />
            </div>
            <br></br>
            <br></br>
            <div>
              <Typography>
                สถาบันวิจัยและบริการด้านออทิซึม สำนักงานอธิการบดี
                มหาวิทยาลัยขอนแก่นได้รับอนุมัติขึ้นตามข้อสั่งการของนายกรัฐมนตรี
                พลเอกประยุทธ์ จันทร์โอชา ณ วันที่ 21 มิถุนายน 2560
                เป็นหน่วยงานสนับสนุนภารกิจและยุทธศาสตร์ของมหาวิทยาลัย
                ขอนแก่นในการดูแลบุคคลออทิซึม
              </Typography>
            </div>
            <br></br>
            <br></br>
            <div>
              <Button variant="contained" className={classes.buttonaboutas}>
                เพิ่มเติม
              </Button>
            </div>
          </Grid>

          <Grid item xs={4} className={classes.abotasgird3}>
            <div>
              <Paper className={classes.paperhome2}>IMAGE</Paper>
              <br></br>
              <Typography variant="title">ความเป็นมาและวัตถุประสงค์</Typography>
              <br></br>
              <br></br>
              <Divider className={classes.Dividerlinear1} variant="fullWidth" />
            </div>
            <br></br>
            <br></br>
            <div>
              <Typography>
                เพื่อให้บริการแก่บุคคลออทิซึมให้ได้รับบริการอย่างทั่วถึงและครอบคลุมในทุกด้าน
              </Typography>
            </div>
            <br></br>
            <br></br>
            <div>
              <Paper className={classes.paperhome2}>IMAGE</Paper>
              <br></br>
              <Typography variant="title">หน่วยงานที่เกียวข้อง</Typography>
              <br></br>
              <br></br>
              <Divider className={classes.Dividerlinear1} variant="fullWidth" />
            </div>
            <br></br>
            <br></br>
            <div>
              <Typography>ฝ่ายวิจัยและการถ่ายทอดเทคโนโลยี</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl">
        <Grid container className={classes.CarditemAbotus}>
          <Grid item xs={5}>
            <div>
              <Typography variant="h4">งานของเรา</Typography>

              <Typography variant="title">OUR WORK</Typography>
            </div>
            <br></br>

            <div>
              <Typography>
                การพัฒนาสัตกรรมสำหรับการช่วยเหลือบุตตลที่มีภาวะออทึซึมสเปกตรัมที่สอดคล้องกับบริบททางสังคมไทนตาม
                4 กลไลหลักของออทิซึม สเปกตรัมโรดแมป มี
                วัตถุประสงค์ตั้งแต่การคิดค้นหาวิธีการคัดกรอองเด็กเล็กที่มีอาการที่เสียงต่อการเป็นโรคออทึซึมสเปกตรัม
              </Typography>
            </div>
            <br></br>
            <br></br>
            <div>
              <Typography>
                จนถึงค้นหาวิธีการดูแลผู้ป่วยที่เป็นโรคออทิซึมสเปกตรัมตั้งแต่อายุน้อยถึวัยรุ่น
                ผู้ป่วยที่เป็นเด็กอายุน้อยแผนการวิจัยก็คิดค้นวิธีการให้การศึกษาเพื่อ
                ให้การศึกษาก้าวหน้า
                ผู้ป่วยที่เป็นวัยรุ่นแผนการวิจัยก็คิดต้นหาวิธีการส่งเสริมให้ครอบครัวมีวิธีส่งเสริมให้วัยรุ่นมีทักษะทางสังคมที่ดีขึ้น
                แผนการวิจัยจึงประกอบไปด้วยโครงการวิจัยย่อย 4 โครงการดังนี้
              </Typography>
            </div>
            <br></br>
            <br></br>
            <div>
              <Button variant="contained" className={classes.buttonaboutas2}>
                เพิ่มเติม
              </Button>
            </div>
          </Grid>

          <Grid item xs={7}>
            <Paper className={classes.paperhome3}>VIDEO</Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl">
        <Grid container className={classes.CarditemAbotus}>
          <Grid item xs={12} align="center">
            <div>
              <Typography variant="h4">ข่าวสารและประชาสัมพันธ์</Typography>
            </div>
            <br></br>
            <div>
              <Typography>NEW AND PUBLIC RELATIONS</Typography>
            </div>
          </Grid>

          <Grid item xs={6} className={classes.Griditemnew2}>
            <Typography>
              เข้าร่วม โครงการจัดบริการตามภารกิจของศุนย์บริการคนพิการ
            </Typography>

            <Typography>วันที่ 5,9,10 มีนาคม 2563</Typography>
            <br></br>
            <div>
              <img className={classes.imagenew1} src="imagenew1.png" />
            </div>
          </Grid>

          <Grid item xs={6} className={classes.Griditemnew3}>
            <Typography>
              อบรมพัฒนาศักยภาพและสร้างความเข้มแข็งให้แก่กลุ่มผู้ปกครอง
            </Typography>

            <Typography>วันที่ 22,23 กุมภาพันธ์ 2563</Typography>
            <br></br>
            <div>
              <img className={classes.imagenew2} src="imagenew2.png" />
            </div>
          </Grid>

          <Button variant="contained" className={classes.buttonnew}>
            เพิ่มเติม
          </Button>
        </Grid>
      </Container>

      <Container maxWidth="xl" className={classes.logocompany}>
        <Grid container className={classes.CarditemAbotus}>
          <Grid item xs={12} align="center">
            <div>
              <Typography variant="h4">ทำเนียบบุคคลากร</Typography>
            </div>
            <br></br>
            <div>
              <Typography>DIRECTOR AND PERSONNEL</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div>
              <img className={classes.person1} src="person1.png" />
            </div>
            <br></br>
            <div>
              <Typography align="center">นพ สุชาติ พหลภาคย์</Typography>
            </div>
            <br></br>
            <div>
              <Typography align="center">Suchat Paholpak</Typography>
            </div>
            <br></br>
            <div>
              <Typography align="center">ที่ปรึกษา</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div>
              <img className={classes.person2} src="person2.png" />
            </div>
            <br></br>
            <div>
              <Typography align="center">นาย บุรี เสรีโยธิน</Typography>
            </div>
            <br></br>
            <div>
              <Typography align="center">Buree Seriyothin</Typography>
            </div>
            <br></br>
            <div>
              <Typography align="center">ที่ปรึกษา</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div>
              <img className={classes.person2} src="person3.png" />
            </div>
            <br></br>
            <div>
              <Typography align="center">
                รศ. ดร. ปิยะวรรณ ศรีสุรักษ์
              </Typography>
            </div>
            <br></br>
            <div>
              <Typography align="center">Piyawan Srisuruk</Typography>
            </div>
            <br></br>
            <div>
              <Typography align="center">รักษาการแทนผู้อำนวยการ</Typography>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            โลโก้หน่วยงานที่เกี่ยวข้อง
          </Typography>
        </Grid>
      </Container>
      </main>
  );
}
