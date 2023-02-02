import React, { useEffect, useState } from "react";
import { Sequence } from "../sequence/sequence";
import { SequenceItem } from "../sequence/sequence-item";
import { useSequenceInfo } from "../sequence/sequence-item-context";
import { Wait } from "../sequence/wait";

interface Props {
    children: string | (string | Wait)[],
    style?: CSSStyleDeclaration
}

export const Header = (props: Props) => {
    const children: (string | Wait)[] =
            (Array.isArray(props.children)
                    ? props.children : [props.children])
            .flatMap<string | Wait>(el => typeof el == "string" ? el.split('') : el);

    return <div style={{
        overflow: "hidden"
    }}>
        <Sequence>
            { children.map((el, i) =>
                    typeof el == "string" 
                            ? <SequenceItem duration={25} key={i}>
                                <HeaderChar char={el}/>
                            </SequenceItem>
                            : <SequenceItem duration={el.props.delay} />) }
        </Sequence>
    </div>
}

interface CharProps {
    char: string
}

const HeaderChar = ({ char }: CharProps) => {
    const { hasPassed } = useSequenceInfo();

    return <h2 style={{
                position: "relative",
                display: "inline-block",
                // Preserve spaces between elements.
                whiteSpace: "pre",
                transform: hasPassed ? "translate(0, 0)" : "translate(0, 200%)",
                transition: "0.3s ease-out"
            }}>
        { char }
    </h2>
}
