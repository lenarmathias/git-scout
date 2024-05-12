import IconLink from "../../../common/Elements/IconLink";
import {
    GitHubIcon,
    WebsiteIcon,
    MailIcon,
    LinkedInIcon
} from "../../../common/Icons/styled";
import {
    MinorHeading,
    CommonParagraph
} from "../../../common/Texts/styled";
import {
    GridWrapper,
    FlexWrapper
} from "../../../common/Wrappers/styled";
import { CommonContainer } from "../../../common/Containers/styled";
import { UserAvatar } from "../../../common/Elements/styled";
import { NavigationLink } from "../../../common/Links/styled";

const AuthorPanel = () => (
    <CommonContainer as="aside">
        <FlexWrapper $authorPanel>
            <MinorHeading $switchHidden>
                Author
            </MinorHeading>
            <GridWrapper $switchHidden>
                <NavigationLink
                    to="/user/lenarmathias"
                    $usersList
                    $wrapColumns
                >
                    <UserAvatar
                        src="https://avatars.githubusercontent.com/u/127316325?v=4"
                        alt="Authors Avatar"
                        $authorPanel
                    />
                    <MinorHeading
                        $authorLink
                        as="h3"
                    >
                        lenarmathias
                    </MinorHeading>
                </NavigationLink>
                <CommonParagraph $switchHidden>
                    React Frontend Developer
                </CommonParagraph>
            </GridWrapper>
            <FlexWrapper $spaceAround>
                <GridWrapper $iconsWrap>
                    <IconLink
                        address="https://github.com/lenarmathias"
                        children={<GitHubIcon />}
                    />
                    <IconLink
                        address="https://lenarmathias.github.io/personal-homepage/"
                        children={<WebsiteIcon />}
                    />
                    <IconLink
                        address="mailto:lenarmathias@gmail.com"
                        children={<MailIcon />}
                        mailLink
                    />
                    <IconLink
                        address="https://www.linkedin.com/in/lenarmathias/"
                        children={<LinkedInIcon />}
                    />
                </GridWrapper>
            </FlexWrapper>
        </FlexWrapper>
    </CommonContainer>
);

export default AuthorPanel;