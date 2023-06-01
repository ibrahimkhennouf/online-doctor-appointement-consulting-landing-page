import BubblesIcon from "@/assets/icons/BubblesIcon.png";

type Props = {
  title: string;
  ifLink?: boolean;
};

const staticData = ["Cough", "Headaches", "Nausea & vomiting", "Fever"];

function ServiceGrid({ title, ifLink }: Props) {
  return (
    <div className="p-8">
      {/* TITLE AND ICON */}
      <div>
        {ifLink ? (
          <a
            href="https://doctorondemand.com/what-we-treat/allergies/"
            className="font-semibold mr-8"
          >
            {title}
          </a>
        ) : (
          <p className="font-semibold inline-block mr-8">{title}</p>
        )}

        <img src={BubblesIcon} alt="Bubbles" className="inline-block" />
      </div>
      {/* LIST OF SYMPTHOMS */}
      <ul className="list-disc list-inside">
        {staticData.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default ServiceGrid;
