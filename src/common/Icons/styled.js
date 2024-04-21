import styled from "styled-components";
import { ReactComponent as GitHub } from "../../images/icons/GitHubIcon.svg";
import { ReactComponent as Website } from "../../images/icons/WebsiteIcon.svg";
import { ReactComponent as Mail } from "../../images/icons/MailIcon.svg";
import { ReactComponent as LinkedIn } from "../../images/icons/LinkedInIcon.svg";

const Icon = styled.svg`
    height: 50px;
    width: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.intermediateMobile}) {
        height: 30px;
    }
`;

export const GitHubIcon = () => <Icon as={GitHub} />;
export const WebsiteIcon = () => <Icon as={Website} />;
export const MailIcon = () => <Icon as={Mail} />;
export const LinkedInIcon = () => <Icon as={LinkedIn} />;