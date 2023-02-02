import React, { PropsWithChildren, useState } from "react"
import { DivProps } from "../div-props";
import { theme } from "../theme"

interface Props extends DivProps {
    icon?: string | React.ReactElement,
}

export const IconPair = ({ icon, ...props }: Props) => {
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
        {...props} 
        style={{
            display: 'flex',
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