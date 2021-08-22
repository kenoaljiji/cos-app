import React,{useContext,useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import GalleryImages from '../components/GalleryImages';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

const ProductDetailScreen = ({ match }) => {
    

    
    const { product,
        addToCart,
        getProductDetails,
        cartItems,
        products,
        loading } = useContext(GlobalContext);
    
    

    const data = products.filter(p => p._id !== match.params.id)

    const prod = data.filter(products => products.category === product.category)



    
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
                        <p className='mt-1 mb-4'><span style={ {color:'#e01a1a'}}>{product.price.discount ? `${product.price.currency}${product.price.discount}` : null} </span>
                                <span style={product.price.discount ? { textDecoration: 'line-through' } : null}>{product.price.currency}{product.price.value}</span>
                        </p>

                </div>

                <div className='product-details__description'>


                    <div className='mb-5'>
                            <p>{product.description}</p>
                            <ul className='mt-3'>
                                    {product.quality.map(quality => <li>{`- ${quality}`}</li>)} 
                            </ul>
                        <p className='mt-3 mb-2'>{product.materials}</p>
                        <p>Available sizes: {product.size.join(', ').toUpperCase()} </p>
                    </div>

                    <div className='product-details__button' onClick={() => addToCartHandeler(product)} >
                        Add to Cart
                    </div>

                    <div>
                        <p className='mb-2'>{product.materials}</p>
                                
                        <p className='mb-2'>Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.</p>
                            
                        <p>Product No:{product.productNumber}</p>

                    </div>
                            
             </div>
               
            </div>
            <div className="products products-related text-center">
                <div className='grid'>
                 <p>You may also like</p>
                    {prod.map((p, index) => (
                            
                    <Link to={`/product/${p._id}`} key={index} onClick={() => getProductDetails(p)}>
                        <div className='product mb-1' data-aos={p.animation}>
                            <img src={p.images[0]} alt="picture" />
                       <p className='mt-2'>{p.name}</p>
                        <p className='mt-1'><span>{p.price.discount ? `€${p.price.discount}` : null} </span>
                                    <span style={p.price.discount ? { textDecoration: 'line-through' } : null}>{p.price.currency}{p.price.value}</span>
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

export default ProductDetailScreen
