import React from 'react'
import { Link } from 'react-router-dom';
import ArrowIcon from '../components/ArrowIcon';

const CheckoutSteps = ({ step1, step2, step3 }) => {
    
    return (

        
        
        <ul className='checkout-nav'>
            
                <li className='checkout-nav__list'>
                    {step1 ? (<Link to='/checkout'>Sign In</Link> ) : ( <Link to='/checkout' disabled > Sing In </Link> ) }
                </li>
                <li className='checkout-nav__list'><ArrowIcon/></li>
                <li className='checkout-nav__list'>
                    {step2 ? (<Link to='/checkout/payment'>Payment</Link> ) : ( <Link to='/checkout/payment'  disabled >Payment</Link> ) }
                </li>
                <li className='checkout-nav__list'><ArrowIcon/></li>
                <li className='checkout-nav__list'>
                    {step3 ? (<Link to='/checkout/payment/confirm'>Confirm</Link> ) :( <Link to='/checkout/payment/confirm' disabled >Confirm</Link> )}
                </li>
        </ul>
    )
}

export default CheckoutSteps
