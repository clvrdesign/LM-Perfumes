import Item from './Product'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Products = () => {
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
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
            {loading ? (
          <p>Loading products...</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <Item
              key={product._id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              quantity={product.quantity}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
        </div>
    )
}

export default Products
