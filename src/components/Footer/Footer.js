import React from 'react'
import FooterLinks from './FooterLinks.js'


export default function Footer() {
    return (
            <div className="footer">
                <div className="footer-first-col col-xs-5 col-sm-3 col-md-3 col-lg-3">
                    <FooterLinks />
                </div>
                <div className="footer-second-col col-xs-2 col-sm-6 col-md-6 col-lg-6">
                    <div className="footer-col-left">
                        <img className="poolpo-tentacle" src="/assets/footer/t-izquierdo.svg" alt="poolpo" />
                    </div>
                    <div className="footer-col-center footer-none">
                        <div className="footer-row-center">
                        <img className="poolpo-tentacle" src="/assets/footer/p-centro.svg" alt="poolpo" />
                        </div>
                        <div className="footer-row-center">
                            <p className="footer-copy-line">&copy; Copyright Poolpo</p>
                        </div>
                    </div>
                    <div className="footer-col-right footer-none">
                        <img className="poolpo-tentacle" id="tentacle-right" src="/assets/footer/p-izquierdo.svg" alt="poolpo" />
                    </div>
                    
                </div>
                <div className="footer-third-col col-xs-5 col-sm-3 col-md-3 col-lg-3">
                    <div className="footer-first-row">
                            <img className="afip-logo" src="/assets/footer/afip-qr.svg" alt="Data Fiscal AFIP"/>
                            <img className="ssn-logo" src="/assets/footer/ssn.svg" alt="SLL Secure Connection"/>
                    </div>
                    <div className="footer-second-row">
                        <img className="ssl-logo" src="/assets/footer/ssl.svg" alt="Superintendencia de seguros de la nación"/>
                    </div>
                    <div className="footer-third-row">
                        <a href="https://www.facebook.com/poolpolizas" target="”_blank”"><img className="social-media-icon" src="/assets/footer/facebook.svg" alt="facebook"/></a>
                        <a href="https://www.instagram.com/poolpolizas" target="”_blank”"><img className="social-media-icon" id="social-media-icon-left" src="/assets/footer/instagram.svg" alt="instagram"/></a>
                    </div>
                    <div className="footer-forth-row">
                        <p className="footer-copy-line">&copy; Copyright Poolpo</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
    )
}
