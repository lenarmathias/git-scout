import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { GitScoutLogo } from "../../core/LogoHeader/styled";
import { UserAvatar } from "../Elements/styled";

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