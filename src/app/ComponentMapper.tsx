import LogoBanner from "./components/LogoBanner";
import MainHero from "./components/MainHero";

const componentMapper: { [key: string]: any } = {
  "banners.hero-banner": MainHero,
  "banners.logo-banner": LogoBanner,
};

export default function ComponentMapper({
  sectionData,
}: {
  sectionData: { __component: string };
}) {
  const Component = componentMapper[sectionData.__component];

  if (!Component) {
    return <p>NOT FOUND!</p>;
  }

  return <Component {...sectionData} />;
}
