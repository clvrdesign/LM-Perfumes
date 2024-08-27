import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Favorites from './pages/Favorites'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App