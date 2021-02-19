import React from "react";

import {
    
  AppBar,
  Toolbar,
  Link,
  IconButton,
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import DeleteIcon from '@material-ui/icons/Delete';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyle = makeStyles((theme) => ({
    Paper1:{
    width:'100%',
    height:'500px',
    backgroundColor:'grey'
    },
    container1:{
        marginTop:40
    },
    Paper2:{
        width:'100%',
        height:'560px',
        backgroundColor:'grey',
        marginTop:40
    },
    Griditem2:{
        paddingLeft:'60px',
       
    },
    Griditem3:{
        border:'20px',
        borderColor:'pink',
        textAlign:'center'
    },
    Paper3:{
        width:'100%',
        height:'150px',
        backgroundColor:'grey',
        marginTop:40
    },
    boxcontent:{
        textAlign:'center',
    },
    box:{
        marginTop:70,
        backgroundColor:'#EF5666',
        height:'340px',
        textAlign:'center',
        paddingTop:80,
        color:'white',
    },
    buttonbox:{
        marginTop:25,
        weight:'150px',
        height:'50px',
    },
    box2:{
        marginTop:45,
    },
    Paper4:{
        width:'100%',
        height:'300px',
        backgroundColor:'grey',
        marginTop:40
    }

   
}));

export default function Aboutas() {
  const classes = useStyle();

  return (
    <main>
   <Container maxWidth='lg'>
    <Paper className={classes.Paper1}>
    image
    </Paper>
   </Container>

   <Container maxWidth='lg' className={classes.container1}>
     <Grid container>
           <Grid item xs={6}>
            <Typography>
                เกี่ยวกับเรา
            </Typography>
            <br></br>
            <Typography>
                ABOUT AS
            </Typography>
            <br></br>
          
            <Typography>
              ความเป็นมาและวัตถุประสงค์
            </Typography>
            <br></br>
            <Typography>
            สถาบันวิจัยและบริการด้านออทิซึม สำนักงานอธิการบดี มหาวิทยาลัยขอนแก่น ได้รับอนุมัติขึ้นตามข้อสั่งการของนายกรัฐมนตรี พลเอกประยุทธ์ จันทร์โอชา ณ วันที่ 21 มิถุนายน 2560 เป็นหน่วยงานสนับสนุนภารกิจและยุทธศาสตร์ของมหาวิทยาลัยขอนแก่น ในการดูแลบุคคลออทิซึมให้สามารถช่วยเหลือตนเองและอยู่ร่วมกับสังคมอย่างมีความสุข ตามยุทธศาสตร์ชาติ 20 ปี ยุทธศาสตร์ที่ 4 การสร้างโอกาสและความเสมอภาคทางสังคม และแผนพัฒนาเศรษฐกิจและสังคมแห่งชาติ ฉบับที่ 12 พ.ศ.2560-2564 การสร้างความเป็นธรรมและลดความเหลื่อมล้ำในสังคม อีกทั้งนโยบายของรัฐบาลในการลดความเหลื่อมล้ำของสังคมและการสร้างโอกาสการเข้าถึงบริการของรัฐและการยกระดับคุณภาพบริการด้านสาธารณสุขและสุขภาพของประชาชน

            </Typography>
            <Paper className={classes.Paper2}>
    image
    </Paper>
           </Grid>

           <Grid item xs={6} className={classes.Griditem2} >
               <div>
               <Typography align="left">
           เนื่องจากประเทศไทยมีกลุ่มบุคคลที่เป็นโรคความผิดปกติแต่กำเนิดของพัฒนาการทางสมอง หรือโรคออทิซึมสเปกตรัม (Autistic Spectrum Disorder) ซึ่งพบบ่อยในเด็กส่งผลต่อความบกพร่องต่อความบกพร่องทางสมอง 3 ด้าน คือ ด้านสังคม ภาษา และพฤติกรรม ร่วมกับความผิดปกติอื่น ๆ เช่น มีปฏิสัมพันธ์ทางสังคม ไม่สบตา ไม่สนใจคู่สนทนา อ่านใจคนอื่นไม่ออก อยู่ในโลกของตนเอง ทำอะไรซ้ำ ๆ เป็นต้น ความรุนแรงจะมีความแตกต่างกันขึ้นอยู่กับพัฒนาการทางภาษา ระดับสติปัญญา และความบกพร่องต่าง ๆ จะมีความต่อเนื่องตลอดชีวิต การวินิจฉัยและการรักษาตั้งแต่ในวัยเด็กจะทำให้เด็กออทิซึมสเปกตรัม ได้มีโอกาสพัฒนาได้ดีกว่าการรักษาเมื่ออายุมากขึ้น การบำบัดรักษาโรคออทิซึมสเปกตรัมต้องดำเนินการอย่างถูกต้อง เหมาะสมและเข้มข้น โดยการผสมผสานวิธีการต่าง ๆ ทั้งทางการแพทย์ การส่งเสริมพัฒนาการ การจัดรูปแบบการศึกษาที่เหมาะสม การส่งเสริมอาชีพและการมีงานทำ มีสวัสดิการสังคมและการดำเนินชีวิตในชุมชน ดังนั้น การบำบัดจึงต้องมีบุคลากรจากสหวิชาชีพ 
           </Typography>
           </div>
           <br></br>
           <br></br>
           <Paper className={classes.Paper3}>
    image
    </Paper>
            <br></br>
            <br></br>
            <Typography align='center'>
            “พัฒนาคุณภาพชีวิตและสุขภาพของบุคคลออทิสติกสเปกตรัมด้วยงานวิจัยด้านการแพทย์ การศึกษา การสังคม และการกฎหมาย”
            </Typography>
            <br></br>
            <Typography>
            แต่ที่ผ่านมาพบปัญหาสำคัญคือ ประชาชนยังมีความเข้าใจเรื่อง โรคออทิซึมสเปกตรัมน้อย เป็นผลทำให้จำนวนผู้เข้าถึงบริการทางการแพทย์ การศึกษา และการช่วยเหลือทางสังคมมีน้อย โดยพบเพียงร้อยละ 15 ของผู้ป่วยออทิซึม หรือตามรายงานการสำรวจจำนวนผู้ป่วยทางสุขภาพจิตของประเทศตามเขตสาธารณสุขรายจังหวัด ในปี 2555 มีผู้ป่วยออทิซึมที่เข้าถึงบริการเพียง 25,537 ราย 
            </Typography>
            <br></br>
            <Typography>
            ดังนั้น จากเหตุผลและความจำเป็นดังกล่าว มหาวิทยาลัยขอนแก่น จึงได้จัดตั้ง “สถาบันวิจัยและบริการด้านออทิซึม” สำนักงานอธิการบดี มหาวิทยาลัยขอนแก่น ตั้งแต่วันที่ 7 มิถุนายน 2561 เพื่อรองรับการบริการบุคคลออทิซึมให้มีมาตรฐาน และมีการพัฒนาบุคคลออทิซึมในทุกระดับ ทุกเพศทุกวัย รวมไปถึงผู้ปกครอง ครู แพทย์ พยาบาล และบุคคลที่เกี่ยวข้องต่าง ๆ พร้อมกับการดำเนินการวิจัยร่วมกับการบริการที่มีคุณภาพ    
            </Typography>
          
           </Grid>
           </Grid>
   </Container>


   <Container maxWidth='md' className={classes.box}>
    <div className={classes.boxcontent}>
<Typography variant='h4'>
    ร่วมเป็นส่วนหนึ่งกับเรา
</Typography>
<br></br>
<Typography>
พัฒนางานวิจัยและบริการที่มีคุณภาพแก่กลุ่มบุคคลออทิซึม และบุคคลต่าง ๆ ที่เกี่ยวข้อง</Typography>
    </div>
    <Button
        variant="contained"
        color="secondary"
        className={classes.buttonbox}
        startIcon={<FacebookIcon />}
      >
        สถาบันวิจัยและบริการด้านออทิซึม
      </Button>
   </Container>

   <Container maxWidth='lg' className={classes.container1}>
     <Grid container>
           <Grid item xs={6}>
     <div>
     <Paper className={classes.Paper3}>
    image
    </Paper>
     </div>
     <br></br>
           <br></br>
           <div>
     <Paper className={classes.Paper4}>
    image
    </Paper>
     </div>
    
           </Grid>

           <Grid item xs={6} className={classes.Griditem2} >
           <div>
     <Paper className={classes.Paper4}>
    image
    </Paper>
     </div>
     <br></br>
           <br></br>
           <Typography>
               วัตถุประสงค์การจัดตั้ง
           </Typography>
           <br></br>
           <Typography>
           1) เพื่อให้บริการแก่บุคคลออทิซึมให้ได้รับการบริการอย่างทั่วถึง และครอบคลุมในทุกด้านให้สามารถอยู่ร่วมกับสังคมได้อย่างมีความสุข
           </Typography>
           <br></br>
           <Typography>
           2) เพื่อพัฒนาศักยภาพบุคลากรทางการแพทย์และที่เกี่ยวข้องในการดูแลบุคคลออทิซึมได้ตามความต้องการของประเทศ
           </Typography>
           <br></br>
           <Typography>
           3) เพื่อวิจัยค้นหาสาเหตุของโรคออทิซึม วิธีป้องกัน วิธีรักษาให้สามารถนำมาเป็นองค์ความรู้เพื่อการป้องกันการรักษาโรคออทิซึม
           </Typography>
           <br></br>
           <Typography>
           4) เพื่อพัฒนาเครื่องมือคัดกรอง การวินิจฉัย คู่มือการดูแลบุคคลออทิซึมที่ได้มาตรฐาน สามารถนำไปใช้ได้อย่างแพร่หลายได้อย่างสะดวกสบาย

           </Typography>
           <br></br>
           <Typography>
           5) เพื่อส่งเสริมเครือข่ายความร่วมมือเพื่อให้บริการทางการแพทย์และการรักษาพยาบาลแก่บุคคลออทิซึม
           </Typography>
          
           </Grid>
           </Grid>
   </Container>
    </main>
  );
}
