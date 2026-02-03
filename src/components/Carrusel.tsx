import { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import { motion } from "framer-motion";
import { fadeInOutAnimation } from "@/constants/animations";
import { handleMove } from "@/scripts/carrusel";

interface Prompts {
    images: string[]
}

export default function Carrusel({ images }: Prompts) {
    const [currentImage, setImage] = useState({ index: 0, loading: false });
    const [imgModalState, showImgModal] = useState(false);

    useEffect(() => {
        setImage({ index: 0, loading: true });
        setTimeout(() => { setImage(prev => ({ ...prev, loading: false })) }, 500)
    }, [images])

    return (
        <>
            <ImageModal state={imgModalState} setState={showImgModal} images={images} currentIndex={currentImage.index} />
            {images.length > 1 &&
                <button className="cursor-pointer" onClick={() => { handleMove(false, images.length, setImage) }}>
                    <span className="text-base">
                        {'<'}
                    </span>
                </button>
            }

            <motion.div key={currentImage.index} variants={fadeInOutAnimation} initial="hidden" animate="show"
                className="relative flex flex-col items-center justify-center w-8/10 h-full gap-y-3 mx-auto">
                
                <img onLoad={() => { setImage(prev => ({ ...prev, loading: false })) }} className={`${currentImage.loading && 'hidden'} w-auto max-h-45 md:max-h-[80%]  cursor-pointer rounded-lg overflow-hidden`} src={images[currentImage.index]} onClick={() => { showImgModal(!imgModalState) }} />

                {currentImage.loading &&
                    <div className="w-full flex h-45 items-center justify-center">
                        <div className=" w-4 h-4 border-4 border-c-inverted border-t-transparent rounded-full animate-spin"></div>
                    </div>
                }

                <ul className="h-fit flex gap-x-2">
                    {images.map((_, index) => (
                        <span className={`${index === currentImage.index && 'text-c-inverted'} cursor-pointer`} onClick={() => { setImage(prev => ({ ...prev, index })) }}> - </span>
                    ))}
                </ul>
            </motion.div>

            {images.length > 1 &&
                <button className="cursor-pointer" onClick={() => { handleMove(true, images.length, setImage) }}>
                    <span className="text-base">
                        {'>'}
                    </span>
                </button>
            }
        </>
    )
}
