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
  grid1:{
      padding: 5,
  },
  Typography1:{
      color:'#EF5666'
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
          <Typography variant='h3'>เกี่ยวกับเรา</Typography>

          <Typography className={classes.Typography1}>ABOUT US</Typography>
          <br></br>
          <Typography variant='h5'>หน่วยงานที่เกี่ยวข้อง</Typography>
        </Container>

        <Container maxWidth="lg" className={classes.Containeraboutus}>
          <Grid container >
            <Grid item xs={6} className={classes.grid1}>
              <Typography>•  ฝ่ายวิจัยและการถ่ายทอดเทคโนโลยี</Typography>
              <Typography>• คณะแพทยศาสตร์ มหาวิทยาลัยขอนแก่น</Typography>
              <Typography>• คณะศึกษาศาสตร์ มหาวิทยาลัยขอนแก่น</Typography>
              <Typography>• คณะพยาบาลศาสตร์ มหาวิทยาลัยขอนแก่น</Typography>
              <Typography>• คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น</Typography>
              <Typography>
                • โรงเรียนสาธิตมอดินแดง มหาวิทยาลัยขอนแก่น
              </Typography>
              <Typography>
                • โรงเรียนสาธิตศึกษาศาสตร์ มหาวิทยาลัยขอนแก่น
              </Typography>
            </Grid>

            <Grid item xs={6} className={classes.grid1}>
              <Typography>• โรงพยาบาลศรีนครินทร์</Typography>
              <Typography>• โรงพยาบาลขอนแก่น</Typography>
              <Typography>• สมาคมผู้ปกครองออทิซึม</Typography>
              <Typography>• มูลนิธิขอบฟ้ากว้าง</Typography>
              <Typography>
                • ศูนย์พัฒนาศักยภาพบุคคลออทิสติกจังหวัดขอนแก่น
              </Typography>
              <Typography>
                • ศูนย์การศึกษาพิเศษ เขตการศึกษา 9 จังหวัดขอนแก่น
              </Typography>
              <Typography>
                • สถาบันสุขภาพจิตเด็กและวัยรุ่นภาคตะวันออกเฉียงเหนือ
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Footer></Footer>
      </main>
    </React.Fragment>
  );
}
