export default async function Page() {
  try {
    // @todo remove the filter to be based on the slug
    const response = await fetch(
      `${process.env.STRAPI_SERVER}/landing-pages?filters[url][$eq]=/&populate[pageComponents][on][banners.logo-banner][populate]=logo.image&populate[pageComponents][on][banners.hero-banner][populate]=*`
    );
    const homePage = await response.json();
  } catch (err) {
    console.log("R", err);
  }
  return (
    <>
      <p>hasdf</p>
    </>
  );
}
