import MdiIcon from '@mdi/react';
import { IconProps } from '@mdi/react/dist/IconProps';
import React from 'react';

interface Props {
    mdi?: string,
    src?: string,
    size?: number
}

export const Icon = ({ mdi, src, size, ...props }: Omit<IconProps, 'path'> & Props) => {
    if (mdi) {
        return <MdiIcon {...props} path={mdi} style={{
            height: size || 30,
            ...props.style
        }}/>
    } else {
        return <img {...(props as any)} style={{
            objectFit: 'contain',
            height: size || 30,
            width: size || 30,
            ...props.style
        }}/>
    }
}