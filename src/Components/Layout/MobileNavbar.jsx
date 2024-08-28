function MobileNavbar() {
	return (
		<div className='flex flex-col'>
			<Link
				to='/'
				className='btn btn-ghost btn-sm rounded-btn text-white'
			>
				HOME
			</Link>
			<Link
				to='/about'
				className='btn btn-ghost btn-sm rounded-btn text-white'
			>
				ABOUT
			</Link>
			<Link
				to='projects'
				className='btn btn-ghost btn-sm rounded-btn text-white'
			>
				PROJECTS
			</Link>
			<Link
				to='contactMe'
				className='btn btn-ghost btn-sm rounded-btn text-white'
			>
				CONTACT ME
			</Link>
		</div>
	)
}

export default MobileNavbar
