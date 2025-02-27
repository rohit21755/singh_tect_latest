import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import {Form} from '../../components/QuoteForm/Form'
export default function QuotePage () {
    return<>
    <Fragment>  
        <Navbar hclass={'header-section'} />
        <PageTitle pageTitle={'Request a Quote – Offset Printing'} pagesub={'Request a Quote Offset Printing'} />
        <Form/>
    </Fragment>
    </>
} 