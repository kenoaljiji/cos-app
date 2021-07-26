import React, { useContext } from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import { GlobalContext } from '../context/GlobalState';
import Cart from '../components/Cart';
import {useHistory} from 'react-router-dom';


const ConfirmScreen = () => {

    const { shippingAddress, paymentMethod } = useContext(GlobalContext);

    const history = useHistory()

    const confirmOrderHandeler = () => {
        history.push('/checkout/payment/confirm/order')
    }
    return (
        <div className='confirm'>
            <CheckoutSteps step1 step2 step3/>
            <h2>Confirm</h2>
            <div className='confirm-info my-5'>
                <p className='mb-2 mt-2'>{shippingAddress.email}</p>
                <p className='font-bold'>{shippingAddress.firstName} {shippingAddress.lastName}</p>
                <p>{shippingAddress.address}</p>
                <p>{shippingAddress.postalCode}, {shippingAddress.city} </p>
                <p>{shippingAddress.country}</p>
                <p className='mt-2 mb-2'>{shippingAddress.phone}</p>
                <p>{paymentMethod}</p>
            </div>
                <Cart/>
            
            <button className='button' onClick={() => confirmOrderHandeler()}>Order</button>

        </div>
    )
}

export default ConfirmScreen
