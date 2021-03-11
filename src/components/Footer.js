import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Button, Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyle = makeStyles((theme) => ({
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
  FooterTypo1: {
    [theme.breakpoints.down("lg")]: {
      fontSize: 24
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 24
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 19
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 24
    },

  },
  FooterTypo2: {
    fontFamily: "Raleway",
    color: "#000",
    fontWeight: "bold",
    [theme.breakpoints.down("lg")]: {
      fontSize: 10
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 10
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 8
    },
  },
  boxText: {
    textIndent: 20,
    [theme.breakpoints.down("lg")]: {
      fontSize: 12
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 10
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 10
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 8
    },
  },

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
  Dividerlinear1: {
    height: "5px",
    border: "2",
    background: "black",
    width: "40px",
  },
  button: {
    ...theme.typography.tab,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: 700,
    height: 45,
    color: "white",
    marginTop: 60,
    [theme.breakpoints.down("sm")]: {
      height: 35,
      fontSize: 16,
      marginTop: 22
      
    },
    [theme.breakpoints.down("xs")]: {
      width: 65,
      height: 25,
      fontSize: 9,
      marginLeft: 0,
    },
  },
  mapgoogle: {
    marginTop: 20,
    width: "100%"
  },
  iconfooter1: {
    color: "#B1BE12",
    fontSize: 55,
    textAlign: "center",
  },
  iconfooter2: {
    fontSize: 55,
    color: "#EF5666",
    marginTop: "60px",
    textAlign: "center",
  },
  iconfooter3: {
    fontSize: 55,
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
    marginTop: 70,
    display: "grid",
    [theme.breakpoints.down("sm")]: {
      marginTop: 85,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 70,
    },
  },
  
  phoneNumber: {
    marginTop: 50,
    [theme.breakpoints.down("lg")]: {
      fontSize: 14
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 12
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
      marginTop: 85,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 8
    },
  },
  FooterContact: {
    textIndent: 20,
    [theme.breakpoints.down("lg")]: {
      fontSize: 14
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 12
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 10
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 8
    },
  }
  
}));

export default function Home(props) {
  const classes = useStyle();

  return (
    <React.Fragment>
      <main>
        <Container maxWidth="xl" className={classes.BlogContainer}>
          <Grid container className={classes.CarditemAbotus} spacing={5}>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Typography className={classes.FooterTypo1} variant="h4">
                สถาบันวิจัยและบริการด้านออทิซึม
              </Typography>
              <Typography className={classes.FooterTypo2} variant="caption">
                Research And Service Institute For Autism Khon Kaen University
              </Typography>
              <br></br>
              <Divider className={classes.Dividerlinear1} variant="fullWidth" />
              <br></br>
              <Typography className={classes.boxText} variant="subtitle2">
                สถาบันวิจัยและบริการด้านออทิซึม สำนักงานอธิการบดี
                มหาวิทยาลัยขอนแก่น ได้รับอนุมัติขึ้นตามข้อสั่งการของนายกรัฐมนตรี
                พลเอกประยุทธ์ จันทร์โอชา ณ วันที่ 21 มิถุนายน 2560
                เป็นหน่วยงานสนับสนุนภารกิจและยุทธศาสตร์ของมหาวิทยาลัยขอนแก่น
                ในการดูแลบุคคลออทิซึมให้สามารถช่วยเหลือตนเองและอยู่ร่วมกับสังคมอย่างมีความสุข
                ตามยุทธศาสตร์ชาติ 20 ปี ยุทธศาสตร์ที่ 4
                การสร้างโอกาสและความเสมอภาคทางสังคม
                และแผนพัฒนาเศรษฐกิจและสังคมแห่งชาติ ฉบับที่ 12 พ.ศ.2560-2564
              </Typography>
              <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<ArrowRightIcon />}
            >
              บริจาค
            </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <Typography className={classes.FooterTypo1} variant="h4">ติดต่อเรา</Typography>
              <Typography className={classes.FooterTypo2} variant="caption">Contact</Typography>
              <Divider className={classes.Dividerlinear1} variant="fullWidth" />
              <img alt="logo" src="map.png" className={classes.mapgoogle} />
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={2} xl={2} className={classes.iconfooter}>
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

            <Grid item xs={6} sm={6} md={6} lg={3} xl={3} className={classes.contentfooter}>
              <div>
                <Typography className={classes.FooterContact} variant="subtitle1">
                  สถาบันวิจัยและบริการด้านออทิซึม อาคารวิจัยเพื่อพัฒนาสังคม
                  (RSDI) มหาวิทยาลัยขอนแก่น เลขที่ 123 หมู่ที่ 16 ตำบลในเมือง
                  อำเภอเมืองขอนแก่น จังหวัดขอนแก่น 40002
                </Typography>
              </div>
             
                <Typography className={classes.phoneNumber} variant="subtitle1">043-009-700 เบอร์ภายใน 50491, 50492</Typography>
             
              <div className={classes.Typographyfacebookfooter}>
                <Typography variant="caption">Privacy Policy</Typography>
                <Typography variant="caption">Terms and Conditions</Typography>
                <Typography variant="caption">
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
