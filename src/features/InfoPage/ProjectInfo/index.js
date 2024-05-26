import projectInfoTexts from "./projectInfoTexts.json";
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
                {projectInfoTexts.firstParagraph}
            </CommonParagraph>
            <CommonParagraph>
                {projectInfoTexts.secondParagraph}
            </CommonParagraph>
            <CommonParagraph>
                {projectInfoTexts.thirdParagraph}
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