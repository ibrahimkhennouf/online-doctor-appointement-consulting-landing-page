import GoldenStarsIcon from "@/assets/Icons/GoldenStarsIcon.png";
import TestimonialLeftArrow from "@/assets/Icons/TestimonialLeftArrow.png";
import TestimonialRightArrow from "@/assets/Icons/TestimonialRightArrow.png";
import TestimonialAvatarImage from "@/assets/Images/TestimonialAvatarImage.png";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="md:bg-testimonialsBck md:h-full bg-cover bg-no-repeat bg-right grid place-items-center mb-4"
    >
      <div className="bg-white w-4/5 text-center py-8 px-12">
        {/* TITLES AND RATING */}
        <div className="flex flex-col items-center gap-5 mb-8">
          <p className="text-base text-secondary-100 font-semibold">
            Testimonial
          </p>
          <div className="w-36 border-2 border-secondary-100 "></div>
          <h4 className="text-lg font-semibold">You're in safe hands</h4>
          <img src={GoldenStarsIcon} alt="Golden Stars" />
        </div>

        {/* TESTIMONIAL */}
        <div className="flex justify-evenly items-center">
          <img src={TestimonialLeftArrow} alt="Testimonial Left Arrow" />
          <p className="text-base">
            Our caring and supportive team has experience working with patients
            face-to-face <br /> and dealing with mental health issues. Spend
            less time searching for help and more <br /> time connecting with
            someone you can trust.
          </p>
          <img src={TestimonialRightArrow} alt="Testimonial Right Arrow" />
        </div>

        {/* AVATAR AND NAME */}
        <div className="flex flex-col items-center gap-6 mt-10">
          <img src={TestimonialAvatarImage} alt="Testimonial Avatar Image" />
          <div>
            <p className="font-semibold">Christopher Nolan</p>
            <p className="text-sm">Our client</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
