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
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

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
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyle = makeStyles((theme) => ({
  Containerourworklayout1: {
    marginTop: 70,
  },
  Containerourworklayout2: {
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
    display: "flex",
    height: 900,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingTop: 70,
    width: "30%",
  },
  Containerwork: {
    margin: 40,
  },
  imgwork1: {
    width: "90%",
    marginTop: 20,
    height: "500px",
    backgroundColor: "grey",
    marginBottom: 20,
  },
  imgwork2: {
    width: "90%",
    marginTop: 20,
    height: "500px",
    backgroundColor: "grey",
    marginBottom: 20,
  },
  imgwork3: {
    width: "90%",
    marginTop: 20,
    height: "500px",
    backgroundColor: "grey",
    marginBottom: 20,
  },
  imgwork4: {
    width: "90%",
    marginTop: 20,
    marginBottom: 20,
    height: "500px",
    backgroundColor: "grey",
  },
  Typographytitlework: {
    color: "#B1BE12",
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
          <Grid container spacing={7}>
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

        <Container maxWidth="md" className={classes.Containerourworklayout2}>
          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="โครงการวิจัยย่อยที่ 1" {...a11yProps(0)} />
              <Tab label="โครงการวิจัยย่อยที่ 2" {...a11yProps(1)} />
              <Tab label="โครงการวิจัยย่อยที่ 3" {...a11yProps(2)} />
              <Tab label="โครงการวิจัยย่อยที่ 4" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Container className={classes.Containerwork}>
                <Typography
                  variant="h4"
                  className={classes.Typographytitlework}
                  align="center"
                >
                  โครงการวิจัยย่อยที่ 1
                </Typography>
                <br></br>
                <Typography variant="h6" align="center">
                  การเพิ่มความสามารถของผู้ปกครองในการคัดกรองบุตร
                  ที่มีภาวะออทิซึมสเปกตรัมโดยใช้เทคโนโลยี
                </Typography>

                <Typography variant="subtitle1" align="center">
                  The enhancement of parental capability by using technology in
                  order to screen their child who has autism spectrum disorder
                </Typography>
                <br></br>
                <Paper className={classes.imgwork1}>รูปภาพ</Paper>
                <Typography variant="subtitle1" align="center">
                  เป็นการวิจัยพัฒนาสร้างแอพพลิเคชั่นบนทุกระบบปฏิบัติการอินเตอร์เน็ตเพื่อ
                  ให้พ่อแม่ผู้ปกครองได้ใช้คัดกรองตรวจสอบว่าบุตรหลานมีอาการ
                  และมีความเสี่ยงต่อการเป็นโรคออทิซึมสเปกตรัมหรือไม่
                </Typography>
              </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Container className={classes.Containerwork}>
                <Typography
                  variant="h4"
                  className={classes.Typographytitlework}
                  align="center"
                >
                  โครงการวิจัยย่อยที่ 2
                </Typography>
                <br></br>
                <Typography variant="h6" align="center">
                  การพัฒนาศักยภาพของครูในการเสริมสร้างทักษะทางวิชาการ
                  และทักษะทางสังคมของบุคคลที่มีภาวะออทิซึมสเปกตรัม
                  ด้วยโปรแกรมการให้ความช่วยเหลือ
                </Typography>

                <Typography variant="subtitle1" align="center">
                  (The Development of Teachers Potentiality by Using Intensive
                  Assisting Program to Enhance Academic and Social Skills of
                  Person with Autism Spectrum Disorder)
                </Typography>
                <br></br>
                <Paper className={classes.imgwork2}>รูปภาพ</Paper>
                <Typography variant="subtitle1" align="center">
                  เป็นการวิจัยพัฒนาสร้างโปรแกรมให้ครูในโรงเรียนเรียนรวมนำไปใช้สอนเด็กประถมศึกษาที่มีโรคออทิซึมสเปกตรัมเพื่อเพิ่มทักษะทางด้านวิชาการและด้านสังคม
                </Typography>
              </Container>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Container className={classes.Containerwork}>
                <Typography
                  variant="h4"
                  className={classes.Typographytitlework}
                  align="center"
                >
                  โครงการวิจัยย่อยที่ 3
                </Typography>
                <br></br>
                <Typography variant="h6" align="center">
                  การพัฒนาทักษะทางวิชาการและทักษะการใช้ภาษาแก่นักเรียน
                  ที่มีภาวะออทิซึมสเปกตรัมในชั้นเรียนรวมและคู่ขนาน
                </Typography>

                <Typography variant="subtitle1" align="center">
                  (The enhancement of parental capability by using technology in
                  order to screen their child who has autism spectrum disorder)
                </Typography>
                <br></br>
                <Paper className={classes.imgwork3}>รูปภาพ</Paper>
                <Typography variant="subtitle1" align="center">
                  เป็นการวิจัยพัฒนาสร้างโปรแกรมให้ครูในโรงเรียนเรียนรวมนำไปใช้สอนเด็กอนุบาลที่มี
                  โรคออทิซึมสเปกตรัมเพื่อเพิ่มทักษะทางด้านวิชาการและด้านภาษา
                </Typography>
              </Container>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Container className={classes.Containerwork}>
                <Typography
                  variant="h4"
                  className={classes.Typographytitlework}
                  align="center"
                >
                  โครงการวิจัยย่อยที่ 4
                </Typography>
                <br></br>
                <Typography variant="h6" align="center">
                  การพัฒนาโปรแกรมสำหรับครอบครัวเพื่อการเสริมสร้างทักษะ
                  ทางสังคมของบุคคลในครอบครัวที่มีภาวะออทิซึมสเปกตรัม
                </Typography>

                <Typography variant="subtitle1" align="center">
                  (The Development of Program for Family to Enhance Social
                  Skills of Person with Autism Spectrum Disorder)
                </Typography>
                <br></br>
                <Paper className={classes.imgwork4}>รูปภาพ</Paper>
                <Typography variant="subtitle1" align="center">
                  เป็นการวิจัยพัฒนาสร้างโปรแกรมให้พ่อแม่หรือผู้ปกครองนำไปใช้เพื่อเพิ่มทักษะการสังคมให้แก่วัยรุ่นในบ้านที่เป็นโรคออทิซึมสเปกตรัม
                </Typography>
              </Container>
            </TabPanel>
          </div>
        </Container>

        <Footer></Footer>
      </main>
    </React.Fragment>
  );
}
