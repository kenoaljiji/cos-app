import React, { useContext, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import Spinner from '../components/Spinner';
import { GlobalContext } from '../context/GlobalState';
import Product from '../components/Product';


const ProductsScreen = ({match}) => {

    const {products, listProducts, loading} = useContext(GlobalContext);
   
    useEffect(() => {
        
        listProducts();
        // eslint-disable-next-line 
        
    }, [])

    const location = useLocation();
 
    const data = products.filter(product => product.category === match.params.name)

     return ( 
         <div className='products py-5'>
             
             {location.pathname === '/category/women' ? <h2>Woman</h2> || location.pathname === '/category/man' : <h2>Man</h2>}
             {loading ? (<Spinner />) : (
                 <div className="grid">
                     
                     {products.length !== 0 && data.map(product => (
                         <Product product={product}/>
                    ))}
            </div>
             )}
        </div>
    )
}

export default ProductsScreen


