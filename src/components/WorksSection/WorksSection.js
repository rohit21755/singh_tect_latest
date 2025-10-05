import React from 'react';
import printing from '../../img/printing.jpg'
import Ws1 from '../../img/about/product-shape.png'
import Ws3 from '../../img/about/05.jpg'
import Ws4 from '../../img/feature/StickersV30.png'
import Ws5 from '../../img/line.png'


const WorksSection = (props) => {
    return (
        <section className={"" +props.hclass} style={{ backgroundImage: `url(${props.Ws6})`}}>
            <div className="product-shape float-bob-x">
                <img src={Ws1} alt="img" />
            </div>
            <div className="container">
                <div className={"" +props.eclass}>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="about-feature-image">
                                    <img src={printing} alt="img"  className="wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.1s" />
                                        <div className="about-feature-image reveal image-anime">
                                        <img src={Ws3} alt="img" />
                                        </div>
                                        <div className="stickers-shape">
                                        <img src={Ws4} alt="img" />
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-feature-content">
                                <div className="section-title">
                                    <h6 className="wow fadeInUp">More about us</h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    The <span><img src={Ws5} alt="img" />PS Offset Company</span>   Difference
                                        
                                    </h2>
                                </div>
                                <div className="box-items-area mt-3 mt-md-0">
                                    <div className="box-item wow fadeInUp" data-wow-delay=".3s">
                                        <h5>Fast Turnaround Times</h5>
                                        <p>Our efficient processes and advanced equipment ensure your projects are completed on time, every time.</p>
                                    </div>
                                    <div className="box-item active wow fadeInUp" data-wow-delay=".3s">
                                        <h5>Competitive Pricing Without Compromising Quality</h5>
                                        <p>Enjoy affordable pricing paired with impeccable quality that exceeds expectations for all your printing needs.</p>
                                    </div>
                                    <div className="box-item wow fadeInUp" data-wow-delay=".3s">
                                        <h5>Expert Support to Bring Your Ideas to Life</h5>
                                        <p>Our skilled team collaborates with you, transforming your concepts into stunning, professional-grade printed materials. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorksSection;