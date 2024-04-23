import { useParams } from "react-router-dom";
import { useUserDetailsApi } from "./useUserDetailsApi";
import MainDetails from "./MainDetails";
import UserLinks from "./UserLinks";
import { GridWrapper } from "../../common/Wrappers/styled";

const DetailsPage = () => {
    const { username } = useParams();
    const {
        apiObject,
        // loading,
        // apiSuccess
    } = useUserDetailsApi(username);

    console.log(apiObject); // <-------------------------------------TEST

    return (
        <GridWrapper $normalWrapper>
            <MainDetails
                details={apiObject}
            />
            <UserLinks
                details={apiObject}
            />
        </GridWrapper>
    )
};

export default DetailsPage;