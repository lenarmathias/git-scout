import styled, { css } from "styled-components";
import { GoChevronUp } from "react-icons/go";

export const UserAvatar = styled.img`
    width: 50px;
    height: 50px;
    border: 2px transparent solid;
    border-radius: 50%;
    outline: 2px ${({ theme }) => theme.colors.bluePlaza} solid;
    transition: 0.5s;
    justify-self: center;
    align-self: center;

    ${({ $authorPanel }) => $authorPanel && css`
        @media (max-width: ${({ theme }) => theme.breakpoints.intermediateMobile}) {
            height: 30px;
            width: 30px;
        }
    `}

    ${({ $detailsPage }) => $detailsPage && css`
        width: 100px;
        height: 100px;
        outline: 2px ${({ theme }) => theme.colors.white} solid;
    `}
`;

export const RoundButtonFrame = styled.button`
    width: 60px;
    height: 60px;
    padding: 10px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px ${({ theme }) => theme.colors.bluePlaza};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (hover: hover) {
        &:hover > * {
            transform: scale(1.4);
        }   
    }

    ${({ $visibility }) => $visibility && css`
        display: none;
    `}
`;

export const ToTopIcon = styled(GoChevronUp)`
    width: 100%;
    height: auto;
    color: ${({ theme }) => theme.colors.ninja};
    transition: 0.5s;
`;