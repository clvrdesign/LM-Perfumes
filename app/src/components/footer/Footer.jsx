
const Footer = () => {
  return (
    <footer className="px-3 lg:px-0">
        <div className="max-w-[1200px] m-auto px-3 flex flex-wrap lg:justify-between justify-center items-center py-4 mt-6 border-t border-slate-800">
            <small className="text-slate-500">&copy; {new Date().getFullYear()} LM Perfumes | Alright reserved</small>
        </div>
    </footer>
  )
}

export default Footer