import ProjectInfo from "./ProjectInfo";
import AuthorPanel from "./AuthorPanel";
import { GridWrapper } from "../../common/Wrappers/styled";

const InfoPage = () => (
    <GridWrapper $normalWrapper>
        <ProjectInfo />
        <AuthorPanel />
    </GridWrapper>
);

export default InfoPage;