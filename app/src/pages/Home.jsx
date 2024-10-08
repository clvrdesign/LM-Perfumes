import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Products from '../components/items/Products'

const Home = () => {
  
  return (
    <>
      <Navbar />
      <Header>
        <form className="lg:w-1/2 w-full flex items-center justify-center" action="">
          <input
            type="search"
            placeholder="Search perfumes..."
            className="bg-slate-950 lg:w-1/2 w-[275px] text-gray-100 text-[15px] py-4 px-6 outline-none rounded-full"
          />
        </form>
      </Header>
      <div className="max-w-[1200px] m-auto min-h-[60vh] px-3 py-10 text-gray-200">
          <Products />
      </div>
      <Footer />
    </>
  )
}

export default Home
