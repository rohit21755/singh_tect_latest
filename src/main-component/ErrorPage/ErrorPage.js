import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Error from '../../components/404/404'
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
const ErrorPage =() => {
    return(
        <Fragment>
            {/* <NavbarS2 hclass={'header-section-2 style-two'} /> */}
            <Navbar hclass={'header-section-2 style-two'} />
            <PageTitle pageTitle={'Digital printing Service'} pagesub={'Error Page'}/> 
            <Error/>
            <CtaSectionS2 />
            {/* <FooterS3 />
             */}
             <Footer />
            <CursorMaus />
        </Fragment>
    )
};
export default ErrorPage;



