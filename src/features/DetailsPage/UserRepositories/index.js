import { useRepositoriesApi } from "./useRepositoriesApi";
import Loading from "../../../common/Actions/Loading";
import Error from "../../../common/Actions/Error";
import {
    MinorHeading,
    CommonParagraph,
    SpanParagraph
} from "../../../common/Texts/styled";
import {
    FlexWrapper,
    GridWrapper
} from "../../../common/Wrappers/styled";
import { CommonContainer } from "../../../common/Containers/styled";
import { NavigationLink } from "../../../common/Links/styled";

const UserRepositories = ({ userRepos }) => {
    const {
        apiObject,
        loading,
        apiSuccess
    } = useRepositoriesApi(userRepos);

    const formatName = (name) => {
        return name.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    };

    if (loading === true) {
        return <Loading />;
    }

    if (apiSuccess !== true) {
        return <Error />;
    }

    return (
        <GridWrapper
            as="section"
            $biggestGap
        >
            <MinorHeading $marginAround>
                Repositories:
            </MinorHeading>
            <GridWrapper $repoWrapper>
                {apiObject.map(repo => (
                    <CommonContainer
                        key={repo.id}
                        $repoTile
                    >
                        <FlexWrapper>
                            <GridWrapper $bottomMargin>
                                <MinorHeading as="h3">
                                    {formatName(repo.name)}
                                </MinorHeading>
                                <CommonParagraph>
                                    {repo.description}
                                </CommonParagraph>
                                <CommonParagraph>
                                    <SpanParagraph>
                                        Created at:
                                    </SpanParagraph>
                                    {" "}{repo.created_at.slice(0, 10)}
                                </CommonParagraph>
                                <CommonParagraph>
                                    <SpanParagraph>
                                        Last update:
                                    </SpanParagraph>
                                    {" "}{repo.updated_at.slice(0, 10)}
                                </CommonParagraph>
                            </GridWrapper>
                            <FlexWrapper $row>
                                <NavigationLink
                                    as="a"
                                    href={repo.html_url}
                                    $blueLink
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Repo
                                </NavigationLink>
                                {repo.homepage && (
                                    <NavigationLink
                                        as="a"
                                        href={repo.homepage}
                                        $blueLink
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        Demo
                                    </NavigationLink>
                                )}
                            </FlexWrapper>
                        </FlexWrapper>
                    </CommonContainer>
                ))}
            </GridWrapper>
        </GridWrapper>
    )
};

export default UserRepositories;