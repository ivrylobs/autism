import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import Link from "../../src/Link";

import Typography from "@material-ui/core/Typography";
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

const useStyles = makeStyles((theme) => ({
  RelatedContainer: {
    height: "auto",
    backgroundColor: "#fff",
    paddingBottom: 45,
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
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
  grid1: {
    padding: 5,
  },
  Typography1: {
    color: "#EF5666",
  },
  aboutTypo1: {
    [theme.breakpoints.down("lg")]: {
      fontSize: 60,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 42,
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
      fontSize: 14,
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
  aboutBox: {
    paddingTop: 5,
    [theme.breakpoints.down("lg")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: 5,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
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
    marginTop: 25,
    [theme.breakpoints.down("sm")]: {
      marginTop: 5,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },
  Griditem3: {
    marginTop: 25,
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
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
  const classes = useStyles(props);
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
      name: "หน่วยงานที่เกี่ยวข้อง",
      link: "/related",
      selectedIndex: 0,
    },
    {
      name: "ความเป็นมาและวัตถุประสงค์",
      link: "/about",
      selectedIndex: 1,
    },
    {
      name: "ทำเนียบบุคลากร",
      link: "/team",
      selectedIndex: 2,
    },
  ];

  return (
    <React.Fragment>
      <main>
        <Header></Header>
        <Grid container className={classes.RelatedContainer}>
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
                    หน่วยงานที่เกี่ยวข้อง
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
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={classes.Griditem2}
              >
                <Typography
                  align="left"
                  variant="h6"
                  className={classes.aboutBox}
                >
                  • ฝ่ายวิจัยและการถ่ายทอดเทคโนโลยี
                </Typography>
                <Typography
                  align="left"
                  variant="h6"
                  className={classes.aboutBox}
                >
                  • คณะแพทยศาสตร์ มหาวิทยาลัยขอนแก่น
                </Typography>
                <Typography
                  align="left"
                  variant="h6"
                  className={classes.aboutBox}
                >
                  • คณะศึกษาศาสตร์ มหาวิทยาลัยขอนแก่น
                </Typography>
                <Typography
                  align="left"
                  variant="h6"
                  className={classes.aboutBox}
                >
                  • คณะพยาบาลศาสตร์ มหาวิทยาลัยขอนแก่น
                </Typography>
                <Typography
                  align="left"
                  variant="h6"
                  className={classes.aboutBox}
                >
                  • คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น
                </Typography>
                <Typography
                  align="left"
                  variant="h6"
                  className={classes.aboutBox}
                >
                  • โรงเรียนสาธิตมอดินแดง มหาวิทยาลัยขอนแก่น
                </Typography>
                <Typography
                  align="left"
                  variant="h6"
                  className={classes.aboutBox}
                >
                  • โรงเรียนสาธิตศึกษาศาสตร์ มหาวิทยาลัยขอนแก่น
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={classes.Griditem3}
              >
                <Typography
                  align="left"
                  variant="h6"
                  className={classes.aboutBox}
                >
                  • โรงพยาบาลศรีนครินทร์
                </Typography>
                <Typography
                  align="left"
                  variant="h6"
                  className={classes.aboutBox}
                >
                  • โรงพยาบาลขอนแก่น
                </Typography>
                <Typography
                  align="left"
                  variant="h6"
                  className={classes.aboutBox}
                >
                  • สมาคมผู้ปกครองออทิซึม
                </Typography>
                <Typography
                  align="left"
                  variant="h6"
                  className={classes.aboutBox}
                >
                  • มูลนิธิขอบฟ้ากว้าง
                </Typography>
                <Typography
                  align="left"
                  variant="h6"
                  className={classes.aboutBox}
                >
                  • ศูนย์พัฒนาศักยภาพบุคคลออทิสติกจังหวัดขอนแก่น
                </Typography>
                <Typography
                  align="left"
                  variant="h6"
                  className={classes.aboutBox}
                >
                  • ศูนย์การศึกษาพิเศษ เขตการศึกษา 9 จังหวัดขอนแก่น
                </Typography>
                <Typography
                  align="left"
                  variant="h6"
                  className={classes.aboutBox}
                >
                  • สถาบันสุขภาพจิตเด็กและวัยรุ่นภาคตะวันออกเฉียงเหนือ
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Footer></Footer>
      </main>
    </React.Fragment>
  );
}
