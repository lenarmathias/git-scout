import styled from "styled-components";

export const UsernamesList = styled.ul`
    list-style: none;
    padding-right: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}) {
        padding: 0 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        padding: 0 10px;
    }
`;

export const UserListItem = styled.li`
    width: 100%;
    padding: 16px;
    border-bottom: 1px ${({ theme }) => theme.colors.bluePlaza} solid;
    transition: 0.5s;
    
    @media (hover: hover) {
        &:hover {
            border-bottom: 1px ${({ theme }) => theme.colors.white} solid;
        }
    }

    &:last-of-type {
        border-bottom: none;
    }
`;

export const UserAvatar = styled.img`
    width: 50px;
    border: 2px ${({ theme }) => theme.colors.riverStyx} solid;
    border-radius: 50%;
    outline: 2px ${({ theme }) => theme.colors.bluePlaza} solid;
    transition: 0.5s;
`;