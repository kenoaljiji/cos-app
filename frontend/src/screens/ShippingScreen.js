import React, { useState, useContext,useEffect } from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import { useHistory} from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const ShippingScreen = () => {

    const history = useHistory()

    const { addAddress } = useContext(GlobalContext);

    const [shippingInfo, setShippingInfo] = useState({
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        address: '',
        apartment: '',
        postalCode: '',
        city: '',
        country: '',
        phone: ''
    });

    useEffect(() => {
        
        window.scrollTo(0, 0)
        
         
        }, [shippingInfo])

    const { email, firstName, lastName, company, address, apartment, postalCode, city, country, phone } = shippingInfo
    
    
     const onChange = e =>
        setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        addAddress(shippingInfo);
        history.push('/checkout/payment')   
  };


    return (
        <div>
            <CheckoutSteps step1 />
            <form onSubmit={onSubmit}>
                <h2>Contact Information</h2>
                <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    required
                />
                <h2>Shipping addresss</h2>
                <input
                type='text'
                placeholder='First Name'
                name='firstName'
                value={firstName}
                    onChange={onChange}
                    required
            />
                <input
                type='text'
                placeholder='Last Name'
                name='lastName'
                value={lastName}
                    onChange={onChange}
                    required
            />
                <input
                type='text'
                placeholder='Company (optional)'
                name='company'
                value={company}
                onChange={onChange}
            />
                <input
                type='text'
                placeholder='Address'
                name='address'
                value={address}
                    onChange={onChange}
                    required
            />
                <input
                type='text'
                placeholder='Apartment, suite, etc. (optional)'
                name='apartment'
                value={apartment}
                    onChange={onChange}
                   
            />
                <input
                type='text'
                placeholder='Postal Code'
                name='postalCode'
                value={postalCode}
                    onChange={onChange}
                    required
            />
                <input
                type='text'
                placeholder='City'
                name='city'
                value={city}
                    onChange={onChange}
                    required
            />
                <input
                type='text'
                placeholder='Countrly/Region'
                name='country'
                value={country}
                onChange={onChange}
            />
                <input
                type='text'
                placeholder='Phone'
                name='phone'
                value={phone}
                    onChange={onChange}
                    required
                />
              <button
                type='submit'
                value='Continue to Payment'
                className='button'
             >   Continue to payment
                </button>    
            </form>
        </div>
    )
}

export default ShippingScreen
