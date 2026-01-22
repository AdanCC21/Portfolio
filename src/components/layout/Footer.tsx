import { listUpContainerAnimations, listUpItemAnimations, viewPortAnimation } from "@/constants/animations";
import { useLanguage } from "@/hooks/useLanguage"
import { motion } from "framer-motion";

import Line from '@/assets/decoration/line.svg'

export default function Footer() {
    const { t } = useLanguage();
    return (
        <footer className='flex flex-col px-[10%] pt-[2%] pb-[1%]'>
            <img src={Line} className="pb-8" />
            <motion.section variants={listUpContainerAnimations} initial="hidden" whileInView={"show"} viewport={viewPortAnimation} className='flex justify-between'>
                <motion.div variants={listUpItemAnimations} className='flex flex-col'>
                    <h5 className='text-lg'>{t.footer.contact}</h5>
                    <span className='text-xs'>andan.devp@gmail.com</span>
                </motion.div>

                <motion.div variants={listUpItemAnimations} className='flex flex-col text-right'>
                    <span className='text-xs'>{t.footer.fontAndIcons}<a href='https://fonts.google.com' className='border-b border-transparent hover:border-[#ccc] duration-125 transition ease-in-out'>{t.footer.googleFont}</a></span>
                    <span className='text-xs'>{t.footer.madeWith}</span>
                </motion.div>
            </motion.section>

            <span className='text-xs text-center'>© 2026 - Adan Gonzalez</span>
        </footer>
    )
}
