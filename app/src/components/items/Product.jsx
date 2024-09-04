import Button from '../buttons/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = ({ name, description, image, quantity, price, isLiked, like }) => {
  const [liked, setLiked] = useState(isLiked);

  const handleLike = () => {
    setLiked(!liked);
    like();
  };

  return (
    <div className='relative bg-slate-900 text-slate-300 rounded-xl overflow-hidden'>
        <i 
          onClick={handleLike}
          className={`absolute right-4 top-4 cursor-pointer text-red-500 ${liked ? 'bi bi-heart-fill' : 'bi bi-heart'}`}
        ></i>
        <div className="w-full h-40 overflow-hidden">
            <img className='w-full' src={image} alt="product-image" />
        </div>
        <div className='p-4'>
            <h2 className='text-2xl font-bold pb-4'>{name}</h2>
            <p>{description}</p>
            <span className='block py-1'>Quantity: {quantity} ML</span>
            <h4>Price: {price} BIF</h4>
            <Button>
              <i className='bi bi-bag mr-2'></i>
              Add to Bag
            </Button>
        </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  like: PropTypes.func.isRequired,
  isLiked: PropTypes.bool.isRequired,
};

export default Product;
