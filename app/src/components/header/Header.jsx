

const Header = () => {
  return (
    <div className="h-[40vh] flex items-center justify-center bg-sky-500 rounded-b-[50px] overflow-hidden">
        <form className="lg:w-1/2 w-full flex items-center justify-center" action="">
          <input type="search" placeholder="Search..." className="bg-white lg:w-1/2 text-gray-700 text-[15px] py-4 px-4 outline-none rounded-full"/>
        </form>
    </div>
  )
}

export default Header