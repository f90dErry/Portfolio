import { FaTwitter } from 'react-icons/fa'

function Footer() {
	const footerYear = new Date().getFullYear()
	return (
		<footer className='footer p-10 bg-gray-700 text-primary-content-white footer-center'>
			<p>Copyright &copy; {footerYear} All Right Reserved</p>
			<div className='flex justify-end'></div>
		</footer>
	)
}

export default Footer
