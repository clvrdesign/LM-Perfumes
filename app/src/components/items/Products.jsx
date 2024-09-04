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

    const addToFavorite = (productId) => {
        axios.patch(`http://localhost:3000/products/${productId}`, { isFavorite: true })
            .then(
                setProducts(prevProducts =>
                    prevProducts.map(product =>
                        product.id === productId ? { ...product, isFavorite: true } : product
                    )
                )
            )
            .catch(error => {
                console.error("There was an error adding the product to favorites!", error)
            })
    }

    return (
        <div className="max-w-[1200px] m-auto min-h-[60vh] px-3 py-10 text-gray-200">
            {loading ? (
                <div className="w-full h-full bg-slate-950 flex justify-center items-center z-50">
                    <div className="animate-spin w-50 h-50 border-r-4 border-slate-300 rounded-full">d</div>
                </div>
            ) : products.length > 0 ? (

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
                    {products.map(product => (
                        <Item
                            key={product.id}
                            name={product.name}
                            image={product.image}
                            description={product.description}
                            price={product.price}
                            quantity={product.quantity}
                            like={() => addToFavorite(product.id)} // Pass the product ID to the like function
                        />
                    ))}
                </div>
            ) : (
                <p>No products found</p>
            )}
        </div>
    )
}

export default Products
