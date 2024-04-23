import styled, { css } from "styled-components";

export const UserAvatar = styled.img`
    width: 50px;
    border: 2px transparent solid;
    border-radius: 50%;
    outline: 2px ${({ theme }) => theme.colors.bluePlaza} solid;
    transition: 0.5s;
    justify-self: center;
    align-self: center;

    ${({ $authorPanel }) => $authorPanel && css`
        @media (max-width: ${({ theme }) => theme.breakpoints.intermediateMobile}) {
            height: 30px;
            width: auto;
        }
    `}

    ${({ $detailsPage }) => $detailsPage && css`
        width: 100px;
        outline: 2px ${({ theme }) => theme.colors.white} solid;
    `}
`;