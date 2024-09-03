import { Link } from 'react-router-dom'
import { NavElements } from './Navbar'

function MobileNavbar() {
  return (
    <div className='flex flex-col absolute bg-gray-600 p-8 space-y-3 top-[4rem] right-3'>
      {NavElements.map((element, i) => (
        <Link
          to={element.link}
          className='btn btn-ghost btn-sm rounded-btn text-white'
        >
          {element.linkName}
        </Link>
      ))}
    </div>
  )
}

export default MobileNavbar
