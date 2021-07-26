import React from 'react';
import CheckoutSteps from '../components/CheckoutSteps';

const OrderScreen = () => {
    return (
        <div>
            <CheckoutSteps step1 step2 step3/>
            <h2 className='mb-4'>Thank you for your order!</h2>
            <p>The order will be processed within nex 48 hours.</p>
        </div>
    )
}

export default OrderScreen
