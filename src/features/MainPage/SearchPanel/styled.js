import styled from "styled-components";

export const SearchBar = styled.input`
    padding: 6px;
    background-color: ${({ theme }) => theme.colors.blackIsBack};
    border: 1px ${({ theme }) => theme.colors.bluePlaza} solid;
    border-radius: 4px;
`;