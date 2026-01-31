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
      className='flex w-screen h-screen items-center justify-center pagePadding'>
      <div className="flex flex-col md:flex-row md:items-center md:justify-start justify-center w-full h-full md:h-6/10">
        <motion.div
          variants={baseAnimations} initial="hidden" whileInView="show" viewport={viewPortAnimation}
          className="relative flex flex-col items-center justify-center w-4/10 h-4/10 sm:h-5/10 md:h-full">
          <img src='/draw.png' className="max-h-full max-w-full" />
          <img src={ProfileLine} alt="decoration" className={`${theme === 'dark' && 'invert'} w-2/3`} />
        </motion.div>

        <motion.div
          variants={listUpContainerAnimations}
          initial="hidden" animate="show" viewport={viewPortAnimation}
          className="flex flex-col w-8/10 gap-y-4 justify-center ">

          <motion.div variants={listUpItemAnimations}
            className="relative flex w-full">
            <h2 className="text-5xl md:text-6xl">{t.global.name}</h2>
            <img src="/draws/Neutral.webp" className="absolute h-12 top-0 right-0" />
          </motion.div>

          <motion.h5 variants={listUpItemAnimations}
            className="text-2xl">{t.global.profession}</motion.h5>
        </motion.div>
      </div>
    </section>
  )
}
