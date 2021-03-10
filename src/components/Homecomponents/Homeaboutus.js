import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import { Button, Grid, Paper } from "@material-ui/core";

import Divider from "@material-ui/core/Divider";

const useStyle = makeStyles((theme) => ({
  AboutContainer: {
    backgroundColor: "#fff",
    height: "auto",
    backgroundSize: "100%",
    paddingTop: 15,
    [theme.breakpoints.down("lg")]: {
      paddingTop: 48,
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: 30,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
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
  Dividerlinear1: {
    width: 30,
    height: 15,
    border: 2,
    background: "#B1BE12",
    marginTop: 0,
    [theme.breakpoints.down("xl")]: {
      height: 10,
    width: 60
    },
    [theme.breakpoints.down("md")]: {
      height: 8,
    width: 40
    },
    [theme.breakpoints.down("sm")]: {
      height: 6,
    width: 48
    },
    [theme.breakpoints.down("xs")]: {
      height: 5,
    marginTop: 5,
    width: 30
    },
  },

  CarditemAbotus: {
    paddingTop: 34,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0
    },
  },
  paperabout1: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F5F5F5",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: 250,
    },
  },
  paperabout2: {
    width: "100%",
    height: 150,
    backgroundColor: "#F5F5F5",
    [theme.breakpoints.down("lg")]: {
      
    },
    [theme.breakpoints.down("md")]: {
      height: 120,
    },
    [theme.breakpoints.down("sm")]: {
      
    },
    [theme.breakpoints.down("xs")]: {
      height: 220,
    },
  },
  paperabout3: {
    padding: 5,
    [theme.breakpoints.down("lg")]: {
      
    },
    [theme.breakpoints.down("md")]: {
      
    },
    [theme.breakpoints.down("sm")]: {
     padding: 20
    },
    [theme.breakpoints.down("xs")]: {
     
      padding: 20
    },
  },
  GridPaper: {
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      padding: 20
     },
    [theme.breakpoints.down("xs")]: {
      padding: 40,
      paddingBottom: 10,
      paddingTop: 15
    },
  },
  buttonMore: {
    background: "#DBE0A5",
    color: "#fff",
    width: 190,
    fontSize: 24,
    marginTop: "auto",
    [theme.breakpoints.down("md")]: {
      width: 150,
      fontSize: 20,
    },
    [theme.breakpoints.down("sm")]: {
      width: 96,
      height: 30,
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      width: 80,
      height: 25,
      fontSize: 10,
    },
  },
  our: {
    color: "#B1BE12",
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      textAlign: "center"
    },
  },
  info: {
    color: "#B1BE12",
    fontWeight: 700,
    paddingTop: 10,
    [theme.breakpoints.down("lg")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 5,
      fontSize: 14,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 15,
      fontSize: 12,
    },
  },
  us: {
    fontFamily: "Raleway",
    fontWeight: "bold",
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 6,
      textAlign: "center"
    },
  },
  TypoSpace: {
    textIndent: 20,
    paddingTop: 11,
    paddingBottom: 15,
      fontSize: 24,
      [theme.breakpoints.down("lg")]: {
        fontSize: 20,
      },
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 5,
      fontSize: 12,
    },
    [theme.breakpoints.down("xs")]: {
      
    },
  },
  AboutMid: {
    padding: 5,
    paddingLeft: 35,
    paddingRight: 18,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20,
    },
    [theme.breakpoints.down("xs")]: {
      paddding: 10,
    },
  },
  alignButton: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center"
    },
  }
}));

export default function Home(props) {
  const classes = useStyle();

  return (
    <React.Fragment>
      <main>
        <Grid container className={classes.AboutContainer}>
          <Container maxWidth="xl" className={classes.BlogContainer}>
            <Grid container className={classes.CarditemAbotus}>
              <Grid item xs={12} sm={6} md={6} lg={5} xl={6} className={classes.GridPaper}>
                <Paper className={classes.paperabout1}></Paper>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={5}
                xl={4}
                className={classes.AboutMid}
              >
                <div>
                  <Typography variant="h2" className={classes.our}>
                    เกี่ยวกับเรา
                  </Typography>

                  <Typography variant="h5" className={classes.us}>
                    ABOUT US
                  </Typography>
                  <Typography variant="h5" className={classes.info}>
                    ความเป็นมาและวัตถุประสงค์
                  </Typography>
                  <Divider className={classes.Dividerlinear1} />
                </div>
                <br></br>

                <Typography className={classes.TypoSpace}>
                  สถาบันวิจัยและบริการด้านออทิซึม สำนักงานอธิการบดี
                  มหาวิทยาลัยขอนแก่นได้รับอนุมัติขึ้นตามข้อสั่งการของนายกรัฐมนตรี
                  พลเอกประยุทธ์ จันทร์โอชา ณ วันที่ 21 มิถุนายน 2560
                  เป็นหน่วยงานสนับสนุนภารกิจและยุทธศาสตร์ของมหาวิทยาลัย
                  ขอนแก่นในการดูแลบุคคลออทิซึม
                </Typography>
                <div className={classes.alignButton}>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.buttonMore}
                >
                  เพิ่มเติม
                </Button>
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={2}
                lg={2}
                xl={2}
            
              >
                <Grid container>
                  <Grid item xs={12} sm={6} md={12} lg={12} xl={12} className={classes.paperabout3}>
                    <Paper className={classes.paperabout2}></Paper>
                    <Typography variant="h5" className={classes.info}>
                      ทำเนียบบุคลากร
                    </Typography>
                    <Divider className={classes.Dividerlinear1} />
                    <Typography className={classes.TypoSpace}>
                      เพื่อให้บริการแก่บุคคลออทิซึมให้ได้รับบริการอย่างทั่วถึงและครอบคลุมในทุกด้าน
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6} md={12} lg={12} xl={12} className={classes.paperabout3}>
                    <Paper className={classes.paperabout2}></Paper>
                    <Typography variant="h5" className={classes.info}>
                      หน่วยงานที่เกียวข้อง
                    </Typography>
                    <Divider className={classes.Dividerlinear1} />

                    <Typography className={classes.TypoSpace}>
                      ฝ่ายวิจัยและการถ่ายทอดเทคโนโลยี คณะแพทยศาสตร์
                      มหาวิทยาลัยขอนแก่น
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </main>
    </React.Fragment>
  );
}
