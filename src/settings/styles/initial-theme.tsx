import { DefaultTheme } from "styled-components";

const initialTheme: DefaultTheme = {
  font: {
    family: {
      Poppins: "'Poppins', sans-serif",
      Roboto: "'Roboto', sans-serif",
    },
    size: {
      headings: {
        h1: ["3rem", "3.3rem"],
        h2: ["2.25rem", "2.5rem"],
        h3: ["1.5rem", "1.625rem"],
        h4: ["0.75rem", "0.75rem"],
      },
      paragraphs: {
        xxsm: ["0.7rem", ".9rem"],
        xsm: ["0.875rem", "1.1rem"],
        sm: ["1.125rem", "1.5rem"],
        md: ["1.5rem", "1.625rem"],
      },
    },
  },
  limits: {
    content: "800px",
    panel: "1500px",
  },
  colors: {
    alert: {
      solid: "#f8e80b",
      weak: "",
    },
    dark: {
      solid: "#04010e",
      weak: "",
    },
    danger: {
      solid: "#FF1E1E",
      weak: "",
    },
    primary: {
      solid: "#13111C",
      weak: "#1a1825",
    },
    secondary: {
      solid: "#0061FF",
      weak: "",
    },
    third: {
      solid: "#E384FF",
      weak: "#b04acf",
    },
    success: {
      solid: "#42946E",
      weak: "",
    },
    light: {
      solid: "#fff",
      weak: "#878593",
    },
  },
};

export default initialTheme;
