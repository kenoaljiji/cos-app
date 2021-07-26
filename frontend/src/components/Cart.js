import React, { useContext} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
const Cart = () => {

    const { cartItems,removeItemFromCart,cartActive,userInfo } = useContext(GlobalContext)
    
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }

    
    const qty = cartItems.reduce((acc, item) => acc + (item.newPrice || item.price), 0)

    const taxPrice =  addDecimals(Number((0.01 * qty)))

    const location = useLocation();

    return (
        <>
        
        <div className={cartActive ? 'cart show' : 'cart'}>
            
            <h3 className='mb-4'>Cart</h3>
            {cartItems.length === 0 ? (<p>Your Cart is empty </p>) : cartItems.map((item, index) => (
            
            <div className="cart-items" key={index}>
                <div className="cart-items__images" key={item}>
                    <img src={item.images[0]} alt="" />
                </div>
                <div className="cart-items__details">
                        <h3>{item.name}</h3>
                        <p>€{item.newPrice ? item.newPrice : item.price} x 1 </p>
                       
                </div>
                    {location.pathname !== '/checkout' ? (<p style={{cursor: 'pointer', fontWeight: '400'}} onClick={() => removeItemFromCart(item._id)}>x</p>) : null}
                </div>
                    
              
            )
            )}
            
            
            <div className='cart-total'>
                        <div className='cart-total__price'>
                            <p>subtotal</p>
                            <span>€{qty}</span>
                        </div>
                        <div className='cart-total__price mt-1'>
                            <p>Taxes</p>
                            <span>{taxPrice}</span>
                        </div>
    
            </div>
            <div className='cart-pay'>
                            <h3>Total</h3>
                <h3>€{Number(qty) + Number(taxPrice)}</h3>
            </div>

            {cartItems.length !== 0 ? ( < Link to={userInfo ? '/checkout' : '/login'}>
                <div className='button mt-3'>
                        Checkout
                </div>
            </Link>) : null}
          
            </div>
            
              </>
    )
}

export default Cart
