import Logo from "@/assets/Logos/Logo.png";
import SecondSectionImage from "@/assets/Images/SecondSectionImage.png";

const staticChoice = [
  "Experienced and Professional Team",
  "Comprehensive Services",
  "User-Friendly Interface",
  "Safe and Secure Data Storage",
  "Personalized Care",
  "Positive Reputation",
  "Convenient Access to Healthcare Services.",
];

function Choice() {
  return (
    <section id="choice" className="mb-12">
      <div className="flex items-center justify-around md:flex-row flex-col gap-8">
        {/* IMAGE */}
        <div>
          <img src={SecondSectionImage} alt="seconde-section-image" />
        </div>

        {/* DESCRIPTION */}
        <div>
          <div className="mb-8">
            <h3 className="font-semibold text-xl inline-block">Why choosing</h3>
            <img
              src={Logo}
              alt="Logo"
              className="inline-block align-bottom ml-4 w-[200px]"
            />
          </div>
          <p className="text-base leading-6 mb-8">
            Meet with an urgent care doctor in minutes, 24/7.Schedule a session
            with <br /> a therapist or psychiatrist this week.
          </p>
          <ul className="list-image-[url(./assets/Icons/CheckIcon.png)]">
            {staticChoice.map((item, index) => (
              <li key={index} className="mb-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Choice;
