import { useLanguage } from "@/hooks/useLanguage"

export default function Home() {
  const { t } = useLanguage();
  return (
    <section className='flex w-screen h-screen items-center justify-center'>
      <div className="flex flex-col md:flex-row w-full h-8/10  md:h-6/10">
        <div className="flex items-center justify-center h-4/10 md:h-full">
          <img src='/draw.png' className="max-h-full max-w-full" />
        </div>
        <div className="flex flex-col gap-y-4 justify-center">
          <h2 className="text-6xl">{t.global.name}</h2>
          <h5 className="text-2xl">{t.global.profession}</h5>
        </div>
      </div>
    </section>
  )
}
