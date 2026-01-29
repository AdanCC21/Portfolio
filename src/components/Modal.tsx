import type React from "react"
import Close from '@/assets/icons/close.svg'
import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"
import { fadeInOutAnimation, showUp, showUpContainer } from "@/constants/animations"

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
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "";
        }
        if (!state) return;
    }, [state])

    return (
        <AnimatePresence mode="wait">
            {state &&
                <motion.div variants={fadeInOutAnimation} initial="hidden" animate="show" exit={"out"} className="fixed top-0 left-0 z-100 flex justify-center items-center w-screen h-screen bg-black/20 ">

                    <motion.div variants={showUp} initial="hidden" animate="show" className="flex flex-col rounded-xl bg-black/70 w-8/10 min-h-6/10">
                        <header className="flex justify-between bg-black/90 px-4 py-2 rounded-t-xl">
                            <span className="text-lg">{title}</span>
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
