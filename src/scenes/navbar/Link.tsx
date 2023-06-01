import { SelectedPage, SelectedPageType } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Link({ page }: SelectedPageType) {
  const lowerCasePage = page?.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`transition duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
