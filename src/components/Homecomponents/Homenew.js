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
          <Grid container className={classes.itemnew}>
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

              <br></br>
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

              <br></br>
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

       
      </main>
    </React.Fragment>
  );
}
