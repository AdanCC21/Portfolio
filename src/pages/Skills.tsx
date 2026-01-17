import { useLanguage } from "@/hooks/useLanguage"
import C from '@/assets/icons/skills/c.svg'
import Cpp from '@/assets/icons/skills/cpp.svg'
import Py from '@/assets/icons/skills/python.svg'

import Js from '@/assets/icons/skills/javascript.svg'
import Ts from '@/assets/icons/skills/typescript.svg'

import React from '@/assets/icons/skills/react.svg'
import Vue from '@/assets/icons/skills/vue.svg'
import NestJs from '@/assets/icons/skills/nestjs.svg'
import Prisma from '@/assets/icons/skills/prisma.svg'
import Mongo from '@/assets/icons/skills/mongodb.svg'

import Html from '@/assets/icons/skills/html.svg'
import Css from '@/assets/icons/skills/css.svg'
import Tailwindcss from '@/assets/icons/skills/tailwindcss.svg'
import SkillItem from "@/components/SkillItem"
import { motion } from "framer-motion"
import { listRightContainerAnimation, viewPortAnimation } from "@/constants/animations"

export default function Skills() {
    const { t } = useLanguage();

    return (
        <motion.section
            variants={listRightContainerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={viewPortAnimation}
            className="flex flex-col py-[5%]">
            <h2 className="text-4xl font-semibold mb-2">{t.skills.title}</h2>
            <span className="text-base font-normal mb-4">{t.skills.description}</span>
            <ul className="flex flex-wrap gap-4">
                <SkillItem showSkillLevel item={{ image: { src: React, alt: 'React' }, name: "React", skillLevel: "avarage" }} />
                <SkillItem showSkillLevel item={{ image: { src: Vue, alt: 'Vue' }, name: "Vue", skillLevel: "low" }} />
                <SkillItem showSkillLevel item={{ image: { src: Tailwindcss, alt: 'tailwindcss' }, name: "Tailwindcss", skillLevel: "avarage" }} />
                <SkillItem showSkillLevel item={{ image: { src: NestJs, alt: 'NestJs' }, name: "NestJs", skillLevel: "avarage" }} />
                <SkillItem showSkillLevel item={{ image: { src: Prisma, alt: 'Prisma' }, name: "Prisma", skillLevel: "avarage" }} />
                <SkillItem showSkillLevel item={{ image: { src: Mongo, alt: 'Mongo' }, name: "Mongo", skillLevel: "low" }} />
                <SkillItem showSkillLevel item={{ image: { src: Js, alt: 'JavaScript' }, name: "JavaScript", skillLevel: "high" }} />
                <SkillItem showSkillLevel item={{ image: { src: Ts, alt: 'TypeScript' }, name: "TypeScript", skillLevel: "high" }} />
                <SkillItem showSkillLevel item={{ image: { src: C, alt: 'C' }, name: "C", skillLevel: "avarage" }} />
                <SkillItem showSkillLevel item={{ image: { src: Cpp, alt: 'C++' }, name: "C++", skillLevel: "avarage" }} />
                <SkillItem showSkillLevel item={{ image: { src: Py, alt: 'Python' }, name: "Python", skillLevel: "low" }} />
                <SkillItem showSkillLevel item={{ image: { src: Html, alt: 'HTML' }, name: "HTML", skillLevel: "avarage" }} />
                <SkillItem showSkillLevel item={{ image: { src: Css, alt: 'Css' }, name: "Css", skillLevel: "avarage" }} />
            </ul>
        </motion.section>
    )
}
