import { baseAnimations, listUpContainerAnimations, listUpItemAnimations, viewPortAnimation } from "@/constants/animations";
import { useLanguage } from "@/hooks/useLanguage"
import { motion } from "framer-motion";
import type { RefObject } from "react";

interface Prompts {
  pageRef: RefObject<any>
}

export default function Home({ pageRef }: Prompts) {
  const { t } = useLanguage();
  return (
    <section ref={pageRef}
      className='flex w-screen h-screen items-center justify-center pagePadding'>
      <div className="flex flex-col md:flex-row w-full h-8/10  md:h-6/10">
        <motion.div
          variants={baseAnimations} initial="hidden" whileInView="show" viewport={viewPortAnimation}
          className="flex items-center justify-center h-4/10 md:h-full">
          <img src='/draw.png' className="max-h-full max-w-full" />
        </motion.div>
        <motion.div
          variants={listUpContainerAnimations}
          initial="hidden" animate="show"  viewport={viewPortAnimation}
          className="flex flex-col gap-y-4 justify-center">
          <motion.h2 variants={listUpItemAnimations}
            className="text-6xl">{t.global.name}</motion.h2>

          <motion.h5 variants={listUpItemAnimations}
            className="text-2xl">{t.global.profession}</motion.h5>
        </motion.div>
      </div>
    </section>
  )
}
