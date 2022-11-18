import React from "react";
import { useSequenceInfo } from "./sequence-item-context";

export const SequenceHidden = (props: React.PropsWithChildren<{}>) => {
    const { hasPassed } = useSequenceInfo();

    return hasPassed ? <>{ props.children }</> : null;
}