import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { GitScoutLogo } from "../core/LogoHeader/styled";

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

    ${({ $infoPageWrapper }) => $infoPageWrapper && css`
        grid-template-columns: 1fr max-content;
        grid-gap: 10px;

        @media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}) {
            grid-gap: 16px;
        }
    `}

    ${({ $userDetails }) => $userDetails && css`
        grid-template-columns: repeat(2, max-content);
        align-items: center;
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

export const UserAvatar = styled.img`
    width: 50px;
    border: 2px ${({ theme }) => theme.colors.riverStyx} solid;
    border-radius: 50%;
    outline: 2px ${({ theme }) => theme.colors.bluePlaza} solid;
    transition: 0.5s;

    ${({ $detailsAvatar }) => $detailsAvatar && css`
        width: 100px;
        outline: 2px ${({ theme }) => theme.colors.white} solid;
    `}
`;

export const NavigationLink = styled(NavLink)`
    width: max-content;
    text-decoration: none;

    ${({ $logoHeader }) => $logoHeader && css`
        display: grid;
        grid-template-columns: repeat(2, max-content);
        grid-gap: 16px;
        align-items: center;

        @media (hover: hover) {
            &:hover > ${GitScoutLogo} {
                transform: scale(1.2);
            }  
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
            grid-template-columns: max-content;
            text-align: center;
            grid-gap: 6px;
        }
    `}

    ${({ $blueLink }) => $blueLink && css`
        color: ${({ theme }) => theme.colors.skyDancer};
        font-weight: 700;

        @media (hover: hover) {
            &:hover {
                text-decoration: underline;
            }  
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
            color: ${({ theme }) => theme.colors.white};
        }
    `}
`;