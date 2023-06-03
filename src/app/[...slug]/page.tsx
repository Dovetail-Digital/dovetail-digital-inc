export default async function Page() {
  try {
    // The homepage is always going to be / so we can hardcode the following pattern
    const response = await fetch(
      "http://127.0.0.1:1337/api/landing-pages?filters[url][$eq]=/&populate[pageComponents][populate]=*"
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
