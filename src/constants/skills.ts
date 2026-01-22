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
import type { Tool } from '@/entities/project.entity'

export const skillsList: Tool[] = [
    {
        image: { src: React, alt: 'React' },
        name: 'React',
        skillLevel: 'avarage',
    },
    {
        image: { src: Vue, alt: 'Vue' },
        name: 'Vue',
        skillLevel: 'low',
    },
    {
        image: { src: Tailwindcss, alt: 'tailwindcss' },
        name: 'Tailwindcss',
        skillLevel: 'avarage',
    },
    {
        image: { src: NestJs, alt: 'NestJs' },
        name: 'NestJs',
        skillLevel: 'avarage',
    },
    {
        image: { src: Prisma, alt: 'Prisma' },
        name: 'Prisma',
        skillLevel: 'avarage',
    },
    {
        image: { src: Mongo, alt: 'Mongo' },
        name: 'Mongo',
        skillLevel: 'low',
    },
    {
        image: { src: Js, alt: 'JavaScript' },
        name: 'JavaScript',
        skillLevel: 'high',
    },
    {
        image: { src: Ts, alt: 'TypeScript' },
        name: 'TypeScript',
        skillLevel: 'high',
    },
    {
        image: { src: C, alt: 'C' },
        name: 'C',
        skillLevel: 'avarage',
    },
    {
        image: { src: Cpp, alt: 'C++' },
        name: 'C++',
        skillLevel: 'avarage',
    },
    {
        image: { src: Py, alt: 'Python' },
        name: 'Python',
        skillLevel: 'low',
    },
    {
        image: { src: Html, alt: 'HTML' },
        name: 'HTML',
        skillLevel: 'avarage',
    },
    {
        image: { src: Css, alt: 'Css' },
        name: 'Css',
        skillLevel: 'avarage',
    },
];
