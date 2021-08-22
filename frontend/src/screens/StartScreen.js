import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import women from '../images/sale-women.png';
import shoeWomen from '../images/shoe-women.png';
import man from '../images/sale-man.png';
import shoeMan from '../images/shoe-man.png';
import manBig from '../images/man-big.png';
import womenBig from '../images/women-big.png';
import OverlayImage from '../components/OverlayImage';




const StartScreen = () => {


    return (
        <div className='category grid'>
            <div className="category-women" data-aos="fade-right">
                    <Link to='/category/women'>
                        <OverlayImage images={women}/>
                    </Link>
            </div>

            <div className="category-title">
                <p>Women</p>
            </div>
            <div className="category-women-small">
                <img src={shoeWomen} alt="women-litle" data-aos="fade-right"/>
                <p><span>Sale</span>(Women)</p>
            </div>
            
            <div className="category-man" data-aos="fade-left" >

                <Link to='/category/man'>  
                    <OverlayImage images={man}/>
                </Link>
                
            </div>


            <div className="category-title-man text-right">
                <p>Man</p>
            </div>
            <div className="category-man-small">
                <img src={shoeMan} alt="man"  data-aos="fade-left"/>
                <p><span>Sale</span>(Men)</p>
            </div>
            
            <div className="category-big-man">
                <Link to='/category/man'>
                    <OverlayImage images={manBig}/>
                </Link>
            </div>
            
            <div className="category-big-women" >
                    <Link to='/category/women'>
                        <OverlayImage images={womenBig}/>
                    </Link>
           </div>
        </div>
    )
}

export default StartScreen
