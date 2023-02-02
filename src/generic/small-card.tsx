import React, { PropsWithChildren, useState } from "react"
import { DivProps } from "../div-props";
import { theme } from "../theme"

interface Props extends DivProps {
    icon?: string | React.ReactElement,
    onHoverChange?: (isHovering: boolean) => void
}

export type SmallCardProps = PropsWithChildren<Props>;

export const SmallCard = ({ icon, onHoverChange, ...props }: SmallCardProps) => {
    function setIsHovering(bool: boolean) {
        if (onHoverChange) {
            onHoverChange(bool);
        }
    }
    let iconEl;

    if (typeof icon === 'string') {
        iconEl = <img src={icon} style={{
            objectFit: 'contain',
            width: 30,
            height: 30,
        }}/>
    } else if (icon) {
        iconEl = icon
    } else {
        iconEl = null;
    }

    return <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)} 
        {...props} 
        style={{
            display: "flex",
            background: 'white',//theme.lightBlue,
            padding: '10px 15px 10px 10px',
            borderRadius: 5,
            boxShadow: '0 2px 20px -15px ' + theme.shadow, //'0 7px 15px -10px #ffdbff',
            alignItems: 'center',
            gap: 10,
            ...props.style
    }}>
        { iconEl }
        <div>
            { props.children }
        </div>
    </div>
}