import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Link, Paper, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const cards = [
    { number: 1,
      title: "Learn About God's Way of Salvation",
      body: `"It is written in the prophets, and they shall all be taught of God. Every man therefore that hath heard and learned of the Father, cometh unto me." (John 6:45)`,
      link: "/category/salvation",
      linkTitle: "God's Way of Salvation",
      imgSrc: "/static/images/openBible.jpg",
      imgAlt: "Open Bible Image"
    }
    ,{number: 2,
      title: "Walking Thru The Bible",
      body: `A series of Bible Class lessons and sermon outlines to go through the Bible in a one-year program.`,
      link: "/category/walkThruBible",
      linkTitle: "Walking Thru The Bible",
      imgSrc: "/static/images/laptop.jpg",
      imgAlt: "Laptop With Open Bible"
    }
    ,{number: 3,
      title: "Bible Book of the Month",
      body: `These Bible Class Lesson Sheets can be a useful and practical plan for congregational Bible Study. Read about this plan and see some the material already posted.`,
      link: "http://home.hiwaay.net/~wgann/bbom/bbom_index.htm",
      linkTitle: "Bible Book of the Month",
      imgSrc: "/static/images/openBible2.jpg",
      imgAlt: "Open Bible",
    }
    ,{number: 4,
      title: "Bible Survey",
      body: `Thirteen lessons surveying the Old and New Testaments. Lessons sheets and supplement materials such as maps and charts to be used in the class room or in private study.`,
      link: "http://home.hiwaay.net/~wgann/survey/survey.htm",
      linkTitle: "Bible Survey",
      imgSrc: "/static/images/openBible3.jpg",
      imgAlt: "Open Bible",
    }
    ,{number: 5,
      title: "Sermons, Outlines, & Studies",
      body: `Sermons and resources made available on this server that may help one study the Bible. All are FREE for downloading.`,
      link: "http://home.hiwaay.net/~wgann/sermons/index.htm",
      linkTitle: "Sermons, Outlines, & Studies",
      imgSrc: "/static/images/openBible4.jpg",
      imgAlt: "Open Bible",
    }
    ,{number: 6,
      title: "PowerPoint Sermons",
      body: `Sermons illustrated by PowerPoint. There are several CD's full of these sermons that are available to preachers and teachers.`,
      link: "http://home.hiwaay.net/~wgann/powerpoint/index.htm",
      linkTitle: "PowerPoint Sermons",
      imgSrc: "/static/images/openBible5.jpg",
      imgAlt: "Open Bible",
    }
    ,{number: 7,
      title:"Bible Study Lesson Sheets",
      body: `These are lessons designed for either a Bible Study class or for personal study of the Bible. There are questions, fill in the blank, matching, and true false questions on one chapter of the Bible in each study sheet. There is a Study Sheet for every chapter of the New Testament. All the answers come from the Bible itself.`,
      link: "http://home.hiwaay.net/~wgann/lessons/lesson-index.htm",
      linkTitle: "Bible Study Lesson Sheets",
      imgSrc: "/static/images/openBible6.jpg",
      imgAlt: "Open Bible",
    }
    ,{number: 8,
      title: "e-Sword Modules",
      body: `Here you can download free modules for the e-Sword Bible software.`,
      link: "http://home.hiwaay.net/~wgann/e-Sword%20Modules/e-Sword%20index.htm",
      linkTitle: "e-Sword Modules",
      imgSrc: "/static/images/openBible7.jpg",
      imgAlt: "Open Bible",
    }
    ,{number: 9,
      title: "How to Understand the Bible",
      body: `Some guide lines and principles to use in interpreting the Bible.`,
      link: "http://home.hiwaay.net/~wgann/sermons/understd.htm",
      linkTitle: "How to Understand the Bible",
      imgSrc: "/static/images/openBible8.jpg",
      imgAlt: "Open Bible",

    }
    ,{number: 10,
      title: "Chronology of the New Testament",
      body: `A brief chronology of NT events and dates of the NT books. This is in PDF format, to be printed on one sheet of 8.5x11 paper on both sides and folded into a booklet. Good for personal study or a class room hand-out.`,
      link:"/static/pdfs/Chronology-NT-Gann.pdf",
      linkTitle:"Chronology of the New Testament",
      imgSrc: "/static/images/openBible9.jpg",
      imgAlt: "Open Bible",
    }
    ,{number: 11,
      title: "Revelation Notes by Windell Gann",
      body: "PDF file of verse-by-verse notes on Revelation. Good for studying the evidence for the \"Early Date\"",
      link: '/static/pdfs/Revelation_Notes_WG.pdf',
      linkTitle: 'Revelation Notes PDF',
      imgSrc: "/static/images/openBible10.jpg",
      imgAlt: "Open Bible",
    }];

  const friendCards = [
    { number: 1,
      title: "Studies in the Sermon on the Mount",
      body: `Twenty-seven full content lesson outlines ready to be downloaded and printed out into 4-page lesson sheets. Good for either preaching or studying in a Bible class. Lessons c. 1992 by Charles E. Crouch and you have his permission to use them in a classroom.`,
      link: 'http://home.hiwaay.net/~wgann/mount/mount.htm',
      linkTitle: 'Studies in the Sermon on the Mount',
      imgSrc: "/static/images/openBible11.jpg",
      imgAlt: "Open Bible",
    },
    { number: 2,
      title: "Studies in the Gospel of Mark",
      body: `47 full content outlines on the book of Mark. "The Beginning of the Gospel of the Son of God" by Charles E. Crouch`,
      link: 'http://home.hiwaay.net/~wgann/mark/mk-tc.htm',
      linkTitle: 'Studies in the Gospel of Mark',
      imgSrc: "/static/images/openBible12.jpg",
      imgAlt: "Open Bible",
    },
    { number: 3,
      title: "Dispensationalism by Daniel Ridinger",
      body: `A series of five lessons on Dispensational Premillennialism by Daniel Ridinger. There are also some hand-outs with these lessons. All are in PDF format.`,
      link: '/more/dispensationalism',
      linkTitle: 'Dispensationalism Lessons',
      imgSrc: "/static/images/openBible13.jpg",
      imgAlt: "Open Bible",
    },
    { number: 4,
      title: "Daniel Ridinger Sermons",
      body: `Here are sermons presented by Daniel Ridinger. Material on Dispensationalism, and a two part study on the dangers of modern television.`,
      link: 'http://home.hiwaay.net/~wgann/ridinger/index.htm',
      linkTitle: 'Daniel Ridinger Studies',
      imgSrc: "/static/images/openBible14.jpg",
      imgAlt: "Open Bible",
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Bible Study Resources</title>
        <meta name="description" content="Bible study resources by Windell Gann" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Container>
      <Paper sx={{backgroundColor: "#e9ecef", paddingTop: '80px', paddingX:"4%", borderRadius:"5px", paddingBottom: "50px", marginTop: '40px'}}>
        <Typography variant="h2" component="h1" sx={{fontWeight:"300", lineHeight:"1.2", fontSize:"4.5rem"}} >Bible Study Resources</Typography>
        <Typography variant="h3" component="h2" sx={{fontWeight: "500", fontSize:"2rem"}}>Windell Gann</Typography>
        <Typography variant="p" component="h3" sx={{fontWeight:"300", fontSize:"1.25rem"}}>Resource site for Bible study lesson sheets such as "Walking Thru the Bible" series; "Bible Book of the Month"; "Bible Survey"; Sermons; PowerPoint Sermons; e-Sword modules, and other resource helps.</Typography>
        <Box sx={{textAlign:"center", borderRadius:"5px", marginTop: "10px", backgroundColor: "#1976d2", color: "white", marginX:"auto", width:"90%", padding: "10px"}}>
        <Typography color="success" variant="contained" sx={{fontSize:"1.25rem"}} >Hello friends! These files are FREE! You are WELCOME to download anything you can use.</Typography>
        </Box>
      </Paper>

      <Container sx={{marginTop:'20px'}}>
        <Grid container spacing={4}>
          {cards.map(card=>(
            <Grid item key={card.number} xs={12} sm={6} md={3} >
                <Card sx={{height: "100%", display: "flex", flexDirection: "column", position: "relative"}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={card.imgSrc || ''}
                    alt={card.imgAlt || ''}
                  />
                  <CardContent sx={{minHeight: '1px', flex:"1 1 auto"}}>
                    <Typography variant="h5">{card.title || 'Heading'}</Typography>
                    <Typography>{card.body || 'This is a media card, we\'re gonna use it to do stuff.'}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button sx={{width:'100%'}} variant="contained" href={card.link || "#"}>{card.linkTitle || 'Link Title'}</Button>
                  </CardActions>
                </Card>
              </Grid>
          ))}
        </Grid>
      </Container>

      <Paper sx={{backgroundColor: "#e9ecef", paddingTop: '40px', paddingX:"3%", borderRadius:"5px", paddingBottom: "30px", marginTop: '40px'}}>
        <Typography variant="h3">More Resources</Typography>
      </Paper>
      <Container sx={{marginTop:'20px'}}>
        <Grid container spacing={4} >
          {friendCards.map(card=>(
            <Grid item key={card.number} xs={12} sm={6} md={3}>
                <Card sx={{height: "100%", display: "flex", flexDirection: "column", position: "relative"}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={card.imgSrc || ''}
                    alt={card.imgAlt || ''}
                  />
                  <CardContent sx={{minHeight: '1px', flex:"1 1 auto"}}>
                    <Typography variant="h5">{card.title || 'Heading'}</Typography>
                    <Typography>{card.body || 'This is a media card, we\'re gonna use it to do stuff.'}</Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <Button sx={{width:'100%'}} variant="contained" href={card.link || "#"}>{card.linkTitle || 'Link Title'}</Button>
                  </CardActions>
                </Card>
              </Grid>
          ))}
        </Grid>
      </Container>
      </Container>
    </div>
  )
}
