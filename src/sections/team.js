/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import {FaLinkedinIn } from 'react-icons/fa';

import Jesse from 'assets/team/jesse.jpg';
import Will from 'assets/team/will.jpg';
import Tyler from 'assets/team/tyler.jpg';
import Ben from 'assets/team/ben.jpg';


const data = [
  {
    id: 1,
    imgSrc: Jesse,
    altText: 'Jesse Grunert',
    title: 'Jesse Grunert',
    designation: '',
    socialProfile: [
      {
        id: 1,
        name: 'linkedIn',
        path: 'https://www.linkedin.com/in/jesse-grunert-b549b1b1/',
        icon: <FaLinkedinIn />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Tyler,
    altText: 'Tyler Marshall',
    title: 'Tyler Marshall',
    designation: '',
    socialProfile: [
      {
        id: 1,
        name: 'linkedIn',
        path: 'https://www.linkedin.com/in/tylercmarshall/',
        icon: <FaLinkedinIn />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Will,
    altText: 'Will Zittlau',
    title: 'Will Zittlau',
    designation: '',
    socialProfile: [
      {
        id: 1,
        name: 'linkedIn',
        path: 'https://www.linkedin.com/in/will-zittlau/',
        icon: <FaLinkedinIn />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Ben,
    altText: 'Ben Grunert',
    title: 'Ben Grunert',
    designation: '',
    socialProfile: [
      {
        id: 1,
        name: 'linkedIn',
        path: 'https://www.linkedin.com/in/benjamin-grunert-879b94140/',
        icon: <FaLinkedinIn />,
      },
    ],
  },
];

export default function Team() {
  return (
    <section sx={{ variant: 'section.team' }} id="team">
      <Container>
        <SectionHeader
          title="Meet our team"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
