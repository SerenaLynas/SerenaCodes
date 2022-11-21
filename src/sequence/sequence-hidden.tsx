import React from "react";
import { useSequenceInfo } from "./sequence-item-context";

export const SequenceHidden = (props: React.PropsWithChildren<{}>) => {
    const { hasPassed } = useSequenceInfo();

    return hasPassed 
            ? <>{ props.children }</>
            : <div style={{ display: "none"}}>{ props.children }</div>; // Search engines
}