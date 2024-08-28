import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header>
      <h1 className='text-3xl text-slate-400 font-semibold'>Your Favorites</h1>
    </Header>
    <div className="max-w-[1200px] m-auto min-h-[60vh] px-3">
        
    </div>
    <Footer/>
    </>
  )
}

export default Home