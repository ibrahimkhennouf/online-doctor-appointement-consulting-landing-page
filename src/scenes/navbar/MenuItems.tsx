import Link from "./Link";

const MenuItems = () => {
  const StaticPageVals = ["Home", "About us", " Our services", "Contact us"];
  return (
    <>
      {StaticPageVals.map((page, index: number) => {
        return <Link page={page} key={index} />;
      })}
    </>
  );
};

export default MenuItems;
