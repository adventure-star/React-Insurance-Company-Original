import { createGlobalStyle } from 'styled-components';
import Theme from '../../Styles/Theme.js'

const GlobalStyle = createGlobalStyle`
    .data-container-active > .content-container{
        background-color: transparent;
        height: 15.52vw; 
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover; 
        font-family: ${Theme.secondaryFont};
        font-size: 15px;    
        margin: 35px 25px 0px 25px;
        padding: 0px 35px;
        position: relative;
        top: 0%;
        left: 0%;
    }
    .data-container-active > .content-container > p{
        color: ${Theme.white};
    }
    .data-container-active > .content-container > div > div > .bubble-name{
        color: ${Theme.white};
    }
    .data-container-active > .content-container >.bubble-footer > .footer-second-line >.score{
        color: ${Theme.white};
        margin: 8px 0px 0px 3px;
    }
    .data-container > .content-container >.bubble-footer > .footer-second-line >.score{
        margin: 8px 0px 0px 3px;
    }
    .data-container-active > .content-container >.bubble-footer > .footer-second-line > .stars-container > .star-ratings > .star-container > .widget-svg > .star-level{
        /* fill: white !important; */
    }
    .data-container > .content-container >.bubble-footer > .footer-second-line > .stars-container > .star-ratings > .star-container > .widget-svg > .star{
        /* fill: ${Theme.primaryColor} !important; */
    }
    .data-container > .content-container{
        background-color: transparent;
        height: 15.52vw; 
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover; 
        font-family: ${Theme.secondaryFont};
        font-size: 15px;
        margin: 35px 25px 0px 25px;
        padding: 0px 10%;
        position: relative;
        top: 0%;
        left: 0%;
    }
    .data-container > .content-container > p{
        color: ${Theme.black};
    }
    .data-container > .content-container > div > div > .bubble-name, .data-container-active > .content-container > div > div > .score{
        color: ${Theme.black};
    }
    .reviews-cards-container{
        position:relative; 
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0%);
        height: 300px; 
        width: 500px;
    }
    @media only screen and (max-width: 1365px){
        .data-container-active > .content-container{
            padding: 30px 7% 0px 7%;
        }
        .data-container > .content-container{
            padding: 30px 7% 0px 7%;
        }
    }
    @media only screen and (max-width: 767px){
        .reviews-cards-container{
        height: 235px !important; 
        width: 100% !important;
        }
        .data-container-active{
            left: 50% !important;
            top: 50% !important;
            width: 137% !important;
            transform: scale(0.75) translate(-67%, -68%) !important;
            opacity: 100;
            background-image: url('/assets/body/globo-verde-small.svg') !important;
        }
        .data-container{
            /* left: 50% !important;
            top: 50% !important; */
            opacity: 0;
            width: 500px;
            /* transform: scale(0.65) translate(-67%, -68%) !important; */
        }
        .data-container-active > .content-container{
            padding: 30px 13% 0px 13%;
        }
        .data-container > .content-container{
            padding: 30px 13% 0px 13%;
        }
    }
    @media only screen and (max-width: 409px){
        .data-container-active > .content-container{
            padding: 40px 8% 0px 8%;
        }
        .data-container > .content-container{
            padding: 40px 8% 0px 8%;
        }

    }

`
export default GlobalStyle