import React, { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import { Button, Grid, Paper } from "@material-ui/core";
import Link from "../src/Link";

import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "85%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  Accordion1: {
    backgroundColor: "#DBE0A5",
  },
  ExpandMoreIconnav: {
    margin: 10,
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
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={3}>
              <Typography variant="h2">งานของเรา</Typography>
              <Typography variant="h6">OUR WORK</Typography>
              <br></br>
              <Typography variant="h6">
                งานวิจัยที่อยู่ระหว่างการดำเนินการ
              </Typography>
              <br></br>
            </Grid>

            <Grid item xs={4}>
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
          </Grid>
        </Container>

        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Paper elevation={4}>
                <div className={classes.root}>
                  <Accordion className={classes.Accordion1}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        {" "}
                        1. การพัฒนาโปรแกรมการฝึกกิจวัตรประจำวันร่วมกับ
                        การใช้ห้องตัวอย่าง สำหรับนักเรียนระดับอนุบาลที่มีภาวะ
                        ออทิซึมสเปกตรัม และครอบครัว (HCP) <br></br>
                        <br></br>
                        (อ.ดร.กรวรรณ โหม่งพุฒ)
                      </Typography>
                      <br></br>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper elevation={4}>
                <div className={classes.root}>
                  <Accordion className={classes.Accordion1}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        2. การพัฒนาหลักสูตรการเรียนรวม 5 ทักษะพื้นฐานใน
                        ผู้เรียนระดับอนุบาลที่มีภาวะออทิซึมสเปกตรัม
                        <br></br>
                        <br></br>
                        (ผศ.ดร.ปิยะวรรณ ศรีสุรักษ์)
                      </Typography>
                      <br></br>

                      <Typography className={classes.heading}></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="subtitle1" align="left">
                        2.1
                        หลักสูตรการเรียนรวมเพื่อพัฒนาทักษะด้านความรู้ความเข้าใจสำหรับนักเรียนที่มีภาวะออทิซึมสเปกตรัมในระดับอนุบาลศึกษา
                        (ผศ.ดร.ปิยะวรรณ ศรีสุรักษ์)
                        <br></br>
                        2.2
                        หลักสูตรการพัฒนาทักษะการรับรู้และแสดงออกทางภาษาสำหรับเด็กอนุบาลที่มีภาวะออทิซึมสเปกตรัมในชั้นเรียนรวม
                        (อ.อาพร ตรีสูน)
                        <br></br>
                        2.3
                        หลักสูตรเพิ่มสมรรถภาพทางกายสำหรับผู้เรียนระดับอนุบาลศึกษาที่มีภาวะออทิซึมสเปกตรัมในโรงเรียนเรียนร่วม
                        (อ.วันชัย จันทการกุล)
                        <br></br>
                        2.4
                        หลักสูตรการเรียนรวมเพื่อพัฒนาทักษะการช่วยเหลือตนเองในการปฏิบัติกิจวัตรประจำวันในนักเรียน
                        ระดับอนุบาลศึกษา ที่มีภาวะออทิซึมสเปกตรัม (อ.เจริญขวัญ
                        ศรีพันธ์ชาติ)
                        <br></br>
                        2.5
                        หลักสูตรเรียนรวมพัฒนาทักษะทางสังคมของนักเรียนอนุบาลศึกษาที่มีภาวะออทิซึมสเปกตรัม
                        (อ.พรมณี หาญหัก)
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Paper elevation={4}>
                <div className={classes.root}>
                  <Accordion className={classes.Accordion1}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        {" "}
                        3. โปรแกรมการฝึกทักษะงานบ้านสำหรับบุคคลออทิสติก 
กลุ่มวัยรุ่นที่ไม่มีภาษาพูด  <br></br>
                        <br></br>
                        (อาจารย์ปริศนา อานจำปา) 
                      </Typography>
                      <br></br>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper elevation={4}>
                <div className={classes.root}>
                  <Accordion className={classes.Accordion1}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                      4. การพัฒนาโปรแกรมการฝึกทักษะสังคมสำหรับวัยรุ่นที่มี
ภาวะออทิซึม
                        <br></br>
                        <br></br>
                        (อาจารย์ปริศนา อานจำปา)
                      </Typography>
                      <br></br>

                      <Typography className={classes.heading}></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="subtitle1" align="left">
                        2.1
                        หลักสูตรการเรียนรวมเพื่อพัฒนาทักษะด้านความรู้ความเข้าใจสำหรับนักเรียนที่มีภาวะออทิซึมสเปกตรัมในระดับอนุบาลศึกษา
                        (ผศ.ดร.ปิยะวรรณ ศรีสุรักษ์)
                        <br></br>
                        2.2
                        หลักสูตรการพัฒนาทักษะการรับรู้และแสดงออกทางภาษาสำหรับเด็กอนุบาลที่มีภาวะออทิซึมสเปกตรัมในชั้นเรียนรวม
                        (อ.อาพร ตรีสูน)
                        <br></br>
                        2.3
                        หลักสูตรเพิ่มสมรรถภาพทางกายสำหรับผู้เรียนระดับอนุบาลศึกษาที่มีภาวะออทิซึมสเปกตรัมในโรงเรียนเรียนร่วม
                        (อ.วันชัย จันทการกุล)
                        <br></br>
                        2.4
                        หลักสูตรการเรียนรวมเพื่อพัฒนาทักษะการช่วยเหลือตนเองในการปฏิบัติกิจวัตรประจำวันในนักเรียน
                        ระดับอนุบาลศึกษา ที่มีภาวะออทิซึมสเปกตรัม (อ.เจริญขวัญ
                        ศรีพันธ์ชาติ)
                        <br></br>
                        2.5
                        หลักสูตรเรียนรวมพัฒนาทักษะทางสังคมของนักเรียนอนุบาลศึกษาที่มีภาวะออทิซึมสเปกตรัม
                        (อ.พรมณี หาญหัก)
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Paper elevation={4}>
                <div className={classes.root}>
                  <Accordion className={classes.Accordion1}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        {" "}
                        5. การพัฒนาหลักสูตรการวางแผนและการจัดระเบียบ
ดำเนินการเพื่อการประกอบอาชีพ
ในวัยรุ่นออทิซึมสเปกตรัม 
 <br></br>
                        <br></br>
                        (ดร.เบญจมาภรณ์ ช้อยเครือ) 
                      </Typography>
                      <br></br>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper elevation={4}>
                <div className={classes.root}>
                  <Accordion className={classes.Accordion1}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                      6. การเปลี่ยนแปลงเมทาบอลิซึมของกลูโคสในสมอง
ซึ่งประเมินด้วยเอฟดีจี เพทซีที ในผู้ป่วยออทิซึม
หลังการกระตุ้นด้วยไฟฟ้ากระแสตรงผ่านกะโหลกศีรษะ
                        <br></br>
                        <br></br>
                        (รศ.พญ.ภารดี  เอื้อวิชญาแพทย์)
                      </Typography>
                      <br></br>

                      <Typography className={classes.heading}></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="subtitle1" align="left">
                        2.1
                        หลักสูตรการเรียนรวมเพื่อพัฒนาทักษะด้านความรู้ความเข้าใจสำหรับนักเรียนที่มีภาวะออทิซึมสเปกตรัมในระดับอนุบาลศึกษา
                        (ผศ.ดร.ปิยะวรรณ ศรีสุรักษ์)
                        <br></br>
                        2.2
                        หลักสูตรการพัฒนาทักษะการรับรู้และแสดงออกทางภาษาสำหรับเด็กอนุบาลที่มีภาวะออทิซึมสเปกตรัมในชั้นเรียนรวม
                        (อ.อาพร ตรีสูน)
                        <br></br>
                        2.3
                        หลักสูตรเพิ่มสมรรถภาพทางกายสำหรับผู้เรียนระดับอนุบาลศึกษาที่มีภาวะออทิซึมสเปกตรัมในโรงเรียนเรียนร่วม
                        (อ.วันชัย จันทการกุล)
                        <br></br>
                        2.4
                        หลักสูตรการเรียนรวมเพื่อพัฒนาทักษะการช่วยเหลือตนเองในการปฏิบัติกิจวัตรประจำวันในนักเรียน
                        ระดับอนุบาลศึกษา ที่มีภาวะออทิซึมสเปกตรัม (อ.เจริญขวัญ
                        ศรีพันธ์ชาติ)
                        <br></br>
                        2.5
                        หลักสูตรเรียนรวมพัฒนาทักษะทางสังคมของนักเรียนอนุบาลศึกษาที่มีภาวะออทิซึมสเปกตรัม
                        (อ.พรมณี หาญหัก)
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Paper elevation={4}>
                <div className={classes.root}>
                  <Accordion className={classes.Accordion1}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        {" "}
                        8. การดูแลช่วยเหลือแก่ครอบครัวที่มีบุตรออทิสติก <br></br>
                        <br></br>
                        (ผศ. พัชราภรณ์ เจนใจวิทย์)
                      </Typography>
                      <br></br>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Footer></Footer>
      </main>
    </React.Fragment>
  );
}
