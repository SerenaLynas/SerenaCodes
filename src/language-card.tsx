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
    return <SmallCard
            icon={props.icon}
            style={{
                position: 'relative',
                overflow: 'hidden',
            }}>
        <strong>{props.header}</strong>
        { props.byline ? <i>{props.byline}</i> : null}
    </SmallCard>   
}