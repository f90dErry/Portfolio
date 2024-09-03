import { useState } from 'react'
import { FaCode, FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import MobileNavbar from './MobileNavbar'
import ThemeToggle from '../ui/ThemeToggle'

export const NavElements = [
  //Navigation arrays
  {
    link: '/',
    linkName: 'HOME',
  },
  {
    link: '/about',
    linkName: 'ABOUT',
  },
  {
    link: 'projects',
    linkName: 'PROJECTS',
  },
  {
    link: 'contactMe',
    linkName: 'CONTACT ME',
  },
]
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='navbar shadow-lg bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <FaCode className='inline pr-2 text-3xl text-white' />
          <Link to='/' className='text-lg font-bold align-middle text-white'>
            Edwin Kamasah Jnr
          </Link>
        </div>

        <div className='flex-1 px-2 mx-2'>
          <div className='hidden md:flex justify-end'>
            {NavElements.map((element, i) => (
              <Link
                key={i}
                to={element.link}
                className='btn btn-ghost btn-sm rounded-btn text-white'
              >
                {element.linkName}
              </Link>
            ))}
          </div>
        </div>

        <div className='flex justify-center gap-2 '>
          <ThemeToggle />
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className='pr-2 text-2xl text-white md:hidden' />
            ) : (
              <FaBars className='pr-2 text-2xl text-white md:hidden' />
            )}
          </button>
        </div>
        {/* show mobile navbar */}

        {isMenuOpen && <MobileNavbar />}
      </div>
    </nav>
  )
}

export default Navbar
