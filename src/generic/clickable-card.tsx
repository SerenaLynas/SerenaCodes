import React, { useState } from "react"
import { SmallCard, SmallCardProps } from "./small-card"
import { theme } from "../theme"

interface Props {
    href?: string
}

type ClickableCardProps = Props & SmallCardProps

export const ClickableCard = ({ href, ...props }: ClickableCardProps) => {
    const [isHovering, setIsHovering] = useState(false);
    const el = <SmallCard {...props}
        onHoverChange={setIsHovering}
        style={{
            cursor: 'pointer',
            color: isHovering ? theme.accent : 'inherit',
            transition: '0.3s color, 0.1s transform',
            transform: isHovering ? 'scale(1.05)' : 'scale(1)',
            //animation: isHovering ? '0.3s smallBounce' : 'unset',
            ...(!href ? props.style : {})
        }}/>
    
    if (href) {
        return <a href={href} target={'_blank'} style={{
            all: 'unset',
            ...props.style
        }}>{ el }</a>
    } else {
        return el
    }
}