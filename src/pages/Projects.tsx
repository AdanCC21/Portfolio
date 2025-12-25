import type { Project } from "@/entities/project.entity";
import { useLanguage } from "@/hooks/useLanguage"
import { useState } from "react";

export default function Projects() {
    const { t } = useLanguage();

    const testProject: Project[] = [
        {
            title: "Gestion de pruebas",
            description: "Un proyecto chido aca",
            code: '',
            page: '',

            imagesFolder: 'actone',
            imagesCount: 4
        },
        {
            title: "Act One",
            description: "Un proyecto chido aca",
            code: '',
            page: '',

            imagesFolder: 'actone',
            imagesCount: 4
        },
    ]

    const [currentProject, setCurrentProject] = useState<Project>(testProject[0])

    return (
        <section className="min-h-screen py-[5%]">
            <h3 className="text-4xl font-bold mb-4">{t.projects.title}</h3>
            <ul className="flex flex-row w-full h-8 items-end border-b-2 border-white mb-4">
                {testProject.map((current) => (
                    <li className={`${current.title === currentProject.title ? 'h-full bg-[#111]' : 'h-8/10 bg-[#555]'} 
                    flex items-center justify-center px-4 py-1 cursor-pointer rounded-t-xl`}
                        onClick={() => { setCurrentProject(current) }}>
                        <span className=" text-base font-noraml">{current.title}</span>
                    </li>
                ))}
            </ul>
            <section className="grid grid-cols-2">
                <div className="flex flex-col ">
                    <h5 className="text-2xl mb-2">{currentProject.title}</h5>
                    <p className="text-base mb-2">{currentProject.description}</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between w-full gap-x-4 mb-4">
                        <button > {"<"}</button>
                        <img src={`/examples/${currentProject.imagesFolder}/1.webp`} className="w-8/10" />
                        <button > {">"}</button>
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
