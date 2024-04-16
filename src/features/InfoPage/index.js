import ProjectInfo from "./ProjectInfo";
import AuthorPanel from "./AuthorPanel";
import { GridWrapper } from "../../common/styled";

const InfoPage = () => (
    <GridWrapper $infoPageWrapper>
        <ProjectInfo />
        <AuthorPanel />
    </GridWrapper>
);

export default InfoPage;