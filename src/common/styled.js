import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const ellipseOne = ({ theme }) => theme.colors.lustPriestess;
const ellipseTwo = ({ theme }) => theme.colors.blueRuin;

export const CommonContainer = styled.div`
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.riverStyx};
    border: 1px ${({ theme }) => theme.colors.bluePlaza} solid;
    border-radius: 4px;
    box-shadow: 0px 3px 6px 0px ${({ theme }) => theme.colors.ninjaShadow};

    ${({ $infoContainer }) => $infoContainer && css`
        background: radial-gradient(ellipse at 40% 0%, ${ellipseOne} 0, transparent 75%), 
                    radial-gradient(ellipse at 60% 0%, ${ellipseTwo} 0, transparent 75%);
    `}
`;

export const GridWrapper = styled.div`
    display: grid;
    grid-gap: 8px;

    ${({ $mainPageWrapper }) => $mainPageWrapper && css`
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;

        @media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}) {
            grid-gap: 16px;
            display: flex;
            flex-direction: column-reverse;
        }
    `}
`;

export const FlexWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}) {
        gap: 10px;
    }
`;

export const MinorHeading = styled.h2`
    margin: 0;
    font-size: 20px;
    font-weight: 700;
`;

export const CommonParagraph = styled.p`
    margin: 0;
`;

export const NavigationLink = styled(NavLink)`
    width: max-content;
    color: ${({ theme }) => theme.colors.skyDancer};
    text-decoration: none;
    font-weight: 700;

    &:hover {
        text-decoration: underline;
    }
`;