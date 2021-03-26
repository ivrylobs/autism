import React, { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import { Button, Grid, Paper } from "@material-ui/core";
import Link from "../src/Link";

import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";

const useStyle = makeStyles((theme) => ({
  WorkContainer: {
    height: "auto",
    backgroundColor: "#fff",
    paddingBottom: 45,
    paddingTop: 54,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
    },
  },
  Containerourworklayout1: {
    height: " auto",
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
      maxWidth: 320,
    },
  },
  GridWork: {
    padding: 35,
    [theme.breakpoints.down("lg")]: {
      padding: 4,
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  },
  title: {
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 42,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      textAlign: "center",
    },
  },
  title2: {
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
      textAlign: "center",
    },
  },
  workTypo3: {
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
  workTypo4: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  nav: {
    paddingLeft: 0,
  },
  Workmenu: {
    backgroundColor: "#EF5666",
    color: "white",
    borderRadius: "3px",
    zIndex: 1302,
  },
  WorkmenuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  root: {
    padding: 5,
    flexGrow: 1,
    display: "flex",
    height: "auto",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingTop: 70,
    width: "16%",
    [theme.breakpoints.down("lg")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "134%",
    },
    [theme.breakpoints.down("xs")]: {},
  },
  Typographytitlework: {
    paddingBottom: 5,
    color: "#B1BE12",
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
  tabsGrid: {
    paddingTop: 45,
    paddingLeft: 200,
    paddingRight: 200,
    paddingBottom: 45,
    [theme.breakpoints.down("lg")]: {
      paddingLeft: 120,
      paddingRight: 120,
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: 10,
      paddingRight: 10,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 10,
      padding: 0,
    },
  },
  BoxTypo: {
    paddingLeft: 101,
    paddingRight: 101,
    [theme.breakpoints.down("lg")]: {
      paddingLeft: 10,
      paddingRight: 10,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      textAlign: "left",
    },
  },
  workImg: {
    width: "100%",
    height: "100%",
    marginTop: 20,
    marginBottom: 20,
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
      marginBottom: 10,
    },
  },
  titleProject: {
    fontSize: 20,
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  multiImg: {
    width: "100%",
    height: "100%",
  },
  img1: {
    height: "100%",
    width: "100%",
  },
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

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenAbout(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenAbout(false);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const aboutOptions = [
    {
      name: "งานด้านการบริการ",
      link: "/ourwork3",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "งานด้านการวิจัย",
      link: "/ourwork1",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "งานวิจัยที่อยู่ระหว่างการดำเนินการ",
      link: "/ourwork2",
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  return (
    <React.Fragment>
      <main>
        <Header></Header>
        <Grid container className={classes.WorkContainer}>
          <Container maxWidth="xl" className={classes.Containerourworklayout1}>
            <Grid container>
              <Grid item sm={12} md={5} xl={6} className={classes.GridWork}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="h1" className={classes.title}>
                      งานของเรา
                    </Typography>
                    <Typography variant="h4" className={classes.title2}>
                      OUR WORK
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.Griditem1}>
                    <Button
                      endIcon={<ExpandMoreIcon />}
                      variant="text"
                      className={classes.nav}
                      aria-controls="work-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                      size="large"
                    >
                      <Typography variant="h3" className={classes.workTypo3}>
                      งานด้านการบริการ
                      </Typography>
                    </Button>
                    <Typography variant="subtitle1" className={classes.workTypo4}>
                      1.
                      คลินิกให้คำปรึกษาสำหรับบุคคลที่มีภาวะออทิซึมสเปกตรัมโดยผู้เชี่ยวชาญ
                    </Typography>
                    <br></br>
                    <Typography variant="subtitle1" className={classes.workTypo4}>
                      2.
                      การให้ความช่วยเหลือบุคคลที่มีภาวะออทิซึมสเปกตรัมในชั้นเรียนรวม
                      โรงเรียนสาธิตมหาวิทยาลัยขอนแก่น มอดินแดง ฝ่ายการศึกษาพิเศษ
                    </Typography>
                    <Popper
                      open={openAbout}
                      anchorEl={anchorEl}
                      role={undefined}
                      transition
                      disablePortal
                      className={classes.WorkMenu1}
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin: placement === "top left",
                          }}
                        >
                          <Paper className={classes.Workmenu} elevation={0}>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList
                                id="worklist-menu"
                                disablePadding
                                autoFocusItem={false}
                              >
                                {aboutOptions.map((option, i) => (
                                  <MenuItem
                                    key={`${option}${i}`}
                                    component={Link}
                                    href={option.link}
                                    className={classes.WorkmenuItem}
                                    selected={i === selectedIndex}
                                    onClick={(event) => {
                                      handleMenuItemClick(event, i);

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
                </Grid>
              </Grid>
              <Grid item sm={12} md={7} xl={6} className={classes.GridWork}>
                <img
                  src="/ourwork1.png"
                  alt="work2"
                  className={classes.multiImg}
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Footer></Footer>
      </main>
    </React.Fragment>
  );
}
