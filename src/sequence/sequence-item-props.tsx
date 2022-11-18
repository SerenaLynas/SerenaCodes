import { PropsWithChildren } from "react"

interface _SequenceItemProps {
    /**
     * Number of milliseconds the sequence
     * should wait after showing this item
     */
    duration: number,
}

export type SequenceItemProps = PropsWithChildren<_SequenceItemProps>