import React, { PropsWithChildren } from "react"

interface Props {
    imgSrc?: string

}

export const Card = (props: PropsWithChildren<Props>) => {
    return <div style={{
        display: "flex",
        borderRadius: 5,
        //height: "10vh",
        //boxShadow: "0 0 10px -1px grey",
        position: "relative",
        backgroundColor: "rgb(252 242 242)",
        textAlign: "justify",
        padding: 10
    }}>
        { props.imgSrc ? <img src={props.imgSrc} style={{
            height: "3em",
            aspectRatio: "1 / 1",
            margin: 10,
            borderRadius: 5
        }}/> : <></> }
        <div>
            { props.children }
        </div>
        <div style={{
            backgroundImage: "url(./dots.svg)",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 5,
            left: 5,
            borderRadius: 5,
            zIndex: -1
        }}>

        </div>
    </div>
}