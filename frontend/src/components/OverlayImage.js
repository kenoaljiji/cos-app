import React from 'react';
import {PropTypes} from 'prop-types';


const OverlayImage = ({ images }) => {
    
    const imageName = images.split('/')[3].split('.')[0]
    
    return (
        <div className='category-overlay'>
            <img src={images} alt={imageName}/>
        </div>
    )
}
OverlayImage.propTypes = {
    images: PropTypes.string,
}

export default OverlayImage
