import React, { useState } from "react";
import Header from "../../src/components/Header";
import Link from "../../src/Link";

import {
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Box,
} from "@material-ui/core";
import Footer from "../../src/components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  AboutContainer: {
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
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      textAlign: "left",
    },
  },
  aboutTypo4: {
    fontWeight: "bold",
    fontSize: 44,
    color: "white",
    paddingTop: 46,
    [theme.breakpoints.down("lg")]: {
      fontSize: 32,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
      paddingTop: 34,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      textAlign: "center",
      paddingTop: 0,
    },
  },
  aboutTypo5: {
    marginTop: 50,
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
    paddingLeft: 80,
    paddingRight: 80,
    [theme.breakpoints.down("lg")]: {
      fontSize: 24,
      paddingLeft: 105,
      paddingRight: 105,
      marginTop: 28,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 17,
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      paddingLeft: 106,
      paddingRight: 106,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
      textAlign: "center",
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 0,
    },
  },
  aboutTypo6: {
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
    paddingLeft: 80,
    paddingRight: 80,
    [theme.breakpoints.down("lg")]: {
      fontSize: 16,
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      textAlign: "center",
    },
  },
  aboutTypo7: {
    fontWeight: "bold",
    fontSize: 44,
    [theme.breakpoints.down("lg")]: {
      fontSize: 32,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 22,
      paddingBottom: 20,
      paddingBottom: 0,
      paddingLeft: 60,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
      paddingBottom: 8,
      paddingLeft: 0,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      textAlign: "left",
    },
  },
  aboutVision: {
    fontWeight: "bold",
    color: "#EF5666",
    marginTop: -175,
    [theme.breakpoints.down("lg")]: {
      marginTop: -165,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
      marginTop: -136,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
      textAlign: "center",
      marginTop: -95,
    },
  },
  aboutVision1: {
    marginTop: 1,
    paddingLeft: 125,
    paddingRight: 125,
    [theme.breakpoints.down("lg")]: {
      paddingLeft: 45,
      paddingRight: 45,
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: 66,
      paddingRight: 66,
      fontSize: 22,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      marginTop: 5,
      paddingLeft: 32,
      paddingRight: 32,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
      textAlign: "center",
      paddingLeft: 22,
      paddingRight: 22,
    },
  },
  aboutVision3: {
    fontWeight: "bold",
    color: "#EF5666",
    marginTop: -235,
    [theme.breakpoints.down("md")]: {
      marginTop: -174,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: -216,
      fontSize: 24,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
      textAlign: "center",
      marginTop: -168,
    },
  },
  aboutVision4: {
    marginTop: 15,
    paddingLeft: 120,
    paddingRight: 120,
    [theme.breakpoints.down("lg")]: {
      paddingLeft: 40,
      paddingRight: 40,
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: 46,
      paddingRight: 46,
      fontSize: 16,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 48,
      paddingRight: 48,
      fontSize: 18,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
      textAlign: "center",
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 1,
    },
  },

  Paper1: {
    width: "100%",
    height: "500px",
    backgroundColor: "grey",
  },
  container1: {
    marginTop: 40,
  },
  Paper2: {
    width: "100%",
    height: "560px",
    backgroundColor: "grey",
    marginTop: 40,
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
    paddingLeft: 60,
    marginTop: 75,
    [theme.breakpoints.down("lg")]: {
      marginTop: 123,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      paddingLeft: 0,
    },
  },
  Griditem3: {
    border: "20px",
    borderColor: "pink",
    textAlign: "center",
  },
  Griditem4: {
    paddingLeft: 60,
    marginTop: 30,
    [theme.breakpoints.down("lg")]: {
      marginTop: 10,
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      marginTop: 0,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      marginTop: 0,
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
    },
  },
  Griditem5: {
    paddingLeft: 60,
    marginTop: 30,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      marginTop: 0,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 26,
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      marginTop: 0,
    },
  },
  Griditem6: {
    marginTop: 30,
    [theme.breakpoints.down("lg")]: {
      marginTop: 63,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 22,
    },
    [theme.breakpoints.down("xs")]: {},
  },
  Paper3: {
    width: "100%",
    height: "150px",
    backgroundColor: "grey",
    marginTop: 40,
  },
  boxcontent: {
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 50,
    marginLeft: 250,
    marginRight: 250,
    borderRadius: 5,
    color: "white",
    [theme.breakpoints.down("lg")]: {
      marginLeft: 0,
      marginRight: 0,
      height: 400,
      padding: 132,
      paddingTop: 40,
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: 32,
      paddingBottom: 32,
      padding: 43,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      paddingTop: 32,
      padding: 3,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 30,
      paddingTop: 0,
      height: 208,
    },
  },
  box: {
    marginTop: 70,
    backgroundColor: "#EF5666",
    height: "340px",
    textAlign: "center",
    paddingTop: 80,
  },
  buttonbox: {
    marginTop: 80,
    borderRadius: 5,
    height: 76,
    backgroundColor: "#EF5666",
    color: "#fff",
    outlineColor: "#fff",
    border: "2px solid",
    marginBottom: 50,
    [theme.breakpoints.down("lg")]: {
      marginTop: 49,
      width: 435,
    },
    [theme.breakpoints.down("sm")]: {
      width: 240,
      height: 65,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 17,
      height: 50,
    },
  },
  Paper4: {
    width: "100%",
    height: "300px",
    backgroundColor: "grey",
  },
  imgabout: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("lg")]: {
      height: 250,
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  },
  imgabout1: {
    paddingTop: 20,
    width: "100%",
    height: "68%",
    [theme.breakpoints.down("lg")]: {
      height: "auto",
    },
    [theme.breakpoints.down("md")]: {
      padding: 66,
      paddingTop: 30,
      paddingBottom: 30,
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto%",
      padding: 16,
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  },
  imgabout3: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("lg")]: {
      marginTop: 49,
    },
    [theme.breakpoints.down("md")]: {
      padding: 66,
      paddingTop: 30,
      paddingBottom: 30,
      marginTop: 10,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 16,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 15,
    },
  },
  imgabout4: {
    marginTop: 20,
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("lg")]: {
      marginTop: 48,
    },
    [theme.breakpoints.down("md")]: {
      padding: 66,
      paddingTop: 30,
      paddingBottom: 30,
      marginTop: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
      padding: 16,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },
  imgVision1: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("lg")]: {
      paddingTop: 20,
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      paddingTop: 10,
    },
    [theme.breakpoints.down("xs")]: {},
  },
  imgVision2: {
    width: "100%",
    height: "auto",
    paddingTop: 0,
    [theme.breakpoints.down("lg")]: {
      height: 240,
      marginTop: 0,
    },
    [theme.breakpoints.down("md")]: {
      height: 206,
    },
    [theme.breakpoints.down("sm")]: {
      height: "fit-content",
      paddingTop: 0,
    },
    [theme.breakpoints.down("xs")]: {
      height: 175,
    },
  },
  Box2: {
    marginTop: 102,
    [theme.breakpoints.down("lg")]: {
      marginTop: 32,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 5,
    },
  },
  aboutBox: {
    textIndent: 83,
    paddingTop: 20,
    [theme.breakpoints.down("lg")]: {
      textIndent: 55,
      fontSize: 16,
    },
    [theme.breakpoints.down("md")]: {
      textIndent: 66,
      paddingTop: 5,
      fontSize: 16,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("xs")]: {
      textIndent: 28,
      fontSize: 14,
      paddingTop: 0
    },
  },
  aboutBox2: {
    textIndent: 83,
    paddingTop: 98,
    [theme.breakpoints.down("lg")]: {
      textIndent: 55,
      fontSize: 16,
      paddingTop: 60,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      paddingTop: 25,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      textIndent: 28,
      paddingTop: 0
    },
  },
  aboutBox3: {
    textIndent: 36,
    paddingTop: 20,
    fontSize: 24,
    [theme.breakpoints.down("lg")]: {
      textIndent: 55,
      fontSize: 16,
    },
    [theme.breakpoints.down("md")]: {
      textIndent: 0,
      paddingLeft: 30,
      paddingLeft: 130,
      paddingRight: 102,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      paddingLeft: 26,
      paddingRight: 26,
    },
    [theme.breakpoints.down("xs")]: {
      textIndent: 12,
      paddingTop: 8,
      fontSize: 12,
      paddingLeft: 12,
      paddingRight: 18,
    },
  },
  aboutBox4: {
    textAlign: "center",
    paddingTop: 15,
    fontSize: 24,
    [theme.breakpoints.down("lg")]: {
      fontSize: 18,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  aboutBox5: {
    textAlign: "center",
    paddingTop: 5,
    fontSize: 24,
    [theme.breakpoints.down("lg")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      textAlign: "left"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  aboutBox6: {
    textAlign: "center",
    paddingTop: 10,
    fontSize: 16,
    [theme.breakpoints.down("lg")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      textAlign: "left"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  imageIcon: {
    height: 35,
    [theme.breakpoints.down("xs")]: {
      height: 15,
    },
  },
  iconRoot: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
    },
  },
  PaddingVision: {
    [theme.breakpoints.down("md")]: {
      padding: 132,
      paddingTop: 8,
      paddingBottom: 32,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      paddingTop: 0,
      paddingBottom: 32,
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 12,
    },
  },
  PaddingVision2: {
    backgroundColor: "#EF5666",
    [theme.breakpoints.down("md")]: {
      padding: 132,
      paddingTop: 32,
      paddingBottom: 32,
    },
    [theme.breakpoints.down("md")]: {
      padding: 0,
      paddingTop: 32,
      paddingBottom: 32,
    },
  },
  PaddingVision3: {
    [theme.breakpoints.down("md")]: {
      padding: 132,
      paddingTop: 8,
      paddingBottom: 32,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      paddingTop: 32,
      paddingBottom: 32,
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
    textAlign: "left"
  }
}));

export default function Aboutas() {
  const classes = useStyle();
   // Require for bi-language
   const router = useRouter();
   const { locale, locales, defaultLocale } = router;
   const { formatMessage } = useIntl();
   const f = (id) => formatMessage({ id });
   // End of Requirement
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
      name: f("about"),
      link: "/about",
      selectedIndex: 0,
    },
    {
      name: f("team"),
      link: "/team",
      selectedIndex: 1,
    },
    {
      name: f("related"),
      link: "/related",
      selectedIndex: 2,
    },
  ];

  return (
    <main>
      <Header></Header>
      <Grid container className={classes.AboutContainer}>
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
              {f("menuAbout")}
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
              lg={6}
              xl={6}
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
                  {f("about")}
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
              <Typography variant="h6" className={classes.aboutBox}>
              {f("about1")}
              </Typography>
              <img className={classes.imgabout1} src="about2.jpg" />
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              className={classes.Griditem2}
            >
              <div>
                <Typography
                  align="left"
                  variant="h6"
                  className={classes.aboutBox}
                >
                 {f("about2")}
                </Typography>
              </div>
              <Paper elevation={0} className={classes.PaddingVision}>
                <img className={classes.imgVision1} src="vision1.png" />
                <Typography
                  className={classes.aboutVision}
                  variant="h5"
                  align="center"
                >
                  {f("vision")}
                </Typography>
                <Typography
                  className={classes.aboutVision1}
                  variant="h6"
                  align="center"
                >
                  {f("vision1")}
                </Typography>
              </Paper>
              <Box className={classes.Box2}>
                <Typography variant="h6" className={classes.aboutBox}>
                {f("about3")}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={classes.boxcontent}
            >
              <Paper elevation={0} className={classes.PaddingVision2}>
                <Typography variant="h3" className={classes.aboutTypo4}>
                {f("join")}
                </Typography>
                <br></br>
                <Typography variant="h5" className={classes.aboutTypo5}>
                {f("join1")}
                </Typography>
                <Button
                  component={Link}
                  href="https://www.facebook.com/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%A7%E0%B8%B4%E0%B8%88%E0%B8%B1%E0%B8%A2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%97%E0%B8%B4%E0%B8%8B%E0%B8%B6%E0%B8%A1-RSIA-1079148915621457"
                  variant="outlined"
                  className={classes.buttonbox}
                >
                  <IconButton classes={{ root: classes.iconRoot }}>
                    <img className={classes.imageIcon} src="facebook-red.svg" />
                  </IconButton>
                  <Typography variant="h5" className={classes.aboutTypo6}>
                  {f("rsia")}
                  </Typography>
                </Button>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              className={classes.Griditem6}
            >
              <Paper elevation={0} className={classes.PaddingVision3}>
                <img className={classes.imgVision2} src="vision1.png" />
                <Typography
                  className={classes.aboutVision3}
                  variant="h5"
                  align="center"
                >
                  {f("mission")}
                </Typography>
                <Typography
                  className={classes.aboutVision4}
                  variant="h6"
                  align="center"
                >
                  {f("mission1")}
                </Typography>
              </Paper>
              <Typography variant="h6" className={classes.aboutBox2}>
              {f("about4")}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              className={classes.Griditem4}
            >
              <img className={classes.imgabout3} src="about4.jpg" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <img className={classes.imgabout4} src="about3.jpg" />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              className={classes.Griditem5}
            >
              <Typography variant="h3" className={classes.aboutTypo7}>
              {f("objectives")}
              </Typography>
              <Typography
                align="left"
                variant="h6"
                className={classes.aboutBox3}
              >
                {f("objectives1")}
              </Typography>
              <Typography
                align="left"
                variant="h6"
                className={classes.aboutBox3}
              >
                {f("objectives2")}
              </Typography>
              <Typography
                align="left"
                variant="h6"
                className={classes.aboutBox3}
              >
                {f("objectives3")}
              </Typography>
              <Typography
                align="left"
                variant="h6"
                className={classes.aboutBox3}
              >
                {f("objectives3")}
              </Typography>
              <Typography
                align="left"
                variant="h6"
                className={classes.aboutBox3}
              >
                {f("objectives4")}
              </Typography>
            </Grid>
            <Grid item xs={12} >
            <Typography
                variant="h3"
                className={classes.aboutBox4}
              >
                คณะกรรมการดำเนินงาน
              </Typography>
              <Typography
                variant="h6"
                className={classes.aboutBox5}
              >
                1. ศาสตราจารย์ขั้นสูง นพ.สุชาติ พหลภาคย์ ที่ปรึกษา
              </Typography>
              <Typography
                variant="h6"
                className={classes.aboutBox5}
              >
                2. ผู้อำนวยการสถาบันวิจัยและบริการด้านออทิซึม หัวหน้าคณะกรรมการ
              </Typography>
              <Typography
                variant="h6"
                className={classes.aboutBox5}
              >
               3. รองศาสตราจารย์ พญ.นิรมล พัจนสุนทร กรรมการ
              </Typography>
              <Typography
                variant="h6"
                className={classes.aboutBox5}
              >
                4. ผู้ช่วยศาสตราจารย์ พญ.กุศลาภรณ์ ชัยอุดมสม กรรมการ
              </Typography>
              <Typography
                variant="h6"
                className={classes.aboutBox5}
              >
                5. นายบุรี เสรีโยธิน กรรมการ
              </Typography>
              <Typography
                variant="h6"
                className={classes.aboutBox5}
              >
                6. ดร.ธิรากร มณีรัตน์ กรรมการ
              </Typography>
              <Typography
                variant="h6"
                className={classes.aboutBox5}
              >
               7. นางพรมณี หาญหัก กรรมการและเลขานุการ
              </Typography>
              <Typography
                variant="h6"
                className={classes.aboutBox5}
              >
                8. นางปริศนา อานจำปา ผู้ช่วยเลขานุการ
              </Typography>
              <Typography
                variant="h6"
                className={classes.aboutBox6}
              >
              (คำสั่งสถาบันวิจัยและบริการด้านออทิซึม ที่ ๐๐๑ / ๒๕๖๓)
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Footer></Footer>
    </main>
  );
}
