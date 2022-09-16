import React from "react";
import { PropsWithChildren } from "react";

interface Props {
    
}

export const TopSlant = (props: PropsWithChildren<Props>) => {
    return <div style={{
        transform: "rotate(-5deg)",
        position: "absolute",
        left: 0,
        top: 0
    }}>
        { props.children }
    </div>
}