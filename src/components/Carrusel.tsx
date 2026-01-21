import { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import { motion } from "framer-motion";
import { fadeInOutAnimation } from "@/constants/animations";

interface Prompts {
    images: string[]
}

export default function Carrusel({  images }: Prompts) {
    const [currentImage, setImage] = useState(0);
    const [imgModalState, showImgModal] = useState(false);

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

    useEffect(() => {
        setImage(0);
    }, [images])

    return (
        <>
            <ImageModal state={imgModalState} setState={showImgModal} images={images} currentIndex={currentImage} />
            <button className="cursor-pointer" onClick={() => { handleMove(false) }}>
                <span className="text-base">
                    {'<'}
                </span>
            </button>

            <motion.div key={currentImage} variants={fadeInOutAnimation} initial="hidden" animate="show"
            className="flex flex-col items-center justify-center w-8/10 h-full gap-y-3">
                <img className="cursor-pointer h-8/10" src={images[currentImage]} onClick={() => { showImgModal(!imgModalState) }} />
                <ul className="flex gap-x-2">
                    {images.map((_, index) => (
                        <span className={`${index === currentImage && 'text-c-inverted'} cursor-pointer`} onClick={() => { setImage(index) }}> - </span>
                    ))}
                </ul>
            </motion.div>

            <button className="cursor-pointer" onClick={() => { handleMove(true) }}>
                <span className="text-base">
                    {'>'}
                </span>
            </button>
        </>
    )
}
