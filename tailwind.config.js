module.exports = {
  content: ["index.html","./materi/materi.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        // fb923c
        primary: "#059669",
        second: "#2dd4bf",
        dark: "#0f172a",
        secondary: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
      backgroundImage: {
        'bg-about' : "url('/src/img/bg-about.jpg')",
      },
    },
  },
  plugins: [],
};
