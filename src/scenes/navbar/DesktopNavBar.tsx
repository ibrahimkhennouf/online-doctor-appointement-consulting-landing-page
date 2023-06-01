import CallingIcon from "@/assets/Icons/CallingIcon.png";
import MenuItems from "./MenuItems";

const DesktopNavBar = () => {
  const flexBetween = "flex justify-between items-center";
  return (
    <>
      {/* LINKS LIST */}
      <div className={`flex gap-8`}>
        <MenuItems />
      </div>
      {/* PHONE NUMBER */}
      <div className={`${flexBetween} gap-8`}>
        <img src={CallingIcon} alt="Calling-icon" />
        <div>
          <p className="text-[#C4C4C4]">Service disponible</p>
          <p>0453 628 125</p>
        </div>
      </div>
    </>
  );
};

export default DesktopNavBar;
