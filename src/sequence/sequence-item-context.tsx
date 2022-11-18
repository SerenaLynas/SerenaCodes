import { createContext, useContext } from "react"
import { SequenceItemProps } from "./sequence-item-props"

export interface SequenceItemContext extends SequenceItemProps {
    hasPassed: boolean
}

export const SequenceItemContext = createContext<SequenceItemContext>({
    duration: 0,
    hasPassed: false
});

export const useSequenceInfo = () => {
    return useContext(SequenceItemContext);
}