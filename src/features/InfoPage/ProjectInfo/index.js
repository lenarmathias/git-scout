import {
    CommonContainer,
    GridWrapper,
    MinorHeading,
    CommonParagraph
} from "../../../common/styled";

const ProjectInfo = () => (
    <CommonContainer $infoContainer>
        <GridWrapper>
            <MinorHeading>
                Project Info
            </MinorHeading>
            <CommonParagraph>
                This project draws inspiration from the intuitive design of GitHub, seamlessly integrating its API to create a dynamic and engaging platform. Developed as a showcase for my portfolio, it embodies a commitment to user-centric design principles and seamless functionality.
            </CommonParagraph>
        </GridWrapper>
    </CommonContainer>
);

export default ProjectInfo;