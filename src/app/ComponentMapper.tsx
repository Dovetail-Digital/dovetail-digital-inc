import CardBanner from "./components/CardBanner";
import ImageWithText from "./components/ImageWithText";
import LogoBanner from "./components/LogoBanner";
import MainHero from "./components/MainHero";
import Testimonials from "./components/Testimonials";
import TwoColImage from "./components/TwoColImage";

const componentMapper: { [key: string]: any } = {
  "banners.hero-banner": MainHero,
  "banners.logo-banner": LogoBanner,
  "banners.testimonials-banner": Testimonials,
  "banners.card-banner": CardBanner,
  "banners.image-with-text": ImageWithText,
  "banners.two-column-image": TwoColImage,
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
