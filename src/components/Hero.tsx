import { HERO_CONTENT } from '../constants/content';
import profilePic from '../assets/sumitProfile.png'
import { motion } from 'framer-motion'

const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                            Sumit Lokhande
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-green-300 via-slate-500 to-green-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                            Front-End Developer
                        </motion.span>
                        <motion.p variants={container(1)}
                            initial="hidden"
                            animate="visible" className='my-2 max-w-xl text-2xl py-6 font-light font tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className='flex justify-right bg-neutral-50 pb-16 pt-4 px-4 lg:w-md sm:w-xs'>
                        <img src={profilePic} className='pb-10' alt="profile_image" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero