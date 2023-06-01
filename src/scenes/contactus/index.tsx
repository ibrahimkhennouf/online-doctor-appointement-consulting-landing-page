import EmailIcon from "@/assets/Icons/EmailIcon.png";
import PhoneIcon from "@/assets/Icons/PhoneIcon.png";
import AddressIcon from "@/assets/Icons/AddressIcon.png";
import CredItem from "./CredItem";
import InputItem from "./InputItem";
import Button from "@/shared/Button";

const staticDataCred = [
  {
    img: EmailIcon,
    title: "Email",
    description: "Healthy 24.@Email.com",
  },
  {
    img: AddressIcon,
    title: "Address",
    description: "Lorem ipsum dolor sit amet, consectetur 33",
  },
  {
    img: PhoneIcon,
    title: "Phone Number",
    description: "+1 (555) 000-0000",
  },
];

const staticDataInps = [
  {
    label: "Full Name",
    placeholder: "Your Name",
  },
  {
    label: "Email",
    placeholder: "Your Email Address",
  },
  {
    label: "Message",
    placeholder: "Type Your Message",
  },
];

function ContactUs() {
  return (
    <section id="contactus" className="mb-20 px-20">
      {/* TITLE */}
      <div className="p-12">
        <h2 className="text-primary-100 font-semibold text-xl mb-4">
          Contact us
        </h2>
        <p className="font-roboto text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      {/* FORM */}
      <div className="flex md:gap-[30%] lg:gap-[50%] px-12 items-center md:flex-row flex-col">
        <div className="mb-6">
          <form>
            {staticDataInps.map((item, idx: number) => {
              return (
                <InputItem
                  key={idx}
                  label={item.label}
                  placeholder={item.placeholder}
                />
              );
            })}
            <Button text="Submit" />
          </form>
        </div>

        {/* CREDENTIALS */}
        <div>
          <p className="text-primary-100 font-semibold text-lg mb-4">
            Availble also on :
          </p>
          {staticDataCred.map((item, idx: number) => {
            return (
              <CredItem
                key={idx}
                img={item.img}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
