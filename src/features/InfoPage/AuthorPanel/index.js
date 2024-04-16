import { SmallHeading } from "./styled";
import {
    CommonContainer,
    GridWrapper,
    MinorHeading,
    UserAvatar
} from "../../../common/styled";

const AuthorPanel = () => (
    <CommonContainer>
        <GridWrapper>
            <MinorHeading>
                Author
            </MinorHeading>
            <GridWrapper $userDetails>
                <UserAvatar
                    src="https://avatars.githubusercontent.com/u/127316325?v=4"
                    alt="Author Avatar"
                    $detailsAvatar
                />
                <SmallHeading>
                    lenarmathias
                </SmallHeading>
            </GridWrapper>
        </GridWrapper>
    </CommonContainer>
);

export default AuthorPanel;