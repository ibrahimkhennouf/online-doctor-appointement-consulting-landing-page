import Logo from "@/assets/Logos/Logo.png";
import FirstSectionImage from "@/assets/Images/FirstSectionImage.png";

function AboutUs() {
  return (
    <section id="aboutus" className="mb-12">
      <div className="flex items-center justify-around md:flex-row flex-col gap-8">
        {/* DESCRIPTION */}
        <div>
          <div className="mb-8">
            <h3 className="font-semibold text-xl inline-block">About</h3>
            <img
              src={Logo}
              alt="Logo"
              className="inline-block align-bottom ml-4 w-[200px]"
            />
          </div>
          <p className="font-roboto text-md leading-10">
            With 24/7 access to online doctors, psychiatrists, psychologists,
            therapists <br /> and other medical experts, care is always
            available, anytime and anywhere.
            <br /> Select and see your favorite providers again and again, right
            from your <br /> smartphone, tablet or computer.
            <br /> Better yet, Doctor On Demand is a covered benefit for over 98
            million <br />
            Americans by their health plan or employer. It’s free to sign up and
            easy to <br /> check your coverage when you register.
          </p>
        </div>
        {/* IMAGE */}
        <div className="relative">
          <div className="before:absolute before:content-bleuLogo before:-bottom-[25px] md:before:-left-[45px] before:left-0">
            <img src={FirstSectionImage} alt="first-section-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
