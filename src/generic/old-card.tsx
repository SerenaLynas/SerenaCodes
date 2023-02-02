import React, { PropsWithChildren } from "react"

interface Props {
    imgSrc?: string
    imgEmoji?: string
}

export const OldCard = (props: PropsWithChildren<Props>) => {
    return <div style={{
        display: "flex",
        borderRadius: 5,
        position: "relative",
        //backgroundColor: "rgb(252 242 242)",
        textAlign: "justify",
        padding: 5
    }}>
        { props.imgSrc ? <img src={props.imgSrc} style={{
            height: "3rem",
            aspectRatio: "1 / 1",
            margin: 5,
            borderRadius: 5
        }}/> : (
            props.imgEmoji ? <div style={{
                height: "3rem",
                width: "3rem",
                margin: 5,
                borderRadius: 5,
                fontSize: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>{ props.imgEmoji }</div> : <></>
        ) }
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