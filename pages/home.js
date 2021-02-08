import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link, IconButton, Menu, Button ,Grid} from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyle = makeStyles((theme) => ({
  TollSpace: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer,
    height: "95px",
    background: "#ffffff",
    backgroundColor: "#ffffff",
    [theme.breakpoints.down("xs")]: {
      height: "55px",
    },
  },

  Typographyss: {
    color: "red",
  },
  logolmage: {
    height: "100px",
    width: "90px",
    paddingTop: 10,
    margin: "15px",
  },
  optionAppbar: {
    display: "flex",
    marginLeft: 500,
    flex: 0.9,
    justifyContent: "space-around",
    marginTop: 20,
  },
  TextHeader1: {
    fontSize: "20px",
    "&:hover": {
      fontSize: "25px",
      textDecoration: "none",
      background: "linear-gradient(to right , #FF5858 50%,  #CC2E5D 50%)",
      backgroundSize: "100%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      transition: "0.5s, easeout",
      backgroundPosition: "-100%",
    },
  },
  spacerCar: {
    fontSize: "20px",
    textDecoration: "none",
    width: "140px",
    textAlign: "center",
  },
  ButtonAppbar: {
    fontSize: "22px",
    background: "linear-gradient(40deg,#FF5858 20%, #F26C0E 90%)",
    boxShadow: "0 3px 5px 2px rbg(255, 105, 135, 0.3)",
    borderRadius: "30px",
    height: "50px",
    width: "180px",
    marginLeft:'20px',
    "&:hover": {
      fontSize: "30px",
      textDecoration: "none",
      background: "linear-gradient(40deg,#FF5858 20%, ##F26C0E 90%)",
      boxShadow: "0 3px 5px 2px rbg(255, 105, 135, 0.3)",
      backgroundSize: "100%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      transition: "0.5s, easeout",
    },
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const classes = useStyle();

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar className={classes.TollSpace}>
            <Link href="/shipments">
              <img src="AddImgStep4New.png" className={classes.logolmage} />
            </Link>

            <div className={classes.optionAppbar}>
              <Link href="/shipments" color="textPrimary" underline="none">
                <Typography className={classes.TextHeader1}>หน้าแรก</Typography>
              </Link>

              <Link href="/shipments" color="textPrimary" underline="none">
                <Typography className={classes.TextHeader1}>
                  เกี่ยวกับเรา
                </Typography>
              </Link>

              <Link href="/shipments" color="textPrimary" underline="none">
                <Typography className={classes.TextHeader1}>
                  งานของเรา
                </Typography>
              </Link>

              <Link href="/shipments" color="textPrimary" underline="none">
                <Typography className={classes.TextHeader1}>
                  ข่าวสาร
                </Typography>
              </Link>
            </div>

            <div>
              <Link href="/shipments">
                <motion.button
                  className={classes.ButtonAppbar}
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <Typography variant="contained">บริจาค</Typography>
                </motion.button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

      <Toolbar></Toolbar>

      <Container maxWidth='lg'>
           

          
      </Container>
    </React.Fragment>
  );
}
