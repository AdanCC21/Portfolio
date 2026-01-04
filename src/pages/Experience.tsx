import Carrusel from '@/components/Carrusel';
import { useLanguage } from '@/hooks/useLanguage'
import { getDate } from '@/scripts/date';
import { getExperience } from '@/scripts/experience';
import { useEffect, useState } from 'react'

export default function Experience() {
  const { t } = useLanguage();

  // const [expList, setExpList] = useState(experiences.sort((a, b) => a.date.getTime() - b.date.getTime()))
  const [expList, setExpList] = useState(getExperience(t))
  const [expIndx, setExpIndx] = useState(0);

  useEffect(() => {
    const res = getExperience(t);
    setExpList(res);
  }, [t])

  return (
    <section className='flex flex-col pb-[5%] w-full h-screen '>
      <h3 className='text-4xl font-bold'>{t.experience.title}</h3>
      <p className='text-base mb-4'>Iniciando desde 2025 hasta la actualidad, esta es la linea de tiempo de mis experiencias</p>

      <section className='flex justify-between w-full my-4 min-h-80'>
        <ul className='relative flex flex-col w-1/3'>
          {expList.map((current, index) => (
            <li className='flex group w-fit cursor-pointer ' onClick={() => { setExpIndx(index) }}>
              <div className='relative bg-c-inverted h-12 w-px group-hover:h-22 transition-all ease-in-out duration-150'>
                <div className='bg-c-inverted size-3 absolute left-0 top-0 -translate-x-1/2 rounded-full'></div>
              </div>
              <div className='flex flex-col ml-2'>
                <span className='text-base'>{current.title}</span>
                <span className='text-xs text-[#828282] '>{getDate(new Date(current.date.year, current.date.month, current.date.day))}</span>
                <div className='hidden group-hover:block w-full'>
                  <span className='text-xs line-clamp-2 w-4/5'>{current.description}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <article className='flex flex-col w-2/3 h-full gap-y-4'>
          <div className='flex flex-col h-1/2 overflow-y-auto'>
            <span className='text-2xl'>{expList[expIndx].title}</span>
            <span className='text-xs text-[#828282]'>{getDate(new Date(expList[expIndx].date.year, expList[expIndx].date.month, expList[expIndx].date.day))}</span>
            <p className='text-md whitespace-pre-line'>{expList[expIndx].description}</p>
          </div>
          <div className='h-1/2 flex w-full justify-between gap-x-4'>
            <Carrusel folderName='' count={0} imagesBase={expList[expIndx].images} />
          </div>
        </article>
      </section>

    </section>
  )
}
