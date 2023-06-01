import DoctorsImage from "@/assets/Images/DoctorsImage.png";

function GreatDocs() {
  return (
    <section id="greatdocs" className="mb-8">
      {/* TITLES */}
      <div className="text-center">
        <h1 className="text-xl font-semibold mb-10">
          Our secret to great virtual <br />
          care is great doctors
        </h1>
        <p className="text-sm text-black-100 font-roboto mb-10">
          Board-certified | Top 5% of medical specialists in the world | +90%
          satisfaction rating
        </p>
      </div>
      {/* IMAGE */}
      <img src={DoctorsImage} alt="DoctorsImage" className="mx-auto w-full" />
    </section>
  );
}

export default GreatDocs;
