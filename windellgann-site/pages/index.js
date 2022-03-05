import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Link, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const cards = [
    { number: 1,
      title: "Learn About God's Way of Salvation",
      body: `"It is written in the prophets, and they shall all be taught of God. Every man therefore that hath heard and learned of the Father, cometh unto me." (John 6:45)`,
      link: "http://home.hiwaay.net/~wgann/sermons/salvat.htm",
      linkTitle: "God's Way of Salvation"
    }
    ,{number: 2}
    ,{number: 2}
    ,{number: 3}
    ,{number: 4}
    ,{number: 5}
    ,{number: 6}
    ,{number: 7}
    ,{number: 8}
    ,{number: 9}
    ,{number: 10}
    ,{number: 11}
    ,{number: 12}];

  return (
    <div className={styles.container}>
      <Head>
        <title>Windell Gann</title>
        <meta name="description" content="Bible study resources by Windell Gann" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Typography variant="h1">Bible Study Resources</Typography>
        <Typography variant="h2">Windell Gann</Typography>
        <Typography variant="h5">Resource site for Bible study lesson sheets such as "Walking Thru the Bible" series; "Bible Book of the Month"; "Bible Survey"; Sermons; PowerPoint Sermons; e-Sword modules, and other resource helps.</Typography>
      </Container>

      <Container>
        <Grid container spacing={40} sm={6} md={4} lg={3}>
          {cards.map(card=>(
            <Grid item>
                <Card sx={{height: "100%", display:"flex", flexDirection: "column"}}>
                <CardMedia
                    image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent>
                    <Typography variant="h5">Heading</Typography>
                    <Typography>This is a media card, we're gonna use it to do stuff.</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"><Link href={card.link ? card.link : "#"}>{card.linkTitle ? card.linkTitle : 'Link Title'}</Link></Button>
                  </CardActions>
                </Card>
              </Grid>
          ))}
        </Grid>
      </Container>

      <Container>
        More Resources
      </Container>
      <Container>
        cards here
      </Container>
    </div>
  )
}
