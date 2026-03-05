interface Prompts {
    text: string
    image: string
}

export default function SectionTitle({ text, image }: Prompts) {
    return (
        <h3 className="relative text-4xl font-semibold mb-2 w-fit">
            {text}
            <img src={`draws/${image}.webp`} className="absolute top-0 right-0 h-8 md:h-10 pl-2 translate-x-full" alt="decoration" />
        </h3>
    )
}