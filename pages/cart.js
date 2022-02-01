import { useState } from 'react'
import Button2 from '../components/dom/button2'
import Cartlist from '../components/dom/cartlist'
import Checkout from './checkout'

const Cart = (props) => {

  const [checkout, setCheckout] = useState(false)
  const handleCheckout = () =>{
    setCheckout(!checkout)
  }

  return (
    <div className="fixed top-0 left-0 bg-black z-50 w-full h-full p-8">
      <div className="h-24 w-full m-8 mt-2 mb-2">
        <button
          className="absolute top-0 right-0 my-10 mr-8"
          onClick={props.toggleCart}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20" fill="none" stroke="#C2C4C3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <h1 className="text-7xl mb-8">YOUR CART</h1>
      <Cartlist/>
      <Button2 title="Checkout" onClick={handleCheckout}/>
      {checkout && <Checkout toggleCheckout={handleCheckout}/>}
    </div>
  )
}

export default Cart
