import styled, { css } from "styled-components";

const ellipseOne = ({ theme }) => theme.colors.lustPriestess;
const ellipseTwo = ({ theme }) => theme.colors.blueRuin;

export const CommonContainer = styled.div`
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.riverStyx};
    border: 1px ${({ theme }) => theme.colors.bluePlaza} solid;
    border-radius: 4px;
    box-shadow: 0px 3px 6px 0px ${({ theme }) => theme.colors.ninjaShadow};

    ${({ $infoContainer }) => $infoContainer && css`
        background: radial-gradient(ellipse at 40% 0%, ${ellipseOne} 0, transparent 75%), 
                    radial-gradient(ellipse at 60% 0%, ${ellipseTwo} 0, transparent 75%);
    `}

    ${({ $action }) => $action && css`
        min-height: 240px;
        display: grid;
        grid-gap: 20px;
        justify-content: center;
    `}
`;