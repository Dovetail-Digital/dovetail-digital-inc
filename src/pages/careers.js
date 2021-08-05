import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import CareerIntro from 'sections/careers/career-intro';
import Team from 'sections/team';
import GeneralApplication from 'sections/careers/general-application';
import Postings from 'sections/careers/career-post';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="Work with us."
          title="Dovetail Digital"
        />
        <CareerIntro />
        <Postings />
        <Team />
        <GeneralApplication />
      </Layout>
    </ThemeProvider>
  );
}
