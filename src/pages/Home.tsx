import { baseAnimations, listUpContainerAnimations, listUpItemAnimations, viewPortAnimation } from "@/constants/animations";
import { useLanguage } from "@/hooks/useLanguage"
import { motion } from "framer-motion";
import type { RefObject } from "react";
import ProfileLine from '@/assets/decoration/profileDec.svg'
import { useTheme } from "@/hooks/useTheme";

interface Prompts {
  pageRef: RefObject<any>
}

export default function Home({ pageRef }: Prompts) {
  const { t } = useLanguage();
  const { theme } = useTheme();
  return (
    <section ref={pageRef}
      className='relative flex w-screen h-screen items-center justify-center pagePadding'>

      
      <img src="/draws/Cafe.webp" alt="decoration" className="absolute hidden md:block md:bottom-25 right-1/10 h-10 w-fit md:h-15 opacity-20 -rotate-20 z-100" />
      
      <img src="/draws/wolf.webp" alt="decoration" className="absolute top-30 left-1/10 h-10 w-10 -rotate-20 opacity-20 z-100" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-start justify-center w-full h-full md:h-6/10">
        <motion.div
          variants={baseAnimations} initial="hidden" whileInView="show" viewport={viewPortAnimation}
          className="relative flex flex-col items-center justify-center md:w-4/10 my-4 h-4/10 sm:h-5/10 md:h-full">
          <img src='/draw.png' className="max-h-full max-w-full" />
          <img src={ProfileLine} alt="decoration" className={`${theme === 'dark' && 'invert'} w-2/3`} />
        </motion.div>

        <motion.div
          variants={listUpContainerAnimations}
          initial="hidden" animate="show" viewport={viewPortAnimation}
          className="flex flex-col md:w-8/10 gap-4 justify-center">

          <motion.div variants={listUpItemAnimations}
            className="relative w-fit">
            <img src="draws/Celular.webp" className="absolute top-0 left-0 -translate-1/2 h-8 md:h-12 -z-1" />
            <h2 className="text-5xl md:text-6xl">{t.global.name}</h2>
          </motion.div>

          <motion.div variants={listUpItemAnimations} className="relative">
            <h5 className="relative text-2xl w-fit">
              {t.global.profession}
            </h5>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
