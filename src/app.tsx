import React from "react"
import { PopText } from "./pop-text/pop-text"
import { Wait } from "./sequence/wait"
import { Sequence } from "./sequence/sequence"
import { SequenceHidden } from "./sequence/sequence-hidden"
import { SequenceItem } from "./sequence/sequence-item"
import { TopSlant } from "./top-slant"
import { Header } from "./header"
import { MyInfo } from "./my-info"

export const App = () => {
    return <main>
        <Sequence>
            <SequenceItem duration={3_300} key={0}>
                <div style={{
                    animation: "3.3s ease-out 0s titleSlideIn"
                }}>
                    <PopText>Hi!<Wait delay={500}/> I'm Serena!</PopText>
                </div>
            </SequenceItem>
            <SequenceItem duration={0} key={1}>
                <SequenceHidden>
                    <MyInfo />
                </SequenceHidden>
            </SequenceItem>
            {/*<SequenceItem duration={0}>
                <SequenceHidden>
                    <div style={{
                        position: "relative",
                        backgroundColor: "#f2f0ff",
                        margin: 10,
                        padding: '20px 25px',
                        borderRadius: 10,
                        maxWidth: 400,
                    }}>
                        <ul>
                            <li>5+ years JavaScript/TypeScript 👩‍💻
                                <ul>
                                    <li>Check out my learning platform website <a href="https://compuut.com">compuut</a></li>
                                </ul>
                            </li>
                            <li>5+ years Java ☕ experience
                                <ul>
                                    <li>"Coding Captain" for my high school's FRC team for 3 years</li>
                                    <li>Programmed autonomous robot code 🤖</li>
                                </ul>
                            </li>
                            <li>React GODDESS ✨</li>
                        </ul>
                    </div>
                </SequenceHidden>
                </SequenceItem>*/}
        </Sequence>
    </main>
}