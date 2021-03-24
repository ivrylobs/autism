import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({

 
  
  update: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0
    },
  },
  NewsUpdate: {
    borderRadius: 10,
    padding: 20,
  },
  NewsUpdate2: {
    color: "#3AC7FD",
    fontSize: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: 8
    },
  },
  TypoNews2: {
      paddingBottom: 15
  },
  updateLink: {
      padding: 0
  },
  PaperUpdate: {
    marginTop: 15
}
}));

export default function Blog(props) {
  const classes = useStyles(props);

  return (
    <React.Fragment>
      <main>
      <Paper elevation={1} className={classes.NewsUpdate}>
                <Typography
                  variant="h6"
                  align="left"
                  className={classes.TypoNews}
                >
                  อัพเดตล่าสุด
                </Typography>
                <Divider />
                <List className={classes.update}>
                  <ListItem component={Button} className={classes.updateLink}>
                    <ListItemText>
                      <Typography
                        variant="caption"
                        className={classes.NewsUpdate2}
                      >
                        สถาบันวิจัยและบริการด้านออทิซึม - 19/02/2564
                      </Typography>
                      <Typography variant="subtitle2" className={classes.TypoNews2}>
                        ได้รับเชิญเป็นวิทยากรการอบรมเชิง
                        ปฏิบัติการพัฒนาศักยภาพผู้ปกครอง ผู้ดูแล
                        และเครือข่ายสู่การเป็นต้นแบบ ครั้งที่ 1 เรื่อง
                        “การพัฒนาสู่สุขภาวะ”
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <Divider />
                  <ListItem component={Button} className={classes.updateLink}>
                    <ListItemText>
                      <Typography
                        variant="caption"
                        className={classes.NewsUpdate2}
                      >
                        สถาบันวิจัยและบริการด้านออทิซึม - 17/02/2564
                      </Typography>
                      <Typography variant="subtitle2">
                        คณะผู้ตรวจสอบภายในกองตรวจสอบภายในสำนักงานอธิการบดี
                        เข้าตรวจสอบหน่วยงานเพื่อแจ้งขอบเขตการตรวจสอบ
                        ประจำปีงบประมาณ 2564
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <Divider />
                  <ListItem component={Button} className={classes.updateLink}>
                    <ListItemText>
                      <Typography
                        variant="caption"
                        className={classes.NewsUpdate2}
                      >
                        สถาบันวิจัยและบริการด้านออทิซึม - 28/01/2564
                      </Typography>
                      <Typography variant="subtitle2">
                        สถาบันวิจัยและบริการด้านออทิซึมจัดกิจกรรมลานเพลิน
                        ภายใต้โครงการ โครงการศูนย์การเรียนรู้เพื่อบุคคล
                        ออทิสติกตามแนวเศรษฐกิจพอเพียง ณ ศูนย์การเรียนรู้เกษตรผสมผสาน บ้านโนนกู่ ต.สาวะถี อ.เมือง
                        จ.ขอนแก่น
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <Divider />
                  <ListItem component={Button} className={classes.updateLink}>
                    <ListItemText>
                      <Typography
                        variant="caption"
                        className={classes.NewsUpdate2}
                      >
                        สถาบันวิจัยและบริการด้านออทิซึม - 26/01/2564
                      </Typography>
                      <Typography variant="subtitle2">
                        สถาบันวิจัยและบริการด้วนออทิซึม ขอแสดงความยินดี
                        ดร.ธิรากร มณีรัตน์ ที่ได้รับการแต่งตั้งให้ดำรงตำแหน่ง
                        ประธานสภาคนพิการทุกประเภท จังหวัดขอนแก่น
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <Divider />
                </List>
              </Paper>
      </main>
    </React.Fragment>
  );
}
