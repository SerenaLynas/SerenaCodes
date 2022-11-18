import React, { FunctionComponent, ReactElement, useContext } from "react";
import { PropsWithChildren } from "react";
import { SequenceContext } from "./sequence-context";
import { SequenceItemContext } from "./sequence-item-context";
import { SequenceItemProps } from "./sequence-item-props";

export const SequenceItem: FunctionComponent<SequenceItemProps> = (props: PropsWithChildren<SequenceItemProps>) => {
    const sequenceContext = useContext(SequenceContext);
    
    return <SequenceItemContext.Provider value={{
            ...props,
            ...sequenceContext,
            hasPassed: sequenceContext.index < sequenceContext.pos }}>
        { props.children }
    </SequenceItemContext.Provider>
}

export type SequenceItemElement = ReactElement<SequenceItemProps>