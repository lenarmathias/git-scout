import styled from "styled-components";
import { ReactComponent as Logo } from "./images/GitScoutLogo.svg";

export const HeaderWrapper = styled.header`
    margin-bottom: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}) {
        display: grid;
        justify-content: center;
    }
`;

export const GitScoutLogo = styled(Logo)`
    width: 100px;
    transform: scale(1);
    transition: transform 0.5s ease;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        width: 60px;
        justify-self: center;
    }
`;

export const MainHeading = styled.h1`
    margin: 0;
    font-size: 46px;
    font-weight: 700;
    letter-spacing: 1.5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        font-size: 36px;
    }
`;