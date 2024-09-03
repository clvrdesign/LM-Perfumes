import Item from './Product'
import { useState, useEffect } from 'react'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(
            [
                { id: 1, name: 'Product 1', price: 10 },
            ]
        )
    })

    return (
        <div>
            {products.length > 0 ? (
                products.map(product => (
                    <Item key={product.id} product={product} />
                ))
            ) : (
                <p>No products found</p>
            )}
        </div>
    )
}

export default Products