/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import KnowledgeThumb from 'assets/images/ecommerce.png';
import DrawingArrow from 'assets/drawing-arrow.svg';

const data = {
  title: 'Shopify Experts',
  description:
    'Need to take your brick and mortar store online? Already have a Shopify store but need custom development / app integrations? We have you covered. ',
    btnName: 'Get in touch',
    btnURL: 'mailto:hello@dovetaildigital.ca',
    points: [
      {
        icon: <IoIosCheckmarkCircle color="#83C1C0" />,
        text: 'Site Setup (payments, products, UI/UX, etc)',
      },
      {
        icon: <IoIosCheckmarkCircle color="#83C1C0" />,
        text: 'App & Social Media Integrations',
      },
      {
        icon: <IoIosCheckmarkCircle color="#83C1C0" />,
        text: 'Custom development',
      },
    ],
};

export default function Shopify() {
  return (
    <section sx={{ variant: 'section.shopify' }}>
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
      <Box sx={styles.bottomArrow}>
        <Image src={DrawingArrow} alt="Arrow" />
      </Box>
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
  bottomArrow: {
    position: 'absolute',
    bottom: -185,
    left: '33%',
    display: ['none', null, null, null, null, null, null, 'block'],
    webkitTransform: 'scaleX(-1)',
    transform: 'scaleX(-1)'
  },
};