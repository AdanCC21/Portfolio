import type { ProjectDetails } from "@/entities/project.entity";
import Ts from '@/assets/icons/skills/typescript.svg'

import React from '@/assets/icons/skills/react.svg'

import NestJs from '@/assets/icons/skills/nestjs.svg'
import Prisma from '@/assets/icons/skills/prisma.svg'

import Tailwindcss from '@/assets/icons/skills/tailwindcss.svg'
import Keycloak from '@/assets/icons/skills/keycloak.svg'

// Detalles de cada proyecto
interface ProjectItem extends ProjectDetails {
    title: string
}
const actOne: ProjectItem = {
    title: "Act One", code: '', page: '', imagesFolder: 'actone', tools: [
        { image: { src: Ts, alt: "typescript" }, name: "TypeScript" },
        { image: { src: React, alt: "React" }, name: "React" },
        { image: { src: Tailwindcss, alt: "Tailwindcss" }, name: "Tailwindcss" },
        { image: { src: Prisma, alt: "Prisma" }, name: "Prisma" },
        { image: { src: NestJs, alt: "NestJs" }, name: "NestJs" },
    ]
}

const wolfForest: ProjectItem = {
    title: "Wolf Forest", code: 'https://github.com/AdanCC21/WolfForestTs.git', page: '', imagesFolder: 'wolfForest', tools: [
        { image: { src: Ts, alt: "typescript" }, name: "TypeScript" },
        { image: { src: React, alt: "React" }, name: "React" },
        { image: { src: Tailwindcss, alt: "Tailwindcss" }, name: "Tailwindcss" },
    ]
}

const gestionPruebas: ProjectItem = {
    title: "Gestión de Pruebas", code: '', page: '', imagesFolder: 'tickets', tools: [
        { image: { src: Ts, alt: "typescript" }, name: "TypeScript" },
        { image: { src: React, alt: "React" }, name: "React" },
        { image: { src: Tailwindcss, alt: "Tailwindcss" }, name: "Tailwindcss" },
        { image: { src: Prisma, alt: "Prisma" }, name: "Prisma" },
        { image: { src: NestJs, alt: "NestJs" }, name: "NestJs" },
        { image: { src: Keycloak, alt: "keycloak" }, name: "Keycloak" },
    ]
}


export const detailsProjects = [actOne, wolfForest, gestionPruebas];