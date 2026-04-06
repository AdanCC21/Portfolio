import { useState } from 'react';

import Menu from '@/assets/icons/menu.svg';
import ItemMediumBottom from '@/assets/decoration/itemMediumBottom.svg'

import { useLanguage } from '@/hooks/useLanguage'
import { useTheme } from '@/hooks/useTheme';
import type { ThemeType } from '@/context/ThemeContext';
import { tailwindcssDuration } from '@/constants/animations';

interface Prompts {
  homeRef: React.RefObject<any>;
  skillsRef: React.RefObject<any>;
  projectsRef: React.RefObject<any>;
  achivementRef: React.RefObject<any>;
  aboutRef: React.RefObject<any>;
}

export default function Header({ homeRef, skillsRef, projectsRef, achivementRef, aboutRef }: Prompts) {
  const { t, lang, setLang } = useLanguage();
  const { theme } = useTheme();
  const [viewMenu, showMenu] = useState(false);

  const goTo = (ref: React.RefObject<any>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <nav className='fixed flex bg-c-bg h-[6vh] w-full justify-between items-center md:justify-start px-[4%] z-50'>
      <div className='hidden md:flex items-center justify-center h-full w-full z-50'>
        {/* <button className='group' onClick={() => { toggleTheme() }}>
          <img src={theme === 'dark' ? Dark : Light} className={`h-4 cursor-pointer group-hover:scale-125 ${tailwindcssDuration}`} />
        </button> */}
        <a href='/CV_Adan_Gonzalez.pdf' download className={`fixed hover:scale-125 top-2 left-4 ${tailwindcssDuration} text-base font-medium cursor-pointer`}>cv</a>
        
        <ul className='flex gap-x-4 '>
          <HeaderItem theme={theme} text={t.header.home} onClick={() => { goTo(homeRef) }} />
          <HeaderItem theme={theme} text={t.header.achivement} onClick={() => { goTo(achivementRef) }} />
          <HeaderItem theme={theme} text={t.header.projects} onClick={() => { goTo(projectsRef) }} />
          <HeaderItem theme={theme} text={t.header.skills} onClick={() => { goTo(skillsRef) }} />
          <HeaderItem theme={theme} text={t.header.aboutMe} onClick={() => { goTo(aboutRef) }} />
        </ul>
        <button className={`fixed hover:scale-125 top-2 right-4 ${tailwindcssDuration}`}>
          <span className='text-base font-medium cursor-pointer'
            onClick={() => { setLang() }} >{lang === 'es' ? 'es' : 'en'}</span>
        </button>
      </div>

      <div className='md:hidden relative cursor-pointer' onClick={() => { showMenu(prev => !prev) }}>
        <img src={Menu} alt='menu' className={`${theme !== 'dark' && 'invert'} `} />
        {viewMenu &&
          <div className='absolute flex gap-x-4 bg-c-bg border border-[#ccc] rounded-lg rounded-tl-none z-51'>
            <ul className='flex flex-col w-fit list-none'>
              <li><HeaderItem theme={theme} text={t.header.home} onClick={() => { goTo(homeRef) }} /></li>
              <li><HeaderItem theme={theme} text={t.header.achivement} onClick={() => { goTo(achivementRef) }} /></li>
              <li><HeaderItem theme={theme} text={t.header.projects} onClick={() => { goTo(projectsRef) }} /></li>
              <li><HeaderItem theme={theme} text={t.header.skills} onClick={() => { goTo(skillsRef) }} /></li>
              <li><HeaderItem theme={theme} text={t.header.aboutMe} onClick={() => { goTo(aboutRef) }} /></li>
            </ul>
          </div>
        }
      </div>
      <div className='md:hidden flex h-full gap-x-4 items-center'>
        <span className='text-base font-medium cursor-pointer'
          onClick={() => { setLang() }} >{lang === 'es' ? 'es' : 'en'}</span>
        {/* <img src={theme === 'dark' ? Dark : Light} className='md:hidden h-4 cursor-pointer ' onClick={() => { toggleTheme() }} /> */}
      </div>
      {viewMenu &&
        <div onClick={() => { showMenu(false) }} className='fixed w-screen h-screen'></div>
      }
    </nav>
  )
}

interface ItemPrompts {
  text: string
  onClick: () => void
  theme: ThemeType
}
const HeaderItem = ({ text, onClick, theme }: ItemPrompts) => {
  return (
    <button className='relative flex flex-col items-center justify-center px-4 py-2 cursor-pointer group ' onClick={onClick}>
      <span className={`text-base group-hover:scale-110 ${tailwindcssDuration}`}>{text}</span>
      <img className={`hidden md:block absolute bottom-0 max-w-4/10 opacity-0 translate-y-1
        group-hover:opacity-100 group-hover:translate-y-0 ${tailwindcssDuration} ${theme === 'dark' && 'invert'}`} src={ItemMediumBottom} />
    </button>
  )
}