import { handleMove } from "./carrusel";
import type { Dispatch, SetStateAction } from "react";

interface ModalImage { index: number, loading: boolean }

export function handleKey(e: KeyboardEvent, setModal: Dispatch<SetStateAction<boolean>>, listLength?: number, setImage?: Dispatch<SetStateAction<ModalImage>>) {

    switch (e.key) {
        case "ArrowRight":
            (listLength && setImage) && handleMove(true, listLength, setImage);
            break;
        case "ArrowLeft":
            (listLength && setImage) && handleMove(false, listLength, setImage);
            break;
        case "Escape":
            setModal(false)
            e.stopPropagation();
            break;
    }
}