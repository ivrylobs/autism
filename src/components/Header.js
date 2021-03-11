import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Link from "../Link";

import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import { Typography } from "@material-ui/core";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbarMargin: {
    [theme.breakpoints.down("xs")]: {
      padding: 0
    },
  },
  NavBar: {
    zIndex: theme.zIndex.drawer,
    backgroundColor: "#fff",
  },
  logo: {
    maxHeight: 93,
    margin: 5,
    [theme.breakpoints.down("md")]: {
      maxHeight: 60,
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: 54,
    },
    [theme.breakpoints.down("xs")]: {
      maxHeight: 45,
    },
  },
  navContainer: {
    marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  navContainer2: {
    marginLeft: "auto",
    display: "block",
    [theme.breakpoints.up("xl")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  navMobile: {
    ...theme.typography.tab,
    minWidth: 15,
    color: "#EF5666",
    [theme.breakpoints.up("xs")]: {
     padding: 0
    },
  },
  nav: {
    ...theme.typography.tab,
    minWidth: 15,
    marginLeft: 15,
    "&:hover": {
      color: "#B1BE12",
    },
  },
  navWork: {
    ...theme.typography.tab,
    minWidth: 15,
    marginLeft: 15,
    "&:hover": {
      color: "#B1BE12",
    },
  },
  navNews: {
    ...theme.typography.tab,
    minWidth: 15,
    marginLeft: 15,
    "&:hover": {
      color: "#B1BE12",
    },
  },
  Aboutmenu: {
    backgroundColor: "#B1BE12",
    color: "white",
    borderRadius: "3px",
    zIndex: 1302,
  },
  AboutmenuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  FbIcon: {
    color: "#3AC7FD",
  },
  Workmenu: {
    backgroundColor: "#B1BE12",
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
  imageIcon: {
    height: 35,
    [theme.breakpoints.down("xs")]: {
      height: 15,
    },
  },
  iconRoot: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0
    },
  },
  nav2: {
    ...theme.typography.estimate,
    borderRadius: 5,
    marginLeft: 20,
    fontWeight: 700,
    height: 45,
    color: "#B1BE12",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      display: "none"
    },
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
  },
  nav3: {
    color: "#B1BE12",
    [theme.breakpoints.up("xl")]: {
      display: "none"
    },
    [theme.breakpoints.up("lg")]: {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
  },
  navlg3: {
    fontSize: 33,
    color: "#B1BE12",
    [theme.breakpoints.up("xl")]: {
      display: "none"
    },
    [theme.breakpoints.up("lg")]: {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  LanguageMenu: {
    backgroundColor: "#B1BE12",
    color: "white",
    borderRadius: 3,
    zIndex: 1302,
  },
  LanguageMenuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  CloseLanguage: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
  },
  Navmenu: {
    backgroundColor: "#EAA0A8",
    color: "white",
    borderRadius: 3,
    zIndex: 1302,
  },
  NavmenuItem: {
    ...theme.typography.tab,
    fontWeight: 400,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  Navbar: {
    color: "#EF5666"
  },
  
  button: {
    ...theme.typography.tab,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 5,
    fontSize: 20,
    fontWeight: 700,
    height: 45,
    color: "white",
    [theme.breakpoints.down("sm")]: {
      height: 35,
      fontSize: 16,
      
    },
    [theme.breakpoints.down("xs")]: {
      width: 65,
      height: 25,
      fontSize: 9,
      marginLeft: 0,
    },
  },
  NavTypo: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 9,
    },
  }
}));

export default function Header(props) {
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

  const aboutOptions = [
    {
      name: "ความเป็นมาและวัตถุประสงค์",
      link: "/",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "ทำเนียบบุคลากร",
      link: "/",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "หน่วยงานที่เกี่ยวข้อง",
      link: "/",
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  const [anchorElWork, setAnchorElWork] = useState(null);
  const [openWork, setOpenWork] = useState(false);
  const [selectedWorkIndex, setSelectedWorkIndex] = React.useState(0);

  const handleWorkClick = (e) => {
    setAnchorElWork(e.currentTarget);
    setOpenWork(true);
  };

  const handleWorkItemClick = (e, i) => {
    setAnchorElWork(null);
    setOpenWork(false);
    setSelectedWorkIndex(i);
  };

  const handleWorkClose = (e) => {
    setAnchorElWork(null);
    setOpenWork(false);
  };

  const workOptions = [
    {
      name: "งานด้านการวิจัย",
      link: "/",
      activeIndex: 1,
      selectedWorkIndex: 0,
    },
    {
      name: "งานวิจัยที่อยู่ระหว่างการดำเนินการ",
      link: "/",
      activeIndex: 1,
      selectedWorkIndex: 1,
    },
    {
      name: "งานด้านการบริการ",
      link: "/",
      activeIndex: 1,
      selectedWorkIndex: 2,
    },
  ];

  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedMenuIndex, setselectedMenuIndex] = React.useState(0);

  const handleClickMenu = (e) => {
    setAnchorElMenu(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorElMenu(null);
    setOpenMenu(false);
    setselectedMenuIndex(i);
  };

  const handleCloseMenu = (e) => {
    setAnchorElMenu(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    {
      name: "English",
      link: "/",
      activeIndex: 1,
      selectedMenuIndex: 0,
    },
    {
      name: "ภาษาไทย",
      link: "/homeTH",
      activeIndex: 1,
      selectedMenuIndex: 1,
    },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [openNav, setOpenNav] = useState(false);
  const [selectedNavIndex, setSelectedNavIndex] = React.useState(0);

  const handleNavClick = (e) => {
    setAnchorElNav(e.currentTarget);
    setOpenNav(true);
  };

  const handleNavItemClick = (e, i) => {
    setAnchorElNav(null);
    setOpenNav(false);
    setSelectedNavIndex(i);
  };

  const handleNavClose = (e) => {
    setAnchorElNav(null);
    setOpenNav(false);
  };

  const navOptions = [
    {
      name: "หน้าแรก",
      link: "/",
      activeIndex: 1,
      selectedNavIndex: 0,
    },
    {
      name: "เกี่ยวกับเรา",
      link: "/",
      activeIndex: 1,
      selectedNavIndex: 1,
    },
    {
      name: "งานของเรา",
      link: "/",
      activeIndex: 1,
      selectedNavIndex: 2,
    },
    {
      name: "ประชาสัมพันธ์",
      link: "/",
      activeIndex: 1,
      selectedNavIndex: 3,
    },
  ];

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="relative" className={classes.NavBar}>
          <Toolbar className={classes.toolbarMargin}>
            <img alt="logo" src="logo.png" className={classes.logo} />
            <div className={classes.navContainer}>
              <Button variant="text" className={classes.nav}>
                หน้าแรก
              </Button>
              <Button
                variant="text"
                className={classes.nav}
                endIcon={<ExpandMoreIcon />}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                เกี่ยวกับเรา
              </Button>
              <Popper
                open={openAbout}
                anchorEl={anchorEl}
                role={undefined}
                transition
                disablePortal
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
                          id="simple-menu"
                          disablePadding
                          autoFocusItem={false}
                        >
                          {aboutOptions.map((option, i) => (
                            <MenuItem
                              key={`${option}${i}`}
                              component={Link}
                              href={option.link}
                              className={classes.AboutmenuItem}
                              selected={i === selectedIndex}
                              onClick={(event) => {
                                handleAboutItemClick(event, i);
                                props.setValue(1);
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

              <Button
                variant="text"
                className={classes.navWork}
                endIcon={<ExpandMoreIcon />}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleWorkClick}
              >
                งานของเรา
              </Button>
              <Popper
                open={openWork}
                anchorEl={anchorElWork}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin: placement === "top left",
                    }}
                  >
                    <Paper className={classes.Workmenu} elevation={0}>
                      <ClickAwayListener onClickAway={handleWorkClose}>
                        <MenuList
                          id="simple-menu"
                          disablePadding
                          autoFocusItem={false}
                        >
                          {workOptions.map((option, i) => (
                            <MenuItem
                              key={`${option}${i}`}
                              component={Link}
                              href={option.link}
                              className={classes.WorkmenuItem}
                              selected={i === selectedWorkIndex}
                              onClick={(event) => {
                                handleWorkItemClick(event, i);
                                props.setValue(1);
                                handleWorkClose();
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
              <Button variant="text" className={classes.navNews}>
                ประชาสัมพันธ์
              </Button>
            </div>
            <div className={classes.navContainer2}>
            
                <Button
                 
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleNavClick}
                  aria-label="menu"
                  variant="text"
                className={classes.navMobile}
                endIcon={<ExpandMoreIcon />}
                >
                  <Typography className={classes.NavTypo}>หน้าแรก</Typography>
                </Button>
             
              <Popper
                open={openNav}
                anchorEl={anchorElNav}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin: placement === "top left",
                    }}
                  >
                    <Paper className={classes.Navmenu} elevation={0}>
                      <ClickAwayListener onClickAway={handleNavClose}>
                        <MenuList
                          id="simple-menu"
                          disablePadding
                          autoFocusItem={false}
                        >
                          {navOptions.map((option, i) => (
                            <MenuItem
                              key={`${option}${i}`}
                              component={Link}
                              href={option.link}
                              className={classes.NavmenuItem}
                              selected={i === selectedNavIndex}
                              onClick={(event) => {
                                handleNavItemClick(event, i);
                                props.setValue(1);
                                handleNavClose();
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
            </div>
            <Button
              variant="text"
              className={classes.nav2}
              startIcon={<LanguageIcon />}
              endIcon={<ExpandMoreIcon />}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClickMenu}
            ><Typography className={classes.CloseLanguage}>English</Typography>
              
            </Button>
            <Popper
              open={openMenu}
              anchorEl={anchorElMenu}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: placement === "top left",
                  }}
                >
                  <Paper className={classes.LanguageMenu} elevation={0}>
                    <ClickAwayListener onClickAway={handleCloseMenu}>
                      <MenuList
                        id="simple-menu"
                        disablePadding
                        autoFocusItem={false}
                      >
                        {menuOptions.map((option, i) => (
                          <MenuItem
                            key={`${option}${i}`}
                            component={Link}
                            href={option.link}
                            className={classes.LanguageMenuItem}
                            selected={i === selectedMenuIndex}
                            onClick={(event) => {
                              handleMenuItemClick(event, i);
                              props.setValue(1);
                              handleCloseMenu();
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
            <Tooltip title="Languages">
                <IconButton
                  className={classes.nav3}
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClickMenu}
                  aria-label="language"
                >
                  <LanguageIcon className={classes.navlg3} />
                </IconButton>
              </Tooltip>
            <IconButton classes={{ root: classes.iconRoot }}>
              <img className={classes.imageIcon} src="facebook-24px.svg" />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<ArrowRightIcon />}
            >
              บริจาค
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
