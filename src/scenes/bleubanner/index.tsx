import AppStoreLogo from "@/assets/Logos/AppStoreLogo.png";
import GooglePlayLogo from "@/assets/Logos/GooglePlayLogo.png";
import WhiteStarsIcon from "@/assets/Icons/WhiteStarsIcon.png";

function BleuBanner() {
  return (
    <section id="bleubanner" className="mb-6">
      <div className="bg-primary-100 md:flex items-center justify-evenly py-[56px] px-6 md:px-0">
        {/* DESCRIPTION */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-white text-2xl font-sora">Get the app</h3>
          <p className="text-white text-lg">
            Rated 4.9 out of 5 by more than 150k reviewers.
          </p>
          <p className="text-white text-base">
            Register in the app and be ready to see a doctor, therapist or{" "}
            <br />
            psychiatrist anytime, anywhere. Available for iPhone and Android.
          </p>
        </div>
        {/* LOGOS */}
        <div className="flex flex-col md:items-end gap-5 items-center">
          {/* APPS LOGOS */}
          <div>
            <img
              src={AppStoreLogo}
              alt="AppStoreLogo"
              className="inline-block mr-6 mb-4 md:mb-0"
            />
            <img
              src={GooglePlayLogo}
              alt="GooglePlayLogo"
              className="inline-block"
            />
          </div>
          {/* RATING */}
          <div>
            <span className="text-white text-lg">4.9</span>
            <img
              src={WhiteStarsIcon}
              alt="whiteStarrIcon"
              className="inline-block align-text-bottom ml-6"
            />
          </div>
          <p className="text-white text-base">190.7K Rating</p>
        </div>
      </div>
    </section>
  );
}

export default BleuBanner;
