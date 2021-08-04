/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Marketplace from 'assets/feature/marketplace.svg';
import Print from 'assets/feature/print.svg';
import Code from 'assets/feature/code.svg';

const data = [
  {
    id: 1,
    imgSrc: Marketplace,
    altText: 'eCommerce',
    title: 'Shopify Experts',
    text:
      'With past delivery times in as little as a week, we are well versed in delivering purpose driven software.'
  },
  {
    id: 2,
    imgSrc: Print,
    altText: '3D Printing',
    title: 'On Demand 3D Printing',
    text:
      'High quality printers with a large variety of filament options. Experience with custom design for industrial applications.',
  },
  {
    id: 3,
    imgSrc: Code,
    altText: 'Code',
    title: 'Custom Software Development',
    text:
      'Specializing in custom Shopify implementations, Flutter, React and serverless deployment.',
  },
];

export default function About() {
  return (
    <section sx={{ variant: 'section.feature' }} id="about">
      <Container>
        <SectionHeader 
          title="Who we are"
          description="A boutique development service with experience in 3D Printing, Web, Mobile, and eCommerce. We strive to stay at the forefront of technology and are always excited to expand our expertise. No idea is too big, and no project is too small."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
    gridGap: [
      '40px',
      '45px',
      '45px 30px',
      null,
      '60px 30px',
      '50px 40px',
      null,
      '75px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
