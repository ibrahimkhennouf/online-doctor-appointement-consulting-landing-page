import { SelectedPageType } from "@/shared/types";
import MenuItems from "./MenuItems";
import { XMarkIcon } from "@heroicons/react/24/solid";

function MobileNavBar({
  handleClick,
  selectedPage,
  setSelectedPage,
}: SelectedPageType) {
  return (
    <div className="fixed right-0 bottom-0 z-40 w-[250px] h-full bg-gray-50 drop-shadow-lg">
      {/* CLOSE ICONE */}
      <div className="flex justify-end p-12">
        <button onClick={handleClick}>
          <XMarkIcon className="w-6 h-6 text-gray-400" />
        </button>
      </div>
      {/* Menu Items */}
      <div className={`ml-[33%] flex flex-col gap-10 text-md`}>
        <MenuItems
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    </div>
  );
}

export default MobileNavBar;
