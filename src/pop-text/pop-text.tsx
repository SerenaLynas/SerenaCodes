import React, { useEffect, useState } from "react";
import { Wait } from "../sequence/wait";
import { Sequence } from "../sequence/sequence";
import { SequenceItem, SequenceItemElement } from "../sequence/sequence-item";
import { useSequenceInfo } from "../sequence/sequence-item-context";
import { theme } from "../theme";

interface Props {
    children: string | (string | Wait)[],
    style?: CSSStyleDeclaration
}

export const PopText = (props: Props) => {
    const children: (string | Wait)[] =
            (Array.isArray(props.children)
                    ? props.children : [props.children])
            .flatMap<string | Wait>(el => typeof el == "string" ? el.split('') : el);

    return <div>
        <Sequence>
            { children.map((el, i) =>
                    typeof el == "string" 
                            ? <SequenceItem duration={40} key={i}>
                                <PopTextChar char={el}/>
                            </SequenceItem>
                            : <SequenceItem duration={el.props.delay} />) }
        </Sequence>
    </div>
}

interface CharProps {
    char: string
}

const PopTextChar = ({ char }: CharProps) => {
    const { hasPassed } = useSequenceInfo();

    return <div style={{
        position: "relative",
        display: "inline-block",
        visibility: hasPassed ? "visible" : "hidden",
        animation: hasPassed ? "jump 0.3s" : "none"
    }}>
        <div style={{
            display: "inline-block",
            animation: hasPassed ? "popIn 0.3s" : "none"
        }}>
            <h1 style={{
                color: "transparent",
                backgroundImage: "url(./dots.svg)",
                backgroundClip: "text",
                WebkitBackgroundClip: char == ' ' ? "normal" : "text",
                display: "inline",
                position: "absolute",
                top: 3,
                left: 3,
            }}>
                { char }
            </h1>
            <h1 style={{
                position: "relative",
                display: "inline",
                // Preserve spaces between elements.
                whiteSpace: "pre",
            }}>
                { char }
            </h1>
        </div>
    </div>
}
