import Modal from "@/components/Modal";
import { fadeInOutAnimation, listRightContainerAnimation, listUpContainerAnimations, listUpItemAnimations, viewPortAnimation } from "@/constants/animations";
import { useLanguage } from "@/hooks/useLanguage";
import { getDate } from "@/scripts/date";
import { getExperience } from "@/scripts/experience";
import { motion } from "framer-motion";
import { useState, useEffect, type RefObject } from "react";

interface Prompts {
  pageRef: RefObject<any>
}

export default function Achievements({ pageRef }: Prompts) {
  const { t } = useLanguage();

  const [expList, setExpList] = useState(getExperience(t))
  const [modalState, showModal] = useState(false);
  const [currentExp, setExp] = useState(null)

  useEffect(() => {
    const res = getExperience(t);
    setExpList(res);
  }, [t])

  return (
    <section ref={pageRef} className="flex flex-col min-h-screen pagePadding">
      <motion.h3 variants={fadeInOutAnimation} initial="hidden" whileInView={'show'} viewport={viewPortAnimation} className="text-4xl">{t.experience.title}</motion.h3>
      <ul className="relative flex flex-col w-full justify-between list-none">
        {expList.map((current, index) => (
          <motion.li variants={listUpItemAnimations} initial="hidden" whileInView={"show"} viewport={{ amount: 1 }} className={`relative flex flex-row w-full gap-x-8  ${index % 2 === 0 ? 'text-end' : 'flex-row-reverse'}`}>
            <div onClick={() => { showModal(prev => !prev); }} className="w-1/2">
              <h4 className="text-xl">{current.title}</h4>

              <span className="text-sm text-[#828282]">{getDate(new Date(current.date.year, current.date.month + 1, current.date.day))}</span>

              <p className=" line-clamp-2 text-start" >{current.description}</p>

              <button className={`flex w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                <span className="text-xs">View More</span>
              </button>
            </div>
            <>
              <div className={`absolute bg-white h-3 w-3 rounded-full translate-2
                ${index % 2 === 0 ? 'right-1/2 translate-x-1/2'
                  : 'left-1/2 -translate-x-1/2'}`}></div>

              <div className={`absolute bg-white h-full w-1 translate-y-4
                ${index % 2 === 0 ? 'right-1/2 translate-x-1/2'
                  : 'left-1/2 -translate-x-1/2'} ${index === expList.length - 1 && 'rounded-b-full'}`}></div>
            </>
            <div className="w-1/2"></div>
          </motion.li>
        ))}
      </ul>

      <Modal state={modalState} setState={showModal} title="Proyecto">
        <>
          <h1>Hola</h1>
        </>
      </Modal>

    </section>
  )
}


