import React, { useEffect, useState } from "react";
import { theme } from "./theme";

interface Props {
    children: string,
    style?: CSSStyleDeclaration
}

export const PopText = (props: Props) => {
    const [charsShown, setCharsShown] = useState(0);
    useEffect(() => {
        if (props.children.length > charsShown) {
            setTimeout(() => setCharsShown(charsShown + 1), 50);
        }
    });

    return <div style={{
        position: "relative"
    }}>
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 9,
            
        }}>
            { props.children.split('').map((char, i) => <h1 
                    key={char + i}
                    style={{
                        visibility: char == ' ' ? "hidden" : "visible",
                        display: char == ' ' ? "inline" : "inline-block",
                        transition: "1s",
                        transform: i < charsShown ? "translate(4px, 4px)" : "translate(0,0)",
                        opacity: i < charsShown ? 1 : 0,
                        color: "transparent",
                        backgroundImage: "url(./dots.svg)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: char == ' ' ? "normal" : "text"
                    }}>
                {char}
            </h1>) }
        </div>
        <div>
            { props.children.split('').map((char, i) => <h1 style={{
                    position: 'relative',
                    display: char == ' ' ? "inline" : "inline-block",
                    opacity: i < charsShown ? 1 : 0,
                    transition: "1s",
                    zIndex: 10
            }}>{ char }</h1>)}
        </div>
        
    </div>
}