import React,{useState} from 'react'

const GalleryImages = ({ product }) => {

    const images = product.images;
    
    const [selectedImg, setSelectedImg] = useState(images[0])
    
    return (
        <>  
                <div className=''>
                <img src={selectedImg} alt="Selected" className='mb-1' />
                 <div className='imgContainer'>
                    {images.map((img, index) => (
                            
                            <img src={img} alt="" className={selectedImg === img ? 'selected' : ''} key={index} onClick={() => setSelectedImg(images[index])}/>
                        ))}
                </div>
            </div>
           
            
                
               
         
        </>
    )
}

export default GalleryImages
