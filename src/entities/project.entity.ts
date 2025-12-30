export interface ProjectDetails {
    code: string,
    page: string,

    imagesFolder: string,
    imagesCount: number
    tools: Tool[]
}

export interface Project extends ProjectDetails {
    title: string,
    description: string,
    myRol:string
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