import type { Tool } from "@/entities/project.entity"

interface SkillItemPropmts {
    item: Tool
    showSkillLevel?: boolean
    small?: boolean
}

export default function SkillItem({ item, showSkillLevel, small }: SkillItemPropmts) {
    return (
        <li className={`flex flex-col ${small ? 'h-12 w-12 gap-1':'h-24 w-18 gap-2 mb-4'}`}>
            <img src={item.image.src} alt={item.image.alt} className="h-6/10" />
            <div className="flex flex-col items-center text-center">
                <span className={`${small ? 'text-xs':'text-lg'} font-medium`}>{item.name}</span>
                {showSkillLevel &&
                    <span className="text-xs text-[#888] font-regular">Skill level : {item.skillLevel}</span>
                }
            </div>
        </li>
    )
}
