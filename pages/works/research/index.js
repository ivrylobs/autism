import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import Link from "../../../src/Link";

import Container from "@material-ui/core/Container";
import { Grid, Paper } from "@material-ui/core";

import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Typography, Button } from "@material-ui/core";
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
  Containerourworklayout2: {
    marginTop: 90,
  },
  Containerwork: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
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
  pProject: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 8,
    },
    [theme.breakpoints.down("xs")]: {},
  },
  Griditem1: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  tabs2: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 6,
    },
  },
  paddingPanel: {
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
}));

export default function Ourwork1(props) {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openWork, setOpenWork] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenWork(true);
  };

  const handleWorkItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenWork(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenWork(false);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const workMenuOptions = [
    {
      name: "งานด้านการวิจัย",
      link: "/ourwork1",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "งานวิจัยที่อยู่ระหว่างการดำเนินการ",
      link: "/ourwork2",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "งานด้านการบริการ",
      link: "/ourwork3",
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
                        งานด้านการวิจัย
                      </Typography>
                    </Button>
                    <Popper
                      open={openWork}
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
                                {workMenuOptions.map((option, i) => (
                                  <MenuItem
                                    key={`${option}${i}`}
                                    component={Link}
                                    href={option.link}
                                    className={classes.WorkmenuItem}
                                    selected={i === selectedIndex}
                                    onClick={(event) => {
                                      handleWorkItemClick(event, i);

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
                    <Typography variant="subtitle1">
                      การพัฒนานวัตกรรมสำหรับการช่วยเหลือบุคคลที่มีภาวะออทิซึมสเปกตรัมที่สอดคล้องกับบริบททางสังคมไทยตาม
                      4 กลไกหลักของออทิซึมสเปกตรัมโรดแมป
                      มีวัตถุประสงค์ตั้งแต่การคิดค้นหาวิธีการคัดกรองเด็กเล็กที่มีอาการที่เสี่ยงต่อการเป็นโรคออทิซึมสเปกตรัมจนถึงค้นหาวิธีการดูแลผู้ป่วยที่เป็นโรคออทิซึมสเปกตรัมตั้งแต่อายุน้อยจนถึงวัยรุ่น
                      ผู้ป่วยที่เป็นเด็กอายุน้อยแผนการวิจัยก็คิดค้นวิธีการให้การศึกษาเพื่อให้การศึกษาก้าวหน้า
                      ผู้ป่วยที่เป็นวัยรุ่นแผนการวิจัยก็คิดค้นหาวิธีส่งเสริมให้ครอบครัวมีวิธีการส่งเสริมให้วัยรุ่นมีทักษะทางสังคมดีขึ้น
                      แผนการวิจัยจึงประกอบด้วยโครงการวิจัยย่อย 4 โครงการดังนี้
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={12} md={7} xl={6} x className={classes.GridWork}>
                <img
                  src="/ourwork2.png"
                  alt="work1"
                  className={classes.multiImg}
                />
              </Grid>
              <Grid item xs={12} className={classes.tabsGrid}>
                <div className={classes.root}>
                  <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                  >
                    <Tab
                      className={classes.tabs2}
                      label="โครงการวิจัยย่อยที่ 1"
                      {...a11yProps(0)}
                    />
                    <Tab
                      className={classes.tabs2}
                      label="โครงการวิจัยย่อยที่ 2"
                      {...a11yProps(1)}
                    />
                    <Tab
                      className={classes.tabs2}
                      label="โครงการวิจัยย่อยที่ 3"
                      {...a11yProps(2)}
                    />
                    <Tab
                      className={classes.tabs2}
                      label="โครงการวิจัยย่อยที่ 4"
                      {...a11yProps(3)}
                    />
                  </Tabs>
                  <TabPanel
                    value={value}
                    index={0}
                    className={classes.paddingPanel}
                  >
                    <Container className={classes.Containerwork}>
                      <Typography
                        variant="h4"
                        className={classes.Typographytitlework}
                        align="center"
                      >
                        โครงการวิจัยย่อยที่ 1
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        className={classes.titleProject}
                      >
                        การเพิ่มความสามารถของผู้ปกครองในการคัดกรองบุตร
                        ที่มีภาวะออทิซึมสเปกตรัมโดยใช้เทคโนโลยี
                      </Typography>

                      <Typography
                        variant="subtitle2"
                        align="center"
                        className={classes.pProject}
                      >
                        ( The enhancement of parental capability by using
                        technology in order to screen their child who has autism
                        spectrum disorder)
                      </Typography>

                      <img
                        className={classes.workImg}
                        src="/ourwork4.jpg"
                        alt="work4"
                      />

                      <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.BoxTypo}
                      >
                        เป็นการวิจัยพัฒนาสร้างแอพพลิเคชั่นบนทุกระบบปฏิบัติการอินเตอร์เน็ตเพื่อให้พ่อแม่ผู้ปกครองได้ใช้คัดกรองตรวจสอบว่าบุตรหลานมีอาการและมีความเสี่ยงต่อการเป็นโรคออทิซึมสเปกตรัมหรือไม่
                        (ผู้ประดิษฐ์: ผศ.พญ.กุศลาภรณ์ ชัยอุดมสม)
                      </Typography>
                    </Container>
                  </TabPanel>
                  <TabPanel
                    value={value}
                    index={1}
                    className={classes.paddingPanel}
                  >
                    <Container className={classes.Containerwork}>
                      <Typography
                        variant="h4"
                        className={classes.Typographytitlework}
                        align="center"
                      >
                        โครงการวิจัยย่อยที่ 2
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        className={classes.titleProject}
                      >
                        การพัฒนาศักยภาพของครูในการเสริมสร้างทักษะทางวิชาการและทักษะทางสังคมของบุคคลที่มีภาวะออทิซึมสเปกตรัมด้วยโปรแกรมการให้ความช่วยเหลืออย่างเข้มข้น
                      </Typography>

                      <Typography
                        variant="subtitle2"
                        align="center"
                        className={classes.pProject}
                      >
                        (The Development of Teachers Potentiality by Using
                        Intensive Assisting Program to Enhance Academic and
                        Social Skills of Person with Autism Spectrum Disorder)
                      </Typography>

                      <img
                        className={classes.workImg}
                        src="/ourwork5.jpg"
                        alt="work4"
                      />

                      <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.BoxTypo}
                      >
                        เป็นการวิจัยพัฒนาสร้างโปรแกรมให้ครูในโรงเรียนเรียนรวมนำไปใช้สอนเด็กประถมศึกษาที่มีโรคออทิซึมสเปกตรัมเพื่อเพิ่มทักษะทางด้านวิชาการและด้านสังคม
                        (ผู้ประดิษฐ์: รศ.ดร.ปิยะวรรณ ศรีสุรักษ์)
                      </Typography>
                    </Container>
                  </TabPanel>
                  <TabPanel
                    value={value}
                    index={2}
                    className={classes.paddingPanel}
                  >
                    <Container className={classes.Containerwork}>
                      <Typography
                        variant="h4"
                        className={classes.Typographytitlework}
                        align="center"
                      >
                        โครงการวิจัยย่อยที่ 3
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        className={classes.titleProject}
                      >
                        การพัฒนาทักษะทางวิชาการและทักษะการใช้ภาษาแก่นักเรียน
                        ที่มีภาวะออทิซึมสเปกตรัมในชั้นเรียนรวมและคู่ขนาน
                      </Typography>

                      <Typography
                        variant="subtitle2"
                        align="center"
                        className={classes.pProject}
                      >
                        (The enhancement of parental capability by using
                        technology in order to screen their child who has autism
                        spectrum disorder)
                      </Typography>

                      <img
                        className={classes.workImg}
                        src="/ourwork6.jpg"
                        alt="work4"
                      />

                      <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.BoxTypo}
                      >
                        เป็นการวิจัยพัฒนาสร้างโปรแกรมให้ครูในโรงเรียนเรียนรวมนำไปใช้สอนเด็กอนุบาลที่มี
                        โรคออทิซึมสเปกตรัมเพื่อเพิ่มทักษะทางด้านวิชาการและด้านภาษา
                        (ผู้ประดิษฐ์: นางพรมณี หาญหัก)
                      </Typography>
                    </Container>
                  </TabPanel>
                  <TabPanel
                    value={value}
                    index={3}
                    className={classes.paddingPanel}
                  >
                    <Container className={classes.Containerwork}>
                      <Typography
                        variant="h4"
                        className={classes.Typographytitlework}
                        align="center"
                      >
                        โครงการวิจัยย่อยที่ 4
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        className={classes.titleProject}
                      >
                        การพัฒนาโปรแกรมสำหรับครอบครัวเพื่อการเสริมสร้างทักษะ
                        ทางสังคมของบุคคลในครอบครัวที่มีภาวะออทิซึมสเปกตรัม
                      </Typography>

                      <Typography
                        variant="subtitle2"
                        align="center"
                        className={classes.pProject}
                      >
                        (The Development of Program for Family to Enhance Social
                        Skills of Person with Autism Spectrum Disorder)
                      </Typography>

                      <img
                        className={classes.workImg}
                        src="/ourwork7.jpg"
                        alt="work4"
                      />

                      <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.BoxTypo}
                      >
                        เป็นการวิจัยพัฒนาสร้างโปรแกรมให้พ่อแม่หรือผู้ปกครองนำไปใช้เพื่อเพิ่มทักษะการสังคมให้แก่วัยรุ่นในบ้านที่เป็นโรคออทิซึมสเปกตรัม
                        (ผู้ประดิษฐ์: ดร.ธิรากร มณีรัตน์)
                      </Typography>
                    </Container>
                  </TabPanel>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Footer></Footer>
      </main>
    </React.Fragment>
  );
}
