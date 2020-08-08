import React from 'react';
import HeaderPage from '../components/HeaderPage';
import Footer from '../components/Footer';
import PaymentContent from '../components/PaymentContent';

function Payment() {
    return (
       <React.Fragment>
           <HeaderPage />
           <PaymentContent />
           <Footer />
       </React.Fragment>
    )
}

export default Payment
