import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { UserAvatar } from "../features/MainPage/UsersList/styled";

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

    ${({ $action }) => $action && css`
        min-height: 240px;
        display: grid;
        grid-gap: 20px;
        justify-content: center;
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

    ${({ $biggerGap }) => $biggerGap && css`
        grid-gap: 10px;

        @media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}) {
            grid-gap: 16px;
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

    ${({ $actionText }) => $actionText && css`
        font-size: 20px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.white};
        text-align: center;
    `}

    ${({ $usersList }) => $usersList && css`
        font-size: 18px;
        align-self: center;
        transition: 0.5s;
    `}
`;

export const NavigationLink = styled(NavLink)`
    width: max-content;
    color: ${({ theme }) => theme.colors.skyDancer};
    text-decoration: none;
    font-weight: 700;

    ${({ $underline }) => $underline && css`
        &:hover {
            text-decoration: underline;
        }  
    `}

    ${({ $usersList }) => $usersList && css`
        color: inherit;
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-gap: 20px;

        &:hover > ${UserAvatar} {
            outline: 2px ${({ theme }) => theme.colors.white} solid;
        }

        &:hover > * {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.white};
        }
    `}
`;