import React from "react";
import { SmallCardProps } from "./small-card";
interface Props {
    href?: string;
}
type ClickableCardProps = Props & SmallCardProps;
export declare const ClickableCard: ({ href, ...props }: ClickableCardProps) => React.JSX.Element;
export {};
//# sourceMappingURL=clickable-card.d.ts.map