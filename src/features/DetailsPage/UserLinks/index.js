import {
    DisabledXIcon,
    DisabledWebsiteIcon
} from "./styled";
import {
    GitHubIcon,
    XIcon,
    WebsiteIcon
} from "../../../common/Icons/styled";
import { CommonContainer } from "../../../common/Containers/styled";
import { GridWrapper } from "../../../common/Wrappers/styled";
import { NavigationLink } from "../../../common/Links/styled";

const UserLinks = ({ details }) => (
    <CommonContainer>
        <GridWrapper $detailsIcons>
            <NavigationLink
                as="a"
                href={details.html_url}
                $icons
                target="_blank"
                rel="noreferrer noopener"
            >
                <GitHubIcon />
            </NavigationLink>
            {details.twitter_username !== null ? (
                <NavigationLink
                    as="a"
                    href={`https://twitter.com/${details.twitter_username}`}
                    $icons
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <XIcon />
                </NavigationLink>
            ) : (
                <DisabledXIcon />
            )}
            {details.blog !== "" ? (
                <NavigationLink
                    as="a"
                    href={details.blog}
                    $icons
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <WebsiteIcon />
                </NavigationLink>
            ) : (
                <DisabledWebsiteIcon />
            )}
        </GridWrapper>
    </CommonContainer>
);

export default UserLinks;