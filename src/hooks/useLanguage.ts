import { LanguageContext } from "@/context/LanguageContext"
import { useContext } from "react"

export function useLanguage() {
    const context = useContext(LanguageContext)

    if (!context) {
        throw new Error('useLanguage must be used inside LanguageProvider')
    }

    return context
}
