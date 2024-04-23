import { MapIcon } from "../styled";
import { CommonContainer } from "../../Containers/styled";
import { CommonParagraph } from "../../Texts/styled";

const Idle = () => (
    <CommonContainer $action>
        <MapIcon />
        <CommonParagraph>
            Scout GitHub users, chasing after the coding maestros!
        </CommonParagraph>
    </CommonContainer>
);

export default Idle;