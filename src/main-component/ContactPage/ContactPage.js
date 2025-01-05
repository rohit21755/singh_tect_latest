import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
const ContactPage = () => {
    return (
        <Fragment>
            {/* <NavbarS2 hclass={'header-section-2 style-two'} /> */}
            <Navbar hclass={'header-section-2 style-two'} />
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
            <Contactpage />
            <CtaSectionS2 />
            {/* <FooterS3 /> */}
            <Footer />
            <CursorMaus />
        </Fragment>
    )
};
export default ContactPage;

