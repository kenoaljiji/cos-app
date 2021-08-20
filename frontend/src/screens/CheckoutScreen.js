import React from 'react'
import ShippingScreen from './ShippingScreen';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import logo from '../images/logo.png';
import { Route } from 'react-router-dom';
import PaymentScreen from './PaymentScreen';
import { BrowserRouter as Router } from 'react-router-dom';
import ConfirmScreen from './ConfirmScreen';
import OrderScreen from './OrderScreen';

const CheckoutScreen = () => {
    return (
        <>
        <div className='checkout'>
            <div className="p-5">
                <div className='checkout-order'>
                        <div className="checkout-logo">
                        <img src={logo} alt="Cos" />
                        </div>
                        
                        <Router>
                            
                                <Route exact path='/checkout' component={ShippingScreen}/>
                                <Route exact path='/checkout/payment' component={PaymentScreen}/>
                                <Route exact path='/checkout/payment/confirm' component={ConfirmScreen}/>
                                <Route exact path='/checkout/payment/confirm/order' component={OrderScreen}/>
                          
                           
                        </Router>
                    </div>
            </div>

            <Cart/>
            
            
        </div>
        <Footer/> 
        </>
    )
}

export default CheckoutScreen
