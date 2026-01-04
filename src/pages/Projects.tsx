import { useLanguage } from "@/hooks/useLanguage"
import { useEffect, useState } from "react";

import type { Project } from "@/entities/project.entity";
import SkillItem from "@/components/SkillItem";
import Carrusel from "@/components/Carrusel";
import { getProjects } from "@/scripts/projects";

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
        <section className="flex flex-col min-h-screen py-[5%]">

            <h3 className="text-4xl font-bold mb-4">{t.projects.title}</h3>
            <ul className="flex flex-row w-full h-8 items-end border-b-2 border-c-inverted mb-4">
                {projects.map((current) => (
                    <li key={current.title} className={`${current.title === currentProject.title ? 'h-full bg-c-inverted' : 'h-8/10 bg-[#888]'} 
                    flex items-center justify-center px-4 py-1 cursor-pointer rounded-t-xl`}
                        onClick={() => { setCurrentProject(current) }}>
                        <span className={`${current.title === currentProject.title ? 'font-bold':'opacity-60'} text-c-text-inverted text-base font-noraml`}>{current.title}</span>
                    </li>
                ))}
            </ul>
            <section className="grid grid-cols-2 flex-1">
                <div className="flex flex-col h-full justify-between">
                    <div className="flex flex-col">
                        <h5 className="text-2xl mb-2">{currentProject.title}</h5>
                        <p className="text-base mb-2">Sumary : {currentProject.description}</p>
                        <br />
                        <p className="text-base mb-2">My Role : {currentProject.myRol}</p>
                    </div>
                    <ul className="flex gap-x-3">
                        {currentProject.tools.map((current) => (
                            <SkillItem item={current} small />
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex justify-between w-full gap-x-4 mb-4">
                        <Carrusel folderName={currentProject.imagesFolder} count={currentProject.imagesCount}/>
                    </div>
                    <div className="flex gap-x-4 justify-end">
                        <button>
                            <span>{t.projects.goTo}</span>
                        </button>
                        <button>
                            <span>{t.projects.code}</span>
                        </button>
                    </div>
                </div>
            </section>
        </section>
    )
}
