/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";
import SectionHeader from "components/section-header";
import data from './career-post.data';

export default function Postings() {
  return (
    <section sx={{ variant: "section.feature" }} id="positions">
      <Container>
        <SectionHeader
          title="Open positions"
          description="All currently available job postings are included below. Don't see your fit? You can still submit a general application at the bottom of the page."
        />
      </Container>
      {data.postings.map(({ title, image, description, btnURL, points }, i) => (
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={image} alt="Thumbnail" width="632" height="750" />
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={title}
            description={description}
            btnName="Apply here"
            btnURL={btnURL}
            points={points}
          />
        </Box>
      </Container>
      ))}
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: ["flex-Start", null, null, "space-between"],
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, null, null, null, null, null, null, 8],
  },
  thumbnail: {
    pr: [2, null, 7, 4, 7, 8, null, 10],
    pl: [0, null, 7, 0],
    display: "flex",
    order: [2, null, null, 0],
    mx: ["auto", 0],
    img: {
      ml: [0, null, null, -3],
      height: "auto",
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ["center", null, null, "left"],
    width: ["100%", null, null, 350, 400, "470px"],
    pb: [7, null, null, 0],
    ".btn__link": {
      mt: [4, null, 5],
    },
  },
};
