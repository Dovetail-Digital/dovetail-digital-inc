import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/hero';

export default function BlogPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="Dovetail Digital - Blog"
          title="Dovetail Digital - Blog"
        />
        <Banner />
      </Layout>
    </ThemeProvider>
  );
}
