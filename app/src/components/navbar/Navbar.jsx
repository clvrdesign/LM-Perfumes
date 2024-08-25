import { Link } from 'react-router-dom'
import 'boxicons'

const Navbar = () => {
  return (
    <nav className="bg-sky-50">
      <div className="max-w-[1200px] m-auto py-4 px-5 flex justify-between items-center border-b border-b-sky-100">
        <div className="flex gap-10">
        <Link to='/'><h1 className='text-2xl font-semibold text-sky-500'>eShop</h1></Link>
        <form action="">
          <input type="search" placeholder="Search..." className="bg-white text-[15px] py-2 px-4 border focus:border-sky-200 outline-none rounded-full"/>
        </form>
        </div>
        <div className="flex gap-10 text-sky-500">
          <Link className="relative flex gap-2" to='/favorites'>
            <i className="bi bi-heart"></i>
            Likes
            <span className='absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-red-500 text-[12px] text-white rounded-full'>5</span>
          </Link>
          <Link className="relative flex gap-2" to='/cart'>
            <i className="bi bi-bag"></i>
            Cart
            <span className='absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-red-500 text-[12px] text-white rounded-full'>5</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;