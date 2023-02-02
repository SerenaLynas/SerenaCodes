import React, { PropsWithChildren } from "react";
import { DivProps } from "../div-props";
interface Props extends DivProps {
    icon?: string | React.ReactElement;
    onHoverChange?: (isHovering: boolean) => void;
}
export type SmallCardProps = PropsWithChildren<Props>;
export declare const SmallCard: ({ icon, onHoverChange, ...props }: SmallCardProps) => JSX.Element;
export {};
//# sourceMappingURL=small-card.d.ts.map