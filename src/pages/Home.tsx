import { useLanguage } from "@/hooks/useLanguage"

export default function Home() {
  const { t } = useLanguage();
  return (
    <section className='flex w-screen h-screen items-center justify-center'>
      <div className="flex flex-row w-full h-6/10">
        <img src='/draw.png' />
        <div className="flex flex-col gap-y-4 justify-center">
          <h2 className="text-6xl">{t.global.name}</h2>
          <h5 className="text-2xl">{t.global.profession}</h5>
        </div>
      </div>
    </section>
  )
}
