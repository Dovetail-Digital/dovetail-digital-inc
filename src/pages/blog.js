import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/hero';
import Feature from 'sections/about';
import BusinessProfit from 'sections/business-profit';
import Knowledge from 'sections/knowledge';
import ClientFeedback from 'sections/client-feedback';
import WorkFlow from 'sections/workflow';
import Support from 'sections/support';
import Subscribe from 'sections/subscribe';

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
