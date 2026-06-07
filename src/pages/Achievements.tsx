import Carrusel from "@/components/Carrusel";
import Modal from "@/components/Modal";
import { fadeInOutAnimation, listUpItemAnimations, tailwindcssDuration, viewPortAnimation } from "@/constants/animations";
import { useLanguage } from "@/hooks/useLanguage";
import { getDate } from "@/scripts/date";
import { getExperience, type ExperienceItem } from "@/scripts/experience";
import { motion } from "framer-motion";
import { useState, useEffect, type RefObject } from "react";
import LargeLineBottom from '@/assets/decoration/itemLargeBottom.svg'

interface Prompts {
  pageRef: RefObject<any>
}

export default function Achievements({ pageRef }: Prompts) {
  const { t } = useLanguage();

  const [expList, setExpList] = useState<ExperienceItem[]>(getExperience(t))
  const [modalState, showModal] = useState(false);
  const [currentExp, setExp] = useState<ExperienceItem | null>(null)

  useEffect(() => {
    const res = getExperience(t);
    setExpList(res);
  }, [t])

  return (
    <section ref={pageRef} className="relative flex flex-col pagePadding @container">
      <img src="/draws/graduate.webp" alt="decoration" className="absolute bottom-5 right-30 h-12 -rotate-20 opacity-10 z-100" />
      <motion.div variants={fadeInOutAnimation} initial="hidden" whileInView={'show'} viewport={viewPortAnimation} className="flex gap-x-4">
        <h3 className="text-4xl mb-4">
          {t.achivement.title}
        </h3>
        <img src="draws/Laptop.webp" className="h-8 md:h-12" alt="decoration" />
      </motion.div>

      <ul className="relative grid @min-[900px]:grid-cols-3 @min-[400px]:grid-cols-2 @max-[399px]:grid-cols-1">
        {expList.map((current: ExperienceItem) => (
          <motion.li variants={listUpItemAnimations} initial="hidden" whileInView={"show"} viewport={{ amount: 1, once: true }}
            className={`flex flex-col p-2`}>
            <button onClick={() => { setExp(current); showModal(prev => !prev) }} className={`hover:scale-103 group cursor-pointer ${tailwindcssDuration}`}>
              <img src={current.images[0]} className='w-full aspect-video overflow-hidden object-cover rounded-xl' />
              <h5 className="text-xl text-center">{current.title}</h5>
              <img src={LargeLineBottom} alt="line" className={`opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 invert mx-auto ${tailwindcssDuration}`} />
            </button>
          </motion.li>
        ))}
      </ul>

      <Modal state={modalState} setState={showModal} title={currentExp?.title || 'Proyecto'} icon={currentExp?.icon}>
        <>
          {currentExp ?
            <div className="flex flex-col h-full justify-between">
              <ul className="flex gap-4 justify-between my-2">
                <li className="flex flex-col">
                  <span className="text-lg">{t.achivement.date}</span>
                  <span className="text-sm text-[#828282]">{getDate(new Date(currentExp.date.year, currentExp.date.month + 1, currentExp.date.day))}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-lg">Rol:</span>
                  <span className="text-sm text-[#828282]">{currentExp.rol}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-lg">{t.achivement.location}</span>
                  <span className="text-sm text-[#828282]">{currentExp.location}</span>
                </li>
              </ul>

              <p className="text-base whitespace-break-spaces mb-4" >{currentExp.description}</p>

              <div className="flex h-[30vh] items-center justify-center mt-4">
                <Carrusel images={currentExp.images} />
              </div>
            </div>
            :
            <span className="text-base text-red-500">Lo sentimos, Hubo un error al cargar los detalles</span>
          }
        </>
      </Modal>

    </section>
  )
}


