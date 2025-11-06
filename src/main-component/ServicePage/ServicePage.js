import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSectionS4 from '../../components/ServiceSectionS4/ServiceSectionS4';

import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
const ServicePage = () => {
    return (
        <Fragment>
            {/* <NavbarS2 hclass={'header-section-2 style-two'} /> */}
            <Navbar hclass={'header-section-2 style-two'} />
            <PageTitle pageTitle={'Digital printing Service'} pagesub={'Service page'} />
            {/* <ServiceSection hclass={'service-section section-padding section-bg-2 fix pb-0'} /> */}
            {/* <FunFact hclass={'counter-section fix section-padding'} /> */}
            <ServiceSectionS2 />
            <ServiceSectionS4 />
            {/* <ServiceSectionS3 /> */}
            {/* <WorksSection hclass={'about-feature-sections fix section-padding section-bg-2 pb-0'} eclass={'about-feature-wrapper'} /> */}
            {/* <CtaSectionS2 /> */}
            {/* <FooterS3 /> */}
            <Footer />
            <CursorMaus />
        </Fragment>
    )
};
export default ServicePage;

