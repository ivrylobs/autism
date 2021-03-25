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
      img1:{
          height: 400,
          width:'100%',
          backgroundColor:'gray'
      }
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
              งานด้านการบริการ
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

       

        <Container maxWidth="lg" className={classes.Containeraboutus}>
          <Grid container spacing={7}>
            <Grid item xs={6} className={classes.grid1}>
              <Typography>1.	คลินิกให้คำปรึกษาสำหรับบุคคลที่มีภาวะออทิซึมสเปกตรัมโดยผู้เชี่ยวชาญ</Typography>
              <br></br>
              <Typography>2.	การให้ความช่วยเหลือบุคคลที่มีภาวะออทิซึมสเปกตรัมในชั้นเรียนรวม โรงเรียนสาธิตมหาวิทยาลัยขอนแก่น มอดินแดง ฝ่ายการศึกษาพิเศษ</Typography>
            </Grid>

            <Grid item xs={6} className={classes.grid1}>
              <Paper className={classes.img1}>
                  รูปภาพ
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Footer></Footer>
      </main>
    </React.Fragment>
  );
}
