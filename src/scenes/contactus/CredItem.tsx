type Props = {
  img: string;
  title: string;
  description: string;
};

function CredItem({ description, img, title }: Props) {
  return (
    <>
      <div className="flex items-center gap-4 p-6">
        <img src={img} alt={title} />
        <div>
          <p className="text-md font-semibold">{title}</p>
          <p className="text-[#707070]">{description}</p>
        </div>
      </div>
      <div className="w-full border border-[#C4C4C4]"></div>
    </>
  );
}

export default CredItem;
