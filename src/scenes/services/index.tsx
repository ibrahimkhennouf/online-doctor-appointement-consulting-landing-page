import ServiceGrid from "./ServiceGrid";

const staticData = [
  "Cold & flu",
  "Mental health",
  "Mental health",
  "Headaches",
  "Everyday care",
  "Allergies",
];

function Services() {
  return (
    <section id="ourservices" className="mb-10">
      {/* TEXT */}
      <div className="mb-6">
        <h3 className="text-2xl text-primary-100 font-semibold mb-2 text-center">
          We're here for you
        </h3>
        <p className="text-lg text-center font-roboto text-black-100">
          Visits start at $79 for a 15 min consultation, or could be free
          depending on your insurance. See <br />{" "}
          <a
            href="https://doctorondemand.com/about-us/cost/"
            className="underline"
          >
            costs
          </a>{" "}
          for more information.
        </p>
      </div>
      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 justify-items-center">
        {staticData.map((item, index) => {
          return (
            <ServiceGrid
              title={item}
              key={index}
              ifLink={item === "Allergies" ? true : false}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Services;
