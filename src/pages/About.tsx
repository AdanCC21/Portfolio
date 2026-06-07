import { useLanguage } from '@/hooks/useLanguage'
import ig from '@/assets/icons/social-media/instagram.svg'
import github from '@/assets/icons/social-media/github.svg'
import linkedin from '@/assets/icons/social-media/linkedin.svg'
import gmail from '@/assets/icons/social-media/gmail.svg'
import { useTheme } from '@/hooks/useTheme'
import type { ThemeType } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import { listUpContainerAnimations, listUpItemAnimations, viewPortAnimation } from '@/constants/animations'
import type { RefObject } from 'react'

interface Prompts {
    pageRef: RefObject<any>
}

export default function About({ pageRef }: Prompts) {
    const { t } = useLanguage();
    const { theme } = useTheme();

    return (
        <section ref={pageRef} className='relative flex md:flex-row flex-col gap-x-8 py-[5%] min-h-[80vh] pagePadding'>
            <img src="/draws/corvete.webp" alt="decoration" className="absolute bottom-5 left-1/10 h-15  scale-x-[-1] opacity-10 md:opacity-20 z-100" />
            <motion.div variants={listUpContainerAnimations} initial="hidden" whileInView="show" viewport={viewPortAnimation} className='flex flex-col flex-2 justify-center'>
                <motion.div variants={listUpItemAnimations} className='flex gap-x-4'>
                    <h3 className='text-4xl font-bold mb-4'>{t.aboutMe.title}</h3>
                    <img
                        src="draws/Proud.webp"
                        alt="draw de hecho"
                        className="max-h-10 h-auto w-auto"
                    />
                </motion.div>

                <motion.div variants={listUpContainerAnimations} initial="hidden" whileInView="show" viewport={viewPortAnimation} className='relative md:hidden flex w-full h-full items-center justify-center my-4'>
                    <motion.div variants={listUpItemAnimations} className='relative w-6/10 sm:w-4/10 h-fit'>
                        <img alt='yo' src='yo.webp' className='rounded-full ' />
                        <img alt='draw' src='draws/Music2.webp' className='absolute h-10 sm:h-12 right-0 bottom-0 ' />
                    </motion.div>
                </motion.div>

                <motion.p variants={listUpItemAnimations} className='whitespace-pre-line mb-4'>{t.aboutMe.description}</motion.p>

                <motion.ul variants={listUpItemAnimations} className='flex gap-2'>
                    <SocialItem href='https://www.linkedin.com/in/adan-gonzalez-cese%C3%B1a-584411338' src={linkedin} alt='linkedin' theme={theme} />
                    <SocialItem href='https://github.com/AdanCC21' src={github} alt='github' theme={theme} />
                    <SocialItem href='https://www.instagram.com/adan_gcm ' src={ig} alt='instagram' theme={theme} />
                    <li className='flex'>
                        <a href='mailto:andan.devp@gmail.com' target='_blank'>
                            <img src={gmail} alt='gmail' className={`${theme === 'dark' ? 'invert' : ''} w-4 m-auto`} />
                        </a>
                    </li>
                </motion.ul>
            </motion.div>

            <motion.div variants={listUpContainerAnimations} initial="hidden" whileInView="show" viewport={viewPortAnimation} className='hidden relative md:flex flex-1 items-center'>
                <motion.div variants={listUpItemAnimations} className='relative w-fit h-fit'>
                    <img alt='yo' src='yo.webp' className='rounded-full aspect-square object-cover' />
                    <img alt='draw' src='draws/Music2.webp' className='absolute h-16 sm:h-12 right-0 bottom-0 ' />
                </motion.div>
            </motion.div>
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
