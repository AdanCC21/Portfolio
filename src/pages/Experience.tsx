import Carrusel from '@/components/Carrusel';
import { fastUpAnimation, listUpContainerAnimations, listUpItemAnimations, viewPortAnimation } from '@/constants/animations';
import { useLanguage } from '@/hooks/useLanguage'
import { getDate } from '@/scripts/date';
import { getExperience } from '@/scripts/experience';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'

export default function Experience() {
  const { t } = useLanguage();

  const [expList, setExpList] = useState(getExperience(t))
  const [expIndx, setExpIndx] = useState(0);

  useEffect(() => {
    const res = getExperience(t);
    setExpList(res);
  }, [t])

  return (
    <section className='flex flex-col pb-[5%] w-full h-screen '>
      <motion.h3 variants={listUpContainerAnimations} initial="hidden" whileInView='show' viewport={viewPortAnimation} className='text-4xl font-bold'>{t.experience.title}</motion.h3>

      <section className='flex justify-between w-full my-4 min-h-80'>
        <motion.ul variants={listUpContainerAnimations} initial="hidden" whileInView='show' viewport={viewPortAnimation} className='relative flex flex-col w-1/3'>
          {expList.map((current, index) => (
            <motion.li variants={listUpItemAnimations} className='flex group w-fit cursor-pointer ' onClick={() => { setExpIndx(index) }}>
              <div className={`${index !== expList.length - 1 && 'bg-c-inverted'} relative h-12 w-px group-hover:h-22 transition-all ease-in-out duration-150`}>
                <div className='bg-c-inverted size-3 absolute left-0 top-0 -translate-x-1/2 rounded-full'></div>
              </div>
              <div className='flex flex-col ml-2 -mt-1'>
                <span className='text-base'>{current.title}</span>
                <span className='text-xs text-[#828282] '>{getDate(new Date(current.date.year, current.date.month + 1, current.date.day))}</span>
                <div className='hidden group-hover:block w-full'>
                  <span className='text-xs line-clamp-2 w-4/5'>{current.description}</span>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.article variants={fastUpAnimation} initial="hidden" whileInView='show' viewport={viewPortAnimation} className='flex flex-col w-2/3 h-full gap-y-4'>
          <div className='flex flex-col h-1/2 overflow-y-auto'>
            <span className='text-2xl'>{expList[expIndx].title}</span>
            <span className='text-xs text-[#828282]'>{getDate(new Date(expList[expIndx].date.year, expList[expIndx].date.month, expList[expIndx].date.day))}</span>
            <p className='text-md whitespace-pre-line'>{expList[expIndx].description}</p>
          </div>
          <div className='h-1/2 flex w-full justify-between gap-x-4'>
            <Carrusel images={expList[expIndx].images} />
          </div>
        </motion.article>
      </section>

    </section>
  )
}
