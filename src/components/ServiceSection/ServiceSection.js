import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Link } from 'react-router-dom'
import Services from "../../api/Services";

import Shape from '../../img/service/shape.png'
import Shape2 from '../../img/line.png'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection = (props) => {
    useEffect(() => {
  new Swiper('.service-slider', {
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.dot',
                clickable: true,
            },
            navigation: {
                nextEl: '.array-next',
                prevEl: '.array-prev',
            },
            breakpoints: {
                1399: {
                    slidesPerView: 5,
                },
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }, []);


    return (
        <section className={"" + props.hclass} style={{ backgroundImage: `url(${props.Bg})` }}>
            <div className="shape-image">
                <img src={Shape} alt="img" />
            </div>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <h6 className="wow fadeInUp">More service us</h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Create Stunning Print for<br />
                            <span> Your Business <img src={Shape2} alt="img" /></span>
                        </h2>
                    </div>
                    <Link onClick={ClickHandler} to="/service" className="theme-btn wow fadeInUp" data-wow-delay=".5s">See all Services</Link>
                </div>
            </div>
            <div className="service-wrapper">
                <div className="swiper service-slider">
                    <div className="swiper-wrapper">
                        {Services.slice(0, 6).map((service, sitem) => (
                            <div className="swiper-slide" key={sitem}>
                                <div className="service-card-items">
                                    <div className="service-cotent">
                                        <h3><Link onClick={ClickHandler} to={`/service-details/${service.slug}`}>{service.title}</Link></h3>
                                        <p>{service.description}</p>
                                    </div>
                                    <div className="service-image">
                                        <img src="data:image/png;base64,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" alt="img" />
                                    </div>
                                    <div className="service-btn">
                                        <Link onClick={ClickHandler} to={`/service-details/${service.slug}`} className="link-btn">Read Out More <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ServiceSection;
