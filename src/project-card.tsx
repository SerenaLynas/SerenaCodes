import { mdiClock, mdiClockOutline, mdiCodeBraces, mdiCodeBracesBox, mdiLayersOutline } from "@mdi/js"
import React, { HTMLProps } from "react"
import { Card } from "./card"
import { DivProps } from "./div-props"
import { Icon } from "./icon"
import { IconPair } from "./icon-pair"
import { OldCard } from "./old-card"
import { ProjectData, projectLanguages, projectTechs } from "./projects-data"
import { theme } from "./theme"

interface Props extends DivProps {
    projectData: ProjectData
}

const iconStyle = {
    
}

export const ProjectCard = ({ projectData, ...props }: Props) => {
    console.log(projectData);
    const { time, tech, lang } = projectData;
    return <Card
            {...props}
            icon={projectData.imgLink}
            header={<h3>{ projectData.friendlyName }</h3>}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 15,
            color: theme.softText,
        }}>
            { time ? <IconPair icon={<Icon size={20} mdi={mdiClockOutline} style={iconStyle}/>}>{ time }</IconPair> : null }
            { lang ? <IconPair icon={<Icon size={20} mdi={mdiCodeBraces} style={iconStyle}/>}>{ Object.keys(lang).map(l => (projectLanguages as any)[l].friendlyName).join(', ') }</IconPair> : null }
            { tech ? <IconPair icon={<Icon size={20} mdi={mdiLayersOutline} style={iconStyle}/>}>{ Object.keys(tech).map(l => (projectTechs as any)[l].friendlyName).join(', ') }</IconPair> : null }
        </div>
    </Card>
}