import CardBanner from "./components/CardBanner";
import ImageWithText from "./components/ImageWithText";
import LogoBanner from "./components/LogoBanner";
import MainHero from "./components/MainHero";
import SecondaryHero from "./components/SecondaryHero";
import Testimonials from "./components/Testimonials";
import TwoColImage from "./components/TwoColImage";

const componentMapper: { [key: string]: any } = {
  "banners.hero-banner": MainHero,
  "banners.logo-banner": LogoBanner,
  "banners.testimonials-banner": Testimonials,
  "banners.card-banner": CardBanner,
  "banners.image-with-text": ImageWithText,
  "banners.two-column-image": TwoColImage,
  "banners.secondary-hero": SecondaryHero,
};

export default function ComponentMapper({
  sectionData,
}: {
  sectionData: { __component: string; global: { backgroundColor: string } };
}) {
  const Component = componentMapper[sectionData.__component];

  if (!Component) {
    return <p>NOT FOUND!</p>;
  }

  let backgroundColor = sectionData.global?.backgroundColor;
  if (sectionData.global === null || sectionData.global === undefined) {
    backgroundColor = "white";
  }
  const backgroundClassName = "bg-" + backgroundColor;
  return (
    <div className={backgroundClassName}>
      <Component {...sectionData} />
    </div>
  );
}
