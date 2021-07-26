import React, { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../components/Spinner';
import { GlobalContext} from '../context/GlobalState';


const WomenScreen = () => {

    const { addProduct, products, listProducts, loading} = useContext(GlobalContext);
   
    useEffect(() => {
        
        listProducts();
        // eslint-disable-next-line 
        
    }, [])
    
    
     return ( 
        <div className='products py-5'>
             <h2>Women</h2>

             {loading ? (<Spinner />) : (

                <div className="grid">

                {products.length === 0 ? loading : products.map(product => (
                    <div className='product' key={product._id} onClick={() => addProduct(product)}>
                        <Link to={`/product/${product._id}`}>
                            <div className='product-image'>
                                <img src={product.images[0]} alt={product.name} />
                           </div>

                        <p className='product-name mt-2'>{product.name}</p>
                        <p className='product-price mt-1'><span>{product.newPrice ? `€${product.newPrice}` : null} </span>
                            <span style={product.newPrice ? { textDecoration: 'line-through' } : null}>€{product.price}</span>
                            </p>
                        </Link>


                    </div>

                ))}
            
            </div>
             )}
             
            
        </div>
    )

}

export default WomenScreen
