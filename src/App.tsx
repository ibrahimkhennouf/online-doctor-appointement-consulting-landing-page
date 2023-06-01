import NavBar from "@/scenes/navbar";
import Home from "@/scenes/home";
import AboutUs from "@/scenes/aboutus";
import Choice from "@/scenes/choice";
import BleuBanner from "@/scenes/bleubanner";
import Location from "@/scenes/location";
import Services from "@/scenes/services";
import NearstHospital from "@/scenes/nearesthospital";
import Testimonials from "@/scenes/testimonials";
import Faq from "@/scenes/faq";
import GreatDocs from "@/scenes/greatDocs";
import ContactUs from "@/scenes/contactus";
import MapImage from "@/assets/Images/MapImage.png";
import Footer from "@/scenes/footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
      <AboutUs />
      <Choice />
      <BleuBanner />
      <Location />
      <Services />
      <NearstHospital />
      <Testimonials />
      <Faq />
      <GreatDocs />
      <ContactUs />
      <img src={MapImage} alt="MapImage" className="w-full" />
      <Footer />
    </div>
  );
}

export default App;
