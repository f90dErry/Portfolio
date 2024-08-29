import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-4  bg-gray-700 footer-center'>
      <div className='mt-3'>
        <p>Copyright &copy; {footerYear} All Right Reserved</p>
        <span>Edwin Kamasah Jnr</span>
        <div className='flex text-xl space-x-3'>
          <Link to={'https://x.com/f90dErry'}>
            <FaTwitter />
          </Link>
          <Link to={'https://www.linkedin.com/in/edwin-kamasah-jnr-31b69b215/'}>
            <FaLinkedin />
          </Link>
          <Link to={'https://www.instagram.com/f90derry/?hl=en'}>
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
