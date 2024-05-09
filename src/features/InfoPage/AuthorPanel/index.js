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
    <CommonContainer>
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
                    <NavigationLink
                        as="a"
                        href="https://github.com/lenarmathias"
                        $icons
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <GitHubIcon />
                    </NavigationLink>
                    <NavigationLink
                        as="a"
                        href="https://lenarmathias.github.io/personal-homepage/"
                        $icons
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <WebsiteIcon />
                    </NavigationLink>
                    <NavigationLink
                        as="a"
                        href="mailto:lenarmathias@gmail.com"
                        $icons
                    >
                        <MailIcon />
                    </NavigationLink>
                    <NavigationLink
                        as="a"
                        href="https://www.linkedin.com/in/lenarmathias/"
                        $icons
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <LinkedInIcon />
                    </NavigationLink>
                </GridWrapper>
            </FlexWrapper>
        </FlexWrapper>
    </CommonContainer>
);

export default AuthorPanel;