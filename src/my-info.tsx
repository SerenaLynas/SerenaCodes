import React from "react"
import { Card } from "./card"
import { Staggered } from "./staggered"

export const MyInfo = () => {
    return <div style={{
        overflow: "hidden",
        maxWidth: 800,
        animation: "1s flyIn ease-out",
    }}>
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            //gridTemplateRows: "repeat(3, 1fr)",
            gap: 10,
            
        }}>
            <div style={{
                gridColumn: "1",
                gridRow: "1"
            }}>
                <h2>Who am I?</h2>
                <p style={{
                    textAlign: "justify"
                }}>
                    I'm Serena Lynas, an undergrad at Case Western Reserve University, and I'm double majoring
                    in Physics and Mathematics, BS, and Computer Science, BS. I couldn't decide between math,
                    physics and computer science, so I decided to major in all three! I've been coding for
                    more than 5 years in a variety of languages with a variety of projects.
                </p>
                <br />
                <h2>My Languages</h2>
                <br />
                <ul>
                    <li>
                        5/5 🤩: TypeScript/JavaScript (Browser & NodeJS)
                    </li>
                    <li>
                        5/5 🤩: Java
                    </li>
                    <li>
                        4/5 🥰: Rust 
                    </li>
                    <li>
                        4/5 🥰: Lua
                    </li>
                    <li>
                        3/5 🙂: Python
                    </li>
                    <li>
                        3/5 🙂: C/C++
                    </li>
                </ul>
            </div>
            <div style={{
                gridColumn: "2",
                gridRow: "1 / 3",
                gridAutoColumns: "auto",
                background: "rgb(252 242 242)",
                padding: "25px",
                margin: 5,
                borderRadius: 5,
                position: "relative",
                alignSelf: "self-start"
            }}>
                <h2>
                    Connect
                </h2>
                <p>
                    Website: <a href="https://serena.codes">serena.codes</a>
                    <br />
                    Email: <a href="mailto://serena@serena.codes">serena@serena.codes</a>
                    <br />
                    GitHub: SploxFox &mdash; <a href="https://github.com/SploxFox">Check it out! (https://github.com/SploxFox)</a>
                </p>
                <br/>
                <h2>Timeline</h2>
                <h3>2022-Present</h3>
                <ul>
                    <li>
                        Undergrad at Case Western Reserve University, studying Mathematics, Physics, and
                        Computer Science.
                    </li>
                    <li>
                        Rocket team
                    </li>
                </ul>
                <h3>2018-2022</h3>
                <ul>
                    <li>
                        Student at St. Ignatius College Prep in Chicago, IL.
                    </li>
                    <li>
                        <em>2019-2022</em>: Coding Captain on our school's robotics team.
                    </li>
                </ul>
                <div style={{
                    backgroundImage: "url(./dots.svg)",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 5,
                    left: 5,
                    borderRadius: 5,
                    zIndex: -1
                }}></div>
            </div>
            <div style={{
                gridColumn: "1 / span 2",
                gridRow: "2 / span 2"
            }}>
                <br />
                <h2>Projects & Experience</h2>
                <Staggered>
                    <Card imgSrc="wolfbyte-logo.jpg">
                        <h3>Robots! (FRC)</h3>
                        <ul>
                            <li>
                                4 years total Java
                            </li>
                            <li>
                                3 years Coding Captain
                            </li>
                            <li>
                                Tough competition with a strict deadline
                            </li>
                            <li>
                                Autonomous robot 🤖 control using a PID in Java
                            </li>
                        </ul>
                    </Card>
                    <Card imgSrc="compuut-logo.png">
                        <h3>Compuut</h3>
                        <ul>
                            <li>
                                A WIP platform I created for learning higher-level math
                            </li>
                            <li>
                                Realtime progressive web app (PWA)
                            </li>
                            <li>
                                Uses Typescript, Firebase (GCP), and React
                            </li>
                        </ul>
                    </Card>
                    <Card imgSrc="crt-logo.png">
                        <h3>Rockets</h3>
                        <ul>
                            <li>
                                Just joined this year
                            </li>
                            <li>
                                Have built and launch one rocket so far, will launch more soon
                            </li>
                            <li>
                                Worked on embedded software, some in Rust and some in C++
                            </li>
                        </ul>
                    </Card>
                    <Card imgEmoji="📝">
                        <h3>Math & Physics</h3>
                        <ul>
                            <li>
                                Math: Multivariable calculus. Will take Diff Eq Spring 2023
                            </li>
                            <li>
                                Physics: Mechanics & E&M. No quantum (yet)
                            </li>
                        </ul>
                    </Card>
                </Staggered>
            </div>
        </div>
        <div className="noPrint" style={{
            height: "30vh"
        }}>
            {/* Spacing!! */}
        </div>
    </div>
}