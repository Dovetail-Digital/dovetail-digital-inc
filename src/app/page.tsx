import PageWrapper from "./components/PageWrapper";
import ComponentMapper from "./ComponentMapper";
import { Key } from "react";

export default async function Home() {
  let homePageData;
  try {
    // The homepage is always going to be / so we can hardcode the following pattern
    const response = await fetch(
      "http://127.0.0.1:1337/api/landing-pages?filters[url][$eq]=/&populate[pageComponents][on][banners.logo-banner][populate]=logo.image&populate[pageComponents][on][banners.hero-banner][populate]=*"
    );
    homePageData = await response.json();
  } catch (err) {
    console.log("R", err);
  }

  return (
    <PageWrapper>
      {homePageData.data[0].attributes.pageComponents.map(
        (sectionData: any, index: Key) => (
          <ComponentMapper key={index} sectionData={sectionData} />
        )
      )}
    </PageWrapper>
  );
}
