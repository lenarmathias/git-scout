import styled, { css } from "styled-components";

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