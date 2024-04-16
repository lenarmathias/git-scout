import styled, { css } from "styled-components";

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