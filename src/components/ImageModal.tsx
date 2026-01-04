import type React from "react"
import { useEffect, useState } from "react"

interface Prompts {
    state: boolean
    setState: React.Dispatch<React.SetStateAction<boolean>>

    images: string[]
    currentIntex?: number

}
export default function ImageModal({ state, setState, images, currentIntex = 0 }: Prompts) {
    const [currentImage, setImage] = useState(currentIntex);

    useEffect(() => {
        if (state) {
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "";
        }
    }, [state])

    useEffect(() => { setImage(currentIntex | 0) }, [images])

    const handleMove = (moveRight: boolean) => {
        if (currentImage === images.length - 1 && moveRight) {
            setImage(0);
        } else {
            if (currentImage === 0 && !moveRight) {
                setImage(images.length - 1)
            } else {
                moveRight ? setImage(currentImage + 1) : setImage(currentImage - 1)
            }
        }
    }

    return (
        <>
            {state &&
                <div className="fixed top-0 left-0 flex justify-between w-screen h-screen bg-black/60 px-[5%] backdrop-blur-sm">
                    <button className="absolute right-12 top-6 cursor-pointer p-2 group hover:bg-c-inverted rounded-lg" onClick={() => { setState(false) }}>
                        <span className="text-xl group-hover:text-c-text-inverted">X</span>
                    </button>
                    <button className="w-fit h-fit my-auto cursor-pointer p-2 group hover:bg-c-inverted rounded-lg" onClick={() => { handleMove(false) }}>
                        <span className="group-hover:text-c-text-inverted text-2xl">{"<"}</span>
                    </button>

                    <main className="flex justify-center items-center w-9/10 h-full p-4">
                        <img className="max-w-8/10 max-h-8/10 rounded-lg shadow-sm" src={images[currentImage]} />
                    </main>

                    <button className="w-fit h-fit my-auto cursor-pointer p-2 group hover:bg-c-inverted rounded-lg" onClick={() => { handleMove(true) }}>
                        <span className="group-hover:text-c-text-inverted text-2xl">{">"}</span>
                    </button>
                </div>
            }
        </>
    )
}
