import { fastUpAnimation } from "@/constants/animations"
import { handleMove } from "@/scripts/carrusel"
import { handleKey } from "@/scripts/keypress"
import { AnimatePresence, motion } from "framer-motion"
import type React from "react"
import { useEffect, useState } from "react"

interface Prompts {
    state: boolean
    setState: React.Dispatch<React.SetStateAction<boolean>>

    images: string[]
    currentIndex?: number

}
export default function ImageModal({ state, setState, images, currentIndex = 0 }: Prompts) {
    const [currentImage, setImage] = useState({ index: currentIndex, loading: false });
    useEffect(() => {
        if (state) {
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "";
        }
        if (!state) return;

        window.addEventListener("keydown", (e: KeyboardEvent) => { handleKey(e, setState, images.length, setImage) });

        return () => {
            window.removeEventListener("keydown", (e: KeyboardEvent) => { handleKey(e, setState, images.length, setImage) });
        }
    }, [state])

    useEffect(() => {
        setImage(prev => ({ ...prev, index: currentIndex }))
    }, [images, currentIndex])


    return (
        <AnimatePresence mode="wait">
            {state &&
                <motion.div variants={fastUpAnimation} initial="hidden" animate="show" exit="out" className="fixed top-0 left-0 flex justify-between w-screen h-screen bg-black/60 px-[5%] backdrop-blur-sm z-500" onClick={() => { setState(false); }}>
                    <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.3 }} className="absolute right-12 top-6 cursor-pointer p-2 rounded-lg" onClick={() => { setState(false) }}>
                        <span className="text-xl">X</span>
                    </motion.button>

                    {images.length > 1 &&
                        <ImgModalBtn onClick={(e) => { handleMove(false, images.length, setImage); e.stopPropagation(); }} text="<" />
                    }

                    <main className="flex justify-center items-center w-9/10 h-full p-4" >
                        {currentImage.loading &&
                            <div className="w-12 h-12 border-4 border-c-inverted border-t-transparent rounded-full animate-spin"></div>
                        }
                        <img onLoad={() => { setImage(prev => ({ ...prev, loading: false })) }} className={`${currentImage.loading && 'hidden'} max-w-8/10 max-h-8/10 rounded-lg shadow-sm`} src={images[currentImage.index]} onClick={(e) => { e.stopPropagation() }} />
                    </main>

                    {images.length > 1 &&
                        <ImgModalBtn onClick={(e) => { handleMove(true, images.length, setImage); e.stopPropagation(); }} text=">" />
                    }
                </motion.div>
            }
        </AnimatePresence>
    )
}

const ImgModalBtn = ({ text, onClick }: { text: string, onClick: (e: any) => void }) => (
    <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.3 }} className="w-fit h-fit my-auto cursor-pointer p-2 rounded-lg" onClick={onClick} >
        <span className=" text-2xl">{text}</span>
    </motion.button >
)