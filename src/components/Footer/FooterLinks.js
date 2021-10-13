import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

export default function FooterLinks() {
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        let token = localStorage.getItem('token');
        if(token!==null) setLoggedIn(true);
    }, []);

    const logout = ()=>{
        localStorage.removeItem('token')
        setLoggedIn(false)
    }
    return (
        <LinksContainer>
            <img src="/assets/footer/logo-poolpo-black.svg" alt="logo-poolpo" className="logo-poolpo-black"/>
            <Link to="/Nosotros" className="footer-link">Nosotros</Link>
            <Link to="/PreguntasFrecuentes" className="footer-link">Preguntas frecuentes</Link>
            <Link to="/Prensa" className="footer-link">Prensa</Link>
            <Link to="/Contacto" className="footer-link">Contacto</Link>
            <Link to="/Login" className="footer-link" onClick={ loggedIn? ()=>logout(): null }>
                { loggedIn? "Logout": "Login" }
            </Link>
        </LinksContainer>
    )
}

const LinksContainer = Styled.p`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 29px 0px 18px 10%;
    @media only screen and (min-width: 280px) and (max-width: 767px){
        margin: 26px 0px 40px 10%;
    }
`
