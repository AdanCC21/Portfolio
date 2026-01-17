import { detailsProjects } from "@/constants/projects";
import type { Project } from "@/entities/project.entity";
import { getImages } from "./images";

export function getProjects(t: any): Project[] {
    const baseProjects = t.projects.projectslist;

    const projets: Project[] = []
    baseProjects.map((base: any) => {
        let result = detailsProjects.find(details => details.title === base.title)
        if (result) {
            let imgs = getImages(result.imagesFolder);
            projets.push({ ...base, ...result, images: imgs } as Project);
        }
    })
    return projets

}