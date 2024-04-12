import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        margin: 100px auto 40px !important;
        width: 1000px;
        max-width: 90%;
        font-family: "Roboto", sans-serif;
        color: ${({ theme }) => theme.colors.riverTour};
        background-color: ${({ theme }) => theme.colors.ninja};
        word-break: break-word;

        @media (max-width: ${({ theme }) => theme.breakpoints.largeMobile}) {
            margin: 40px auto 40px !important;
        }
    }

    h1, h2, input {
        color: ${({ theme }) => theme.colors.white};
    }

    a {
        -webkit-tap-highlight-color: transparent;
    }
`;