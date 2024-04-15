import styled from "styled-components";
import { ReactComponent as Logo } from "./images/GitScoutLogo.svg";

export const HeaderWrapper = styled.header`
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-gap: 16px;
    align-items: center;
    margin-bottom: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}) {
        justify-content: center;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        grid-template-columns: max-content;
        text-align: center;
        grid-gap: 10px;
    }
`;

export const GitScoutLogo = styled(Logo)`
    width: 100px;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        justify-self: center;
    }
`;

export const MainHeading = styled.h1`
    margin: 0;
    font-size: 46px;
    font-weight: 700;
    letter-spacing: 1.5px;
`;