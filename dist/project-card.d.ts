import React from "react";
import { DivProps } from "./div-props";
import { ProjectData } from "./projects-data";
interface Props extends DivProps {
    projectData: ProjectData;
}
export declare const ProjectCard: ({ projectData, ...props }: Props) => React.JSX.Element;
export {};
//# sourceMappingURL=project-card.d.ts.map