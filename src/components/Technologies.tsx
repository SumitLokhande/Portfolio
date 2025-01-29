import { RiReactjsLine } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { DiAngularSimple } from 'react-icons/di'
import { FaVuejs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { DiJavascript } from 'react-icons/di'
import { motion } from 'framer-motion'


const iconVariants = (duration: number,) => ({
    initial: { y: -10 },
    visible: {
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: 'linear',
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h1 className='my-20 text-center text-4xl'>Technologies</h1>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="intial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="intial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl' />
                </motion.div>

                <motion.div
                    variants={iconVariants(5)}
                    initial="intial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiAngularSimple className='text-7xl text-red-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="intial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaVuejs className='text-7xl text-green-900' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="intial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-7xl text-green-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="intial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTypescript className='text-7xl text-blue-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="intial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiJavascript className='text-7xl text-yellow-400' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies