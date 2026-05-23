export interface ProjectDetails {
    code: string,
    page: string,

    imagesFolder: string,
    tools: Tool[]
}

export interface Project extends ProjectDetails {
    title: string,
    icon?: string
    iconAlt?: string
    iconClass?: string
    
    description: string,
    myRol: string
    images: string[]
}

export type SkillLevel = 'high' | 'avarage' | 'low';

export interface Tool {
    image: {
        src: string
        alt: string
    }
    name: string
    skillLevel?: SkillLevel
}