import Menu from './menu'
import Cart from '../../pages/cart';
import { useState } from 'react'

const Navbar = () => {

  const [menu, setMenu] = useState(false);

  const handleMenu = () =>{
    setMenu(!menu)
  }

  const [cart, setCart] = useState(false)

  const handleCart = () =>{
    setCart(!cart)
  }


  return(
    <div className="w-full flex justify-between p-8 mb-2 mt-2">

      {/* Cart icon */}
      <button
        onClick={handleCart}
        className="relative flex justify-center items-center h-12 w-12">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C2C4C3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>

        {/* Badge */}
        <span className="absolute top-0 right-0 h-6 w-6 bg-red-700 rounded-xl">2</span>
      </button>

      <button
        onClick={handleMenu}
        className="text-xl font-aquire leading-5">
        -ME<br/>NU-
      </button>
      {menu && <Menu handleMenu={handleMenu}/>}
      {cart && <Cart toggleCart={handleCart}/> }
    </div>
  )
}

export default Navbar
