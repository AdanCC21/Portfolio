import { detailsProjects } from "@/constants/projects";
import type { Project } from "@/entities/project.entity";

export function getProjects(t: any): Project[] {
    const baseProjects = t.projects.projectslist;

    const projets: Project[] = []
    baseProjects.map((base: any) => {
        let result = detailsProjects.find(details => details.title === base.title)
        if (result) {
            projets.push({ ...base, ...result } as Project);
        }
    })
    return projets

}