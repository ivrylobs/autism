import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import Container from "@material-ui/core/Container";
import { Button, Grid, Paper } from "@material-ui/core";

import Divider from "@material-ui/core/Divider";

const useStyle = makeStyles((theme) => ({
  Paper1: {
    width: "100%",
    height: "500px",
    backgroundColor: "grey",
  },
  Containeraboutus: {
    marginTop: 20,
  },
  logo: {
    maxHeight: 120,
    marginLeft: "40px",
  },
  Gridcontainer3: {
    marginTop: 30,
    marginLeft: 30,
  },
  Paperperson: {
    borderColor: "#ED9B61",
    height: "auto",
    borderWidth: 5,
    marginTop: 10,
    textAlign: "center",
    margin: 5,
    padding: 20,
  },
  Paperperson3: {
    marginTop: 50,
  },
  Paperperson4: {
    marginTop: 50,
  },
  Paperperson5: {
    marginTop: 50,
  },
  Typography1: {
    color: "#EF5666",
  },
  Dividerlinear1: {
    height: "5px",
    border: "2",
    background: "black",
    width: "40px",
  },
  buttonaboutas: {
    background: "#F26705",
    marginTop: "40px",
    width: "120px",
  },
  mapgoogle: {
    marginTop: 20,
  },
  iconfooter1: {
    color: "#B1BE12",
   
    textAlign:'center',
  },
  iconfooter2: {
    color: "#EF5666",
marginTop:'60px',
    textAlign:'center',
  },
  iconfooter3: {
    color: "#3AC7FD",
    marginTop:'60px',
    textAlign:'center',
  },
  contentfooter:{
    textAlign:'left',
    
 
 padding:20
  },
  CarditemAbotus:{
    marginTop: 50
  },
  iconfooter:{
    textAlign:'center',
  },
  Typographyfacebookfooter:{
    marginTop: 50
  }
}));

export default function Home(props) {
  const classes = useStyle();

  return (
    <React.Fragment>
      <main>
        <Header></Header>
        <Container maxWidth="lg" className={classes.Containeraboutus}>
          <Paper className={classes.Paper1}>image</Paper>
        </Container>

        <Container maxWidth="lg" className={classes.Containeraboutus}>
          <Typography variant="h3">เกี่ยวกับเรา</Typography>

          <Typography className={classes.Typography1}>ABOUT US</Typography>
          <br></br>
          <Typography variant="h5">ทำเนียบบุคลากร</Typography>
        </Container>

        <Container maxWidth="lg" className={classes.Containeraboutus}>
          <Grid container className={classes.Gridcontainer2}>
            <Grid item xs={2}>
              <img alt="logo" src="logo.png" className={classes.logo} />
            </Grid>

            <Grid item xs={9} className={classes.Gridcontainer3}>
              <Typography variant="h5" className={classes.Typography1}>
                สถาบันวิจัยและบริการด้านออทิซึม
              </Typography>
              <Typography variant="h7" className={classes.Typography2}>
                Research And Service Institute For Autism Khon Kaen University
              </Typography>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="lg">
          <Paper variant="outlined" square className={classes.Paperperson}>
            <Grid container className={classes.Paperperson}>
              <Grid item xs={6}>
                <img alt="person1" src="person1.png" className={classes.df} />
                <br></br>
                <Typography>ศ. เกียรติคุณ นพ. สุชาติ พหลภาคย์</Typography>
                <Typography>Suchat Paholpak</Typography>
                <Typography>ที่ปรึกษา</Typography>
              </Grid>

              <Grid item xs={6}>
                <img alt="logo" src="person2.png" className={classes.df} />
                <br></br>
                <Typography>นายบุรี เสรีโยธิน</Typography>
                <Typography>Buree Seriyothin</Typography>
                <Typography>ที่ปรึกษา</Typography>
              </Grid>
            </Grid>

            <Grid container className={classes.Paperperson2}>
              <Grid item xs={12}>
                <img alt="logo" src="person3.png" className={classes.df} />
                <br></br>
                <Typography>รศ. ดร. ปิยะววรณ ศรีสุรักษ์</Typography>
                <Typography>Piyawan Srisuruk</Typography>
                <Typography>รักษาการแทนผู้อำนวยการ</Typography>
              </Grid>
            </Grid>

            <Grid container className={classes.Paperperson3}>
              <Grid item xs={3}>
                <img alt="logo" src="person4.png" className={classes.df} />
                <br></br>
                <Typography>นางพรมณี หาญหัก</Typography>
                <Typography>Pronmanee Hanhak</Typography>
                <Typography>กรรมการและเลขานุการ</Typography>
              </Grid>

              <Grid item xs={3}>
                <img alt="logo" src="person5.png" className={classes.df} />
                <br></br>
                <Typography>นางปริศนา อานจำปา</Typography>
                <Typography>Prison Anjumpa</Typography>
                <Typography>ผู้ช่วยเลขานุการ</Typography>
              </Grid>

              <Grid item xs={3}>
                <img alt="logo" src="person6.png" className={classes.df} />
                <br></br>
                <Typography>ดร. ธิรากร มณีรัตน์</Typography>
                <Typography>Thirakorn Maneerat</Typography>
                <Typography>กรรมการ</Typography>
              </Grid>

              <Grid item xs={3}>
                <img alt="logo" src="person7.png" className={classes.df} />
                <br></br>
                <Typography>ผศ.พญ. กุศลาภร์ ชัยอุดมสม</Typography>
                <Typography>Kusalaporn Chaiudomsom</Typography>
                <Typography>กรรมการ</Typography>
              </Grid>
            </Grid>

            <Grid container className={classes.Paperperson4}>
              <Grid item xs={4}>
                <img alt="logo" src="person8.png" className={classes.df} />
                <br></br>
                <Typography>จิตรา โซ่เมืองแซะ</Typography>
                <Typography>Jittra Shomuangshae</Typography>
                <Typography>งานวิชาการและบริการ</Typography>
              </Grid>

              <Grid item xs={4}>
                <img alt="logo" src="person9.png" className={classes.df} />
                <br></br>
                <Typography>จิราภรณ์ ต่างสมบัติ</Typography>
                <Typography>Jiraporn Tangsombut</Typography>
                <Typography>งานวิชาการและบริการ</Typography>
              </Grid>

              <Grid item xs={4}>
                <img alt="logo" src="person10.png" className={classes.df} />
                <br></br>
                <Typography>วรรณภา เรืองจันทร์</Typography>
                <Typography>Wannapa Ruengjan</Typography>
                <Typography>งานวิชาการและบริการ</Typography>
              </Grid>
            </Grid>

            <Grid container className={classes.Paperperson5}>
              <Grid item xs={4}>
                <img alt="logo" src="person11.png" className={classes.df} />
                <br></br>
                <Typography>ธัญญรัตน์ จันทร์แสง</Typography>
                <Typography>Thanyarat Chanseang</Typography>
                <Typography>งานวิชาการและบริการ</Typography>
              </Grid>

              <Grid item xs={4}>
                <img alt="logo" src="person12.png" className={classes.df} />
                <br></br>
                <Typography>นิษฐเนตร์ กาสีชา</Typography>
                <Typography>Nitthanate Kasicha</Typography>
                <Typography>งานการเงินและงบประมาณ</Typography>
              </Grid>

              <Grid item xs={4}>
                <img alt="logo" src="person13.png" className={classes.df} />
                <br></br>
                <Typography>ชนิดา ศรีมาพล</Typography>
                <Typography>Chanida Srimapol</Typography>
                <Typography>งานพัสดุและธุรการ</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      <Footer></Footer>
       
      </main>
    </React.Fragment>
  );
}
