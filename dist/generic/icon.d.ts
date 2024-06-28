import { IconProps } from '@mdi/react/dist/IconProps';
import React from 'react';
interface Props {
    mdi?: string;
    src?: string;
    size?: number;
}
export declare const Icon: ({ mdi, src, size, ...props }: Omit<IconProps, 'path'> & Props) => React.JSX.Element;
export {};
//# sourceMappingURL=icon.d.ts.map