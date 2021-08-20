import React, { useContext, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import Spinner from '../components/Spinner';
import { GlobalContext} from '../context/GlobalState';


const ProductsScreen = () => {

    const {getProductDetails, products, listProducts, loading} = useContext(GlobalContext);
   
    useEffect(() => {
        
        listProducts();
        // eslint-disable-next-line 
        
    }, [])

    const location = useLocation();
 
    
     return ( 
        <div className='products py-5'>
             {location.pathname === '/women' ? <h2>Woman</h2> : <h2>Man</h2> }

             {loading ? (<Spinner />) : (

                <div className="grid">

                {products.length === 0 ? loading : products.map(product => (
                    <div className='product' key={product._id} onClick={() => getProductDetails(product)}>
                        <Link to={`/product/${product._id}`}>
                            <div className='product-image'>
                                <img src={product.images[0]} alt={product.name}/>
                           </div>

                        <p className='product-name mt-2'>{product.name}</p>
                        <p className='product-price mt-1'><span>{product.discountPrice ? `€${product.discountPrice}` : null} </span>
                            <span style={product.discountPrice ? { textDecoration: 'line-through' } : null}>€{product.price}</span>
                        </p>
                        </Link>


                    </div>

                ))}
            
            </div>
             )}
             
            
        </div>
    )

}

export default ProductsScreen
