import React from 'react'
import abImg1 from '../../img/about/shape-1.png'

import abImg3 from '../../img/about/color_cycle.png'
import abImg4 from '../../img/about/sticer.png'
import abImg5 from '../../img/about/shape-2.png'
import Line from '../../img/line.png'
import author from '../../img/about/author.png'
import Line2 from '../../img/about/line.png'
import about3 from "../../img/about/about3.png"

const About2 = (props) => {

   

    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="about-image wow img-custom-anim-top" >
                                    <img style={{
                                        borderRadius: "2%"
                                    }} src={about3} alt="img" />
                                </div>
                                <div className="shape-1">
                                    <img src={abImg1} alt="img" />
                                </div>
                                
                                <div className="shape-3">
                                    <img src={abImg3} alt="img" />
                                </div>
                                <div className="shape-4">
                                    <img src={abImg4} alt="img" />
                                </div>
                                <div className="shape-5">
                                    <img src={abImg5} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <h6 className="wow fadeInUp">More about us</h6>
                                    <h2 className="wow fadeInUp" >
                                        Create Stunning Print For
                                        <span> Your Business <img src={Line} alt="img" /></span>
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" >
                                At PS Offset Company, we are dedicated to delivering high-quality print solutions that help your business stand out. With years of experience in the industry, we combine cutting-edge technology and creativity to provide custom prints that leave a lasting impression.
                                </p>
                                <ul className="about-list wow fadeInUp">
                                    <li>
                                        <i className="fa-solid fa-check"></i>
                                        Large paper & stock selection & Unique Print
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check"></i>
                                        Printing programs tailored to your company ne
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check"></i>
                                        Customer places their order Connect your store
                                    </li>
                                </ul>
                                <div className="about-author">
                                    
                                    <div className="author-image wow fadeInUp" >
                                        <img src={author} alt="author-img" />
                                            <div className="content">
                                            <span>10m+ Trusted Global clients <img src={Line2} alt="img" /></span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About2;
