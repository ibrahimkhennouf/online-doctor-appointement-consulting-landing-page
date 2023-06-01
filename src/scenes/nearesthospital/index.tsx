import FourthSectionImage from "@/assets/Images/FourthSectionImage.png";
import Button from "@/shared/Button";

function NearstHospital() {
  return (
    <section
      id="nearsthospital"
      className="flex md:flex-row flex-col items-center justify-evenly mb-8"
    >
      {/* IMAGE */}
      <div className="relative">
        <div className="before:absolute before:content-QOQ before:-bottom-[60px] md:before:-right-[75px] md:before:-bottom-[25px]">
          <img src={FourthSectionImage} alt="FourthSectionImage" />
        </div>
      </div>
      {/* DESCRIPTION  */}
      <div>
        <h4 className="text-xl text-primary-100 mb-4">
          Search the Nearest hospital <br />
          from you
        </h4>
        <p className="text-base">
          Rumah sakit adalah bagian integral dari suatu organisasi <br /> sosial
          dan kesehatan dengan fungsi menyediakan <br /> pelayanan paripurna
          (komprehensif).
        </p>
        <Button text="Search" />
      </div>
    </section>
  );
}

export default NearstHospital;
