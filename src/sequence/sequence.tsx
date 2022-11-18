import React, { ComponentType, ReactElement, useEffect, useRef, useState } from "react";
import { SequenceContext } from "./sequence-context";
import { SequenceItem } from "./sequence-item";
import { SequenceItemProps } from "./sequence-item-props";

interface Props {
    children: ReactElement<SequenceItemProps>[] | ReactElement<SequenceItemProps>;
}

export const Sequence = (props: Props) => {
    const [pos, setPos] = useState(0);

    // Use ref to avoid closing over the
    // `setState` function and rendering
    // stale data in `useEffect`
    const setPosRef = useRef(setPos);
    setPosRef.current = setPos;

    const children = Array.isArray(props.children)
            ? props.children : [props.children];

    useEffect(() => {
        if (children.length > pos) {
            setTimeout(() => setPosRef.current(pos + 1),
                    children[pos].props.duration);
        }
    }, [pos]);

    return <>
        { children.map((el, index) => 
                <SequenceContext.Provider value={{ pos, index }} key={index}>
                    { el }
                </SequenceContext.Provider>) }
    </>
}