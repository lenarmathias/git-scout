import { SearchBar } from "./styled";
import {
    CommonContainer,
    GridWrapper,
    MinorHeading,
    CommonParagraph,
} from "../../../common/styled";

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