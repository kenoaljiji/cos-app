import React from 'react'

const OverlayImage = ({ images, }) => {
    
    const image = images.split('/')[3].split('.')[0]
    
    return (
        <div className='category-overlay'>
            <img src={images} alt={image}/>
        </div>
    )
}

export default OverlayImage
