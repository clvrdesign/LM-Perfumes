import PropTypes from 'prop-types';

const Button = ({children, onClick}) => {
  return (
    <button onClick={onClick} className="w-fit h-12 flex items-center justify-center px-4 text-gray-900 bg-yellow-400 rounded-lg">
        {children}
    </button>
  )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
  

export default Button