import { useLanguage } from "@/hooks/useLanguage"

import SkillItem from "@/components/SkillItem"
import { motion } from "framer-motion"
import { listRightContainerAnimation, listUpItemAnimations, viewPortAnimation } from "@/constants/animations"
import { type RefObject } from "react"
import { skillsList } from "@/constants/skills"

interface Prompts {
    pageRef: RefObject<any>
}


export default function Skills({ pageRef }: Prompts) {
    const { t } = useLanguage();


    return (
        <motion.section
            ref={pageRef}
            variants={listRightContainerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={viewPortAnimation}
            className="flex flex-col min-h-[50vh] py-[5%] pagePadding">
            <h2 className="text-4xl font-semibold mb-2">{t.skills.title}</h2>
            <span className="text-base font-normal mb-4">{t.skills.description}</span>
            
            <motion.ul variants={listRightContainerAnimation}
                initial="hidden"
                whileInView="show"
                viewport={viewPortAnimation} className="flex flex-wrap gap-4">
                {skillsList.map((current) => (
                    <motion.div variants={listUpItemAnimations}>
                        <SkillItem
                            showSkillLevel
                            item={current}
                        />
                    </motion.div>
                ))}
            </motion.ul>
        </motion.section>
    )
}
