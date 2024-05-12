import { CommonContainer } from "../../../common/Containers/styled";
import {
    MinorHeading,
    CommonParagraph
} from "../../../common/Texts/styled";
import { GridWrapper } from "../../../common/Wrappers/styled";
import { NavigationLink } from "../../../common/Links/styled";

const ProjectInfo = () => (
    <CommonContainer
        as="section"
        $infoContainer
    >
        <GridWrapper>
            <MinorHeading>
                Project Info
            </MinorHeading>
            <CommonParagraph>
                This project draws inspiration from the intuitive design of GitHub, seamlessly integrating its API to create a dynamic and engaging platform. Developed as a showcase for my portfolio, it embodies a commitment to user-centric design principles and seamless functionality.
            </CommonParagraph>
            <CommonParagraph>
                By harnessing the power of GitHub's API, this project offers users an intuitive and efficient means of searching for relevant information, repositories, and collaborators by searching for usernames or user information.
            </CommonParagraph>
            <CommonParagraph>
                Upon initiating a search, users are presented with a comprehensive list of matching profiles. By clicking on a user from the list, individuals can delve deeper into their profile, accessing a wealth of additional information. From repository contributions to personal bio details, users can explore a myriad of insights about each selected profile. Curious to explore the inner workings of this dynamic project? You can find the code in the repository.
            </CommonParagraph>
            <NavigationLink
                as="a"
                href="https://github.com/lenarmathias/git-scout"
                $blueLink
                target="_blank"
                rel="noreferrer noopener"
            >
                Link to GitHub Repo
            </NavigationLink>
        </GridWrapper>
    </CommonContainer>
);

export default ProjectInfo;