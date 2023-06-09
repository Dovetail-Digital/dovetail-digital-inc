import Navigation from "./Navigation";
import ProviderWrapper from "./ProviderWrapper";
import "./globals.css";

export const metadata = {
  title: "Dovetail Digital Inc.",
  description: "Focusing on purpose",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let menuLinks: { title: string; url: string }[] = [];
  try {
    const strapiServer = String(process.env.STRAPI_SERVER);
    const menu = await fetch(`${strapiServer}/api/menus/1?populate=*`);
    const body = await menu.json();
    const menuLinksObject = body.data.attributes.menu_links;
    if (menuLinksObject.length <= 0) {
      throw new Error("There were no links.");
    }
    for (const linkObject of menuLinksObject.data) {
      menuLinks.push({
        title: linkObject.attributes.title,
        url: linkObject.attributes.url,
      });
    }
  } catch (error) {
    console.log("Err", error);
  }
  return (
    <html lang="en">
      <ProviderWrapper>
        <body>
          <Navigation menuLinks={menuLinks} />
          {children}
        </body>
      </ProviderWrapper>
    </html>
  );
}
