import { easeInOut, type Variants, type ViewportOptions } from "framer-motion"

export const baseAnimations: Variants = {
    hidden: { opacity: 0, translateY: -20 },
    show: { opacity: 1, translateY: 0, transition: { duration: .8, ease: easeInOut } },
}

export const defaultUpAnimation: Variants = {
    hidden: { opacity: 0, translateY: 10 },
    show: { opacity: 1, translateY: 0, transition: { duration: .4, ease: easeInOut } },
}

export const fastUpAnimation: Variants = {
    hidden: { opacity: 0, translateY: 10 },
    show: { opacity: 1, translateY: 0, transition: { duration: .2, ease: easeInOut } },
    out: { opacity: 0, translateY: -10 }
}

export const fadeInOutAnimation: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: .2, ease: easeInOut } },
    out: { opacity: 0 }
}

export const pageContainerAnimation: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: .8,
            ease: easeInOut
        }
    }
}

export const viewPortAnimation: ViewportOptions = {
    once: true,
    amount: 0.2
}

export const listRightContainerAnimation: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.03,
            duration: .8,
            ease: easeInOut
        }
    }
}

export const listRightItemAnimation: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: easeInOut,
        }
    }
}

export const listUpContainerAnimations: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            duration: .8,
            ease: easeInOut
        }
    }
}

export const listUpItemAnimations: Variants = {
    hidden: { opacity: 0, translateY: 10 },
    show: {
        opacity: 1,
        translateY: 0,
        transition: {
            duration: .3,
            ease: easeInOut
        }
    }
}
