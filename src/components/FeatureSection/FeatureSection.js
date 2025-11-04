import React from 'react';

import Feature1 from '../../img/main/paper.png'
import Feature2 from '../../img/main/web-design.png'
import Feature3 from '../../img/main/box.png'

const FeatureSection = () => {
    return (
        <section className="feature-section fix section-padding">
            <div className="container">
                <div className="feature-wrapper">
                    <div className="row g-4">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="feature-box-items">
                                <div className="icon">
                                    <img src={Feature1} alt="img" style={{
                                        width: '70px',
                                    }} />
                                </div>
                                <div className="content">
                                    <h3>Pick Products</h3>
                                    <p>
                                         Print on 100% quality Papers for vibrant print and eye-catching
ink ever made.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="feature-box-items">
                                <div className="icon">
                                    <img src={Feature2} alt="img" style={{
                                        width: '70px',
                                    }} />
                                </div>
                                <div className="content">
                                    <h3>Custom & review</h3>
                                    <p>
                                        We can customize your desired art to metal plate for review
before we proceed to print a ton.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="feature-box-items">
                                <div className="icon">
                                    <img src={Feature3} alt="img" style={{
                                        width: '70px',
                                    }} />
                                </div>
                                <div className="content">
                                    <h3>Ready for ship</h3>
                                    <p>
                                        We can do finishing such as UV Printing for feels like 3D on
papers as well as lamination.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;