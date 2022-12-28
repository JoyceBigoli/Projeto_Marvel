import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:'Marvel', sans-serif;;
    }
    button {
        cursor: pointer;
    }
    body {
        background-color: ${({theme}) => theme.colors.dark_800};
        color:white;
        padding: 2rem;
    }
    p {
        text-align: center;
    }
    a {
        color: inherit;
        text-decoration: none;
        &:hover {
            filter: brightness(0.8);
        }
    }

`