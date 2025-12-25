import { createContext, useState } from 'react'
import type { LanguageType } from '@/entities/language.entity'

import es from '@/languages/es.json'
import en from '@/languages/en.json'

const translations = { es, en }

type LanguageContextType = {
    lang: LanguageType
    setLang: () => void
    t: typeof es
}

export const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<LanguageType>(
        () => (localStorage.getItem('lang') as LanguageType) || 'es'
    )

    const changeLang = () => {
        let newLang = lang === 'en' ? 'es' : 'en' as LanguageType
        setLang(newLang)
        localStorage.setItem('lang', newLang)
    }

    const value: LanguageContextType = {
        lang,
        setLang: changeLang,
        t: translations[lang]
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}