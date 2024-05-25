import { useToTopButton } from "./useToTopButton";
import {
    RoundButtonFrame,
    ToTopIcon
} from "../styled";

const ToTopButton = () => {
    const {
        scrollToTop,
        isHidden
    } = useToTopButton();

    return (
        <RoundButtonFrame
            onClick={scrollToTop}
            $visibility={isHidden}
        >
            <ToTopIcon />
        </RoundButtonFrame>
    )
};

export default ToTopButton;