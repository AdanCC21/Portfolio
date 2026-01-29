export interface ExperienceItem {
    title: string
    description: string
    date: { day: number, month: number, year: number }
    images: string[]
}
export function getExperience(t: any) {
    const jsonExperiences: ExperienceItem[] = t.achivement.achivementsList;

    const allImages = import.meta.glob(
        '/public/experience/**/*.{png,jpg,jpeg,webp}',
        { eager: true, import: 'default' }
    );

    const entries = Object.entries(allImages);

    const experiences = jsonExperiences.map((current: ExperienceItem) => {
        let folder = current.title.toLowerCase();
        folder = folder.replaceAll(' ', '-')

        const images = entries
            .filter(([path]) => path.includes(`/experience/${folder}/`))
            .map(([, value]) => value as string);

        return { ...current, images };
    });

    return experiences;
}
