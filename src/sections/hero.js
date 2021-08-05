/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect} from "react";
import Typed from "react-typed";
import { Container, Box, Heading, Text } from "theme-ui";
import lottieWeb from "lottie-web";

export default function Hero() {
  useEffect(() => {
var canvas = document.getElementsByClassName('.lottie');
canvas.width  = 800;
canvas.height = 600;
  });

  const textLines = [
    'Purpose Driven Software.'
  ];
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary" style={{textAlign: "center"}}>
          <Typed strings={textLines} typeSpeed={60} loop={true} backSpeed={30} backDelay={2000} />
          </Heading>
          <Text as="p" variant="heroSecondary">
            {/* Add secondary hero text here */}
          </Text>
        </Box>

        {/* <Box sx={styles.banner.imageBox}>
          <div sx={styles.banner.lottie} style={{width:"800px", height:"fit-content"}} class="lottie" data-animation-path="/scrolling-phone.json" data-anim-loop="true" data-preserve-aspect-ratio ="xMidYMid meet" data-name="phoneAnimation"></div>
        </Box> */}
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ["30px","100px","100px", "100px", "0"],
    backgroundColor: "background_brand",
    overflow: ["hidden", "initial", null, null, "hidden"],
    pb: [0, null, null, null, 2],
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: ["column", null, null, null, "row"],
    },
    lottie:{
      height: "inherit",
      width: "inherit",
      '@media screen and (max-width: 880px)': {
      height: "100%!important",
      width: "100%!important",
      }
    },
    contentBox: {
      minHeight: "235px",
      width: ["100%", 430, 550, "75%", "50%", "45%"],
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      mt: "auto",
      mb: "auto",
      mx: [0, "auto"],
      textAlign: ["center", null, null, null, "left"],
      '@media screen and (max-width: 880px)': {
        mb: "auto",
        }
    },
    imageBox: {
      justifyContent: "center",
      textAlign: ["center", null, null, null, "right"],
      mr: [0, null, null, null, null, null, -6, -7],
      pl: [0, null, "40px"],
      mt: "auto",
      mb: "auto",
      '@media screen and (max-width: 880px)': {
        mt: "0",
        }
    },
  },
};
