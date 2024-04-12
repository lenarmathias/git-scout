import {
    HeaderWrapper,
    GitScoutLogo,
    MainHeading
} from "./styled";

const LogoHeader = () => (
    <HeaderWrapper>
        <GitScoutLogo 
            alt="GitScout Logo"
        />
        <MainHeading>
            GitScout
        </MainHeading>
    </HeaderWrapper>
);

export default LogoHeader;