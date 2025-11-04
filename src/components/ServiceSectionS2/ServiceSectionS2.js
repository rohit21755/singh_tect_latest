import React from "react";
import { Link } from 'react-router-dom'

import Sshape1 from '../../img/service/shape-1.png'
import Sshape2 from '../../img/service/shape-2.png'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const Products = [
    {
        Id: '01',
        sImg: 'path_to_packaging_image',  // Replace with actual image path
        sSImg: 'path_to_packaging_small_image',  // Replace with actual image path
        title: 'Packaging',
        slug: 'packaging',
        description: 'High-quality packaging solutions for all types of products, designed to meet your specific needs.',
    },
    {
        Id: '02',
        sImg: 'path_to_booklets_image',  // Replace with actual image path
        sSImg: 'path_to_booklets_small_image',  // Replace with actual image path
        title: ' Brochures',
        slug: 'booklets-brochures',
        description: 'Professionally designed booklets and brochures to present your business and products elegantly.',
    },
    {
        Id: '03',
        sImg: 'path_to_flyers_image',  // Replace with actual image path
        sSImg: 'path_to_flyers_small_image',  // Replace with actual image path
        title: 'Flyers',
        slug: 'flyers',
        description: 'Effective and eye-catching flyers designed for events, promotions, and marketing campaigns. Perfect for increasing visibility.',
    },
    {
        Id: '04',
        sImg: 'path_to_posters_image',  // Replace with actual image path
        sSImg: 'path_to_posters_small_image',  // Replace with actual image path
        title: 'Posters',
        slug: 'posters',
        description: 'Custom posters to make a bold statement and promote your brand or events with impact.',
    }
];



const ServiceSectionS2 = (props) => {
    return (
        <section className="service-section fix section-padding">
            <div className="shape-image-2">
                <img src={Sshape1} alt="img" />
            </div>
            <div className="shape-image-3">
                <img src={Sshape2} alt="img" />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">Popular Printing Products</h6>
                    <h2 className="wow fadeInUp">
                        Our Popular Print Products <br />
                        Complete Solutions
                    </h2>
                </div>
                <div className="row">
                    {Products.map((product, pitem) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" key={pitem}>
                            <div className="service-card-items-2">
                                <div className="service-content">
                                    <span>product {product.Id}</span>
                                    <h3><Link onClick={ClickHandler} to={`/product-single/${product.slug}`}>{product.title}</Link></h3>
                                    <p>
                                        {product.description}
                                    </p>
                                    <Link onClick={ClickHandler} to={`/contact`} className="link-btn">Get Now <i className="fa-solid fa-arrow-right-long"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceSectionS2;


