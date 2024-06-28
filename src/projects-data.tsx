import React, { ReactElement } from "react";

export interface ProjectKeywordData {
    friendlyName: string
    url?: string,
    aliases?: string[]
}

export const projectLanguages = {
    javascript: {
        friendlyName: 'JavaScript'
    },
    typescript: {
        friendlyName: 'TypeScript'
    },
    java: {
        friendlyName: 'Java'
    },
    cpp: {
        friendlyName: 'C/C++',
        aliases: ['c++']
    },
    rust: {
        friendlyName: 'Rust'
    },
    python: {
        friendlyName: 'Python'
    }
} satisfies {
    [index: string]: ProjectKeywordData
}

export const projectTechs = {
    robotics: {
        friendlyName: 'Robotics'
    },
    react: {
        friendlyName: 'React'
    },
    firebase: {
        friendlyName: 'Firebase'
    },
    arduino: {
        friendlyName: 'Arduino'
    },
    embedded: {
        friendlyName: 'Embedded'
    }
} satisfies {
    [index: string]: ProjectKeywordData
}

// Declared as true for convenience later -- see projectsData literal
const
    javascript = true,
    typescript = true,
    java = true,
    frc = true,
    robotics = true,
    react = true,
    cpp = true,
    rust = true,
    firebase = true,
    arduino = true;

export type ProjectLanguage = keyof typeof projectLanguages;
export type ProjectTech = keyof typeof projectTechs;
export type ProjectKeyword = ProjectLanguage | ProjectTech;

type Mapped<T extends string | number> = {
    [K in T]?: boolean
}

export interface ProjectData {
    friendlyName: string,
    description?: ReactElement,
    link?: string,
    ghLink?: string,
    imgLink: string,
    lang: Mapped<ProjectLanguage>,
    tech: Mapped<ProjectTech>,
    time?: string
}

export const projectsData = {
    compuut: {
        friendlyName: 'Compuut',
        imgLink: 'logos/compuut.png',
        description: <>
            <p>
                One day in highschool I was sitting in class and the teacher tried to do a Kahoot in math
                class. Suffice it to say, it went horribly &mdash; Kahoot had no math symbols and was only
                multiple choice! That's when I got the idea to make a fully-fledged web app learning tool.
            </p>
            <p>
                I bought compuut.com (as that was the domain I could get for cheap at the time) and after
                many, many hours of work and testing it out in class, I had a minimum viable product. It's a
                full-stack, real-time web app like Kahoot with full support for LaTeX, programmed entirely
                by me. I continued to iterate over it over the course of the year, and by the end of it I
                had produced a web app which had user authentication, databases, a support email, and a
                primitive monetization scheme.
            </p>
            <p>
                I'm hoping that now in college, I can find professors and other early adopters who can help
                me work on Compuut and turn it into a fully-fledged platform.
            </p>
        </>,
        link: 'https://compuut.com',
        lang: {
            javascript,
            typescript,
        },
        tech: {
            react,
            firebase
        }
    },
    crt: {
        friendlyName: 'Case Rocket Team',
        imgLink: 'logos/crt.png',
        description: <>
            <p>
                I wrote code that made rockets fly! Currently, I'm our team's lead developer on our flight computer
                code, written for an embedded system in C++.
            </p>
            <p>
                When I first joined Case Rocket Team, I didn't know much of anything about C++ or embedded systems,
                but I quickly was able to transfer the knowledge I had from other areas of computer science into
                embedded C++. Paired with a lot of trial and error, I mastered C++, and when we started working
                on the competition code, I ended up as the lead.
            </p>
            <p>
                Last year, our team placed first in our category and second overall of 149 university teams,
                and I'm hoping that over the coming years we can refine our code and control systems to push us
                into first.
            </p>
        </>,
        lang: {
            cpp
        },
        tech: {
            arduino
        },
        ghLink: 'https://github.com/Case-Rocket-Team/FlightComputer2022-23'
    },
    serenaCodes: {
        friendlyName: 'Serena.Codes (This website!)',
        imgLink: 'logos/serenacodes.png',
        description: <>
            <p>
                I wanted a portfolio-slash-resume website for myself so that way people like you
                could learn a little more about me! I used the tech stack that I'm most familiar
                with (Typescript + Webpack + React), and I used my (limited) frontend design skils
                to hopefully impress you with cool CSS animations.
            </p><p>
                If you're interested, you can get a taste of my coding style and take a look at the
                source on GitHub!
            </p>
        </>,
        ghLink: 'https://github.com/SploxFox/SerenaCodes',
        lang: {
            javascript,
            typescript,
        },
        tech: {
            react
        },
    },
    wolfbyte: {
        friendlyName: 'FRC 5822',
        imgLink: 'logos/wolfbyte.jpg',
        description: <>
            <p>
                I joined WolfByte my freshman year of highschool and immediately fell in love with the club.
                I was so enthusiastic that I would spend more than 20 hours per week in the build space during
                the peak of the season!
            </p><p>
                The following year, I was promoted to software lead where I remained until I graduated. During
                that time, I had a lot of fun doing robotics competitions, solving difficult problems, and managing
                our codebase. Our software included both desktop apps for Robot communication and
                robot code like PID control systems and odometry.
            </p>
        </>,
        lang: {
            java,
        },
        tech: {
            robotics
        },
        time: '20 hours/week for 4 years',
        ghLink: 'https://github.com/SICPRobotics/GameChangers-Robot',
    }
} satisfies {
    [index: string]: ProjectData
}