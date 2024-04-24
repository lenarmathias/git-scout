import { useParams } from "react-router-dom";
import { useUserDetailsApi } from "./useUserDetailsApi";
import MainDetails from "./MainDetails";
import UserLinks from "./UserLinks";
import UserRepositories from "./UserRepositories";
import Loading from "../../common/Actions/Loading";
import Error from "../../common/Actions/Error";
import { GridWrapper } from "../../common/Wrappers/styled";

const DetailsPage = () => {
    const { username } = useParams();
    const {
        apiObject,
        loading,
        apiSuccess
    } = useUserDetailsApi(username);

    if (loading === true) {
        return <Loading />;
    }

    if (apiSuccess !== true) {
        return <Error />;
    }

    return (
        <GridWrapper $biggerGap>
            <GridWrapper $normalWrapper>
                <MainDetails
                    details={apiObject}
                />
                <UserLinks
                    details={apiObject}
                />
            </GridWrapper>
            {apiObject.public_repos !== 0 && (
                <UserRepositories
                    userRepos={apiObject.repos_url}
                />
            )}
        </GridWrapper>
    )
};

export default DetailsPage;