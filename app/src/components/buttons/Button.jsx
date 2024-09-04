import PropTypes from 'prop-types';

const Button = ({children, onClick}) => {
  return (
    <button onClick={onClick} className="w-fit h-12 flex items-center justify-center px-4 bg-slate-300 text-slate-900 mt-5 rounded-lg">
        {children}
    </button>
  )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
  

export default Button