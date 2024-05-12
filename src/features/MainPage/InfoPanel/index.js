import { CommonContainer } from "../../../common/Containers/styled";
import { NavigationLink } from "../../../common/Links/styled";
import {
    MinorHeading,
    CommonParagraph
} from "../../../common/Texts/styled";
import {
    GridWrapper,
    FlexWrapper
} from "../../../common/Wrappers/styled";

const InfoPanel = () => (
    <CommonContainer
        as="aside"
        $infoContainer
    >
        <FlexWrapper>
            <GridWrapper>
                <MinorHeading>
                    Project Info
                </MinorHeading>
                <CommonParagraph>
                    This small project, inspired by GitHub and its design, is intended for my portfolio and utilizes its API.
                </CommonParagraph>
            </GridWrapper>
            <NavigationLink
                to="/info"
                $blueLink
            >
                Learn more
            </NavigationLink>
        </FlexWrapper>
    </CommonContainer>
);

export default InfoPanel;