import React from "react"
import { theme } from "./theme"

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    icon?: string | React.ReactElement,
    header?: React.ReactElement
}

export const Card = ({ children, icon, header, ...props }: Props) => {
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

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 5,
        boxShadow: '0 2px 20px -15px ' + theme.shadow,
        ...props.style
    }}>
        <div {...props} style={{
            display: "flex",
            background: 'white',
            padding: 10,
            alignItems: 'center',
            gap: 10,
            borderBottom: '1px solid ' + theme.shadow + '1f',
        }}>
            {iconEl}
            {header || null}
        </div>
        <div style={{
            padding: 15,
            paddingLeft: 20,
        }}>
            { children }
        </div>
    </div>
}