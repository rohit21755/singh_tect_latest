import React, { Fragment } from 'react';
// import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About2 from '../../components/about2/about2';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import FunFact from '../../components/FunFact/FunFact';
import CtaVideoSection from '../../components/CtaVideoSection/CtaVideoSection';
import ProcessSectionS2 from '../../components/ProcessSectionS2/ProcessSectionS2';

import CursorMaus from '../../components/CursorMaus/CursorMaus';
const AboutPage = () => {
    const about="PS Offset Company is a full-service printing and packaging firm dedicated to delivering high-quality results with precision and reliability. With over two years of experience, we specialize in offset printing, packaging materials, flyers, and custom print solutions for both corporate and retail clients."
    return (
        <Fragment>
            <Navbar hclass={'header-section-2 style-two'} />
            <PageTitle pageTitle={'Digital printing Service'} pagesub={'About Company'} content={about}/>
            <About2 hclass={'about-section section-padding'} />
            <MarqueeSection hclass={'marquee-section'} />
            {/* <ServiceSection hclass={'service-section bg-cover section-padding'} Bg={ServiceBg} /> */}
            <FunFact hclass={'counter-section fix section-padding'} />
            {/* <WorksSection hclass={'about-feature-section fix section-padding pt-0 bg-cover'} eclass={'about-feature-wrapper style-2'} /> */}
            <CtaVideoSection  />
            <ProcessSectionS2 />
            {/* <TestimonialSectionS3 /> */}
            
            {/* <FooterS3 /> */}
            <Footer />
            <CursorMaus />
        </Fragment>
    )
};
export default AboutPage;
