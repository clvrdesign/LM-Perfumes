import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Products from '../components/items/Products'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error)
        setLoading(false)
      })
  }, [])

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
      <div className="max-w-[1200px] m-auto min-h-[60vh] px-3">
        {loading ? (
          <p>Loading products...</p>
        ) : products.length > 0 ? (
          products.map((product, index) => (
            <Products key={index} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Home
