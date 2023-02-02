import { ReactElement } from "react";
export interface ProjectKeywordData {
    friendlyName: string;
    url?: string;
    aliases?: string[];
}
export declare const projectLanguages: {
    javascript: {
        friendlyName: string;
    };
    typescript: {
        friendlyName: string;
    };
    java: {
        friendlyName: string;
    };
    cpp: {
        friendlyName: string;
        aliases: string[];
    };
    rust: {
        friendlyName: string;
    };
};
export declare const projectTechs: {
    robotics: {
        friendlyName: string;
    };
    react: {
        friendlyName: string;
    };
    firebase: {
        friendlyName: string;
    };
    arduino: {
        friendlyName: string;
    };
    embedded: {
        friendlyName: string;
    };
};
export type ProjectLanguage = keyof typeof projectLanguages;
export type ProjectTech = keyof typeof projectTechs;
export type ProjectKeyword = ProjectLanguage | ProjectTech;
type Mapped<T extends string | number> = {
    [K in T]?: boolean;
};
export interface ProjectData {
    friendlyName: string;
    description?: ReactElement;
    link?: string;
    ghLink?: string;
    imgLink: string;
    lang: Mapped<ProjectLanguage>;
    tech: Mapped<ProjectTech>;
    time?: string;
}
export declare const projectsData: {
    compuut: {
        friendlyName: string;
        imgLink: string;
        description: JSX.Element;
        link: string;
        lang: {
            javascript: true;
            typescript: true;
        };
        tech: {
            react: true;
            firebase: true;
        };
    };
    crt: {
        friendlyName: string;
        imgLink: string;
        description: JSX.Element;
        lang: {
            cpp: true;
        };
        tech: {
            arduino: true;
        };
        ghLink: string;
    };
    serenaCodes: {
        friendlyName: string;
        imgLink: string;
        description: JSX.Element;
        ghLink: string;
        lang: {
            javascript: true;
            typescript: true;
        };
        tech: {
            react: true;
        };
    };
    wolfbyte: {
        friendlyName: string;
        imgLink: string;
        description: JSX.Element;
        lang: {
            java: true;
        };
        tech: {
            robotics: true;
        };
        time: string;
        ghLink: string;
    };
};
export {};
//# sourceMappingURL=projects-data.d.ts.map