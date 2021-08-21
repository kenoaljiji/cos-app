
import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';
import logo from '../images/logo.png';
import { Link,useHistory,useLocation } from 'react-router-dom';


const Navbar = () => {

    const { cartItems, toggleCartActive,removeCartActive,userInfo,logout } = useContext(GlobalContext)
    const [isMobile, setIsMobile] = useState(false);

    const numProduct = cartItems.length !== 0 ? (<span className='count'>{cartItems.length}</span>) : null

    const location = useLocation();
    const history = useHistory()

    
    


    const toggleClass = () => {
        setIsMobile(!isMobile)
        toggleCartActive()
       
      
    }

    const onClickHandeler = () => {
        setIsMobile(!isMobile)
        removeCartActive()
    }


    const logoutHandeler = () => {
        logout()
        history.push('/login')

    }


    return (
            <> 
            <nav className="nav container">
                <div className="nav-humburger" onClick={() => onClickHandeler()}>
                    <div className={isMobile ? 'nav-line nav-line-1' : 'nav-line'}></div>
                    <div className={isMobile ? 'nav-line nav-line-2' : 'nav-line'}></div>
                    <div className={isMobile ? 'nav-line nav-line-3' : 'nav-line'}></div>
                </div>
                <div className="nav-left">
                    <ul className="nav-left_items">
                        <li><Link to='/category/women' className={location.pathname === '/category/women' ? 'active' : ''}> Women</Link></li>
                        <li><Link to='/category/man' className={location.pathname === '/category/man' ? 'active' : ''} >Man</Link></li>
                        <li><Link to='/' className={location.pathname === '/' ? 'active' : ''} > Sale</Link></li>
                    </ul>
                </div>
                <div className="nav-logo">
                    <Link to='/'>
                        <img src={logo} alt="Cos" />
                    </Link>
                </div>
            
                <div className="nav-right">
                    <ul className="nav-right_items">
                        <li><Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                      

                        {userInfo !== null ?
                            (
                             	<div className='nav-right_dropdownBtn'>
                                     <li><Link to='#' className={location.pathname === '/login' ? 'active' : ''}>{userInfo.name} <i className="fas fa-caret-down"></i></Link></li> 
                                <ul className='nav-right_dropdown'>
                                    <li className='logout' onClick={() => logoutHandeler()}>Logout</li>
                                </ul>
                                </div> ) :
                            (<li><Link to='/login' className={location.pathname === '/login' ? 'active' : ''}> Sign In</Link></li>) }


                        
                        <li onClick={() => toggleClass()}>{numProduct}Cart</li>
                    </ul>
                </div>

            </nav>
            
            <div className={isMobile ? 'nav-mobile show' : 'nav-mobile'}>
            
                    <ul className="nav-mobile_items">
                        <li onClick={() => setIsMobile(!isMobile)}><Link to='/women' className={location.pathname === '/category/women' ? 'active' : ''}> Women</Link></li>
                        <li onClick={() => setIsMobile(!isMobile)}><Link to='/man' className={location.pathname === '/category/man' ? 'active' : ''} >Man</Link></li>
                        <li onClick={() => setIsMobile(!isMobile)}><Link to='/' className={location.pathname === '/' ? 'active' : ''} > Sale</Link></li>
                        <li onClick={() => setIsMobile(!isMobile)}><Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                        <li onClick={() => setIsMobile(!isMobile)} ><Link to='/login' className={location.pathname === '/login' ? 'active' : ''}> Sign In</Link></li>
                    <li onClick={() => toggleClass()}> {numProduct} Cart</li>
                    </ul>
            </div>
            
        </>
        
    )
    
}

export default Navbar
