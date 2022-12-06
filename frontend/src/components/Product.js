import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const Products = ({ product }) => {
  const { getProductDetails } = useContext(GlobalContext);

  return (
    <div className='product' onClick={() => getProductDetails(product)}>
      <Link to={`/product/${product._id}`}>
        <div className='product-image'>
          <img src={product.images[0]} alt={product.name} />
        </div>

        <p className='product-name mt-2'>{product.name}</p>
        <p className='product-price mt-1'>
          <span>
            {product.price.discount ? `€${product.price.discount}` : null}{' '}
          </span>
          <span
            style={
              product.price.discount ? { textDecoration: 'line-through' } : null
            }
          >
            €{product.price.value}
          </span>
        </p>
      </Link>
    </div>
  );
};

export default Products;
