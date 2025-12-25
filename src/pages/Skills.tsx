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

export default function Skills() {
    const { t } = useLanguage();

    return (
        <section className="flex flex-col py-[5%]">
            <h2 className="text-4xl font-semibold mb-2">{t.skills.title}</h2>
            <span className="text-base font-normal mb-4">{t.skills.description}</span>
            <ul className="flex flex-wrap gap-4">
                <SkillItem src={React} alt="React" name="React" skillLevel="avarage" />
                <SkillItem src={Vue} alt="Vue" name="Vue" skillLevel="low" />
                <SkillItem src={Tailwindcss} alt="Tailwindcss" name="Tailwindcss" skillLevel="avarage" />
                <SkillItem src={NestJs} alt="NestJs" name="NestJs" skillLevel="avarage" />
                
                <SkillItem src={Prisma} alt="Prisma" name="Prisma" skillLevel="avarage" />
                <SkillItem src={Mongo} alt="Mongo DB" name="Mongo DB" skillLevel="low" />
                
                <SkillItem src={Js} alt="JavaScript" name="JavaScript" skillLevel="high" />
                <SkillItem src={Ts} alt="TypeScript" name="TypeScript" skillLevel="high" />
                
                <SkillItem src={C} alt="C" name="C" skillLevel="avarage" />
                <SkillItem src={Cpp} alt="Cpp" name="C++" skillLevel="avarage" />
                <SkillItem src={Py} alt="Python" name="Python" skillLevel="low" />

                <SkillItem src={Html} alt="HTML" name="HTML" skillLevel="avarage" />
                <SkillItem src={Css} alt="Css" name="CSS" skillLevel="avarage" />
            </ul>
        </section>
    )
}

interface SkillItemPropmts {
    src: string
    alt: string
    name: string
    skillLevel: SkillLevel
}

type SkillLevel = 'high' | 'avarage' | 'low';

function SkillItem({ src, alt, name, skillLevel }: SkillItemPropmts) {
    return (
        <li className="flex flex-col gap-4 h-18 w-18">
            <img src={src} alt={alt} className="h-6/10" />
            <div className="flex flex-col items-center text-center h-4/10">
                <span className="text-lg font-medium">{name}</span>
                <span className="text-xs text-[#888] font-regular">Skill level : {skillLevel}</span>
            </div>
        </li>
    )
}
 