import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
// import Logo from '../../img/logo/black-logo.svg';
import logo from '../../img/logo.png'
const Header = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={props.hclass}>
         
            <div id="header-sticky" className={isSticky ? 'sticky' : 'header-1'}>
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="header-left">
                                <div className="logo flex" >
                                    <Link onClick={ClickHandler} to="/" className="header-logo" >
                                        <img src={logo} alt="logo-img" style={{
                                    width: '80px',
                                    height: '50px',
                                }}/>
                                
                                    </Link>
                                </div>
                            </div>
                            <div className="mean__menu-wrapper">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="has-dropdown active menu-thumb">
                                                <Link onClick={ClickHandler} to="/home">
                                                    Home
                                                </Link>
                                                
                                            </li>
                                            <li className=" active d-xl-none">
                                                <Link onClick={ClickHandler} to="/team" className="border-none">
                                                    Home
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to="/about">About Us</Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to="/service">
                                                    Services
                                                </Link>
                                                {/* <ul className="submenu">
                                                    <li><Link onClick={ClickHandler} to="/service">Services</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/service-details/Sticker-printing">Service Details</Link></li>
                                                </ul> */}
                                            </li>
                                            {/* <li className="has-dropdown">
                                                <Link onClick={ClickHandler} to="#">
                                                    Pages
                                                </Link>
                                                <ul className="submenu">
                                                    <li><Link onClick={ClickHandler} to="/project">Projects</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/project-details/3d-Genareted-Cate">Project Details</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/404">404 Page</Link></li>
                                                </ul>
                                            </li> */}
                                            {/* <li>
                                                <Link onClick={ClickHandler} to="#">
                                                    Shop
                                                </Link>
                                                <ul className="submenu">
                                                    <li><Link onClick={ClickHandler} to="/shop">Shop Page</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/shop-details/Calendar-printing-design">Shop Details</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/shop-cart">Shop Cart</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
                                                </ul>
                                            </li> */}
                                            {/* <li>
                                                <Link onClick={ClickHandler} to="#">
                                                    Blog
                                                </Link>
                                                <ul className="submenu">
                                                    <li><Link onClick={ClickHandler} to="/news">Blog</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food">Blog Details</Link></li>
                                                </ul>
                                            </li> */}
                                            <li>
                                                <Link onClick={ClickHandler} to="/contact">Contact Us</Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to="/quote">Quote</Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to="/career">Jobs</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            {/* <div className="header-right d-flex justify-content-end align-items-center">
                                <SearchComponent />
                                <h5 className="cart-title"><Link onClick={ClickHandler} to="/shop-cart">Cart <span className='cart-count'>{carts.length}</span></Link></h5>
                                <div className="header__hamburger d-xl-none my-auto">
                                    <div className="sidebar__toggle">
                                        <MobileMenu />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps, { removeFromCart })(Header);









