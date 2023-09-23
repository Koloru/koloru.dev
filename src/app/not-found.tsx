"use client"
import { motion } from 'framer-motion'

import kitaShake from '@/assets/kitashake.gif'


import Image from 'next/image'
import Contact from '@/components/Contact'
import { cn } from '@/utils/cn'

const animationProperties = {
  initial: {
    opacity: 0

  },
  animate: {
    opacity: 1
  }
}
const errorPage = () => {

  const bounceAnimation = {
    initial: { rotateY: 0 },
    animate: {
      rotateY: -360,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  return (
    <main className="relative flex flex-col items-center justify-center h-full min-h-screen p-24">
      <motion.div initial="initial"
        animate="animate"
        variants={bounceAnimation}
        className="z-40"
      >

        <Image src={kitaShake} width={230} alt='kita shaking her head' className='rounded-xl' />
      </motion.div>
      <motion.h1
        {...animationProperties}
        transition={{ type: 'spring', delay: 0.3, duration: 0.3 }}
        className='text-4xl mt-6 z-40 font-bold uppercase'>
        This page is still being prepared.
      </motion.h1>
      <motion.h2
        {...animationProperties}
        transition={{ type: 'spring', delay: 0.5, duration: 0.4 }}
        className={cn('text-2xl mt-2 z-40 font-light')}>
        Please come back later.
      </motion.h2>
      <div className="z-40 mt-6">
        <Contact />
      </div>
    </main>
  )
}

export default errorPage