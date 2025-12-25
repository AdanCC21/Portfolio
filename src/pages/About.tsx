import { useLanguage } from '@/hooks/useLanguage'
import React from 'react'

export default function About() {
    const { t } = useLanguage();
    return (
        <section className='min-h-screen py-[5%]'>
            <h3 className='text-2xl font-bold'>{t.aboutMe.title}</h3>
        </section>
    )
}
