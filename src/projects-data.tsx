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
        friendlyName: 'rust'
    },
    
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
    serenaCodes: {
        friendlyName: 'Serena.Codes (This website!)',
        imgLink: 'logos/serenacodes.png',
        link: 'https://serena.codes',
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
        lang: {
            java,
        },
        tech: {
            robotics
        },
        time: '4 years, 3 years Coding Captain; 20 hours/week'
    },
    crt: {
        friendlyName: 'Case Rocket Team',
        imgLink: 'logos/crt.png',
        description: <>
            I wrote code that made rockets fly! Currently, I'm our team's lead developer on our flight computer
            code, written for an embedded system in C++. When I first joined Case Rocket Team, I didn't know
            much of anything about C++ or embedded systems, but I quickly was able to transfer the knowledge
            I had from other areas of computer science into embedded C++. Paired with a lot of trial and error,
            I mastered C++, and when we started working on the competition code, I ended up as the lead.
            Last competition, our team placed first in our category and second overall of 149 university teams,
            and I'm hoping that this year we can refine 
        </>,
        lang: {
            cpp
        },
        tech: {
            arduino
        }
    }
} satisfies {
    [index: string]: ProjectData
}