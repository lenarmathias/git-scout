import {
    MinorHeading,
    CommonParagraph
} from "../../../../common/Texts/styled";
import { GridWrapper } from "../../../../common/Wrappers/styled";

const IndividualPanel = ({
    title,
    data,
    $alignEnd,
    $alignRight,
    $compactLeft,
    $compactRight
}) => (
    <GridWrapper>
        <MinorHeading
            as="h3"
            $alignEnd={$alignEnd}
            $compactLeft={$compactLeft}
            $compactRight={$compactRight}
        >
            {title}
        </MinorHeading>
        <CommonParagraph
            $alignRight={$alignRight}
            $compactLeft={$compactLeft}
            $compactRight={$compactRight}
        >
            {data}
        </CommonParagraph>
    </GridWrapper>
);

export default IndividualPanel;