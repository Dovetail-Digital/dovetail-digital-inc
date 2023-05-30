import Navigation from "./Navigation";
import ThemeWrapper from "./ThemeWrapper";
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
  let menuLinks: { title: string; url: string }[] = [
    { title: "Home", url: "#" },
    { title: "Contact", url: "#" },
    { title: "Services", url: "#" },
    { title: "Case Studies", url: "#" },
  ];
  try {
    const menu = await fetch("http://127.0.0.1:1337/api/menus/1?populate=*");
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
    console.log("r", error);
  }
  return (
    <html lang="en">
      <ThemeWrapper>
        <body>
          <Navigation menuLinks={menuLinks} />
          {children}
        </body>
      </ThemeWrapper>
    </html>
  );
}
