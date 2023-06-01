import FAQIcon from "@/assets/Icons/FAQIcon.png";
import FAQImage from "@/assets/Images/FAQImage.png";
import Button from "@/shared/Button";
import FAQItem from "./FAQItem";

const staticData = [
  {
    headerTitle: (
      <h2 className="text-md text-white">
        <span className="text-secondary-100">01:</span>Question text goes here
      </h2>
    ),
    isOpen: true,
  },
  {
    headerTitle: (
      <h2 className="text-md">
        <span className="text-secondary-100">02:</span>Question text goes here
      </h2>
    ),
  },
  {
    headerTitle: (
      <h2 className="text-md">
        <span className="text-secondary-100">03:</span>Question text goes here
      </h2>
    ),
  },
];

function Faq() {
  return (
    <section id="faq">
      <div className="flex items-center justify-evenly py-12 md:flex-row flex-col">
        {/* RIGHT PART */}
        <div className="md:mb-0 mb-6">
          {/* TITLE AND TEXT */}
          <div className="md:mb-12 mb-6">
            <img
              src={FAQIcon}
              alt="FAQIcon"
              className="inline-block align-text-bottom mr-4"
            />
            <h1 className="text-xl font-semibold inline-block">FAQ</h1>
            <p className="text-black-100">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim <br /> in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum <br /> nulla,
              ut commodo diam libero vitae erat."
            </p>
          </div>
          {/* FAQ ITEMS */}
          {staticData.map((item, index) => {
            return (
              <FAQItem
                headerTitle={item.headerTitle}
                isOpen={item.isOpen}
                key={index}
              />
            );
          })}
        </div>
        {/* LEFT PART */}
        <div>
          {/* IMAGE */}
          <img src={FAQImage} alt="FAQImgage" />
          {/* CONTACT US */}
          <div className="relative">
            <div className="before:absolute before:content-testContent before:right-[25px] before:bottom-[10px]">
              <div className="bg-gradient-blue p-8">
                <p className="text-md text-white mb-4">
                  Still have a question?{" "}
                </p>
                <p className="text-md text-white">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit.
                </p>
                <Button
                  text="Contact us"
                  backgroundColor="bg-white"
                  textColor="text-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
