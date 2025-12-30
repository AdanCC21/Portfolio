import type { Project, ProjectDetails } from "@/entities/project.entity";
import { useLanguage } from "@/hooks/useLanguage";

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

// Detalles de cada proyecto
interface ProjectItem extends ProjectDetails {
    title: string
}
const actOne: ProjectItem = {
    title: "Act One", code: '', page: '', imagesFolder: 'actone', imagesCount: 7, tools: [
        { image: { src: Ts, alt: "typescript" }, name: "TypeScript" },
        { image: { src: React, alt: "React" }, name: "React" },
        { image: { src: Tailwindcss, alt: "Tailwindcss" }, name: "Tailwindcss" },
        { image: { src: Prisma, alt: "Prisma" }, name: "Prisma" },
        { image: { src: NestJs, alt: "NestJs" }, name: "NestJs" },
    ]
}

const wolfForest: ProjectItem = {
    title: "Wolf Forest", code: '', page: '', imagesFolder: 'wolfForest', imagesCount: 3, tools: [
        { image: { src: Ts, alt: "typescript" }, name: "TypeScript" },
        { image: { src: React, alt: "React" }, name: "React" },
        { image: { src: Tailwindcss, alt: "Tailwindcss" }, name: "Tailwindcss" },
    ]
}

const gestionPruebas: ProjectItem = {
    title: "Gestion De Pruebas", code: '', page: '', imagesFolder: 'wolfForest', imagesCount: 3, tools: [
        { image: { src: Ts, alt: "typescript" }, name: "TypeScript" },
        { image: { src: React, alt: "React" }, name: "React" },
        { image: { src: Tailwindcss, alt: "Tailwindcss" }, name: "Tailwindcss" },
    ]
}

export function getProjects(t:any): Project[] {
    const baseProjects = t.projects.projectslist;
    const detailsProjects = [actOne, wolfForest, gestionPruebas];

    const projets: Project[] = []
    baseProjects.map((base:any) => {
        let result = detailsProjects.find(details => details.title === base.title)
        if (result) {
            projets.push({ ...base, ...result } as Project);
        }
    })
    return projets

}