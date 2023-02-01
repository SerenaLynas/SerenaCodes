import React from "react";
interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    icon?: string | React.ReactElement;
    header?: React.ReactElement;
}
export declare const Card: ({ children, icon, header, ...props }: Props) => JSX.Element;
export {};
//# sourceMappingURL=card.d.ts.map