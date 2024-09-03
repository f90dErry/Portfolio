import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  //social media icons array
  const socialLinks = [
    {
      icon: <FaTwitter />,
      link: 'https://x.com/f90dErry',
    },
    {
      icon: <FaGithub />,
      link: 'https://github.com/f90dErry',
    },
    {
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/edwin-kamasah-jnr-31b69b215/',
    },
  ]

  const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-4  bg-gray-700 dark:text-white footer-center'>
      <div className='mt-3'>
        <p>Copyright &copy; {footerYear} All Right Reserved</p>
        <span>Edwin Kamasah Jnr</span>
        <div className='flex text-xl space-x-3'>
          {socialLinks.map((social, i) => (
            <Link key={i} to={social.link} target='_blank'>
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
