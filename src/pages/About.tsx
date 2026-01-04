import { useLanguage } from '@/hooks/useLanguage'
import ig from '@/assets/icons/social-media/instagram.svg'
import github from '@/assets/icons/social-media/github.svg'
import linkedin from '@/assets/icons/social-media/linkedin.svg'
import gmail from '@/assets/icons/social-media/gmail.svg'
import { useTheme } from '@/hooks/useTheme'
import type { ThemeType } from '@/context/ThemeContext'

export default function About() {
    const { t } = useLanguage();
    const { theme } = useTheme();

    return (
        <section className='flex gap-x-8 min-h-screen py-[5%]'>
            <div className='flex flex-col flex-2'>
                <h3 className='text-4xl font-bold mb-4'>{t.aboutMe.title}</h3>
                <p className='whitespace-pre-line mb-4'>{t.aboutMe.description}</p>
                <ul className='flex gap-2'>
                    <SocialItem href='https://www.linkedin.com/in/adan-gonzalez-cese%C3%B1a-584411338' src={linkedin} alt='linkedin' theme={theme} />
                    <SocialItem href='https://github.com/AdanCC21' src={github} alt='github' theme={theme} />
                    <SocialItem href='https://www.instagram.com/adan_gcm ' src={ig} alt='instagram' theme={theme} />
                </ul>
            </div>
            <div className='flex flex-1 items-center'>
                <img src='yo.webp' className='rounded-full ' />
            </div>
        </section>
    )
}

interface SocialPrompts {
    src: string
    alt: string
    theme: ThemeType

    href: string
}
function SocialItem({ src, alt, theme, href }: SocialPrompts) {
    return (
        <li className='flex'>
            <a href={href} target='_blank'>
                <img src={src} alt={alt} className={`${theme === 'dark' ? 'invert' : ''} w-4 m-auto`} />
            </a>
        </li>
    )
}
