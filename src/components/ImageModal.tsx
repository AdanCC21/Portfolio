import { fastUpAnimation } from "@/constants/animations"
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
    const [currentImage, setImage] = useState(currentIndex);
    useEffect(() => {
        if (state) {
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "";
        }
        if (!state) return;

        const handleKey = (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowRight":
                    handleMove(true);
                    break;
                case "ArrowLeft":
                    handleMove(false);
                    break;
                case "Escape":
                    setState(false)
                    break;
            }
        }

        window.addEventListener("keydown", handleKey);

        return () => {
            window.removeEventListener("keydown", handleKey);
        }
    }, [state])

    useEffect(() => {
        setImage(currentIndex)
    }, [images])

    const handleMove = (moveRight: boolean) => {
        setImage((prev) => {
            if (moveRight) {
                return prev === images.length - 1 ? 0 : prev + 1;
            } else {
                return prev === 0 ? images.length - 1 : prev - 1;
            }
        });
    };


    return (
        <AnimatePresence mode="wait">
            {state &&
                <motion.div variants={fastUpAnimation} initial="hidden" animate="show" exit="out" className="fixed top-0 left-0 flex justify-between w-screen h-screen bg-black/60 px-[5%] backdrop-blur-sm z-100" onClick={() => { setState(false); }}>
                    <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.3 }} className="absolute right-12 top-6 cursor-pointer p-2 rounded-lg" onClick={() => { setState(false) }}>
                        <span className="text-xl">X</span>
                    </motion.button>

                    <ImgModalBtn onClick={(e) => { handleMove(false); e.stopPropagation(); }} text="<" />

                    <main className="flex justify-center items-center w-9/10 h-full p-4" >
                        <img onClick={(e) => { e.stopPropagation() }} className="max-w-8/10 max-h-8/10 rounded-lg shadow-sm" src={images[currentImage]} />
                    </main>

                    <ImgModalBtn onClick={(e) => { handleMove(true); e.stopPropagation(); }} text=">" />
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