/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Image from 'components/image';

import TeamBuilding from 'assets/images/team-building.png';

export default function CareerIntro() {
  return (
    <section sx={{ variant: 'section.feature' }} id="home">
      <Container sx = {styles.margin}>
        <SectionHeader
          title="Work with us"
          description="As a small agency we have a tightknit, fun and flexible work environment. We take our work seriously, but always maintain a positive, collaborative, and uplifting space. We are happy to accomodate your lifestyle once you're onbooard! Always remote first, but you can come say hi at our Okanagan office. "
        />

        <Box sx={styles.thumbWrapper}>
          <Image
            src={TeamBuilding}
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
  margin: {
    mt: '150px',
  }
};
