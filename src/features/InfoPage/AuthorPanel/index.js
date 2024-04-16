import { SmallHeading } from "./styled";
import { CommonContainer } from "../../../common/Containers/styled";
import { MinorHeading } from "../../../common/Texts/styled";
import { UserAvatar } from "../../../common/Elements/styled";
import { GridWrapper } from "../../../common/Wrappers/styled";

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