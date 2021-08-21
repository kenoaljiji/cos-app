import React from 'react';
import {Link} from 'react-router-dom';
import women from '../images/sale-women.png';
import shoeWomen from '../images/shoe-women.png';
import man from '../images/sale-man.png';
import shoeMan from '../images/shoe-man.png';
import manBig from '../images/man-big.png';
import womenBig from '../images/women-big.png';




const StartScreen = () => {


    return (
        <div className='category grid'>

            <div className="category-women" data-aos="fade-right">
                    <Link to='/category/women'>
                    <div className='category-overlay'>

                        <img src={women} alt="women" />

                    </div>
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
                <div className='category-overlay'>
                    <img src={man} alt=""/>
                    
                </div>
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
                    <div className='category-overlay'>

                    <img src={manBig} alt="man big"/>

                    </div>
                </Link>
            </div>
            
            <div className="category-big-women" >
                    <Link to='/category/women'>
                    <div className='category-overlay'>

                            <img src={womenBig} alt="women-big"/>


                    </div>
                    </Link>
           </div>
        </div>
    )
}

export default StartScreen
