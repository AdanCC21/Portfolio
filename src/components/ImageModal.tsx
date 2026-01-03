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

    useEffect(()=>{setImage(currentIntex | 0)},[images])

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
                <div className="fixed top-0 left-0 flex justify-between w-screen h-screen bg-black/20 px-[5%] backdrop-blur-sm">
                    <button className="absolute right-12 top-6 cursor-pointer" onClick={() => { setState(false) }}>
                        <span>X</span>
                    </button>
                    <button className="cursor-pointer" onClick={()=>{handleMove(false)}}>
                        <span>{"<"}</span>
                    </button>

                    <main className="flex w-9/10">
                        <img className="m-auto" src={images[currentImage]} />
                    </main>

                    <button className="cursor-pointer" onClick={()=>{handleMove(true)}}>
                        {">"}
                    </button>
                </div>
            }
        </>
    )
}
