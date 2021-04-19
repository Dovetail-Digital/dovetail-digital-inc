import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Hero from 'sections/hero';
import About from 'sections/about';
import BusinessProfit from 'sections/business-profit';
import Knowledge from 'sections/knowledge';
import ClientFeedback from 'sections/client-feedback';
import WorkFlow from 'sections/workflow';
import Support from 'sections/support';
import Subscribe from 'sections/subscribe';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="Purpose driven software."
          title="Dovetail Digital"
        />
        <Hero />
        <About />
        <WorkFlow />
        <ClientFeedback />
        <BusinessProfit />
        <Knowledge />
        <Support />
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
