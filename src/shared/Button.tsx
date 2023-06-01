import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  text: string;
};

const Button = ({
  text,
  backgroundColor = "bg-secondary-100",
  borderColor = "border-transparent",
  textColor = "text-white",
}: Props) => {
  return (
    <div
      className={`w-36 h-12 mt-20 py-3 px-6 ${backgroundColor} ${borderColor} border`}
    >
      {text === "Contact us" ? (
        <p className={`${textColor} text-center`}>
          <AnchorLink href="#contactus">{text}</AnchorLink>
        </p>
      ) : (
        <p className={`${textColor} text-center`}>{text}</p>
      )}
    </div>
  );
};

export default Button;
