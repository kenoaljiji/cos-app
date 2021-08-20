import React,{useContext,useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import GalleryImages from '../components/GalleryImages';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

const ProductScreen = ({ match }) => {
    

    
    const { product,
        addToCart,
        getProductDetails,
        cartItems,
        products,
        loading} = useContext(GlobalContext);

    const prod = products.filter(p => p._id !== match.params.id)

    /* const existItem = cartItems.find(x => x._id === product._id); */


    
    useEffect(() => {
        
        window.scroll({
            top: 0,
            left: 0,
        })

        return cartItems
         
    }, [match.params.id,cartItems])
    


    const addToCartHandeler = (product) => {
   
             addToCart(product)
       
    }


    return (
        <div className='details py-5'>
            
            {loading ? (<Spinner />) : (
                <>
                <div className="product-details">
                <GalleryImages product={product} key={product._id}/>
                <div>
                        <h3 className=''>{product.name}</h3>
                        <p className='mt-1 mb-4'><span style={ {color:'#e01a1a'}}>{product.discountPrice ? `€${product.discountPrice}` : null} </span>
                            <span style={product.discountPrice ? { textDecoration: 'line-through'} : null}>€{product.price}</span>
                        </p>

                </div>

                <div className='product-details__description'>


                    <div className='mb-5'>
                        <p>Crafted from an organic cotton-mulberry silk mix, this oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps.</p>
                            <ul className='mt-3'>
                                <li>- Relaxed fit</li>
                                <li>- Dropped shoulder</li>
                                <li>- Elasticated body</li>
                                <li>- Ribbed cuff</li>
                        </ul>
                        <p className='mt-3 mb-2'>32% Polyamide, 29% Viscose, 23% Mulberry silk, 15% Organic cotton, 1% Elastane / Machine washable</p>
                        <p>Back length of size XS/S is 70cm </p>
                    </div>

                    <div className='product-details__button' onClick={() => addToCartHandeler(product)} >
                        Add to Cart
                    </div>

                    <div>
                        <p>32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable</p>
                        <p>Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.</p>
                        <p>Product No:0930647001</p>

                    </div>

             </div>
               

            </div>
            <div className="products text-center">
                <div className='grid'>
                 <p>You may also like</p>
                    {prod.map((p, index) => (
                            
                    <Link to={`/product/${p._id}`} key={index} onClick={() => getProductDetails(p)}>
                        <div className='product mb-1' data-aos={p.animation}>
                            <img src={p.images[0]} alt="" />
                       <p className='mt-2'>{p.name}</p>
                        <p className='mt-1'><span>{p.discountPrice ? `€${p.discountPrice}` : null} </span>
                            <span style={p.discountPrice ? { textDecoration: 'line-through' } : null}>€{p.price}</span>
                        </p>
                        </div>

                    </Link>

                  
                ))}


                </div>
               
            </div>


            </>
            )}
        </div>
    )
}

export default ProductScreen
