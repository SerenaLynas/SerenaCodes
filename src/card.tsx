import React, { PropsWithChildren } from "react"

interface Props {
    imgSrc?: string

}

export const Card = (props: PropsWithChildren<Props>) => {
    return <div style={{
        display: "flex",
        borderRadius: 5,
        position: "relative",
        //backgroundColor: "rgb(252 242 242)",
        textAlign: "justify",
        padding: 5
    }}>
        { props.imgSrc ? <img src={props.imgSrc} style={{
            height: "3em",
            aspectRatio: "1 / 1",
            margin: 5,
            borderRadius: 5
        }}/> : <></> }
        <div style={{
            padding: 0
        }}>
            { props.children }
        </div>
        {/*<div style={{
            backgroundImage: "url(./dots.svg)",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 5,
            left: 5,
            borderRadius: 5,
            zIndex: -1
        }}>*/}

        {/*</div>*/}
    </div>
}