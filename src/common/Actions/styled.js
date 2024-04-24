import styled from "styled-components";
import { ReactComponent as Error } from "./Error/GitScoutError.svg";
import { ReactComponent as Map } from "./Idle/GitScoutIdle.svg";
import { ReactComponent as Loading } from "./Loading/LoadingCircle.svg";
import { ReactComponent as NotFound } from "./NotFound/GitScoutNotFound.svg";

export const ErrorIcon = styled(Error)`
    width: 160px;
    justify-self: center;
    rotate: -15deg;
`;

export const MapIcon = styled(Map)`
    width: 160px;
    justify-self: center;
`;

export const LoadingCircle = styled(Loading)`
    width: 160px;
    justify-self: center;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const NotFoundIcon = styled(NotFound)`
    width: 160px;
    justify-self: center;
`;