import React from "react";
import ReactPlayer from 'react-player/youtube'
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Button, Grid, Paper } from "@material-ui/core";


const useStyle = makeStyles((theme) => ({
  WorkContainer: {
    backgroundColor: "#fff",
    height: "auto",
    backgroundSize: "100%",
    paddingTop: 46,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 10,
    },
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
  WorkTypo4: {
    paddingTop: 12,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    [theme.breakpoints.down("lg")]: {
      paddingTop: 37,
      fontSize: 20
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: 12,
      fontSize: 18
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 10
    },
    [theme.breakpoints.down("xs")]: {
     
    },
  },
  WorkTypo3: {
    color: "#000",
    textIndent: 20,
    paddingRight: 26,
    fontSize: 24,
    [theme.breakpoints.down("lg")]: {
      fontSize:20,
    },
    [theme.breakpoints.down("md")]: {
      fontSize:13,
      paddingRight: 12,
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: 0,
      textIndent: 47,
      
    },
  },
  WorkTypo2: {
    fontFamily: "Raleway",
    color: "#000",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 6,
      textAlign: "center"
    },
  },
  WorkTypo1: {
    color: "#EF5666",
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

  paperVideo: {
    width: "100%",
    height: 498,
    backgroundColor: "#F5F5F5",
    [theme.breakpoints.down("md")]: {
      height: 356,
    },
    [theme.breakpoints.down("sm")]: {
      height: 339,
    },
    [theme.breakpoints.down("xs")]: {
      height: 225,
    },
  },
  buttonMore: {
    background: "#EAA0A8",
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
  BTalign: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      marginBottom: 20
    },
    VideoCard: {
      width: "100%"
    }
   
  }
}));

export default function Home(props) {
  const classes = useStyle();

  return (
    <React.Fragment>
      <main>
        <Grid container className={classes.WorkContainer}>
          <Container maxWidth="xl" className={classes.BlogContainer}>
            <Grid container className={classes.CarditemAbotus}>
              <Grid item xs={12} sm={6} md={5} lg={5} xl={5}>
                <div>
                  <Typography variant="h2" className={classes.WorkTypo1}>
                    งานของเรา
                  </Typography>

                  <Typography variant="h5" className={classes.WorkTypo2}>
                    OUR WORK
                  </Typography>
                </div>
                <br></br>
                <div>
                  <Typography className={classes.WorkTypo3}>
                    การพัฒนาสัตกรรมสำหรับการช่วยเหลือบุตตลที่มีภาวะออทึซึมสเปกตรัมที่สอดคล้องกับบริบททางสังคมไทนตาม
                    4 กลไลหลักของออทิซึม สเปกตรัมโรดแมป มี
                    วัตถุประสงค์ตั้งแต่การคิดค้นหาวิธีการคัดกรอองเด็กเล็กที่มีอาการที่เสียงต่อการเป็นโรคออทึซึมสเปกตรัม
                  </Typography>
                </div>
                <br></br>
                <div>
                  <Typography className={classes.WorkTypo3}>
                    จนถึงค้นหาวิธีการดูแลผู้ป่วยที่เป็นโรคออทิซึมสเปกตรัมตั้งแต่อายุน้อยถึวัยรุ่น
                    ผู้ป่วยที่เป็นเด็กอายุน้อยแผนการวิจัยก็คิดค้นวิธีการให้การศึกษาเพื่อ
                    ให้การศึกษาก้าวหน้า
                    ผู้ป่วยที่เป็นวัยรุ่นแผนการวิจัยก็คิดต้นหาวิธีการส่งเสริมให้ครอบครัวมีวิธีส่งเสริมให้วัยรุ่นมีทักษะทางสังคมที่ดีขึ้น
                    แผนการวิจัยจึงประกอบไปด้วยโครงการวิจัยย่อย 4 โครงการดังนี้
                  </Typography>
                </div>
                <br></br>
                <div className={classes.BTalign}>
                  <Button
                    variant="contained"
                    size="large"
                    className={classes.buttonMore}
                  >
                    เพิ่มเติม
                  </Button>
                </div>
              </Grid>

              <Grid item xs={12} sm={6} md={7} lg={7} xl={7}>
                <Paper className={classes.paperVideo}>
                <ReactPlayer
          url='https://www.youtube.com/watch?v=7hxRP5skmuw&t=326s'
          width='100%'
          height='100%'
        />
                </Paper>
                <Typography variant="h5" className={classes.WorkTypo4}>
                คิดได้คิดดี-แอปพลิเคชัน คัดกรองภาวะออทิซึมสเปกตรัมในเด็ก
                  </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </main>
    </React.Fragment>
  );
}
