import Logo from "@/assets/Logos/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";
import { Bars3Icon } from "@heroicons/react/20/solid";

const NavBar = () => {
  const flexBetween = "flex justify-between items-center";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");

  const handleClick = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  return (
    <nav className="mb-10">
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-3 px-8 bg-white`}
      >
        {/* IMAGE LOGO */}
        <img src={Logo} alt="Main-logo" />
        {/* DISPLAY DESKTOP  */}
        {isAboveMediumScreens ? (
          <DesktopNavBar />
        ) : (
          <button
            className="rounded-full bg-primary-100 p-2"
            onClick={handleClick}
          >
            <Bars3Icon className="w-6 h-6 text-white" />
          </button>
        )}
        {/* DISPLAY MOBILE */}
        {!isAboveMediumScreens && isMenuToggled && (
          <MobileNavBar handleClick={handleClick} />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
