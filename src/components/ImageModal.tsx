import type React from "react"
import { useState } from "react"

interface Prompts {
    state: boolean
    setState: React.Dispatch<React.SetStateAction<boolean>>

    images: string[]
    currentIntex?: number
}
export default function ImageModal({ state, setState, images, currentIntex = 0 }: Prompts) {
    const [currentImage, setImage] = useState(currentIntex);

    return (
        <>
            {state &&
                <div className="fixed top-0 left-0 flex flex-col w-screen h-screen bg-black/20 blur-sm">
                    <button className="absolute right-2 top-2">
                        <span>X</span>
                    </button>
                    <button className="cursor-pointer">
                        <span>{"<"}</span>
                    </button>

                    <main className="flex w-8/10">
                        <img className="m-auto" src={images[currentImage]} />
                    </main>

                    <button className="cursor-pointer">
                        {">"}
                    </button>
                </div>
            }
        </>
    )
}
