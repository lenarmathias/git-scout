import styled from "styled-components";
import { ReactComponent as X } from "../../../images/icons/XIcon.svg";
import { ReactComponent as Website } from "../../../images/icons/WebsiteIcon.svg";


const DisabledIcon = styled.svg`
    height: 50px;
    width: auto;

    path {
        fill: ${({ theme }) => theme.colors.riverTour};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.intermediateMobile}) {
        height: 30px;
    }
`;

export const DisabledXIcon = () => <DisabledIcon as={X} />;
export const DisabledWebsiteIcon = () => <DisabledIcon as={Website} />;