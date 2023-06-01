/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: " 0.875rem", //14px
        base: "1rem", //16px
        md: "1.125rem", //18px
        lg: "1.5rem", //24px
        xl: "2rem", //32px
        "2xl": "2.5rem", //40px
        "3xl": "3rem", //48px"
      },
      colors: {
        "gray-50": "#B3B3B3", //inp placeholder
        "gray-100": "#707070", //email...

        "black-50": "#1E1E1E",
        "black-100": "#1E1E1EB2",
        "black-200": "#190134", //footer title

        "primary-100": "#005EA3", //blue for titles
        "primary-500": "#685879", //footer links

        "secondary-100": "#F27219", //golden back for buttons
      },
      backgroundImage: (theme) => ({
        "gradient-blue":
          "linear-gradient(145.08deg, #1678F2 3.73%, #65A8FB 132.69%)",
        mainPhoto: "url(./assets/images/MainPhoto.png)",
        "white-gradien":
          "linear-gradient(92.29deg, #FFFFFF 31.91%, rgba(255, 255, 255, 0.770688) 65.44%, rgba(255, 255, 255, 0) 98.17%);",
        testimonialsBck: "url(./assets/images/TestimonialImage.png)",
      }),
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    content: {
      bleuLogo: 'url("./assets/Logos/BleuLogo.png")',
      QOQ: 'url("./assets/Icons/FourthSectionIcon.png")',
      testContent: 'url("./assets/Icons/FAQImageIcon.png")',
    },

    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "2000px",
    },
  },
  plugins: [],
};
