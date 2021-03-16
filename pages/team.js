import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "../src/Link";

import Typography from "@material-ui/core/Typography";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import Popper from "@material-ui/core/Popper";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyle = makeStyles((theme) => ({
  TeamContainer: {
    height: "auto",
    backgroundColor: "#fff",
    paddingBottom: 45,
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 0,
    },
  },
  BgContainer: {
    backgroundImage: `url(${"bgAboutus.png"})`,
    height: " auto",
    paddingTop: 656,
    backgroundSize: "100%",
    [theme.breakpoints.down("lg")]: {
      height: 555,
      paddingTop: 490,
    },
    [theme.breakpoints.down("md")]: {
      height: 410,
      paddingTop: 365,
    },
    [theme.breakpoints.down("sm")]: {
      height: 261,
      paddingTop: 239,
    },
    [theme.breakpoints.down("xs")]: {
      height: 138,
      paddingTop: 123,
    },
  },
  BlogContainer: {
    paddingBottom: 46,
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
      maxWidth: 350,
    },
  },

  buttonaboutas: {
    background: "#F26705",
    marginTop: "40px",
    width: "120px",
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
      textAlign: "left",
    },
  },
  aboutTypo2: {
    fontFamily: "Raleway",
    fontWeight: "bold",
    color: "#EF5666",
    [theme.breakpoints.down("lg")]: {
      fontSize: 28,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 6,
      textAlign: "left",
    },
  },
  aboutTypo3: {
    fontWeight: "bold",
    fontSize: 44,
    [theme.breakpoints.down("lg")]: {
      fontSize: 32,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 22,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      textAlign: "left",
    },
  },
  Griditem1: {
    marginTop: 25,
    paddingLeft: 0,
    [theme.breakpoints.down("lg")]: {
      marginTop: 84,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 34,
      
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 5,
   
    },
  },
  Griditem2: {
    marginTop: 50,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
     
    },
  },
  Griditem3: {
    marginTop: 76,
    [theme.breakpoints.down("md")]: {
      fontSize: 22,
      marginTop: 68,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      textAlign: "left",
      marginTop: 24
    },
  },
  Griditem4: {
    marginTop: 46,
    textAlign: "center"
  },
  Griditem5: {
    marginTop: 16,
    textAlign: "center"
  },
  Griditem6: {
    marginTop: 46,
    textAlign: "center"
  },
  Griditem7: {
    marginTop: 46,
    textAlign: "center"
  },
  Typography1: {
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
      textAlign: "left",
      paddingLeft: 16
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      textAlign: "left",
      paddingLeft: 16
    },
  },
  Typography2: {
    [theme.breakpoints.down("lg")]: {
      fontSize: 28,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      textAlign: "left",
      paddingLeft: 16
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 6,
      textAlign: "left",
      paddingLeft: 16
    },
  },
  logo: {
    width: 120,
    [theme.breakpoints.down("sm")]: {
      width: 86
    },
    [theme.breakpoints.down("xs")]: {
      width: 50
    },
  },
  Aboutmenu: {
    backgroundColor: "#EAA0A8",
    color: "#000",
    borderRadius: "3px",
    zIndex: 1302,
  },
  AboutmenuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 11
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },
  AboutMenu1: {
    paddingLeft: 132,
    [theme.breakpoints.down("lg")]: {
      paddingLeft: 104,
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: 30,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 8,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },
  nav: {
    paddingLeft: 0,
  }
}));

export default function Home(props) {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openAbout, setOpenAbout] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenAbout(true);
  };

  const handleAboutItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenAbout(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenAbout(false);
  };

  const aboutMenuOptions = [
    {
      name: "ทำเนียบบุคลากร",
      link: "/team",
      selectedIndex: 0,
    },
    {
      name: "ความเป็นมาและวัตถุประสงค์",
      link: "/aboutus",
      selectedIndex: 1,
    },
    {
      name: "หน่วยงานที่เกี่ยวข้อง",
      link: "/related",
      selectedIndex: 2,
    },
  ];

  return (
    <React.Fragment>
      <main>
        <Header></Header>
        <Grid container className={classes.TeamContainer}>
          <Container maxWidth="xl" className={classes.BlogContainer}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.BgContainer}
              >
                <Typography variant="h1" className={classes.aboutTypo1}>
                  เกี่ยวกับเรา
                </Typography>
                <Typography variant="h4" className={classes.aboutTypo2}>
                  ABOUT US
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.Griditem1}
              >
                <Button
                  endIcon={<ExpandMoreIcon />}
                  variant="text"
                  className={classes.nav}
                  aria-controls="about-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  size="large"
                >
                  <Typography variant="h3" className={classes.aboutTypo3}>
                    ทำเนียบบุคลากร
                  </Typography>
                </Button>
                <Popper
                  open={openAbout}
                  anchorEl={anchorEl}
                  role={undefined}
                  transition
                  disablePortal
                  className={classes.AboutMenu1}
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin: placement === "top left",
                      }}
                    >
                      <Paper className={classes.Aboutmenu} elevation={0}>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            id="about-menu"
                            disablePadding
                            autoFocusItem={false}
                          >
                            {aboutMenuOptions.map((option, i) => (
                              <MenuItem
                                key={`${option}${i}`}
                                component={Link}
                                href={option.link}
                                className={classes.AboutmenuItem}
                                selected={i === selectedIndex}
                                onClick={(event) => {
                                  handleAboutItemClick(event, i);
                                  
                                  handleClose();
                                }}
                              >
                                {option.name}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Grid>
              <Grid
                item
                xs={2}
                sm={2}
                md={2}
                lg={2}
                xl={2}
                className={classes.Griditem2}
              >
                <img alt="logo" src="logo.png" className={classes.logo} />
              </Grid>

              <Grid
                item
                xs={10}
                sm={10}
                md={10}
                lg={10}
                xl={10}
                className={classes.Griditem3}
              >
                <Typography variant="h3" className={classes.Typography1}>
                  สถาบันวิจัยและบริการด้านออทิซึม
                </Typography>
                <Typography variant="h4" className={classes.Typography2}>
                  Research And Service Institute For Autism Khon Kaen University
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.Griditem4}>
                <img alt="person1" src="person1.png" className={classes.df} />
                <Typography>ศ. เกียรติคุณ นพ. สุชาติ พหลภาคย์</Typography>
                <Typography>Suchat Paholpak</Typography>
                <Typography>ที่ปรึกษา</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.Griditem4}>
                <img alt="logo" src="person2.png" className={classes.df} />
                <Typography>นายบุรี เสรีโยธิน</Typography>
                <Typography>Buree Seriyothin</Typography>
                <Typography>ที่ปรึกษา</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.Griditem5}>
                <img alt="logo" src="person3.png" className={classes.df} />
                <Typography>รศ. ดร. ปิยะววรณ ศรีสุรักษ์</Typography>
                <Typography>Piyawan Srisuruk</Typography>
                <Typography>รักษาการแทนผู้อำนวยการ</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className={classes.Griditem6}>
                <img alt="logo" src="person4.png" className={classes.df} />
                <Typography>นางพรมณี หาญหัก</Typography>
                <Typography>Pronmanee Hanhak</Typography>
                <Typography>กรรมการและเลขานุการ</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className={classes.Griditem6}>
                <img alt="logo" src="person5.png" className={classes.df} />
                <Typography>นางปริศนา อานจำปา</Typography>
                <Typography>Prison Anjumpa</Typography>
                <Typography>ผู้ช่วยเลขานุการ</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className={classes.Griditem6}>
                <img alt="logo" src="person6.png" className={classes.df} />
                <Typography>ดร. ธิรากร มณีรัตน์</Typography>
                <Typography>Thirakorn Maneerat</Typography>
                <Typography>กรรมการ</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className={classes.Griditem6}>
                <img alt="logo" src="person7.png" className={classes.df} />
                <Typography>ผศ.พญ. กุศลาภร์ ชัยอุดมสม</Typography>
                <Typography>Kusalaporn Chaiudomsom</Typography>
                <Typography>กรรมการ</Typography>
              </Grid>
              <Grid item xs={6} sm={4} md={4} lg={4} xl={2} className={classes.Griditem7}>
                <img alt="logo" src="person8.png" className={classes.df} />
                <Typography>จิตรา โซ่เมืองแซะ</Typography>
                <Typography>Jittra Shomuangshae</Typography>
                <Typography>งานวิชาการและบริการ</Typography>
              </Grid>
              <Grid item xs={6} sm={4} md={4} lg={4} xl={2} className={classes.Griditem7}>
                <img alt="logo" src="person9.png" className={classes.df} />
                <Typography>จิราภรณ์ ต่างสมบัติ</Typography>
                <Typography>Jiraporn Tangsombut</Typography>
                <Typography>งานวิชาการและบริการ</Typography>
              </Grid>
              <Grid item xs={6} sm={4} md={4} lg={4} xl={2} className={classes.Griditem7}>
                <img alt="logo" src="person10.png" className={classes.df} />
                <Typography>วรรณภา เรืองจันทร์</Typography>
                <Typography>Wannapa Ruengjan</Typography>
                <Typography>งานวิชาการและบริการ</Typography>
              </Grid>
              <Grid item xs={6} sm={4} md={4} lg={4} xl={2} className={classes.Griditem7}>
                <img alt="logo" src="person11.png" className={classes.df} />
                <Typography>ธัญญรัตน์ จันทร์แสง</Typography>
                <Typography>Thanyarat Chanseang</Typography>
                <Typography>งานวิชาการและบริการ</Typography>
              </Grid>
              <Grid item xs={6} sm={4} md={4} lg={4} xl={2} className={classes.Griditem7}>
                <img alt="logo" src="person12.png" className={classes.df} />
                <Typography>นิษฐเนตร์ กาสีชา</Typography>
                <Typography>Nitthanate Kasicha</Typography>
                <Typography>งานการเงินและงบประมาณ</Typography>
              </Grid>
              <Grid item xs={6} sm={4} md={4} lg={4} xl={2} className={classes.Griditem7}>
                <img alt="logo" src="person13.png" className={classes.df} />
                <Typography>ชนิดา ศรีมาพล</Typography>
                <Typography>Chanida Srimapol</Typography>
                <Typography>งานพัสดุและธุรการ</Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Footer></Footer>
      </main>
    </React.Fragment>
  );
}
