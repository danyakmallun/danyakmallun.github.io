module.exports = {
  content: ["index.html", "./materi/materi.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#10b981", // Emerald 500
        secondary: "#64748b", // Slate 500
        dark: "#0f172a", // Slate 900
        light: "#f8fafc", // Slate 50
        border: "#e2e8f0", // Slate 200
        accent: "#14b8a6", // Teal 500 - for status badges
        buttonDark: "#1f2937", // Gray 800 - for black buttons
        // Bento Grid Colors
        'surface-light': '#ffffff',
        'surface-dark': '#1e293b', // Slate 800
        'surface-darker': '#0f172a', // Slate 900
      },
      screens: {
        "2xl": "1320px",
      },
      // Removed backgroundImage to
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollLoopUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        scrollLoopDown: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scroll-up': 'scrollLoopUp 20s linear infinite',
        'scroll-down': 'scrollLoopDown 20s linear infinite',
      },
    },
  },
  plugins: [],
};
