import type React from "react"
import { useEffect, useState } from "react"

interface Prompts {
    state: boolean
    setState: React.Dispatch<React.SetStateAction<boolean>>

    images: string[]
    currentIndex?: number

}
export default function ImageModal({ state, setState, images, currentIndex = 0 }: Prompts) {
    const [currentImage, setImage] = useState(currentIndex);
    useEffect(() => {
        if (state) {
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "";
        }
    }, [state])

    useEffect(() => { setImage(currentIndex) }, [images])

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
                <div className="fixed top-0 left-0 flex justify-between w-screen h-screen bg-black/60 px-[5%] backdrop-blur-sm" onClick={() => { setState(false); }}>
                    <button className="absolute right-12 top-6 cursor-pointer p-2 rounded-lg" onClick={() => { setState(false) }}>
                        <span className="text-xl">X</span>
                    </button>
                    <ImgModalBtn onClick={(e) => { handleMove(false); e.stopPropagation(); }} text="<" />

                    <main className="flex justify-center items-center w-9/10 h-full p-4" >
                        <img onClick={(e) => { e.stopPropagation() }} className="max-w-8/10 max-h-8/10 rounded-lg shadow-sm" src={images[currentImage]} />
                    </main>

                    <ImgModalBtn onClick={(e) => { handleMove(true); e.stopPropagation(); }} text=">" />
                </div>
            }
        </>
    )
}

const ImgModalBtn = ({ text, onClick }: { text: string, onClick: (e: any) => void }) => (
    <button className="w-fit h-fit my-auto cursor-pointer p-2 rounded-lg" onClick={onClick}>
        <span className=" text-2xl">{text}</span>
    </button>
)