import type React from "react"
import Close from '@/assets/icons/close.svg'
import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"
import { fadeInOutAnimation, showUp } from "@/constants/animations"
import { handleKey } from "@/scripts/keypress"

interface Prompts {
    state: boolean
    setState: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode

    title?: string
    onClose?: () => void
}
export default function Modal({ state, setState, children, title, onClose }: Prompts) {
    useEffect(() => {
        if (state) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "";
            return;
        }

        window.addEventListener("keydown", (e: KeyboardEvent) => { handleKey(e, setState) });

        return () => {
            window.removeEventListener("keydown", (e: KeyboardEvent) => { handleKey(e, setState,) });
            document.body.style.overflowY = "";
        }
    }, [state])

    return (
        <AnimatePresence mode="wait">
            {state &&
                <motion.div variants={fadeInOutAnimation} initial="hidden" animate="show" exit={"out"}
                    className="fixed top-0 left-0 z-100 flex justify-center py-2 w-screen h-screen bg-black/50 overflow-y-scroll" onClick={() => { setState(false) }}>
                    <motion.div variants={showUp} initial="hidden" animate="show" className="flex flex-col rounded-xl bg-black/90 w-8/10 min-h-6/10 h-fit m-auto text-white" onClick={(e) => { e.stopPropagation(); }}>
                        <header className="flex justify-between bg-black px-4 py-2 rounded-t-xl">
                            <span className="text-4xl my-1">{title}</span>
                            <button className="cursor-pointer" onClick={() => { setState(false); onClose?.() }}>
                                <img className="h-4" src={Close} alt='close' />
                            </button>
                        </header>
                        <main className="px-4 py-2">
                            {children}
                        </main>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    )
}
