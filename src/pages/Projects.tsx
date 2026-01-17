import { useLanguage } from "@/hooks/useLanguage"
import { useEffect, useState } from "react";

import type { Project } from "@/entities/project.entity";
import SkillItem from "@/components/SkillItem";
import Carrusel from "@/components/Carrusel";
import { getProjects } from "@/scripts/projects";
import { motion } from "framer-motion";
import { baseAnimations, listUpContainerAnimations, listUpItemAnimations, pageContainerAnimation, viewPortAnimation } from "@/constants/animations";

export default function Projects() {
    const { t } = useLanguage();

    useEffect(() => {
        const projects = getProjects(t);
        setProjectsList(projects);
        setCurrentProject(projects[0])
    }, [t])

    const [projects, setProjectsList] = useState<Project[]>(getProjects(t))
    const [currentProject, setCurrentProject] = useState<Project>(projects[0])

    return (
        <motion.section
            variants={pageContainerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={viewPortAnimation}

            className="flex flex-col min-h-screen py-[5%]">
            <h3 className="text-4xl font-bold mb-4">{t.projects.title}</h3>
            <motion.ul variants={listUpContainerAnimations} initial="hidden" whileInView="show" viewport={viewPortAnimation}
                className="flex flex-row w-full h-8 items-end border-b-2 border-c-inverted mb-4">
                {projects.map((current) => (
                    <motion.li variants={listUpItemAnimations}
                        key={current.title} className={`${current.title === currentProject.title ? 'h-full bg-black' : 'h-8/10 bg-[#555]'} 
                    flex items-center justify-center px-4 py-1 cursor-pointer rounded-t-xl`}
                        onClick={() => { setCurrentProject(current) }}>
                        <span className={`${current.title === currentProject.title ? 'font-bold' : 'opacity-60'} text-white text-base font-noraml`}>{current.title}</span>
                    </motion.li>
                ))}
            </motion.ul>
            <section className="grid grid-cols-2 gap-x-8 flex-1">
                <div className="flex flex-col h-full justify-between">
                    <div className="flex flex-col">
                        <h5 className="text-2xl mb-2">{currentProject.title}</h5>
                        <p className="text-base mb-2">{currentProject.description}</p>
                        <br />
                        <p className="text-base mb-2">{currentProject.myRol}</p>
                    </div>
                    <motion.ul variants={listUpContainerAnimations} initial="hidden" whileInView="show" viewport={viewPortAnimation} className="flex gap-x-3">
                        {currentProject.tools.map((current) => (
                            <SkillItem item={current} small />
                        ))}
                    </motion.ul>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex justify-between w-full gap-x-4 mb-4">
                        <Carrusel images={currentProject.images} />
                    </div>
                    <div className="flex gap-x-4 justify-end">
                        <button className={`text-sm ${currentProject.page !== '' ? '' : 'text-[#828282]'}`}>
                            <span>{t.projects.goTo}</span>
                        </button>
                        <button className={`text-sm ${currentProject.code !== '' ? '' : 'text-[#828282]'}`}>
                            <span>{t.projects.code}</span>
                        </button>
                    </div>
                </div>
            </section>
        </motion.section>
    )
}
