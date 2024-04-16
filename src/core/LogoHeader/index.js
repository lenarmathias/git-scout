import {
    HeaderWrapper,
    GitScoutLogo,
    MainHeading
} from "./styled";
import { NavigationLink } from "../../common/styled";

const LogoHeader = () => (
    <HeaderWrapper>
        <NavigationLink
            to="/"
            $logoHeader
        >
            <GitScoutLogo
                alt="GitScout Logo"
            />
            <MainHeading>
                GitScout
            </MainHeading>
        </NavigationLink>
    </HeaderWrapper>
);

export default LogoHeader;