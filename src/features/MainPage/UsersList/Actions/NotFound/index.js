import { NotFoundIcon } from "../styled";
import {
    CommonContainer,
    CommonParagraph
} from "../../../../../common/styled";

const NotFound = () => (
    <CommonContainer $action>
        <NotFoundIcon />
        <CommonParagraph $actionText>
            Looks like this username is playing hide and seek! Try another one?
        </CommonParagraph>
    </CommonContainer>
);

export default NotFound;