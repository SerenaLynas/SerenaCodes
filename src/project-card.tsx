import { mdiClock, mdiClockOutline, mdiCodeBraces, mdiCodeBracesBox, mdiGithub, mdiLayersOutline, mdiOpenInNew, mdiTools } from "@mdi/js"
import React, { HTMLProps, PropsWithChildren, ReactElement, ReactNode } from "react"
import { Card } from "./generic/card"
import { DivProps } from "./div-props"
import { Icon } from "./generic/icon"
import { IconPair } from "./generic/icon-pair"
import { OldCard } from "./generic/old-card"
import { ProjectData, projectLanguages, projectTechs } from "./projects-data"
import { theme } from "./theme"
import { ClickableCard } from "./generic/clickable-card"

interface Props extends DivProps {
    projectData: ProjectData
}

const iconStyle = {
    
}

interface ProjectLineProps {
    content?: ReactNode,
    mdi?: string
}

const ProjectLine = (props: ProjectLineProps) =>
    (props.content)
            ? <IconPair
                    icon={
                        <Icon size={20} mdi={props.mdi} style={iconStyle}/>}>
                            { props.content }
                        </IconPair>
            : null;

export const ProjectCard = ({ projectData, ...props }: Props) => {
    const { time, tech, lang, description, ghLink, link } = projectData;
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
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0 15px 0 10px',
                gap: 20
            }}>
                { description }
            </div>
            <div style={{
                display: 'flex',
                gap: 5
            }}>
                { link ? <ClickableCard icon={<Icon mdi={mdiOpenInNew}/>} href={link}>Visit</ClickableCard> : null }
                { ghLink ? <ClickableCard icon={<Icon mdi={mdiGithub}/>} href={ghLink}>View Source</ClickableCard> : null }
            </div>
            <ProjectLine mdi={mdiClockOutline} content={time} />
            <ProjectLine mdi={mdiCodeBraces} content={
                Object.keys(lang).map(l => (projectLanguages as any)[l].friendlyName).join(', ')
            }/>
            <ProjectLine mdi={mdiTools} content={
                Object.keys(tech).map(l => (projectTechs as any)[l].friendlyName).join(', ')
            }/>
        </div>
    </Card>
}