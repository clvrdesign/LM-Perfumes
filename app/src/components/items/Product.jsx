import Button from '../buttons/Button'
const Product = () => {
  return (
    <div>
        <div className="overflow-hidden">
            <img src="" alt="" />
        </div>
        <div>
            <h2>Wanted Azzaro</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur doloremque eveniet accusamus possimus non.</p>
            
            <ul>
                <li>60ML</li>
                <li>50ML</li>
                <li>30ML</li>
                <li>20ML</li>
                <li>15ML</li>
                <li>10ML</li>
            </ul>

            <h4>$12</h4>
            <Button>Add to Cart</Button>
        </div>
    </div>
  )
}

export default Product