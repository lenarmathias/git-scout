import IconLink from "../../../common/Elements/IconLink";
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

const UserLinks = ({ details }) => (
    <CommonContainer as="aside">
        <GridWrapper $detailsIcons>
            <IconLink
                address={details.html_url}
                children={<GitHubIcon />}
            />
            {details.twitter_username !== null ? (
                <IconLink
                    address={`https://twitter.com/${details.twitter_username}`}
                    children={<XIcon />}
                />
            ) : (
                <DisabledXIcon />
            )}
            {details.blog !== "" ? (
                <IconLink
                    address={details.blog}
                    children={<WebsiteIcon />}
                />
            ) : (
                <DisabledWebsiteIcon />
            )}
        </GridWrapper>
    </CommonContainer>
);

export default UserLinks;