import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import Link from "../src/Link";

import Container from "@material-ui/core/Container";
import { Grid, Paper } from "@material-ui/core";


import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }





const useStyle = makeStyles((theme) => ({
  Containerourworklayout1: {
    marginTop: 70,
  },
  Containerourworklayout2:{
    marginTop: 90,
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
    minWidth: 10,
    fontSize: "large",
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
    marginLeft: 50,
    marginRight: 25,
    fontWeight: 700,
    height: 45,
    color: "white",
  },
  ExpandMoreIconnav: {
    margin: 10,
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 1224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingTop:70
  },
}));

export default function Ourwork1(props) {
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
      name: "ความเป็นมาและวัตถุประสงค์",
      link: "/customsoftware",
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

  return (
    <React.Fragment>
      <main>
        <Header></Header>
        <Container maxWidth="lg" className={classes.Containerourworklayout1}>
          <Grid container  spacing={7}>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="h2">งานของเรา</Typography>
                  <Typography variant="h6">OUR WORK</Typography>
                  <br></br>
                  <Typography variant="h6">งานด้านการวิจัย</Typography>
                  <br></br>
                </Grid>

                <Grid item xs={6}>
                  <IconButton>
                    <ExpandMoreIcon
                      onClick={handleClick}
                      aria-haspopup="true"
                      variant="text"
                      className={classes.ExpandMoreIconnav}
                      fontSize="large"
                    ></ExpandMoreIcon>
                  </IconButton>
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
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                    <Typography variant="text">
                    {" "}
                            การพัฒนานวัตกรรมสำหรับการช่วยเหลือบุคคลที่มีภาวะออทิซึมสเปกตรัมที่สอดคล้องกับบริบททางสังคมไทยตาม
                    4 กลไกหลักของออทิซึมสเปกตรัมโรดแมป
                    มีวัตถุประสงค์ตั้งแต่การคิดค้นหาวิธีการคัดกรองเด็กเล็กที่มีอาการที่เสี่ยงต่อการเป็นโรคออทิซึมสเปกตรัมจนถึงค้นหาวิธีการดูแลผู้ป่วยที่เป็นโรคออทิซึมสเปกตรัมตั้งแต่อายุน้อยจนถึงวัยรุ่น
                    ผู้ป่วยที่เป็นเด็กอายุน้อยแผนการวิจัยก็คิดค้นวิธีการให้การศึกษาเพื่อให้การศึกษาก้าวหน้า
                    ผู้ป่วยที่เป็นวัยรุ่นแผนการวิจัยก็คิดค้นหาวิธีส่งเสริมให้ครอบครัวมีวิธีการส่งเสริมให้วัยรุ่นมีทักษะทางสังคมดีขึ้น
                    แผนการวิจัยจึงประกอบด้วยโครงการวิจัยย่อย 4 โครงการดังนี้
                  </Typography>
                    </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Paper>รูปภาพ</Paper>
            </Grid>
          </Grid>
        </Container>


        <Container maxWidth='md' className={classes.Containerourworklayout2} >
        <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
 
      >
        <Tab   label="โครงการวิจัยย่อยที่ 1" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel    value={value} index={0}>
            <Container maxWidth='lg'>
                
            </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
        </Container>

        <Footer></Footer>
      </main>
    </React.Fragment>
  );
}
