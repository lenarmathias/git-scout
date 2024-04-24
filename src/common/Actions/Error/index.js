import { ErrorIcon } from "../styled";
import { CommonContainer } from "../../Containers/styled";
import { CommonParagraph } from "../../Texts/styled";

const Error = () => (
    <CommonContainer $action>
        <ErrorIcon />
        <CommonParagraph $actionText>
            Oops! It looks like an error occurred. Please come back later!
        </CommonParagraph>
    </CommonContainer>
);

export default Error;