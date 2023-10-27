module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        // fb923c
        primary: "#fb923c",
        dark: "#0f172a",
        secondary: "#64748b",
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
