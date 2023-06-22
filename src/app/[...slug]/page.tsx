import { Key } from "react";
import ComponentMapper from "../ComponentMapper";
import TestComponent from "../components/TestComponent";
import ContactUs from "../components/ContactUs";
import TwoColImage from "../components/TwoColImage";

export default async function Page({
  params,
  children,
}: {
  params: { slug: string };
  children: React.ReactNode;
}) {
  const formSparkUrl = String(process.env.FORMSPARK_URL);
  let pageData: any;
  try {
    const urlSlug = params.slug.join("/");
    // The homepage is always going to be / so we can hardcode the following pattern
    const response = await fetch(
      `${process.env.STRAPI_SERVER}/api/landing-pages?filters[url][$eq]=/${urlSlug}&populate[pageComponents][on][banners.logo-banner][populate]=logo.image&populate[pageComponents][on][banners.hero-banner][populate]=*&populate[pageComponents][on][banners.testimonials-banner][populate]=testimonials.profilePicture&populate[pageComponents][on][banners.card-banner][populate]=card.image&populate[pageComponents][on][banners.image-with-text][populate]=*`
    );
    pageData = await response.json();
    if (pageData.data.length === 0) {
      return <h2>Page not found</h2>;
    }
    console.log("PageData", pageData);
  } catch (err) {
    console.log("Err", err);
  }
  return (
    <>
      {pageData.data[0].attributes.pageComponents.map(
        (sectionData: any, index: Key) => {
          return (
            <div className="odd:bg-dovetail-gray">
              <ComponentMapper key={index} sectionData={sectionData} />
            </div>
          );
        }
      )}
      <TwoColImage />
      <div className="bg-white">
        <ContactUs formSparkUrl={formSparkUrl} />
      </div>
    </>
  );
}
