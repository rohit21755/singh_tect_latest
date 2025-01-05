import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import { useParams } from 'react-router-dom'
import ServiceSidebar from './sidebar'
import Accordion from '../../components/Accordion/Accordion'
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import gd2 from '../../img/gd/2.jpg'
import gd3 from '../../img/gd/3.jpg'
import gd4 from '../../img/gd/4.jpg'
import gd5 from '../../img/gd/5.jpg'
import gd6 from '../../img/gd/6.jpg'
import of2 from '../../img/offset/2.jpg'
import of3 from '../../img/offset/3.jpg'
import of4 from '../../img/offset/4.jpg'
import of5 from '../../img/offset/5.jpg'
import of6 from '../../img/offset/6.jpg'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';

const ServiceSinglePage = (props) => {
    const { slug } = useParams()
    

    
    const offsetPrinting = {
        slug: 'offset-printing',
        title: 'Offset Printing',
        sSImg: of2, // The large image for the service
        description: `Offset printing provides sharp, high-quality results for large printing jobs, ideal for magazines, brochures, flyers, and more. 
                      The process involves transferring ink onto a printing plate before it’s applied to the surface, making it highly efficient for large volumes.
                      With offset printing, you get clear, vibrant colors and an excellent finish that will help your brand stand out.`,
        // Service-specific details like images and other content:
        description2: `Whether you are looking for vibrant flyers to grab attention, high-quality brochures to represent your business, or reliable print materials in large quantities, 
                   offset printing is the best solution. It ensures consistency and superior color accuracy from the first print to the last, making it perfect for bulk production. 
                   This service is ideal for large-scale commercial prints and helps businesses achieve professional results without breaking the bank.`,
    specialQuote: `"Quality means doing it right when no one is looking" – Henry Ford`, // Special quote for the service type
    
        images: [
            { img: of3, alt: 'Printing Process' },
            { img: of4, alt: 'Finished Offset Print' },
            { img: of5, alt: 'Print on Different Materials' },
            { img: of6, alt: 'Print on Different Materials' },
        ],
        video: 'path_to_video', // Optional: If there's a video specific to this service
        faq: [
            { title: 'What is offset printing?', content: 'Offset printing uses plates to transfer ink onto a printing surface, producing high-quality results for large print runs.' },
            { title: 'What materials can be printed using offset printing?', content: 'We can print on a variety of materials including paper, cardboard, and certain plastics.' }
        ]
    };
    const   graphicDesign = {
        slug: 'graphic-design',
        title: 'Graphic Design',
        sSImg: gd2, 
        description: `Our graphic design service brings your ideas to life by crafting visually compelling and brand-specific designs. From logos to brochures, 
                      we create designs that align with your business goals and resonate with your audience. Our team is experienced in both digital and print media,
                      ensuring your brand is consistent across all platforms. Whether it's designing a sleek logo or creating stunning visual content for social media,
                       
                      we make sure every design communicates your message effectively and beautifully.`,
                      description2: `We specialize in creating designs that not only look great but also deliver measurable results. We understand the power of visual storytelling, 
                      and work closely with our clients to understand their needs and vision. From concept to completion, we ensure your brand’s message is conveyed
                      with clarity and style. With our team’s expertise, your designs will stand out in an ever-competitive market.`,
       specialQuote: `"Good design is good business" – Thomas Watson Jr.`,
        images: [
            { img: gd3, alt: 'Logo Design' },
            { img: gd4, alt: 'Brochure Design' },
            { img: gd5, alt: 'Social Media Graphics' },
            { img: gd6, alt: 'Social Media Graphics' }
        ],
        video: 'path_to_video', 
        faq: [
            { title: 'What is graphic design?', content: 'Graphic design involves creating visual content to communicate messages, solve problems, and create a visual identity for businesses.' },
            { title: 'What services are included in graphic design?', content: 'Our graphic design services include logo design, branding, print materials like brochures and flyers, social media graphics, and more.' },
            { title: 'How long does it take to complete a graphic design project?', content: 'The timeline depends on the project size and complexity, but we aim to deliver high-quality designs promptly.' }
        ]
    };

    let serviceDetails = [offsetPrinting, graphicDesign].filter(service => service.slug === slug)[0];
    console.log(serviceDetails);
    

    
    // const ClickHandler = () => {
    //     window.scrollTo(10, 0);
    // }
    return (
        <Fragment>
            {/* <NavbarS2 hclass={'header-section-2 style-two'} /> */}
            <Navbar hclass={'header-section-2 style-two'} />
            <PageTitle pageTitle={'Digital printing Service'} pagesub={serviceDetails.title} />
            <section className="service-details-section fix section-padding section-bg-2">
                <div className="container">
                    <div className="service-details-wrapper">
                        <div className="row g-5">
                            <div className="col-lg-4 order-2 order-md-1">
                                <ServiceSidebar />
                            </div>
                            <div className="col-lg-8 order-1 order-md-2">
                                <div className="service-details-image">
                                    <img src={serviceDetails.sSImg} alt="img" />
                                </div>
                                <div className="service-details-content">
                                    <h3>{serviceDetails.title}</h3>
                                    <p className="mt-3">
                                        {serviceDetails.description}
                                    </p>
                                   
                                    <div className="service-details-video">
                                        <div className="row g-4 align-items-center">
                                            
                                            <div className="col-lg-6">
                                                {/* <div className="details-video-content">
                                                    <h3 className="mb-3 split-text right">Why Marketing Important ?</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisici
                                                        sed do eiusmod tempor incididunt ut labore et
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            <i className="fa-solid fa-circle-check"></i>
                                                            Research beyond the business plan
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-circle-check"></i>
                                                            Marketing options and rates
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-circle-check"></i>
                                                            The ability to turnaround consulting
                                                        </li>
                                                    </ul>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                       {serviceDetails.description2}
                                    </p>
                                    <div className="highlight-text">
                                        <h5>
                                            {serviceDetails.specialQuote}</h5>
                                    </div>
                                    <div className="service-image-item">
                                        <div className="row g-4">
                                            <h3>Eligibility Checklist :</h3>
                                            <div className="col-lg-7">
                                                <div className="service-box-image">
                                                    <img src={serviceDetails.images[0].img} alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="service-box-image">
                                                    <img src={serviceDetails.images[1].img} alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="service-box-image">
                                                    <img src={serviceDetails.images[2].img} alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="service-box-image">
                                                    <img src={serviceDetails.images[3].img} alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="faq-wrapper style-2">
                                        <div className="faq-content">
                                            <div className="faq-accordion">
                                            <Accordion faq={serviceDetails.faq} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CtaSectionS2 />
            {/* <FooterS3 /> */}
            <Footer />
            <CursorMaus />
        </Fragment>
    )
};
export default ServiceSinglePage;
