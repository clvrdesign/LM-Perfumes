import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header>
      <form className="lg:w-1/2 w-full flex items-center justify-center" action="">
        <input type="search" placeholder="Search products..." className="bg-gray-700 lg:w-1/2 text-gray-200 text-[15px] py-4 px-6 outline-none rounded-full" />
      </form>
    </Header>
    <div className="max-w-[1200px] m-auto px-3">
        
    </div>
    </>
  )
}

export default Home