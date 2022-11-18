/// <reference types="react" />
import { SequenceItemProps } from "./sequence-item-props";
export interface SequenceItemContext extends SequenceItemProps {
    hasPassed: boolean;
}
export declare const SequenceItemContext: import("react").Context<SequenceItemContext>;
export declare const useSequenceInfo: () => SequenceItemContext;
//# sourceMappingURL=sequence-item-context.d.ts.map