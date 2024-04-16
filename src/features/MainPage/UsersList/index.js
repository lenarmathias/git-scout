import Error from "./Actions/Error";
import Idle from "./Actions/Idle";
import Loading from "./Actions/Loading";
import NotFound from "./Actions/NotFound";
import {
    UsernamesList,
    UserListItem
} from "./styled";
import {
    CommonContainer,
    MinorHeading,
    UserAvatar,
    NavigationLink,
    CommonParagraph
} from "../../../common/styled";

const UsersList = ({
    username,
    usernamesData,
    loading,
    apiSuccess,
    apiError
}) => {
    const users = usernamesData.items;

    if (username === "") {
        return <Idle />;
    }

    if (apiError === true) {
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
                            <NavigationLink $usersList>
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