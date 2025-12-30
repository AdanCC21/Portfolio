import { useLanguage } from "@/hooks/useLanguage"
import { useEffect, useState } from "react";
import ImageModal from "@/components/ImageModal";
import { getProjects } from "@/constants/projects";
import type { Project } from "@/entities/project.entity";
import SkillItem from "@/components/SkillItem";
import Carrusel from "@/components/Carrusel";

export default function Projects() {
    const { t } = useLanguage();

    useEffect(() => {
        const projects = getProjects(t);
        setProjectsList(projects);
        setCurrentProject(projects[0])
    }, [t])

    const [projects, setProjectsList] = useState<Project[]>(getProjects(t))
    const [currentProject, setCurrentProject] = useState<Project>(projects[0])
    const [modalState, showModalState] = useState(false);

    return (
        <section className="flex flex-col min-h-screen py-[5%]">
            <ImageModal state={modalState} setState={showModalState} images={[]} />

            <h3 className="text-4xl font-bold mb-4">{t.projects.title}</h3>
            <ul className="flex flex-row w-full h-8 items-end border-b-2 border-white mb-4">
                {projects.map((current) => (
                    <li className={`${current.title === currentProject.title ? 'h-full bg-[#111]' : 'h-8/10 bg-[#555]'} 
                    flex items-center justify-center px-4 py-1 cursor-pointer rounded-t-xl`}
                        onClick={() => { setCurrentProject(current) }}>
                        <span className=" text-base font-noraml">{current.title}</span>
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
                        <Carrusel folderName={currentProject.imagesFolder} count={currentProject.imagesCount} imgModState={modalState} showImageModal={showModalState} />
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
