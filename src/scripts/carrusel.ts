import type { SetStateAction } from "react"

export function handleMove(moveRight: boolean, listLength: number, setter: React.Dispatch<SetStateAction<{ index: number, loading: boolean }>>) {
    setter(prev => {
        if (moveRight) {
            return prev.index === listLength - 1 ? { loading: true, index: 0 } : { loading: true, index: prev.index + 1 }
        } else {
            return prev.index === 0 ? { loading: true, index: listLength - 1 } : { loading: true, index: prev.index - 1 }
        }
    })
}