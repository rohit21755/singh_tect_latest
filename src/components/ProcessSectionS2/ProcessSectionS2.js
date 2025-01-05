import React from 'react';

const ProcessSectionS2 = () => {
    return (
        <section className="work-process-section section-padding fix">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="bg-2 wow fadeInUp">Digital Printing Service</h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Our Process: How We Work for You
                    </h2>
                </div>
                <div className="work-process-wrapper">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-ms-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="work-process-box-items">
                                <div className="thumb">
                                    <img src="https://prinoz-react.wpocean.com/static/media/01.402bb89030b6f04a79db.jpg" alt="Pick a Product" />
                                </div>
                                <div className="content">
                                    <h3>Step 1: Choose Your Product</h3>
                                    <p>
                                        Whether it’s business cards, brochures, or custom promotional items, choose from our wide range of high-quality print products.
                                    </p>
                                </div>
                                <div className="number">
                                    01
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-ms-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="work-process-box-items active">
                                <div className="thumb">
                                    <img src="https://prinoz-react.wpocean.com/static/media/01.402bb89030b6f04a79db.jpg" alt="Custom Artwork & Review" />
                                </div>
                                <div className="content">
                                    <h3>Step 2: Custom Artwork & Review</h3>
                                    <p>
                                        Our expert team will assist you in customizing the artwork for your project. Once created, we’ll send it over for your review to ensure it's perfect.
                                    </p>
                                </div>
                                <div className="number">
                                    02
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-ms-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="work-process-box-items">
                                <div className="thumb">
                                    <img src="https://prinoz-react.wpocean.com/static/media/01.402bb89030b6f04a79db.jpg" alt="Set Up Shipping" />
                                </div>
                                <div className="content">
                                    <h3>Step 3: Shipping & Delivery</h3>
                                    <p>
                                        Once your prints are ready, we arrange for fast and secure shipping, ensuring your products arrive exactly when you need them.
                                    </p>
                                </div>
                                <div className="number">
                                    03
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSectionS2;
