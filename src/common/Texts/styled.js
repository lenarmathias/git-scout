import styled, { css } from "styled-components";

export const MinorHeading = styled.h2`
    margin: 0;
    font-size: 20px;
    font-weight: 700;

    ${({ $authorLink }) => $authorLink && css`
        color: ${({ theme }) => theme.colors.riverTour};
        transition: 0.5s;
        align-self: center;

        @media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}) {
            font-size: 12px;
        }
    `}

    ${({ $switchHidden }) => $switchHidden && css`
        @media (max-width: ${({ theme }) => theme.breakpoints.largeMobile}) {
            display: none;
        }
    `}

    ${({ $alignCenter }) => $alignCenter && css`
        text-align: center;
    `}

    ${({ $alignEnd }) => $alignEnd && css`
        text-align: right;
    `}

    ${({ $compactLeft }) => $compactLeft && css`
        @media (max-width: ${({ theme }) => theme.breakpoints.compact}) {
            text-align: left;
        }
    `}

    ${({ $compactRight }) => $compactRight && css`
        @media (max-width: ${({ theme }) => theme.breakpoints.compact}) {
            text-align: right;
        }
    `}
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

    ${({ $switchHidden }) => $switchHidden && css`
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            display: none;
        }
    `}

    ${({ $alignRight }) => $alignRight && css`
        text-align: right;
    `}

    ${({ $compactLeft }) => $compactLeft && css`
        @media (max-width: ${({ theme }) => theme.breakpoints.compact}) {
            text-align: left;
        }
    `}

    ${({ $compactRight }) => $compactRight && css`
        @media (max-width: ${({ theme }) => theme.breakpoints.compact}) {
            text-align: right;
        }
    `}
`;