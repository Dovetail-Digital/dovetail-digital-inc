import ComponentMapper from "./ComponentMapper";
import { Key } from "react";
import ContactUs from "./components/ContactUs";
import { notFound } from "next/navigation";

export default async function Home() {
  // @todo we may not want to do this, because the URL will always be public..
  const formSparkUrl = String(process.env.FORMSPARK_URL);
  let homePageData: {
    data?: [
      {
        attributes: {
          pageComponents: [
            {
              __component: string;
              [key: string]: any;
            }
          ];
        };
      }
    ];
  } = {};

  try {
    // The homepage is always going to be / so we can hardcode the following pattern
    const response = await fetch(
      `${process.env.STRAPI_SERVER}/api/landing-pages?filters[url][$eq]=/&populate[pageComponents][on][banners.logo-banner][populate]=logo.image&populate[pageComponents][on][banners.hero-banner][populate]=*&populate[pageComponents][on][banners.testimonials-banner][populate]=testimonials.profilePicture&populate[pageComponents][on][banners.card-banner][populate]=card.image`
    );
    homePageData = await response.json();
  } catch (err) {
    notFound();
  }

  if (homePageData === undefined) {
    notFound();
  }

  if (homePageData.data === undefined) {
    notFound();
  }

  return (
    <>
      {homePageData.data[0].attributes.pageComponents.map(
        (sectionData: any, index: Key) => {
          return <ComponentMapper key={index} sectionData={sectionData} />;
        }
      )}
      <div className="bg-white">
        <ContactUs formSparkUrl={formSparkUrl} />
      </div>
    </>
  );
}
