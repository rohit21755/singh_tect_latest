import React from 'react';
import { Link } from 'react-router-dom';
import Bg from '../../img/hero/hero-bg.jpg'
import Shape1 from '../../img/hero/circle-2.png'
import Shape2 from '../../img/hero/vector.png'
import Shape3 from '../../img/hero/circle.png'
import Shape4 from '../../img/hero/arrow-up.png'
import Shape5 from '../../img/Scroll_Down.png'

import hero2 from '../../img/hero/information.png'



const hero = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="hero-section hero-1 fix bg-cover" style={{ backgroundImage: `url(${Bg})` }} >
            <div className="circle-shape">
                <img src={Shape1} alt="img" />
            </div>
            <div className="vector-shape float-bob-x">
                <img src={Shape2} alt="img" />
            </div>
            <div className="circle-shape-2">
                <img src={Shape3} alt="img" />
            </div>
            <div className="arrow-shape float-bob-y">
                <img src={Shape4} alt="img" />
            </div>
            <div id="scrollDown" className="scroll-down">
                <img src={Shape5} alt="img" />
            </div>
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h6 className="wow fadeInUp">Offset Printing Solutions</h6>
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                Produce Printing.
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".5s">
                                Beautiful, customizable template, with a ton of web blocks <br />
                                to create 
                            </p>
                            <ul className="list wow fadeInUp" data-wow-delay=".7s">
                                <li>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    We specialize in large-format printing, offering dimensions such as 28" x 40", 44" x 64" and 36" x 50".
                                </li>
                                <li>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    We specialize in large-scale lamination work, including films such as PVC, BOPP, and matte finishes.
                                </li>
                                <li>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    We provide coating services for large-format paper, including options such as aqueous and oil-based coatings.
                                </li>
                            </ul>
                            <Link to="/contact" onClick={ClickHandler} className="theme-btn wow fadeInUp" data-wow-delay=".9s">Custom order</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="hero-thumb">
                            <img src="https://prinoz-react.wpocean.com/static/media/hero-1.58fc2bc77b3d1268ee4f.png" alt="hero-img" />
                            <div className="information-shape float-bob-x">
                                <img src={hero2} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default hero;
