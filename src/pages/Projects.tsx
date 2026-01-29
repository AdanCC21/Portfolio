import { useLanguage } from "@/hooks/useLanguage"
import { useEffect, useState, type RefObject } from "react";
import type { Project } from "@/entities/project.entity";
import { getProjects } from "@/scripts/projects";
import { listUpContainerAnimations, listUpItemAnimations, pageContainerAnimation, viewPortAnimation } from "@/constants/animations";
import { AnimatePresence, motion } from "framer-motion";
import SkillItem from "@/components/SkillItem";
import Carrusel from "@/components/Carrusel";
import { useTheme } from "@/hooks/useTheme";

interface Prompts {
    pageRef: RefObject<any>
}


export default function Projects({ pageRef }: Prompts) {
    const { t } = useLanguage();
    const {theme} = useTheme();

    useEffect(() => {
        const projects = getProjects(t);
        setProjectsList(projects);
        setCurrentProject(projects[0])
    }, [t])

    const [projects, setProjectsList] = useState<Project[]>(getProjects(t))
    const [currentProject, setCurrentProject] = useState<Project>(projects[0])

    return (
        <motion.section
            ref={pageRef}
            variants={pageContainerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={viewPortAnimation}
            className="flex flex-col min-h-[80vh] py-[5%] pagePadding">
            <h3 className="text-4xl font-bold mb-4">{t.projects.title}</h3>
            <motion.ul variants={listUpContainerAnimations} initial="hidden" whileInView="show" viewport={viewPortAnimation}
                className="flex flex-nowrap h-14 md:h-8 w-full items-end border-b-2 border-c-inverted mb-4 overflow-x-auto overflow-y-hidden">
                {projects.map((current) => (
                    <motion.li variants={listUpItemAnimations}
                        key={current.title}
                        className={`${current.title === currentProject.title ? 'h-full bg-[#191919]' : 'h-6/10 bg-[#555] hover:h-8/10 duration-125 hover:bg-[#333]'} flex items-center justify-center px-4 py-1 cursor-pointer rounded-t-xl`}
                        onClick={() => { setCurrentProject(current) }}>
                        <span className={`${current.title === currentProject.title ? 'font-bold' : 'opacity-60'} whitespace-nowrap text-white text-base`}>{current.title}</span>
                    </motion.li>
                ))}
            </motion.ul>
            <AnimatePresence mode="wait">
                <motion.section key={currentProject.title} variants={listUpContainerAnimations} initial="hidden" whileInView="show" viewport={viewPortAnimation} className="flex flex-col md:grid md:grid-cols-2 gap-8 flex-1">
                    <motion.div variants={listUpItemAnimations} className="flex flex-col h-full justify-between">
                        <div className="flex flex-col">
                            <h5 className="text-2xl mb-2">{currentProject.title}</h5>
                            <p className="text-base mb-2">{currentProject.description}</p>
                            <br />
                            <p className="text-base mb-2">{currentProject.myRol}</p>
                        </div>

                        <ul className="flex gap-x-4 overflow-x-auto overflow-y-hidden">
                            {currentProject.tools.map((current) => (
                                <SkillItem theme={theme} item={current} small />
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={listUpItemAnimations} className="flex flex-col justify-center">
                        <div className="flex justify-between w-full gap-x-4 mb-4">
                            <Carrusel images={currentProject.images} />
                        </div>

                        <div className="flex gap-x-4 justify-end">
                            <button className={`text-sm ${currentProject.page ? 'cursor-pointer' : 'text-[#828282]'}`}>
                                {currentProject.page ?
                                    <a href={currentProject.page} target="_blank">{t.projects.goTo}</a>
                                    :
                                    <span>{t.projects.goTo}</span>
                                }
                            </button>
                            <button className={`text-sm ${currentProject.code ? 'cursor-pointer' : 'text-[#828282]'}`}>
                                {currentProject.code ?
                                    <a href={currentProject.code} target="_blank">{t.projects.code}</a>
                                    :
                                    <span>{t.projects.code}</span>
                                }
                            </button>
                        </div>
                    </motion.div>
                </motion.section>
            </AnimatePresence>
        </motion.section>
    )
}
