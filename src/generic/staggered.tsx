import React, { CSSProperties } from "react";
import { Children, PropsWithChildren } from "react";

interface Props {
    style?: CSSProperties
}

export const Staggered = (props: PropsWithChildren<Props>) => {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 10,
        ...props.style
    }}>
        { Children.map(props.children, (child, i) => <div key={i} style={{
            [i % 2 == 0 ? "marginRight" : "marginLeft"]: "20%",
            width: "80%"
        }}>
            { child }
        </div>) }
    </div>
}