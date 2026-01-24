import type React from "react"

interface Prompts {
    state: boolean
    setState: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode

    title?: string
    onClose?: () => void
}
export default function Moda({ state, setState, children, title, onClose }: Prompts) {

    return (
        <>
            {state &&
                <div className="fixed z-99 bg-black/20">
                    <div className="flex flex-col rounded-xl">
                        <header className="bg-c-inverted">
                            
                        </header>
                        <main>
                            {children}
                        </main>

                        <footer>
                        </footer>
                    </div>
                </div>
            }
        </>
    )
}
