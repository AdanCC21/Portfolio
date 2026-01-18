
import type { Tool } from "@/entities/project.entity"
import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

interface SkillItemPropmts {
    item: Tool
    showSkillLevel?: boolean
    small?: boolean
    animation?: Variants
}

export default function SkillItem({ item, showSkillLevel, small, animation }: SkillItemPropmts) {
    const List = ({ children }: { children: ReactNode }) => {
        return animation ?
            <motion.li variants={animation}
                key={item.name} className={`flex flex-col ${small ? 'h-12 w-12 gap-1' : 'h-24 w-18 gap-2 mb-4'}`}>
                {children}
            </motion.li> :
            <li key={item.name} className={`flex flex-col ${small ? 'h-12 w-12 gap-1' : 'h-24 w-18 gap-2 mb-4'}`}>
                {children}
            </li>
    }
    return (
        <List>
            <img src={item.image.src} alt={item.image.alt} className="h-6/10" />
            <div className="flex flex-col items-center text-center">
                <span className={`${small ? 'text-xs' : 'text-lg'} font-medium`}>{item.name}</span>
                {showSkillLevel &&
                    <span className="text-xs text-[#888] font-regular">Skill level : {item.skillLevel}</span>
                }
            </div>
        </List>
    )
}
