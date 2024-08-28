
const Footer = () => {
  return (
    <footer>
        <div className="max-w-[1200px] m-auto px-3 flex flex-wrap justify-between items-center py-4 mt-6 border-t border-gray-700">
            <small className="text-gray-500">&copy; {new Date().getFullYear()} LM Perfumes | Alright reserved</small>
        </div>
    </footer>
  )
}

export default Footer