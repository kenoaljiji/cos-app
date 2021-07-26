import React, { createContext, useReducer,useEffect } from 'react';
import appReducer from '../context/appReducer';
import axios from 'axios';

// Local storage 

const listProductsFromStorage = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
const productFromStorage = localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : []
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}
const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : ''
  const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

// Initial State
const initialState = {
  products: listProductsFromStorage,
  loading: false,
  product: productFromStorage,
  cartItems: cartItemsFromStorage,
  shippingAddress: shippingAddressFromStorage,
  paymentMethod: paymentMethodFromStorage,
  cartActive: false,
  userInfo: null
}



// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  
  // Initialize Local Storage 
  
  useEffect(() => {
    /* 
    localStorage.setItem('products', JSON.stringify(state.products)) */
    localStorage.setItem('products', JSON.stringify(state.products))
    localStorage.setItem('product', JSON.stringify(state.product))
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    localStorage.setItem('shippingAddress', JSON.stringify(state.shippingAddress))
    localStorage.setItem('paymentMethod', JSON.stringify(state.paymentMethod))
    
  
  }, [state.cartItems,state.product,state.shippingAddress,state.paymentMethod])

  // Actions


  // Product list
  const listProducts = async () => {
            setLoading()
    const res = await axios.get('/api/products');
                    
      dispatch({
          type: 'LIST_PRODUCTS',
          payload: res.data
      });
    
    }
  // User Login 
  const userLogin = async (userData) => {
    
    setLoading()
          
    try {
      
    const config = {
      
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      userData,
      config
    );

    dispatch({
      type: 'USER_LOGIN',
      payload: data,
    });

     localStorage.setItem("userInfo", JSON.stringify(data));
      
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
    
    }
  const logout = () => {
    dispatch({
      type: 'USER_LOGOUT'
    })

     localStorage.removeItem("userInfo");
  }
  
  const addProduct = async (product) => {
    
    

    const id = product._id
    
    setLoading()
    
    try {



      const res = await axios.get(`/api/products/${id}`);
       
        dispatch({
          type: 'PRODUCT_DETAILS',
          payload: res.data
        })
      } catch {
      
        dispatch({
            type: 'PRODUCT_DETAILS',
            payload: console.log('Error Products')
          })
          }



  }

   // Add product To Cart Item

  const addToCart = (product) => {

    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })

  }

  const removeItemFromCart = (id) => {
    dispatch({
      type: 'REMOVE_ITEM_FROM_CART',
      payload: id
    })
  }

  // Add Shipping Address 
  
  const addAddress = (address) => {
    dispatch({
      type: 'ADD_ADDRESS',
      payload: address
    })
  }
  
  
  // Add Payment Method
  const addPaymentMethod = (provider) => {
    dispatch({
      type: 'ADD_PAYMENT_METHOD',
      payload: provider
    })
  }

  const toggleCartActive = () => dispatch({ type: 'SET_CART_ACTIVE', payload: !state.cartActive })
  const removeCartActive = () => dispatch({ type: 'SET_CART_ACTIVE', payload: false })
  const addCartActive = () => dispatch({ type: 'SET_CART_ACTIVE', payload: true })
  const setLoading = () => dispatch({ type: 'SET_LOADING' });
  
  return (

      <GlobalContext.Provider value={{
        
          product: state.product,
        	cartItems: state.cartItems,
          shippingAddress: state.shippingAddress,
          paymentMethod: state.paymentMethod,
          cartActive: state.cartActive,
          products: state.products,
          loading: state.loading,
          userInfo: state.userInfo,
          listProducts,
          setLoading,
          addAddress,
          addProduct,
          addToCart,
          addPaymentMethod,
          removeItemFromCart,
          toggleCartActive,
          removeCartActive,
          addCartActive,
          userLogin,
          logout
          
    }}>
      {children}
    </GlobalContext.Provider>
  )
}