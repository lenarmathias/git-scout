import Error from "../../../common/Actions/Error";
import Idle from "../../../common/Actions/Idle";
import Loading from "../../../common/Actions/Loading";
import NotFound from "../../../common/Actions/NotFound";
import {
    UsernamesList,
    UserListItem
} from "./styled";
import { CommonContainer } from "../../../common/Containers/styled";
import {
    MinorHeading,
    CommonParagraph
} from "../../../common/Texts/styled";
import { UserAvatar } from "../../../common/Elements/styled";
import { NavigationLink } from "../../../common/Links/styled";

const UsersList = ({
    username,
    usernamesData,
    loading,
    apiSuccess,
}) => {
    const users = usernamesData.items;

    if (username === "") {
        return <Idle />;
    }

    if (apiSuccess === false) {
        return <Error />;
    }

    if (loading === true) {
        return <Loading />;
    }

    if (
        apiSuccess
        &&
        usernamesData.total_count
        === 0
    ) {
        return <NotFound />;
    }

    if (apiSuccess === true) {
        return (
            <CommonContainer>
                <MinorHeading>
                    Found {users.length} users containing "{username}":
                </MinorHeading>
                <UsernamesList>
                    {users.map(user => (
                        <UserListItem key={user.id}>
                            <NavigationLink
                                to={`/user/${user.login}`}
                                $usersList
                            >
                                <UserAvatar
                                    src={user.avatar_url}
                                    alt="User avatar"
                                />
                                <CommonParagraph $usersList>
                                    {user.login}
                                </CommonParagraph>
                            </NavigationLink>
                        </UserListItem>
                    ))}
                </UsernamesList>
            </CommonContainer>
        );
    }
};

export default UsersList;