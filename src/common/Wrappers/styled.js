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

    ${({ $normalWrapper }) => $normalWrapper && css`
        grid-template-columns: 1fr max-content;
        grid-gap: 10px;

        @media (max-width: ${({ theme }) => theme.breakpoints.largeMobile}) {
            grid-gap: 16px;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, max-content);
        }
    `}

    ${({ $biggerGap }) => $biggerGap && css`
        grid-gap: 10px;

        @media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}) {
            grid-gap: 16px;
        }
    `}

    ${({ $biggestGap }) => $biggestGap && css`
        grid-gap: 16px;
    `}

    ${({ $iconsWrap }) => $iconsWrap && css`
        grid-template-columns: repeat(2, max-content);
        grid-template-rows: repeat(2, max-content);
        grid-gap: 20px;
        justify-content: center;

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            grid-template-columns: 1fr;
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.largeMobile}) {
            grid-template-columns: repeat(4, max-content);
            grid-template-rows: 1fr;
        }
    `}

    ${({ $detailsIcons }) => $detailsIcons && css`
        grid-template-columns: 1fr;
        grid-gap: 20px;

        @media (max-width: ${({ theme }) => theme.breakpoints.largeMobile}) {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
    `}

    ${({ $switchHidden }) => $switchHidden && css`
        @media (max-width: ${({ theme }) => theme.breakpoints.midSmallMobile}) {
            display: none;
        }
    `}

    ${({ $mainDetails }) => $mainDetails && css`
        grid-template-columns: repeat(4, max-content);
        grid-gap: 20px;

        @media (max-width: ${({ theme }) => theme.breakpoints.compact}) {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, max-content);
        }
    `}

    ${({ $repoWrapper }) => $repoWrapper && css`
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 16px;

        @media (max-width: ${({ theme }) => theme.breakpoints.compact}) {
            grid-template-columns: 1fr;
        }
    `}

    ${({ $bottomMargin }) => $bottomMargin && css`
        margin-bottom: 20px;
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

    ${({ $authorPanel }) => $authorPanel && css`
        gap: 16px;

        @media (max-width: ${({ theme }) => theme.breakpoints.largeMobile}) {
            flex-direction: row;
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.midSmallMobile}) {
            justify-content: center;
        }
    `}

    ${({ $spaceAround }) => $spaceAround && css`
        justify-content: space-around;
    `}

    ${({ $detailsFlex }) => $detailsFlex && css`
        gap: 20px;
    `}

    ${({ $row }) => $row && css`
        height: max-content;
        flex-direction: row;
    `}

    ${({ $compactWrap }) => $compactWrap && css`
        @media (max-width: ${({ theme }) => theme.breakpoints.compact}) {
            flex-direction: row;
        }
    `}
`;