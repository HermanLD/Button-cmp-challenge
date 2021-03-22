module.exports = {
  purge: ["./src/App.vue", "./src/components/AppBtn.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        default: {
          1: "#E0E0E0",
          2: "#AEAEAE"
        },
        primary: {
          1: "#2962FF",
          2: "#0039CB"
        },
        secondary: {
          1: "#455A64",
          2: "#1C313A"
        },
        danger: {
          1: "#D32F2F",
          2: "#9A0007"
        },
        transparent: "rgba(41, 98, 255, 0.1)",
        altBlue: "#3D5AFE",
        appBlack: "#3F3F3F",
        disabledGray: "#9E9E9E"
      },
      boxShadow: {
        btn: "0px 2px 3px rgba(51, 51, 51, 0.2)"
      },
      fontFamily: {
        noto: ["Noto Sans JP", "sans-serif"]
      }
    }
  }
};
