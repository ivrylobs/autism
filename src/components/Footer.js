import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import { Button, Grid, Paper } from "@material-ui/core";

import Divider from "@material-ui/core/Divider";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import FacebookIcon from "@material-ui/icons/Facebook";

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

    textAlign: "center",
  },
  iconfooter2: {
    color: "#EF5666",
    marginTop: "60px",
    textAlign: "center",
  },
  iconfooter3: {
    color: "#3AC7FD",
    marginTop: "60px",
    textAlign: "center",
  },
  contentfooter: {
    textAlign: "left",

    padding: 20,
  },
  CarditemAbotus: {
    marginTop: 50,
  },
  iconfooter: {
    textAlign: "center",
  },
  Typographyfacebookfooter: {
    marginTop: 50,
  },
}));

export default function Home(props) {
  const classes = useStyle();

  return (
    <React.Fragment>
      <main>
        <Container maxWidth="lg">
          <Grid container className={classes.CarditemAbotus} spacing={5}>
            <Grid item xs={4}>
              <Typography>สถาบันวิจัยและบริการด้านออทิซึม</Typography>
              <Typography>
                Research And Service Institute For Autism Khon Kaen University
              </Typography>
              <br></br>
              <Divider className={classes.Dividerlinear1} variant="fullWidth" />
              <br></br>
              <Typography variant="title">
                Research And Service Institute For Autism Khon Kaen University
                Research And Service Institute For Autism Khon Kaen University
                Research And Service Institute For Autism Khon Kaen University
              </Typography>
              <br></br>
              <Button variant="contained" className={classes.buttonaboutas}>
                บริจาค
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Typography>ติดต่อเรา</Typography>
              <Typography>Contact</Typography>
              <br></br>
              <Divider className={classes.Dividerlinear1} variant="fullWidth" />
              <img alt="logo" src="map.png" className={classes.mapgoogle} />
            </Grid>

            <Grid item xs={2} className={classes.iconfooter}>
              <LocationOnIcon
                fontSize="large"
                className={classes.iconfooter1}
              ></LocationOnIcon>
              <br></br>
              <AddIcCallIcon
                fontSize="large"
                className={classes.iconfooter2}
              ></AddIcCallIcon>
              <br></br>
              <FacebookIcon
                fontSize="large"
                className={classes.iconfooter3}
              ></FacebookIcon>
            </Grid>

            <Grid item xs={3} className={classes.contentfooter}>
              <div>
                <Typography>
                  สถาบันวิจัยและบริการด้านออทิซึม อาคารวิจัยเพื่อพัฒนาสังคม
                  (RSDI) มหาวิทยาลัยขอนแก่น เลขที่ 123 หมู่ที่ 16 ตำบลในเมือง
                  อำเภอเมืองขอนแก่น จังหวัดขอนแก่น 40002
                </Typography>
              </div>
              <div>
                <Typography>043-009-700 เบอร์ภายใน 50491, 50492</Typography>
              </div>
              <div className={classes.Typographyfacebookfooter}>
                <Typography>Privacy Policy</Typography>
                <Typography>Terms and Conditions</Typography>
                <Typography>
                  © 2021 สถาบันวิจัยและบริการด้านออทิซึม RSIA
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
