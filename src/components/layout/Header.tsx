import Dark from '@/assets/icons/dark.svg'
import Light from '@/assets/icons/light.svg'
import { useLanguage } from '@/hooks/useLanguage'
import { useTheme } from '@/hooks/useTheme';
import Menu from '@/assets/icons/menu.svg';
import { useState } from 'react';

interface Prompts {
  homeRef: React.RefObject<any>;
  skillsRef: React.RefObject<any>;
  projectsRef: React.RefObject<any>;
  achivementRef: React.RefObject<any>;
  aboutRef: React.RefObject<any>;
}

export default function Header({ homeRef, skillsRef, projectsRef, achivementRef, aboutRef }: Prompts) {
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [viewMenu, showMenu] = useState(false);

  const goTo = (ref: React.RefObject<any>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <nav className='fixed flex bg-c-bg h-[6vh] w-full justify-between items-center md:justify-start px-[4%] z-50'>
      <div className='hidden md:flex items-center justify-between h-full w-full z-50'>
        <img src={theme === 'dark' ? Dark : Light} className='h-4 cursor-pointer ' onClick={() => { toggleTheme() }} />
        <ul className='flex gap-x-4 '>
          <HeaderItem text={t.header.home} onClick={() => { goTo(homeRef) }} />
          <HeaderItem text={t.header.skills} onClick={() => { goTo(skillsRef) }} />
          <HeaderItem text={t.header.projects} onClick={() => { goTo(projectsRef) }} />
          <HeaderItem text={t.header.achivement} onClick={() => { goTo(achivementRef) }} />
          <HeaderItem text={t.header.aboutMe} onClick={() => { goTo(aboutRef) }} />
        </ul>
        <span className='text-base font-medium cursor-pointer'
          onClick={() => { setLang() }} >{lang === 'es' ? 'es' : 'en'}</span>
      </div>

      <div className='md:hidden relative cursor-pointer' onClick={() => { showMenu(prev => !prev) }}>
        <img src={Menu} alt='menu' />
        {viewMenu &&
          <div className='absolute flex gap-x-4 bg-c-bg border border-[#ccc] rounded-lg rounded-tl-none z-51'>
            <ul className='flex flex-col w-fit list-none'>
              <li><HeaderItem text={t.header.home} onClick={() => { goTo(homeRef) }} /></li>
              <li><HeaderItem text={t.header.skills} onClick={() => { goTo(skillsRef) }} /></li>
              <li><HeaderItem text={t.header.projects} onClick={() => { goTo(projectsRef) }} /></li>
              <li><HeaderItem text={t.header.achivement} onClick={() => { goTo(achivementRef) }} /></li>
              <li><HeaderItem text={t.header.aboutMe} onClick={() => { goTo(aboutRef) }} /></li>
            </ul>
          </div>
        }
      </div>
      <div className='md:hidden flex h-full gap-x-4 items-center'>
        <span className='text-base font-medium cursor-pointer'
          onClick={() => { setLang() }} >{lang === 'es' ? 'es' : 'en'}</span>
        <img src={theme === 'dark' ? Dark : Light} className='md:hidden h-4 cursor-pointer ' onClick={() => { toggleTheme() }} />
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
}
const HeaderItem = ({ text, onClick }: ItemPrompts) => {
  return (
    <button className='flex items-center justify-center px-4 py-2 cursor-pointer' onClick={onClick}>
      <span className='text-base'>{text}</span>
    </button>
  )
}