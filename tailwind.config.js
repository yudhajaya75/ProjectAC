/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      screens: {
        "sm-440": "440px",
        "sm320": "320px",
      },
      backgroundImage: {
        heroPattern: "url('/src/assets/bg-banner.png')",
        people: "url('/public/images/bgpeople.webp')",
        About: "url('/src/assets/bg-about.png')",
        formbg: "url('/src/assets/img/form-bg.svg')",
        Webinar: "url('/public/images/banwebminar.webp')",
        Pelatihan: "url('/public/images/banpelatihan.webp')",
        Layanan: "url('/public/images/banner.webp')",
        Konsultasi: "url('/public/images/bannerKonsultasi.webp')",
        webinarDetail: "url('/public/images/detailwebinar.png')",
      },
    },
  },
  plugins: [],
};
