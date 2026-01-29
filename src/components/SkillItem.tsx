import type { Tool } from "@/entities/project.entity"
import ItemLargeBottom from '@/assets/decoration/itemLargeBottom.svg'
import ItemMediumBottom from '@/assets/decoration/itemMediumBottom.svg'
import ItemShortBottom from '@/assets/decoration/itemShortBottom.svg'
import type { ThemeType } from "@/context/ThemeContext"

interface SkillItemPropmts {
    item: Tool
    small?: boolean
    theme: ThemeType
}

export default function SkillItem({ item, small, theme }: SkillItemPropmts) {

    return (
        <li className={`flex flex-col ${small ? 'h-16 w-fit gap-1' : 'h-24 w-18 gap-2 mb-4'}`}>
            <img src={item.image.src} alt={item.image.alt} className={`${small ? "h-6" : 'max-h-6/10'}`} />
            <div className="flex flex-col items-center text-center">
                <span className={`${small ? 'text-xs' : 'text-lg'} font-medium`}>{item.name}</span>
                {
                    small ?
                        <img src={ItemMediumBottom} className={`w-8 mx-auto ${theme === 'dark' ? 'invert' : ''}`} />
                        :
                        <>
                            {setSkillDecoration(item.name, theme)}
                        </>
                }
            </div>
        </li>
    )
}

function setSkillDecoration(text: string, theme: ThemeType) {
    const className = `${theme ? 'invert' : ''}`

    if (text.length > 6) {
        if (text.length > 8) {
            return <img src={ItemLargeBottom} alt="decoration" className={className} />
        }
        return <img src={ItemMediumBottom} alt="decoration" className={className} />
    }
    return <img src={ItemShortBottom} alt="decoration" className={className} />
}

