import {
    HeaderWrapper,
    GitScoutLogo,
    MainHeading
} from "./styled";
import { NavigationLink } from "../../common/Links/styled";

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