/**
 * Obtener array de rutas 
 * @param folderName 
 * @param count 
 * @returns [ruta,ruta,ruta]
 */
export function getImages(folderName: string, count: number) {
    let images = []
    for (let i = 1; i <= count; i++) {
        images.push(`/examples/${folderName}/${i}.webp`)
    }
    return images
}