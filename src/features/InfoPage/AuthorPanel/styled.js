import styled from "styled-components";
import { ReactComponent as GitHub } from "./icons/GitHubIcon.svg";
import { ReactComponent as Website } from "./icons/WebsiteIcon.svg";
import { ReactComponent as Gmail } from "./icons/GmailIcon.svg";
import { ReactComponent as LinkedIn } from "./icons/LinkedInIcon.svg";

const Icon = styled.svg`
    height: 50px;
    width: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.intermediateMobile}) {
        height: 30px;
    }
`;

export const GitHubIcon = () => <Icon as={GitHub} />;
export const WebsiteIcon = () => <Icon as={Website} />;
export const GmailIcon = () => <Icon as={Gmail} />;
export const LinkedInIcon = () => <Icon as={LinkedIn} />;