import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';



import TsBg from '../../img/testimonial/testimonial-bg.jpg';
import Line1 from '../../img/line.png';
import Line2 from '../../img/testimonial/line.png';
import TS3 from '../../img/testimonial/work-shape.png';

// Install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const Testimonial = () => {



    return (
        <section
            className="testimonial-section section-padding fix bg-cover"
            style={{ backgroundImage: `url(${TsBg})` }}
        >
            <div className="array-button">
                <button className="array-prev"><i className="fa-regular fa-chevron-left"></i></button>
                <button className="array-next"><i className="fa-regular fa-chevron-right"></i></button>
            </div>
            <div className="container">
                <div className="testimonial-wrapper">
                    <div className="row g-4 justify-content-between align-items-center">
                        <div className="col-lg-7">
                            <div className="section-title">
                                <h6 className="wow fadeInUp">More about us</h6>
                                <h2 className="text-white split-text right">
                                    Create Stunning Print For <br />
                                    <span>Your Business <img src={Line1} alt="img" /></span>
                                </h2>
                            </div>
                            <Swiper
                                spaceBetween={30}
                                speed={2000}
                                loop={true}
                                autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    nextEl: '.array-next',
                                    prevEl: '.array-prev',
                                }}
                                className="testimonial-slider"
                            >
                                <SwiperSlide>
                                    <div className="testimonial-content mt-4 mt-md-0">
                                        <p>
                                        Working with Singh Tech Printing was a fantastic experience. The print quality was top-notch, and they delivered on time. Highly professional and attentive to our needs
                                        </p>
                                        <div className="client-info">
                                            <h3>
                                            Ananya Sharma, Delhi/ <span>Graphics Designer</span>
                                            </h3>
                                            
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-content mt-4 mt-md-0">
                                        <p>
                                        I’m thrilled with the brochures they printed for my business. Excellent service, competitive pricing, and great attention to detail.
                                        </p>
                                        <div className="client-info">
                                            <h3>
                                            Rohan Mehta, Mumbai/ <span>Graphics Designer</span>
                                            </h3>
                                            
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-content mt-4 mt-md-0">
                                        <p>
                                        Fast turnaround and incredible quality. I’ve never been so impressed with a printing service before. Will definitely return
                                        </p>
                                        <div className="client-info">
                                            <h3>
                                            Arjun Patel, Ahmedabad/ <span>Graphics Designer</span>
                                            </h3>
                                            
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="col-lg-5">
                            <div className="testimoni-image-items ">
                                <div className="line-shape">
                                    <img src={Line2} alt="shape-img" />
                                </div>
                                <div className="testimoni-image image-anime">
                                    <img src="https://prinoz-react.wpocean.com/static/media/testimonial.be929630310a90821f9d.png" alt="img"  data-speed="0.8" />
                                </div>
                                <h2 className="work-shape">
                                    <img src={TS3} alt="img" />
                                </h2>
                                <div className="icon">
                                    <i className="fa-solid fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
