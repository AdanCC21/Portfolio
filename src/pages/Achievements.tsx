import Carrusel from "@/components/Carrusel";
import Modal from "@/components/Modal";
import { fadeInOutAnimation, listUpItemAnimations, tailwindcssDuration, viewPortAnimation } from "@/constants/animations";
import { useLanguage } from "@/hooks/useLanguage";
import { getDate } from "@/scripts/date";
import { getExperience, type ExperienceItem } from "@/scripts/experience";
import { motion } from "framer-motion";
import { useState, useEffect, type RefObject } from "react";

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
    <section ref={pageRef} className="flex flex-col pagePadding">
      <motion.div variants={fadeInOutAnimation} initial="hidden" whileInView={'show'} viewport={viewPortAnimation} className="flex gap-x-4">
        <h3 className="text-4xl mb-4">
          {t.achivement.title}
        </h3>
        <img src="draws/Laptop.webp" className="h-8 md:h-12" alt="decoration" />
      </motion.div>

      <ul className="relative flex flex-col w-full justify-between list-none">
        {expList.map((current, index) => (
          <motion.li variants={listUpItemAnimations} initial="hidden" whileInView={"show"} viewport={{ amount: 1, once: true }}
            className={`relative flex flex-row w-full gap-x-8 ${index % 2 === 0 ? 'text-end' : 'flex-row-reverse'} `}>
            <div onClick={() => { showModal(prev => !prev); setExp(current); }} className={`w-1/2 hover:scale-102 cursor-pointer
              ${tailwindcssDuration} `}>
              <h4 className="text-xl">{current.title}</h4>

              <span className="text-sm text-[#828282]">{getDate(new Date(current.date.year, current.date.month + 1, current.date.day))}</span>

              <div className="hidden md:block">
                <p className="text-base line-clamp-2 text-start" >{current.description}</p>
              </div>

              <button className={`flex w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                <span className="text-xs">{t.achivement.viewMore}</span>
              </button>
            </div>
            <>
              <div className={`absolute bg-c-inverted h-3 w-3 rounded-full translate-2
                ${index % 2 === 0 ? 'right-1/2 translate-x-1/2'
                  : 'left-1/2 -translate-x-1/2'}`}></div>

              <div className={`absolute bg-c-inverted h-full w-1 translate-y-4
                ${index % 2 === 0 ? 'right-1/2 translate-x-1/2'
                  : 'left-1/2 -translate-x-1/2'} ${index === expList.length - 1 && 'rounded-b-full'}`}></div>
            </>
            <div className="w-1/2"></div>
          </motion.li>
        ))}
      </ul>

      <Modal state={modalState} setState={showModal} title={currentExp?.title || 'Proyecto'}>
        <>
          {currentExp ?
            <div className="flex flex-col h-full">
              <span className="text-sm text-[#828282]">{getDate(new Date(currentExp.date.year, currentExp.date.month + 1, currentExp.date.day))}</span>
              <p className="text-base whitespace-break-spaces" >{currentExp.description}</p>
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


