import { SearchBar } from "./styled";
import { CommonContainer } from "../../../common/Containers/styled";
import { GridWrapper } from "../../../common/Wrappers/styled";
import {
    MinorHeading,
    CommonParagraph
} from "../../../common/Texts/styled";

const SearchPanel = ({ username, handleInputChange }) => (
    <CommonContainer>
        <GridWrapper>
            <MinorHeading>
                Search GitHub user
            </MinorHeading>
            <CommonParagraph>
                You can type a username below to find a matching user or view a list of similar usernames.
            </CommonParagraph>
            <SearchBar
                placeholder="Username"
                value={username}
                onChange={handleInputChange}
            />
        </GridWrapper>
    </CommonContainer>
);

export default SearchPanel;