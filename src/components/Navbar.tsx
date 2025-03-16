import logo from '../assets/sumitLogo.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6 px-4'>
            <div className='flex flex-shrink-0 items-center'>
                <img className='mx-2 w-12 h-11 rounded-full border-4 border-gray-400' src={logo} alt='logo' />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer'>
                <a href="https://www.linkedin.com/in/sumit-lokhande/">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/SumitLokhande">
                    <FaGithub />
                </a>
            </div>
        </nav>
    )
}

export default Navbar