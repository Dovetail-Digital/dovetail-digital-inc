/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import Member from 'assets/team/member.png';

const data = [
  {
    id: 1,
    imgSrc: Member,
    altText: 'Jesse Grunert',
    title: 'Jesse Grunert',
    designation: 'CTO and Founder',
    socialProfile: [
      {
        id: 1,
        name: 'linkedIn',
        path: '#',
        icon: <FaLinkedinIn />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member,
    altText: 'Tyler Marshall',
    title: 'Tyler Marshall',
    designation: 'COO and Founder',
    socialProfile: [
      {
        id: 1,
        name: 'linkedIn',
        path: '#',
        icon: <FaLinkedinIn />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member,
    altText: 'Will Zittlau',
    title: 'Will Zittlau',
    designation: 'Developer',
    socialProfile: [
      {
        id: 1,
        name: 'linkedIn',
        path: '#',
        icon: <FaLinkedinIn />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member,
    altText: 'Ben Grunert',
    title: 'Ben Grunert',
    designation: 'Shopify Expert',
    socialProfile: [
      {
        id: 1,
        name: 'linkedIn',
        path: '#',
        icon: <FaLinkedinIn />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
];

export default function Team() {
  return (
    <section sx={{ variant: 'section.team' }}>
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
