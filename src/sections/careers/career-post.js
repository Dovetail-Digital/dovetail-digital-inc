/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import KnowledgeThumb from 'assets/images/3d-modeller.png';
import SectionHeader from 'components/section-header';

const data = {
  title: '3D / Organic Modeller',
  description:
    'part time / contract 3d modeller for organic shapes to be 3d printed.',
    btnName: 'Get in touch',
    btnURL: 'mailto:hello@dovetaildigital.ca?subject=Re: 3D Modeller Application',
    points: [
      {
        icon: <IoIosCheckmarkCircle color="#83C1C0" />,
        text: 'Familiarity with Solidworks/Fusion360 or similar',
      },
      {
        icon: <IoIosCheckmarkCircle color="#83C1C0" />,
        text: 'Knowledge of 3D Printing and design for printing',
      },
      {
        icon: <IoIosCheckmarkCircle color="#83C1C0" />,
        text: 'Must have own software liscence',
      },
    ],
};

export default function Postings() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
      <SectionHeader
          title="Open positions"
          description="All currently available job postings are included below. Don't see your fit? You can still submit a general application at the bottom of the page."
        />
      </Container>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
            points={data.points}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image
            src={KnowledgeThumb}
            alt="Thumbnail"
            width="632"
            height="750"
          />
        </Box>
      </Container>
      <Container sx={styles.containerBox}>
      <Box sx={styles.thumbnail}>
          <Image
            src={KnowledgeThumb}
            alt="Thumbnail"
            width="632"
            height="750"
          />
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
            points={data.points}
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['flex-Start', null, null, 'space-between'],
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, null, null, null, null, null, null, 8],
  },
  thumbnail: {
    pr: [2, null, 7, 4, 7, 8, null, 10],
    pl: [0, null, 7, 0],
    display: 'flex',
    order: [2, null, null, 0],
    mx: ['auto', 0],
    img: {
      ml: [0, null, null, -3],
      height: 'auto',
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ['center', null, null, 'left'],
    width: ['100%', null, null, 350, 400, '470px'],
    pb: [7, null, null, 0],
    '.btn__link': {
      mt: [4, null, 5],
    },
  },
};