import { mdiEmail, mdiGithub, mdiLanguageTypescript, mdiLinkVariant } from "@mdi/js"
import React from "react"
import { OldCard } from "./generic/old-card"
import { CardColumn } from "./generic/card-column"
import { ClickableCard } from "./generic/clickable-card"
import { Icon } from "./generic/icon"
import { LanguageCard } from "./language-card"
import { SmallCard } from "./generic/small-card"
import { Staggered } from "./generic/staggered"
import { theme } from "./theme"
import { Card } from "./generic/card"
import { projectsData } from "./projects-data"
import { ProjectCard } from "./project-card"
import useWindowSize from "./util/use-window-size"

export const MyInfo = () => {
    const [windowWidth] = useWindowSize();
    const isMobile = windowWidth < 650;

    return <div style={{
        overflow: "visible",
        maxWidth: 800,
        animation: "1s flyIn ease-out",
    }}>
        <div style={{
            display: isMobile ? 'flex' : 'grid',
            padding: isMobile ? 10 : 'unset',
            flexDirection: 'column',
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 10,
            
        }}>
            <div style={{
                gridColumn: "1",
                gridRow: "1"
            }}>
                <h2>Who am I?</h2>
                <br/>
                <p>
                    I'm Serena Lynas, an undergrad at Case Western Reserve University, and I'm double majoring
                    in Physics and Mathematics, BS, and Computer Science, BS. I couldn't decide between math,
                    physics and computer science, so I decided to major in all three! I've been coding since
                    I was 10 years old, and along the way I picked up a variety of languages, from HTML/CSS/JS
                    to embedded Rust.
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
                </CardColumn>
            </div>
            { isMobile ? <br /> : '' }
            <div style={isMobile ? {} : {
                gridColumn: "2",
                gridRow: "1 / 3",
                gridAutoColumns: "auto",
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
                            href="https://github.com/SerenaLynas">
                            {/*<a href="https://github.com/SploxFox">SploxFox</a>*/}
                        SerenaLynas
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
                </ul>
            </div>
            <div style={{
                gridColumn: "1 / span 2",
                gridRow: "2 / span 2"
            }}>
                <br />
                <h2>Projects & Experience</h2>
                <br/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    maxWidth: 800,
                    margin: 'auto'
                }}>
                    { Object.entries(projectsData).map(([key, data]) => <ProjectCard key={key} projectData={data} />) }
                </div>
            </div>
        </div>
        <div className="noPrint" style={{
            height: "30vh"
        }}>
            {/* Spacing!! */}
        </div>
    </div>
}