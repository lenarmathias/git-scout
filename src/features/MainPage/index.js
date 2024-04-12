import SearchPanel from "./SearchPanel";
import InfoPanel from "./InfoPanel";
import { GridWrapper } from "../../common/styled";

const MainPage = () => (
    <GridWrapper $mainPageWrapper>
        <SearchPanel />
        <InfoPanel />
    </GridWrapper>
);

export default MainPage