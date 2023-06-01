import Button from "@/shared/Button";
import FirstIconInList from "@/assets/icons/FirstIconInList.png";
import SecondIconInList from "@/assets/icons/SecondIconInList.png";
import ThirdIconInList from "@/assets/icons/ThirdIconInList.png";
import FourthIconInList from "@/assets/icons/LastIconInList.png";
import { IBlueBoxType } from "@/shared/types";

const staticItems: Array<IBlueBoxType> = [
  { image: FirstIconInList, title: "Online \n consultations" },
  { image: SecondIconInList, title: "Medical advice \n and second opinions" },
  {
    image: ThirdIconInList,
    title: "availability \n 24/7",
    backgroundColor: true,
  },
  { image: FourthIconInList, title: "Health education \n and resources" },
];

function Home() {
  return (
    <section
      id="home"
      className="mx-auto py-10 md:h-full md:pb-0 md:bg-mainPhoto md:bg-contain md:bg-no-repeat md:bg-right-top mb-40"
    >
      {/* TITLE */}
      <div className="md:mt-8 w-[70%] h-5/6 bg-white-gradien mb-8 md:mb-0 px-20">
        <h1 className="text-3xl md:text-2xl mb-2 font-semibold">
          Feel Better About <br /> Finding{"\n"}
          <span className="text-primary-100 text-3xl md:text-2xl font-semibold">
            Healthcare
          </span>
        </h1>
        <p className="text-md">
          Healththy 24 Online ranks highest in telehealth satisfaction among{" "}
          <br />
          direct-to-consumer brands.
        </p>
        <Button text="Get Started" />
      </div>
      {/* Blue Box */}
      <div className="mx-auto bg-primary-100 w-[70%] h-1/4 md:px-11 md:grid md:grid-cols-4 md:gap-4 py-8 md:py-0">
        {staticItems.map((item, idx: number) => {
          return (
            <div
              className={`flex flex-col items-center justify-center gap-3 ${
                item.backgroundColor && "bg-gradient-blue"
              } my-6 md:my-0`}
              key={idx}
            >
              <img src={item.image} alt={item.title} className="md:basis-6" />
              <p className="text-white text-center">{item.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
