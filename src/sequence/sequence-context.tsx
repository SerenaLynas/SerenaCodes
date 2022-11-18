import { createContext } from "react"

export interface SequenceContext {
    /**
     * Position of the item that grabs
     * this context.
     */
    index: number,

    /**
     * Current position that the sequence
     * is at (stateful value)
     */
    pos: number
}

export const SequenceContext = createContext<SequenceContext>({
    index: 0,
    pos: -1
})