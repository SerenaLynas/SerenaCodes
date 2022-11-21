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
                I'm Serena Lynas, an undergrad at Case Western Reserve University, and I'm double majoring
                in Physics and Mathematics, BS, and Computer Science, BS. I couldn't decide between math,
                physics and computer science, so I decided to major in all three! I've been coding for
                more than 5 years in a variety of languages with a variety of projects.
            </p>
            <br />
            <h2>
                Connect
            </h2>
            <p>
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
                <br />
            <br/>
            <h2>Projects & Experience</h2>
            <Staggered>
                <Card imgSrc="wolfbyte-logo.jpg">
                    <h3>Robots!</h3>
                    <p>
                        Throughout my four years of high school, I used Java to program robots
                        for my school's FRC team! For three of the four years, I was the "Coding Captain",
                        meaning that I got valuable experience leading our team's coders to accomplish
                        a goal with a set deadline. I also used control theory in programming autonomous
                        robot code, and I used a PID controller to rotate the robot to a desired heading
                        using differential drive.
                    </p>
                </Card>
                <Card imgSrc="compuut-logo.png">
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
                <Card imgSrc="crt-logo.png">
                    <h3>Rockets</h3>
                    <p>
                        At Case Western Reserve University, I've been working on flight computers for our
                        rockets in embedded Rust and C++. I'm still a newbie on the team, but I've been learning
                        a lot and am about to earn my L1 certification.
                    </p>
                </Card>
            </Staggered>
            <br />
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
                <Card imgSrc="rust-logo.png">
                    <h3>Rust (embedded)</h3>
                    <p>
                        On Case Rocket Team, I've used Rust as an embedded language, and I'm
                        comfortable in saying that I'm proficient in many aspects of the language.
                        Using the Cortex M7 processor and the iMXRT1062 chip HALs, I've written
                        applications on bare metal in Rust.
                    </p>
                </Card>
                <Card imgSrc="lua-logo.png">
                    <h3>Lua, Python, and other languages</h3>
                    <p>
                        I also have some experience with other languages, including Lua, Python,
                        and C/C++ from working on other miscellaneous projects.
                        I'm a fast learner, so if you need me to pick up a language
                        for your project I can!
                    </p>
                </Card>
            </Staggered>
            <div style={{
                height: "30vh"
            }}>
                {/* Spacing!! */}
            </div>
        </div>
    </div>
}