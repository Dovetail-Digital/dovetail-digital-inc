/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Image from 'components/image';

import Review from 'assets/images/review.png';

export default function ClientFeedback() {
  return (
    <section sx={{ variant: 'section.feedback' }} id="feedback">
      <Container>
        <SectionHeader
          title="We promise 100% satisfaction, every time."
          description="As a small agency we hold your satisfaction above all else. We go above and beyond to maintain concise communication and ensure our delivery meets or exceeds your expectations."
        />

        <Box sx={styles.thumbWrapper}>
          <Image
            src={Review}
            alt="satisfaction garunteed"
            width="891"
            height="297"
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
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
