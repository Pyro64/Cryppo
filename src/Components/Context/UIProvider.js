import { createGlobalStyle, css } from "styled-components";

export const Scrollable = createGlobalStyle`
    body {
        overflow-y: ${(props) => (props.scrollable ? "unset" : "hidden")};
        padding-right : ${(props) => (props.scrollable ? "unset" : "17px")}
    }
`;
