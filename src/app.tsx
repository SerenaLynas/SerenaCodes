import React from "react"
import { PopText } from "./pop-text"
import { TopSlant } from "./top-slant"

export const App = () => {
    return <main>
        {/*<div style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px 0"
        }}>*/}
            <PopText>Hi! I'm Serena!</PopText>
        {/*</div>*/}
        <div style={{
            position: "relative",
            backgroundColor: "#f2f0ff",
            margin: 10,
            padding: '20px 25px',
            borderRadius: 10,
            maxWidth: 400,
        }}>
            {/*<TopSlant>
                <PopText>My Experience</PopText>
            </TopSlant>*/}
            <h2>My Experience ⭐</h2>
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
    </main>
}