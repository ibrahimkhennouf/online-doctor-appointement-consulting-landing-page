import AnchorLink from "react-anchor-link-smooth-scroll";
import AppStoreLogo from "@/assets/Logos/AppStoreLogo.png";
import GooglePlayLogo from "@/assets/Logos/GooglePlayLogo.png";
import UpIcon from "@/assets/Icons/UpIcon.png";

function Footer() {
  return (
    <footer className="text-primary-500 relative md:px-20">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-16 items-center">
        {/* HELP */}
        <div>
          <h3 className="text-black-200 font-bold">Help center</h3>
          <p>
            <AnchorLink href="#faq">Frequently Asked Questions</AnchorLink>
          </p>
          <p>Driver Training Platform</p>
          <p>Support</p>
        </div>
        {/* HEALTHY */}
        <div>
          <h3 className="text-black-200 font-bold">Healthy 24</h3>
          <p>C G U</p>
          <p>Privacy</p>
          <p>Press</p>
          <p>Partnership</p>
        </div>
        {/* APPS */}
        <div>
          <h3 className="text-black-200 font-bold">Download the application</h3>
          <div>
            <img src={AppStoreLogo} alt="App Store" className="inline-block" />
            <img
              src={GooglePlayLogo}
              alt="Google Play"
              className="inline-block"
            />
          </div>
        </div>
      </div>
      <p className="p-16">Healthy 2023 ©</p>
      <AnchorLink href="#home">
        <img src={UpIcon} alt="up icon" className="absolute bottom-0 right-0" />
      </AnchorLink>
    </footer>
  );
}

export default Footer;
