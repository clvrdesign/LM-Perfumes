import Button from '../buttons/Button'
import PropTypes from 'prop-types';


const Product = ({image, title, description, quantity, price}) => {
  return (
    <div className=''>
        <div className="overflow-hidden">
            <img className='rounded-2xl' src={image} alt="" />
        </div>
        <div>
            <h2>{title}</h2>
            <p>
              {description}
            </p>
            
            <span>{quantity}</span>

            <h4>${price}</h4>
            <Button>Add to Cart</Button>
        </div>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired

}

export default Product
