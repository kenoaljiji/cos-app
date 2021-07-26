// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
            case 'SET_LOADING':
            return {
                ...state,
                loading:true
            }

            case 'LIST_PRODUCTS':
            return {
                ...state,
                loading:false,
                products: action.payload
            }
            
            case 'PRODUCT_DETAILS':
            return {
                ...state,
                loading:false,
                product: action.payload
            };
        
        case 'USER_LOGIN':
            return {
                ...state,
                userInfo: action.payload,
                loading:false
            }
        case 'USER_LOGIN_FAIL':
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        
        case 'USER_LOGOUT':
            return {
                ...state,
                userInfo: null,
                loading: false
            }
        
            case 'ADD_TO_CART':
            const item = action.payload

            return {
                ...state,
                cartActive: true,
                cartItems: [...state.cartItems, item],
            }
            case 'REMOVE_ITEM_FROM_CART':
                return {
                    ...state,
                    cartItems: state.cartItems.filter((x) => x._id !== action.payload),
                }
            case 'ADD_ADDRESS':
                return {
                    ...state,
                    shippingAddress: action.payload,
                };
            case 'ADD_PAYMENT_METHOD':
                return {
                    ...state,
                    paymentMethod: action.payload,
            }
        
            case 'SET_CART_ACTIVE':
                return {
                    ...state,
                    cartActive: action.payload,
                }
            default:
                return state
    }

}
