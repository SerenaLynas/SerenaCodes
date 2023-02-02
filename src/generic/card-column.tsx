import React from "react";
import { PropsWithChildren } from "react";

export const CardColumn = (props: PropsWithChildren<{}>) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 5
}}>{ props.children }</div>