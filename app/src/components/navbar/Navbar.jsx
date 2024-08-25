import { Link } from 'react-router-dom'
import assets from '../../assets/assets'

const Navbar = () => {
  return (
    <nav className="bg-sky-500">
      <div className="max-w-[1200px] m-auto py-4 px-5 flex justify-between items-center">
        <Link to='/'>
          <img className='h-[35px] lg:h-[45px]' src={assets.logo} alt="logo" />
        </Link>
        <div className="flex gap-5 lg:gap-10 text-white font-medium">
          <Link className="relative flex gap-2" to='/favorites'>
            <i className="bi bi-heart"></i>
            <span className='hidden lg:block'>Likes</span>
            <span className='absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-red-500 text-[12px] text-white rounded-full'>5</span>
          </Link>
          <Link className="relative flex gap-2" to='/cart'>
            <i className="bi bi-bag"></i>
            <span className='hidden lg:block'>Cart</span>
            <span className='absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-red-500 text-[12px] text-white rounded-full'>5</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;