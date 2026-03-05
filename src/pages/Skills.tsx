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
    const { theme } = useTheme();


    return (
        <motion.section
            ref={pageRef}
            variants={listRightContainerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={viewPortAnimation}
            className="flex flex-col min-h-[50vh] py-[5%] pagePadding">
            <div className="flex gap-x-4">
                <h3 className="text-4xl font-semibold mb-2">
                    {t.skills.title}
                </h3>
                <img src="draws/DeHecho.webp" className="h-8 md:h-10" alt="decoration" />
            </div>

            <motion.ul variants={listRightContainerAnimation}
                initial="hidden"
                whileInView="show"
                viewport={viewPortAnimation} className="flex flex-wrap gap-4 justify-center sm:justify-start">
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
