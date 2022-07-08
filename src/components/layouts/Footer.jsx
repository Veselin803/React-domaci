import React from 'react';
import styled from 'styled-components';

function Footer(){
    return (
        <FooterContainter className="main-footer">
        <div className="footer-middle bg-primary text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                    <h4>Bioskop Roda Cineplex</h4>
                    <ul className="list-unstyled">
                        <li> Požeška 83a, Beograd 11030</li>
                         <li>Telefon: 011 2545260</li>    
                         </ul>  
                    </div>    
                </div>
                <div className="footer-bottom bg-primary text-white">
                 <p className="text-xs-center">
                 &copy;{new Date().getFullYear()} Roda Cineplex
                 </p>
                </div>
            </div>
         </div>
        </FooterContainter>
    );
}

export default Footer;


const FooterContainter = styled.footer`
    .footer-middle {
        
        padding-top: 2rem;
        
    }
    .footer-bottom {
        padding-top: 2rem;
        padding-bottom: 1rem;
    }
`;