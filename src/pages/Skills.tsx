import { useLanguage } from "@/hooks/useLanguage"

import SkillItem from "@/components/SkillItem"
import { motion } from "framer-motion"
import { listRightContainerAnimation, listUpItemAnimations, viewPortAnimation } from "@/constants/animations"
import { type RefObject } from "react"
import { skillsList } from "@/constants/skills"
import { useTheme } from "@/hooks/useTheme"

interface Prompts {
    pageRef: RefObject<any>
}


export default function Skills({ pageRef }: Prompts) {
    const { t } = useLanguage();
    const {theme} = useTheme();


    return (
        <motion.section
            ref={pageRef}
            variants={listRightContainerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={viewPortAnimation}
            className="flex flex-col min-h-[50vh] py-[5%] pagePadding">
            <h2 className="text-4xl font-semibold mb-2">{t.skills.title}</h2>

            <motion.ul variants={listRightContainerAnimation}
                initial="hidden"
                whileInView="show"
                viewport={viewPortAnimation} className="flex flex-wrap gap-4">
                {skillsList.map((current) => (
                    <motion.div variants={listUpItemAnimations}>
                        <SkillItem
                            item={current}
                            theme={theme}
                        />
                    </motion.div>
                ))}
            </motion.ul>
        </motion.section>
    )
}
