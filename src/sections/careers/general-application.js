/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Button } from "theme-ui";
import Image from 'components/image';
import TeamBuilding from 'assets/images/standout.png';
import Arrow from "assets/mail-arrow.svg";

export default function GeneralApplication() {
  return (
    <div sx={styles.wrapper} id="contact">
      <Container sx={styles.container}>
      <Box sx={styles.thumbWrapper}>
          <Image
            src={TeamBuilding}
            alt="satisfaction garunteed"
            width="891"
            height="297"
          />
        </Box>
        <Box sx={styles.contentBox}>
          <Heading sx={styles.heading}>Don't see a posting but think you'll stand out?</Heading>
          <Box sx={styles.btnWrapper}>
            <a href="mailto:careers@dovetaildigital.ca">
              <Button variant="whiteButton" aria-label="Contact Us">
                CONTACT US HERE
              </Button>
            </a>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    zIndex: "10",
    top: -7,
  },
  container: {
    px: [0, "0 !important", "30px !important"],
  },
  contentBox: {
    padding: ["55px 30px 60px", null, null, "55px 30px 60px", "55px 50px 60px"],
    backgroundColor: "#71B0B4",
    backgroundImage: ["none", null, null, `url(${Arrow})`],
    backgroundRepeat: "no-repeat",
    backgroundPosition: "60% center",
    backgroundSize: ["120px", null, null, null, "auto"],
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    textAlign: ["center", null, null, "left"],
    flexDirection: ["column", null, null, "row"],
    justifyContent: ["center", null, null, "space-between"],
  },
  heading: {
    fontSize: [6, 7, 8, null, 9],
    fontFamily: "heading",
    color: "white",
    letterSpacing: "heading",
    fontWeight: "body",
    lineHeight: [1.4, 1.45],
    width: ["100%", "80%", null, 400, "50%", "45%"],
    mb: [5, null, null, 0],
    mt: -1,
  },
  btnWrapper: {
    display: "flex",
    position: "relative",
    ":before, :after": {
      content: '""',
      position: "absolute",
      width: "73px",
      height: "26px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      left: "50%",
      transform: "translateX(-50%)",
      display: ["none", null, null, "block"],
    },
  },
  thumbWrapper: {
    display: 'flex',
    justifyContent: 'center',
    px: 4,
    pb: [0, null, null, null, null, null, null, null, 6],
    img: {
      height: 'auto',
    },
  },
};
