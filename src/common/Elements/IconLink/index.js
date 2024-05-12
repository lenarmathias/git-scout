import { NavigationLink } from "../../Links/styled";

const IconLink = ({
    address,
    mailLink,
    children }) => (
    <NavigationLink
        as="a"
        href={address}
        $icons
        target={mailLink ? undefined : "_blank"}
        rel={mailLink ? undefined : "noreferrer noopener"}
    >
        {children}
    </NavigationLink>
);

export default IconLink;