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
            >
                <GitHubIcon />
            </NavigationLink>
            {details.twitter_username !== null ? (
                <NavigationLink
                    as="a"
                    href={`https://twitter.com/${details.twitter_username}`}
                    $icons
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