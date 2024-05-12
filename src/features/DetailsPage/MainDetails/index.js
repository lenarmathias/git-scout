import IndividualPanel from "./IndividualPanel";
import {
    GridWrapper,
    FlexWrapper
} from "../../../common/Wrappers/styled";
import {
    MinorHeading,
    CommonParagraph
} from "../../../common/Texts/styled";
import {
    CommonContainer,
    TopBorder
} from "../../../common/Containers/styled";
import { UserAvatar } from "../../../common/Elements/styled";

const MainDetails = ({ details }) => (
    <CommonContainer
        as="section"
        $infoContainer
    >
        <FlexWrapper $detailsFlex>
            <GridWrapper $mainDetails>
                <GridWrapper>
                    <UserAvatar
                        src={details.avatar_url}
                        $detailsPage
                    />
                    <MinorHeading $alignCenter>
                        {details.login}
                    </MinorHeading>
                </GridWrapper>
                <FlexWrapper $compactWrap>
                    <IndividualPanel
                        title="Name:"
                        data={details.name === null
                            ? "Unknown"
                            : details.name
                        }
                        $compactLeft
                    />
                    <IndividualPanel
                        title="Location:"
                        data={details.location === null
                            ? "Unknown"
                            : details.location
                        }
                        $compactRight
                    />
                </FlexWrapper>
                <FlexWrapper $compactWrap>
                    <IndividualPanel
                        title="Followers:"
                        data={details.followers}
                        $alignRight
                        $compactLeft
                    />
                    <IndividualPanel
                        title="Following:"
                        data={details.following}
                        $alignRight
                        $compactRight
                    />
                </FlexWrapper>
                <FlexWrapper $compactWrap>
                    <IndividualPanel
                        title="Joined:"
                        data={
                            details.created_at &&
                            details.created_at.slice(0, 10)
                        }
                        $alignEnd
                        $alignRight
                        $compactLeft
                    />
                    <IndividualPanel
                        title="Public repos:"
                        data={details.public_repos}
                        $alignEnd
                        $alignRight
                        $compactRight
                    />
                </FlexWrapper>
            </GridWrapper>
            <TopBorder>
                <CommonParagraph>
                    {details.bio}
                </CommonParagraph>
            </TopBorder>
        </FlexWrapper>
    </CommonContainer >
);

export default MainDetails;