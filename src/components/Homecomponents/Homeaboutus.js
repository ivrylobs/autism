import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import { Button, Grid, Paper } from "@material-ui/core";

import Divider from "@material-ui/core/Divider";

const useStyle = makeStyles((theme) => ({
  Fontent: {
    padding: "30px",
    backgroundImage: `url(${"bghome2.png"})`,
    height: "600px",
    backgroundSize: "100%",

    
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
  itemnew:{
    padding: 15,
    textAlign: "center"
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
    width: "60%",
    height: "200px",
    textAlign:'center'
  },
  imagenew2: {
    width: "60%",
    height: "200px",
   
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
  footer: {
    backgroundColor: "red",
    marginTop: 20,
    padding: 30,
  },
  Dividerlinearfooter: {
    height: "5px",
    border: "2",
    background: "black",
    width: "40px",
    marginTop: 3,
  },
}));

export default function Home(props) {
  const classes = useStyle();

  return (
    <React.Fragment>
      <main>
       
       
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
                <Typography variant="title">
                  ความเป็นมาและวัตถุประสงค์
                </Typography>
                <br></br>
                <br></br>
                <Divider
                  className={classes.Dividerlinear1}
                  variant="fullWidth"
                />
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
                <Typography variant="title">
                  ความเป็นมาและวัตถุประสงค์
                </Typography>
                <br></br>
                <br></br>
                <Divider
                  className={classes.Dividerlinear1}
                  variant="fullWidth"
                />
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
                <Divider
                  className={classes.Dividerlinear1}
                  variant="fullWidth"
                />
              </div>
              <br></br>
              <br></br>
              <div>
                <Typography>ฝ่ายวิจัยและการถ่ายทอดเทคโนโลยี</Typography>
              </div>
            </Grid>
          </Grid>
        </Container>

       
      </main>
    </React.Fragment>
  );
}
