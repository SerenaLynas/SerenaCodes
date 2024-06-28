import React from "react"
import { PopText } from "./pop-text/pop-text"
import { Wait } from "./sequence/wait"
import { Sequence } from "./sequence/sequence"
import { SequenceHidden } from "./sequence/sequence-hidden"
import { SequenceItem } from "./sequence/sequence-item"
import { MyInfo } from "./my-info"

export const App = () => {
    return <main>
        <Sequence>
            <SequenceItem duration={500} key={0}>
                <div style={{
                    animation: "1s ease-out 0s titleSlideIn",
                    paddingTop: 20,
                    paddingBottom: 10,
                }}>
                    <PopText>Hi!<Wait delay={500}/> I'm Serena Lynas!</PopText>
                </div>
            </SequenceItem>
            <SequenceItem duration={0} key={1}>
                <SequenceHidden>
                    <MyInfo />
                </SequenceHidden>
            </SequenceItem>
        </Sequence>
    </main>
}