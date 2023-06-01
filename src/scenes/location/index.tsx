import ThirdSectionImage from "@/assets/Images/ThirdSectionImage.png";
import Button from "@/shared/Button";

const Location = () => {
  return (
    <section
      id="location"
      className="flex flex-col md:flex-row py-10 items-center justify-evenly mb-8"
    >
      {/* PARAGRAPH */}
      <div className="md:mb-0 mb-6">
        <h3 className="text-xl mb-4">Find The Best doctor you need</h3>
        <p className="text-base mb-4">
          From rashes to colds, stress management to diabetes <br /> management,
          individual treatment plans are created <br /> around you. Our medical
          and mental health providers work <br /> together, keeping your
          personal journey protected and <br /> connected.
        </p>
        <Button
          text="Get Started"
          borderColor="border-primary-100"
          backgroundColor="bg-white"
          textColor="text-primary-100"
        />
      </div>
      {/* IMAGE */}
      <div>
        <img src={ThirdSectionImage} alt="location" />
      </div>
    </section>
  );
};

export default Location;
