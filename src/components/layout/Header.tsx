import Dark from '@/assets/icons/dark.svg'
import Light from '@/assets/icons/light.svg'
import { useLanguage } from '@/hooks/useLanguage'
import { useTheme } from '@/hooks/useTheme';

interface Prompts {
  homeRef: React.RefObject<any>;
  skillsRef: React.RefObject<any>;
  projectsRef: React.RefObject<any>;
  experienceRef: React.RefObject<any>;
  aboutRef: React.RefObject<any>;
}

export default function Header({ homeRef, skillsRef, projectsRef, experienceRef, aboutRef }: Prompts) {
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const goTo = (ref: React.RefObject<any>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <nav className='fixed flex items-center justify-between h-[6vh] w-full px-[4%] z-100'>
      <img src={theme === 'dark' ? Dark : Light} className='h-4 cursor-pointer ' onClick={() => { toggleTheme() }} />
      <ul className='flex gap-x-4'>
        <HeaderItem text={t.header.home} onClick={() => { goTo(homeRef) }} />
        <HeaderItem text={t.header.skills} onClick={() => { goTo(skillsRef) }} />
        <HeaderItem text={t.header.projects} onClick={() => { goTo(projectsRef) }} />
        <HeaderItem text={t.header.experience} onClick={() => { goTo(experienceRef) }} />
        <HeaderItem text={t.header.aboutMe} onClick={() => { goTo(aboutRef) }} />
      </ul>
      <span className='text-base font-medium cursor-pointer'
        onClick={() => { setLang() }} >{lang === 'es' ? 'es' : 'en'}</span>
    </nav>
  )
}

interface ItemPrompts {
  text: string
  onClick: () => void
}
const HeaderItem = ({ text, onClick }: ItemPrompts) => {
  return (
    <li className='flex items-center justify-center px-4 py-2 cursor-pointer' onClick={onClick}>
      <span className='text-base'>{text}</span>
    </li>
  )
}