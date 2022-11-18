import React from "react"
import { Card } from "./card"
import { Staggered } from "./staggered"

export const MyInfo = () => {
    return <div style={{
        overflow: "hidden"
    }}>
        <div style={{
            display: "flex",
            flexDirection: "column",
            animation: "1s flyIn ease-out",
            maxWidth: 800
        }}>
            <h2>Who am I?</h2>
            <p>
                I'm an undergrad at Case Western Reserve University, and I'm studying
                physics, mathematics, and computer science. I'm not quite too sure yet
                on which degree I'll end up going for, but it'll probably be one of those!
            </p>
            <h2>My Projects and Experience</h2>
            <Staggered>
                <Card imgSrc="wolfbyte-logo.jpg">
                    <h3>Robots!</h3>
                    <p>
                        Throughout my four years of high school, I used Java to program robots
                        for my school's FRC team! For three of the four years, I was the "Coding Captain",
                        meaning that I got valuable experience leading our team's coders to accomplish
                        a goal with a set deadline. I also used control theory in programming autonomous
                        robot code.
                    </p>
                </Card>
                <Card>
                    <h3>Compuut</h3>
                    <p>
                        Compuut is a higher-level learning platform that I started developing towards the
                        end of high school, and its development is still ongoing&mdash;it's a work in progress!
                        For this app, I programmed both the front- and back-end in TypeScript, using Webpack and
                        React for the front-end and Firebase (mostly Firestore and Functions) for the backend.
                        Using these technologies, I was able to make Compuut a realtime learning platform similar
                        to Kahoot.
                    </p>
                </Card>
            </Staggered>
            <h2>My Languages</h2>
            <Staggered>
                <Card imgSrc="ts-logo-256.png">
                    <h3>TypeScript/JavaScript</h3>
                    <p>
                        My favorite language! I have lots of experience using TypeScript to build
                        both front-end web apps and back-end NodeJS applications.
                    </p>
                </Card>
                <Card imgSrc="java-logo.png">
                    <h3>Java</h3>
                    <p>
                        Although it's not my favorite language, I also have lots of experience
                        with Java, from writing plugins for Minecraft servers to programming
                        robots.
                    </p>
                </Card>
                <Card imgSrc="lua-logo.png">
                    <h3>Lua, Python, Rust, and other languages</h3>
                    <p>
                        I also have some experience with other languages, including Lua, Python,
                        and Rust, but I'm not as fast at programming with these as I am with JS/TS
                        and Java. I'm a fast learner though, so if you need me to pick up a language
                        for your project I can!
                    </p>
                </Card>
            </Staggered>
            
        </div>
    </div>
}