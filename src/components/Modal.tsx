import type React from "react"

interface Prompts {
    state: boolean
    setState: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
    
    title?: string
    onClose?: () => void
}
export default function Moda({ state, setState, children }: Prompts) {

    return (
        <>
            {state &&
                <>
                    <header>

                    </header>
                    <main>
                        {children}
                    </main>

                    <footer>
                    </footer>
                </>
            }
        </>
    )
}
