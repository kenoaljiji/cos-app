import React, { useContext, useEffect } from 'react';
import StartScreen from './screens/StartScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, useLocation } from 'react-router-dom';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import Cart from './components/Cart';
import 'aos/dist/aos.css';
import './App.scss';
import Aos from 'aos';
import ContactScreen from './screens/ContactScreen';
import LoginScreen from './screens/LoginScreen';
import { GlobalContext } from './context/GlobalState';

const App = () => {
  const globalContext = useContext(GlobalContext);

  const { removeCartActive, cartActive } = globalContext;

  const onClickHandeler = (e) => {
    removeCartActive();
  };

  useEffect(() => {
    Aos.init({ duration: 1000, offset: 40 });
  }, []);

  const location = useLocation();

  if (
    location.pathname === '/checkout' ||
    location.pathname === '/checkout/payment' ||
    location.pathname === '/checkout/payment/confirm'
  )
    return (
      <>
        <Route exact path='/checkout' component={CheckoutScreen} />
      </>
    );
  else
    return (
      <>
        <Header />
        <main
          onClick={(e) => onClickHandeler(e)}
          style={{ opacity: cartActive ? '0.9' : '1' }}
        >
          <Cart />

          <div className='container'>
            <Route exact path='/' component={StartScreen} />
            <Route path='/category/:name' component={ProductsScreen} />
            <Route path='/contact' component={ContactScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/product/:id' component={ProductDetailScreen} />
          </div>
        </main>
        <Footer />
      </>
    );
};

export default App;
