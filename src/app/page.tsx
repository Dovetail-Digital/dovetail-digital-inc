import MainHero from "./components/MainHero";
import LogoBanner from "./components/LogoBanner";
import PageWrapper from "./components/PageWrapper";

function fetchWithDelay(url: string, delay = 5000) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        setTimeout(() => resolve(response.json()), delay);
      })
      .catch((error) => reject(error));
  });
}

export default async function Home() {
  try {
    const response = await fetchWithDelay(
      "http://127.0.0.1:1337/api/landing-pages/1?populate[pageComponents][populate]=*"
    );
    const homePage = await response;
  } catch (err) {
    console.log("R", err);
  }

  return (
    <PageWrapper>
      <MainHero />
      <LogoBanner titleText="Technologies we use" />
    </PageWrapper>
  );
}
