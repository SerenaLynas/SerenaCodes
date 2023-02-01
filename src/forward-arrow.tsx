import React, { CSSProperties } from "react"
import { theme } from "./theme";

interface Props {
    animated?: boolean
}

const arrowWidth = 3;
const boxSize = 10;
const arrowStyle: CSSProperties = {
    position: 'absolute',
    backgroundColor: theme.accent
}

export const ForwardArrow = (props: Props) => {
    return <div style={{
        display: 'inline-block',
        transform: 'translate(0, 0)',
        animation: props.animated ? '0.2s alternate infinite bounceRight' : ''
    }}>
        <div style={{
            display: 'inline-block',
            width: boxSize,
            height: boxSize,
            position: 'relative',
            rotate: '-45deg'
        }}>
            <div style={{
                ...arrowStyle,
                left: 0,
                right: 0,
                bottom: 0,
                height: arrowWidth
            }}/>
            <div style={{
                ...arrowStyle,
                right: 0,
                top: 0,
                bottom: 0,
                width: arrowWidth
            }}/>
        </div>
    </div>
}