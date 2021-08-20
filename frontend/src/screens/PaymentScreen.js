import React, {useContext, useState} from 'react';
import CheckoutSteps from '../components/CheckoutSteps';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const paymentType = [
    {
        id:'PayPal',
        value: 'PayPal',
        img: '../images/Paypal.png',
    },
    {   id:'Stripe',
        value: 'Stripe',
        img: '../images/Stripe.png'
    },
    
    {   id:'ApplePay',
        value: 'ApplePay',
        img: '../images/ApplePay.png'
    },
    
    {
        id: 'Klarna',
        value: 'Klarna',
        img: '../images/Klarna.png' }
]

const PaymentScreen = () => {

    const { addPaymentMethod } = useContext(GlobalContext);
    
    const [paymentMethod, setPaymentMethod] = useState('PayPal')
    
    const history = useHistory();
    const submitHandler = (e) => {
        e.preventDefault()
        addPaymentMethod(paymentMethod)
        history.push('/checkout/payment/confirm')
    }
    return (
        <div className='payment'>
            <CheckoutSteps step1 step2 />
            
            
            <h2>Payment provider </h2>
            <form className='' onSubmit={submitHandler}>
                {paymentType.map((item, index) => (
                   
                    <div className='input-group' key={index}>
                         <input type="radio"
                            id={item.id}
                            name='paymentMethod'
                            value={item.value}
                            onChange={(e) => setPaymentMethod(e.target.value)} defaultChecked={index === 0}/>
                        <label htmlFor={item.id}>
                            <img src={item.img} alt={item.value}/>
                        </label>
                    </div>
                ))}
                
                <button
                    type='submit'
                    value='Continue to Payment'
                    className='button'
                    > Continue to Confirm </button>    
            </form>
        </div>
    )
}

export default PaymentScreen