import FAQPlus from "@/assets/Icons/FAQPlus.png";
import PlusGray from "@/assets/Icons/PlusGray.png";

type Props = {
  headerTitle: JSX.Element;
  isOpen?: boolean;
};

function FAQItem({ headerTitle, isOpen = false }: Props) {
  return (
    <div className="border border-[#AFAFAF] border-solid mb-4">
      {/* FAQ ITEM HEADER */}
      <div
        className={`${
          isOpen ? "bg-[#3A3B3B]" : "bg-white"
        } flex items-center justify-between p-4`}
      >
        <>{headerTitle}</>
        <img src={!isOpen ? PlusGray : FAQPlus} alt="FAQPlus" />
      </div>

      {/* FAQ ITEM CONTENT */}
      {isOpen && (
        <p className="px-8 py-12">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in <br /> eros elementum tristique. Duis cursus, mi quis
          viverra ornare, eros dolor interdum <br /> nulla, ut commodo diam
          libero vitae erat."
        </p>
      )}
    </div>
  );
}

export default FAQItem;
