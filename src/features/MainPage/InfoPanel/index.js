import {
    CommonContainer,
    FlexWrapper,
    GridWrapper,
    MinorHeading,
    CommonParagraph,
    NavigationLink
} from "../../../common/styled";

const InfoPanel = () => (
    <CommonContainer $infoContainer>
        <FlexWrapper>
            <GridWrapper>
                <MinorHeading>
                    Project Info
                </MinorHeading>
                <CommonParagraph>
                    This small project, inspired by GitHub and its design, is intended for my portfolio and utilizes its API.
                </CommonParagraph>
            </GridWrapper>
            <NavigationLink>
                Learn more
            </NavigationLink>
        </FlexWrapper>
    </CommonContainer>
);

export default InfoPanel;