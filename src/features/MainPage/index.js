import { useSearch } from "./useSearch";
import { useUsernamesApi } from "./useUsernamesApi";
import SearchPanel from "./SearchPanel";
import InfoPanel from "./InfoPanel";
import UsersList from "./UsersList";
import { GridWrapper } from "../../common/Wrappers/styled";

const MainPage = () => {
    const {
        username,
        handleInputChange
    } = useSearch();
    const {
        usernamesData,
        loading,
        apiSuccess,
        apiError
    } = useUsernamesApi(username);

    return (
        <GridWrapper $biggerGap>
            <GridWrapper $mainPageWrapper>
                <SearchPanel
                    username={username}
                    handleInputChange={handleInputChange}
                />
                <InfoPanel />
            </GridWrapper>
            <UsersList
                username={username}
                usernamesData={usernamesData}
                loading={loading}
                apiSuccess={apiSuccess}
                apiError={apiError}
            />
        </GridWrapper>
    )
};

export default MainPage