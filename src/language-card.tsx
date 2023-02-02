import React, { useState } from "react";
import { ForwardArrow } from "./forward-arrow";
import { ProjectKeyword } from "./projects-data";
import { SmallCard } from "./generic/small-card";
import { theme } from "./theme";

interface Props {
    lang: ProjectKeyword,
    header: string,
    byline?: string,
    icon?: string | React.ReactElement,
}

export const LanguageCard = (props: Props) => {
    const [isHovering, setIsHovering] = useState(false);
    return <SmallCard
            onHoverChange={setIsHovering}
            icon={props.icon}
            style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
            }}>
        <strong >{props.header}</strong>
        { props.byline ? <i>{props.byline}</i> : null}
        <a style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            paddingRight: 20,
            transform: `translate(${isHovering ? '0' : '100%'}, -50%)`,
            transition: 'transform 0.3s',
            opacity: 0.5,
            color: theme.accent
        }}>See examples <ForwardArrow animated={isHovering}/></a>
    </SmallCard>   
}