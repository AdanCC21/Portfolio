/**
 * Obtener array de rutas 
 * @param folderName 
 * @param count 
 * @returns [ruta,ruta,ruta]
 */
export function getImages(folderName: string) {
    folderName = folderName.replaceAll(' ', '-')

    const allImages = import.meta.glob(
        '/public/examples/**/*.{png,jpg,jpeg,webp}',
        { eager: true, import: 'default' }
    );

    const entries = Object.entries(allImages);

    const images = entries
        .filter(([path]) => path.includes(`/examples/${folderName}/`))
        .map(([, value]) => value as string);
    return images;
};