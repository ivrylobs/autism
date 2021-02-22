import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Link from "../Link";

import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';

import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
  toolbarMargin: {},
  NavBar: {
    zIndex: theme.zIndex.drawer,
    backgroundColor: "#fff",
  },
  logo: {
    maxHeight: 93,
    margin: 5,
  },
  navContainer: {
    marginLeft: "auto",
  },
  nav: {
    ...theme.typography.tab,
    minWidth: 15,
    marginLeft: 15,
    "&:hover": {
      backgroundColor: "#B1BE12",
    },
  },
  navWork: {
    ...theme.typography.tab,
    minWidth: 15,
    marginLeft: 15,
    "&:hover": {
      backgroundColor: "#B1BE12",
    },
  },
  navNews: {
    ...theme.typography.tab,
    minWidth: 15,
    marginLeft: 15,
    "&:hover": {
      backgroundColor: "#B1BE12",
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
  button: {
    ...theme.typography.estimate,
    borderRadius: 5,
    marginLeft: 25,
    marginRight: 25,
    fontWeight: 700,
    height: 45,
    color: "white",
  },
  switchLanguage: {
    ...theme.typography.tab,
    minWidth: 15,
    marginLeft: 15,
    marginRight: 15
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
}));

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.warning.main,
        borderColor: theme.palette.warning.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export default function Header(props) {
  const classes = useStyles();
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
      selectedIndex: 0,
    },
    {
      name: "งานวิจัยที่อยู่ระหว่างการดำเนินการ",
      link: "/",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "งานด้านการบริการ",
      link: "/",
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleSwitchChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="static" className={classes.NavBar}>
          <Toolbar className={classes.toolbarMargin}>
            <img alt="logo" src="logo.png" className={classes.logo} />
            <div className={classes.navContainer}>
              <Button variant="text" className={classes.nav}>
                Home
              </Button>
              <Button
                variant="text"
                className={classes.nav}
                endIcon={<ExpandMoreIcon />}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                About us
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
                                handleMenuItemClick(event, i);
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
                Our work
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
                News
              </Button>
            </div>
            <FormGroup>
              <Typography className={classes.switchLanguage}>
                <Grid
                  component="label"
                  container
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>TH</Grid>
                  <Grid item>
                    <AntSwitch
                      onChange={handleSwitchChange}
                      name="checkedA"
                    />
                  </Grid>
                  <Grid item>EN</Grid>
                </Grid>
              </Typography>
            </FormGroup>
            <IconButton  aria-label="facebook">
        <FacebookIcon fontSize="large" className={classes.FbIcon} />
      </IconButton>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<ArrowRightIcon />}
            >
              Donate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
