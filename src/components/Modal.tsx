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
    icon?: string
    onClose?: () => void
}
export default function Modal({ state, setState, children, title, icon, onClose }: Prompts) {
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
                    className="fixed top-0 left-0 z-100 flex justify-center py-8 md:py-2 w-screen h-screen bg-black/50 overflow-y-scroll" onClick={() => { setState(false) }}>

                    <motion.div variants={showUp} initial="hidden" animate="show" className="flex flex-col rounded-xl bg-[#1f1f1f] w-8/10 lg:h-8/10 m-auto text-white overflow-y-auto lg:p-8 p-4" onClick={(e) => { e.stopPropagation(); }}>
                        <header className="flex justify-between rounded-t-xl mb-4 sm:mb-0">
                            <h3 className="flex sm:flex-row flex-col gap-4 text-4xl items-center sm:justify-start justify-center w-full">
                                {icon && <img src={icon} alt="icon" className="h-8" />}
                                <span>{title}</span>
                            </h3>
                            <button className="absolute top-2 right-2 sm:top-4 sm:right-4 cursor-pointer" onClick={() => { setState(false); onClose?.() }}>
                                <img className="size-6" src={Close} alt='close' />
                            </button>
                        </header>
                        <main className="h-full">
                            {children}
                        </main>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    )
}
