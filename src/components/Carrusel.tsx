import { getImages } from "@/scripts/images"
import { useEffect, useState } from "react";
import ImageModal from "./ImageModal";

interface Prompts {
    folderName: string
    count: number

    imagesBase?: string[]
}

export default function Carrusel({ folderName, count, imagesBase }: Prompts) {
    const [currentImage, setImage] = useState(0);
    const [imgModalState, showImgModal] = useState(false);


    const images = imagesBase ? imagesBase : getImages(folderName, count);

    const handleMove = (moveRight: boolean) => {
        console.log(currentImage, images.length)
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
    }, [folderName, imagesBase])

    return (
        <>
            <ImageModal state={imgModalState} setState={showImgModal} images={images} currentIndex={currentImage} />
            <button className="cursor-pointer" onClick={() => { handleMove(false) }}>
                <span className="text-base">
                    {'<'}
                </span>
            </button>

            <div className="flex flex-col items-center justify-center w-8/10 h-full gap-y-3">
                <img className="cursor-pointer h-8/10" src={images[currentImage]} alt={folderName} onClick={() => { showImgModal(!imgModalState) }} />
                <ul className="flex gap-x-2">
                    {images.map((_, index) => (
                        <span className={`${index === currentImage && 'text-c-inverted'} cursor-pointer`} onClick={() => { setImage(index) }}> - </span>
                    ))}
                </ul>
            </div>

            <button className="cursor-pointer" onClick={() => { handleMove(true) }}>
                <span className="text-base">
                    {'>'}
                </span>
            </button>
        </>
    )
}
