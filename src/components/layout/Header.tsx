import Dark from '@/assets/icons/dark.svg'
import Light from '@/assets/icons/light.svg'
import { useLanguage } from '@/hooks/useLanguage'
import { useTheme } from '@/hooks/useTheme';

export default function Header() {
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className='fixed flex items-center justify-between h-[6vh] w-full px-[4%] backdrop-blur-sm'>
      <img src={theme === 'dark' ? Dark : Light} className='h-4 cursor-pointer ' onClick={() => { toggleTheme() }} />
      <ul className='flex gap-x-4'>
        <HeaderItem text={t.header.home} onClick={() => { }} />
        <HeaderItem text={t.header.skills} onClick={() => { }} />
        <HeaderItem text={t.header.aboutMe} onClick={() => { }} />
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