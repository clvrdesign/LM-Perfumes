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
      <Products/>
      <Footer />
    </>
  )
}

export default Home
