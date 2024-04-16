import styled, { css } from "styled-components";

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