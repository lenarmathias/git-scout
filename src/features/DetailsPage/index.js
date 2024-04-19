import { useParams } from "react-router-dom";
import { useUserDetailsApi } from "./useUserDetailsApi";
import { GridWrapper } from "../../common/Wrappers/styled";

const DetailsPage = () => {
    const { username } = useParams();
    const {
        apiObject,
        loading,
        apiSuccess
    } = useUserDetailsApi(username);

    return (
        <GridWrapper>

        </GridWrapper>
    )
};

export default DetailsPage;