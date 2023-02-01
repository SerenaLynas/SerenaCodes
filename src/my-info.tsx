import { mdiEmail, mdiGithub, mdiLanguageTypescript, mdiLinkVariant } from "@mdi/js"
import React from "react"
import { OldCard } from "./old-card"
import { CardColumn } from "./card-column"
import { ClickableCard } from "./clickable-card"
import { Icon } from "./icon"
import { LanguageCard } from "./language-card"
import { SmallCard } from "./small-card"
import { Staggered } from "./staggered"
import { theme } from "./theme"
import { Card } from "./card"
import { projectsData } from "./projects-data"
import { ProjectCard } from "./project-card"

export const MyInfo = () => {
    return <div style={{
        overflow: "visible",
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
                    physics and computer science, so I decided to major in all three! I've been coding since
                    I was 10 years old, and along the way I picked up a variety of languages, from HTML/CSS/JS
                    to embedded C++.
                </p>
                <br />
                <h2>My Languages</h2>
                <br />
                <CardColumn>
                    <LanguageCard
                        lang='typescript'
                        icon='logos/ts.png'
                        header='TypeScript/JavaScript'/>
                    <LanguageCard
                        lang='java'
                        icon='logos/java.png'
                        header='Java'/>
                    <LanguageCard
                        lang='rust'
                        icon='logos/rust.png'
                        header='Rust'/>
                    <LanguageCard
                        lang='cpp'
                        icon='logos/cpp.png'
                        header='C/C++'/>
                </CardColumn>
            </div>
            <div style={{
                gridColumn: "2",
                gridRow: "1 / 3",
                gridAutoColumns: "auto",
                //background: "rgb(252 242 242)",
                background: "white",
                paddingLeft: "25px",
                marginLeft: 30,
                borderRadius: 5,
                position: "relative",
                alignSelf: "self-start",
                boxShadow: theme.shadow + " -15px 0px 20px -30px"
            }}>
                <h2>
                    Connect
                </h2>
                <br/>
                <CardColumn>
                    <ClickableCard 
                            icon={<Icon mdi={mdiLinkVariant} title="Website Link"/>}
                            href="https://serena.codes">
                        serena.codes
                    </ClickableCard>
                    
                    <ClickableCard
                            icon={<Icon mdi={mdiEmail} title="Email Address"/>}
                            href="mailto://serena@serena.codes">
                        serena@serena.codes
                    </ClickableCard>

                    <ClickableCard 
                            icon={<Icon mdi={mdiGithub} title="GitHub"/>}
                            href="https://github.com/SploxFox">
                            {/*<a href="https://github.com/SploxFox">SploxFox</a>*/}
                        SploxFox
                    </ClickableCard>
                </CardColumn>
                <br/>
                <h2>Timeline</h2>
                <br/>
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
                <br/>
                <h3>2018-2022</h3>
                <ul>
                    <li>
                        Student at St. Ignatius College Prep in Chicago, IL.
                    </li>
                    <li>
                        <em>2019-2022</em>: Coding Captain on our school's robotics team.
                    </li>
                </ul>
                {/*<div style={{
                    backgroundImage: "url(./dots.svg)",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 5,
                    left: 5,
                    borderRadius: 5,
                    zIndex: -1
                }}></div>*/}
            </div>
            <div style={{
                gridColumn: "1 / span 2",
                gridRow: "2 / span 2"
            }}>
                <br />
                <h2>Projects & Experience</h2>
                <Card icon='logos/wolfbyte.jpg' header={<h3>FRC Robots</h3>}>
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

                <br/>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        maxWidth: 700,
                        margin: 'auto'
                    }}>
                        { Object.entries(projectsData).map(([key, data]) => <ProjectCard key={key} projectData={data} />) }
                    </div>
                
                <Staggered>
                    <OldCard imgSrc="wolfbyte-logo.jpg">
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
                    </OldCard>
                    <OldCard imgSrc="compuut-logo.png">
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
                    </OldCard>
                    <OldCard imgSrc="crt-logo.png">
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
                    </OldCard>
                    <OldCard imgEmoji="📝">
                        <h3>Math & Physics</h3>
                        <ul>
                            <li>
                                Math: Multivariable calculus. Will take Diff Eq Spring 2023
                            </li>
                            <li>
                                Physics: Mechanics & E&M. No quantum (yet)
                            </li>
                        </ul>
                    </OldCard>
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