import TalentLandIcon from '@/assets/icons/experience/talentland.png'
import NasaIcon from '@/assets/icons/experience/nasa.png'
import NoInfoIcon from '@/assets/icons/experience/no-info.png'

export interface ExperienceItem {
    title: string
    location: string
    rol: string
    icon: string
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

        switch (current.title) {
            case "TalentLand":
                current.icon = TalentLandIcon;
                break;
            case "Nasa Space APP Challenge":
                current.icon = NasaIcon;
                break;
            case "Becario":
                current.icon = NoInfoIcon;
                break;
            default:
                current.icon = NoInfoIcon;
        }
        return { ...current, images };
    });

    return experiences;
}
