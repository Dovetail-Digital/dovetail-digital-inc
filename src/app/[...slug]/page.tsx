export const revalidate = 60;
import { Key } from "react";
import ComponentMapper from "../ComponentMapper";
import ContactUs from "../components/ContactUs";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string[] } }) {
  const formSparkUrl = String(process.env.FORMSPARK_URL);
  let pageData:
    | {
        data: [
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
      }
    | any = {};

  try {
    const urlSlug = params.slug.join("/");
    // The homepage is always going to be / so we can hardcode the following pattern
    const response = await fetch(
      `${process.env.STRAPI_SERVER}/api/landing-pages?filters[url][$eq]=/${urlSlug}&populate[pageComponents][on][banners.logo-banner][populate]=logo.image&populate[pageComponents][on][banners.testimonials-banner][populate]=testimonials.profilePicture&populate[pageComponents][on][banners.card-banner][populate]=card.image&populate[pageComponents][on][banners.image-with-text][populate]=image&populate[pageComponents][on][banners.two-column-image][populate]=images&populate[pageComponents][on][banners.secondary-hero][populate]=image&populate[pageComponents][on][banners.hero-banner][populate]=heroImage&populate[pageComponents][on][banners.hero-banner][populate]=global&populate[pageComponents][on][banners.secondary-hero][populate]=global&populate[pageComponents][on][banners.two-column-image][populate]=global&populate[pageComponents][on][banners.logo-banner][populate]=global&populate[pageComponents][on][banners.card-banner][populate]=global&populate[pageComponents][on][banners.testimonials-banner][populate]=global&populate[pageComponents][on][banners.hero-banner][populate]=cta&populate[pageComponents][on][banners.image-with-text][populate]=global`
    );
    pageData = await response.json();
  } catch (err) {
    notFound();
  }
  if (pageData === undefined) {
    notFound();
  }

  if (pageData.data === undefined) {
    notFound();
  }

  if (pageData.data.length === 0) {
    notFound();
  }

  return (
    <>
      {pageData.data[0].attributes.pageComponents.map(
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
