import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  background: "#1B1B1B",
  body: "#0D0D0D",
  color: "#fff",
  filter:
    "invert(100%) sepia(1%) saturate(942%) hue-rotate(223deg) brightness(108%) contrast(101%)",
  left: "2px",
  color: "#fff",
};

export const lightTheme = {
  background: "#E9E9E9",
  body: "#F3F3F3",
  color: "#000",
  filter: "",
  left: "calc(100% - 25px)",
  color: "#333",
};

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${(props) => props.theme.body};
        transition: 0.38s ease-in-out;
    }
    .background {
        background: ${(props) => props.theme.background};
        transition: 0.38s ease-in-out;
    }
    .color {
        color: ${(props) => props.theme.color};
        transition: 0.38s ease-in-out;
    }
    .filter {
        filter: ${(props) => props.theme.filter};
    }
    .switchTheme {
        left: ${(props) => props.theme.left};
    }
    .text {
      color:  ${(props) => props.theme.color};
    }
`;
