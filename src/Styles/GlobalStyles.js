import { createGlobalStyle } from 'styled-components';
import Theme from './Theme.js'

const GlobalStyle = createGlobalStyle`
    html {
    scroll-behavior: smooth;
    }
    body{
        margin:0;
        padding:0;
    }
    .App {
    }
    .rows{
        padding: 56px 0%;
        justify-content: center;
    }
    .center{
        display: flex;
        justify-content: center;
        padding: 0px 9%;
    }
    .bottom{
        align-items: center;
        padding: 35px 9% 30px 9%;
        display: flex;
    }
    .right{
        display: flex;
        justify-content: flex-end;
    }
    .grey{
        background-color: ${Theme.backgroundGrey};
        /* background-color: grey; */
    }
    .white{
        background-color: ${Theme.white}
    }
    .pagination-container{
        display: flex;
        justify-content: center;
        /* justify-content: space-between;
        justify-self: center; */
        /* width: 26%; */
    }
    .pagination-circle{
        border-radius: 50%;
        width: 15px;
        height: 15px;
        border: 1px solid ${Theme.primaryColor};
        margin: 0px 5px 0px 5px;
    }
    .pagination-circle-active{
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background-color: ${Theme.primaryColor};
        border: 1px solid ${Theme.primaryColor};
        margin: 0px 5px 0px 5px;
    }
    .third-section{
        display: -webkit-flex;
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0px 0px 59px 0px;
    }
    .fourth-section{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .fourth-section-tablet{
        display: none;
    }
    .square-cards-container{
        padding-bottom: 100px;
    }
    .fifth-section{
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
    }

    .logo-poolpo{
        width: 8vw;
        padding: 18px 0px 10px 125px;
    }
    .logo-poolpo-black{
        width: 104px;
        margin: 0px 0px 15px 0px;
    }
    .title-col{
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: 180px 0px 0px 10%;
        max-width: 660px;
    }
    .row-top{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 600px;
        overflow: hidden;
        animation-duration: 0.8s;
        animation-timing-function: ease;
    }
    .row-top-tablet{
        display: none;
    }
    .row-top-mobile{
        display: none;
    }

    @keyframes rowTop{
        0%  {
                height: 600px;
            }
        100% {
                height: 880px; 
            }
    }

    @keyframes rowTopShort{
        0%  {
                height: 600px;
            }
        100% {
                height: 700px; 
            }
    }
   
    .nav{
        width: 100%;
    }
        
    .nav-desktop{
        display: flex;
        width: 100%;
        justify-content: flex-end;
        margin: 0px 55px;
    }
    .nav-tablet{
        display: none;
    }
    .nav-logo{
        width: 80px;
        margin: 10px 0px 0px 30%;
        margin-left: 30%;
    }
    .container{
        margin: 0px;
    }
    .menu-link{
        text-decoration: none;
        margin: 20px 2% 40px 2%;
        font-family: ${Theme.secondaryFont};
        font-size: 14px;
        color: black;
        display: inline-block;
        position: relative;
        cursor: pointer;
    }
    .menu-link:hover{
        color: ${Theme.primaryColor};
    }
    .menu-link::before{
            content: '';
            position: absolute;
            width: 100%;
            transform: scale(0);
            height: 3px;
            bottom: -3px;
            left: 0;
            background-color: transparent;
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
        }
    .menu-link:hover::before{
        background-color: ${Theme.primaryColor};
        transform: scalex(1);
        transform-origin: bottom center;
        transition: transform 0.25s ease-out;
    }


    h1, h2{
        font-family: ${Theme.primaryFont};
        font-weight: 700;
        margin: 0;
    }
    h1{
        text-align: left;
        font-size: 41px;
    }
    h2{
        font-size: 30px;
    }
    .bold-h1{
        font-weight: 900;
    }
    .title-paragraph-container{
        margin: 15px 0px 0px 0px;
    }
    .title-paragraph{
        width: 90%;
        font-family: ${Theme.primaryFont};
        text-align: left;
        font-size: 22px;
        font-weight: 400;
        font-style: normal;
        line-height: 1.45;
    }
    .first-title{
        padding: 54px 0px 30px 0px;  
        text-align: center;
    }
    .second-title{
        margin-top: 60px;
        margin-bottom: 45px;
        text-align: center;  
    } 
    .third-title{
        margin-bottom: 45px;
        text-align: center;
    }
    .fourth-title{
        margin-bottom: 40px;
        text-align: center;
    }
    .bottom-title{    
        width: 90%;
        font-family: ${Theme.primaryFont};
        font-size: 24px;
        font-weight: 700; 
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        color: ${Theme.black};
        margin: 15px 0px 20px 5%;
        text-align: left;  
    }
    .span1{
        position: relative;
    } 
    .span1::after{
        background-color: ${Theme.primaryColor};
        content: '';
        width: 100%;
        height: 38%;
        position: absolute;
        bottom: 2.5px;
        left: 0;
        z-index: -1;
    } 
    .span2{
        position: relative;
        font-weight: 700;
        z-index: 1;
    } 
    .span2::after{
        background-color: ${Theme.primaryColor};
        content: '';
        width: 100%;
        height: 5px;
        position: absolute;
        bottom: -1px;
        left: 0;
        z-index: -1;
    }


    .home1{
        padding: 80px 0%;
    }
    .title{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        text-align: left;
    }
    .button-container{
        display: flex;
        justify-content: space-between;
        width: 87%;
        margin-top: 56px;
    }
    .button-container-bottom{
        display: flex;
        justify-content: space-around;
        width: 42%;
    }
    .button-container-bottom a{
        margin: 0px 1.5%;
    }
    .right{
        width: 100%
    }
    .desktop-button{
        display: flex;
        }
    .mobile-button{
        display: none;
    }
    .car{
        overflow: hidden;
        position: relative;
        left: 25%;
        top: 110px;
        width: 565px;
        animation-duration: 0.8s;
        animation-timing-function: ease;
    }

    @keyframes car{
        0%  {
                left: 25%;
            }
        10% {
                left: 25%;
        }
        100% {
                left: 100%; 
            }

    }

    .card-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background-color: ${Theme.white};
        border: 1px solid ${Theme.lightGrey};
        border-radius: 12px;
        padding: 19px 3% 0px 3%;
    } 
    .left{
        align-items: flex-start;
    }
    .square-card{
        padding: 56px 6% 43px 6%;
        margin: 0;
    }
    .card-row{
        display: -webkit-flex;
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 25px 0px 0px 0px;
    }
    .card-container-tablet{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background-color: ${Theme.white};
        border: 1px solid ${Theme.lightGrey};
        border-radius: 12px;
        padding: 19px 3% 0px 3%;
    }
    .cards-second-line{
        margin: 20px 0px 0px 0px;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
    }
    .card-col{
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 38%;
    }
    #small-card >.card-container{
        height: 225px;
    }
    .mejores-costos{justify-content: flex-start;}

    .first-card{
        margin: 1.9% 0px;
        justify-content: center;
        align-items: start;
        padding: 0px 3%;
        text-align: left;
        width: 45%;
    }
    .card-long{
        display: flex;
        align-items: flex-start;
        padding: 19px 10% 56px 10%;

    }
    .card-wide{
        display: flex;
        align-items: flex-start;
        padding: 20px 5% 0px 5%;
    }
    .card-small{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        /* padding: 0px 7%; */
    }
    #card-right{
        margin-left: 5%;
    }
    #card-left{
        margin-right: 5%;
    }
    .icon-back{
        width: 30px;
        height: 30px;
        position: relative;
        top: 70px;
        left: 4%;
    }
    .icon-small{
        width: 80px;
        height: 80px;
    }
    .icon-vehicle{
        margin:0;
        width:100%;
    }
    .icon-secondary{
        margin:0px 10px 0px 0px;
        position: relative;
    }
    #icon-secondary-one{
        width: 75px;
        margin-top: 55px;
    }
    #icon-secondary-two{
        width: 64px;
        margin: 0px 32px 0px 0px;  
    }
    #icon-secondary-three{
        width: 39.2px; 
        top: -17px;
    }
    #icon-secondary-four{
        width: 50px;
        top: -10px;
    }
    p{
        text-align: center;
        font-weight: 600;
        font-size: 1em;
        margin: 0;
        color: #575A5F;
    }
    .title-left{
        text-align: left;
        font-family: ${Theme.primaryFont};
        font-size: 22px;
        font-weight: 300;
        margin-bottom: 18px;

        /* margin: auto; */
    }
    .title-left-long{
        text-align: left;
        font-family: ${Theme.primaryFont};
        font-size: 24px;
        font-weight: 300;
        margin: 30px 0% 10px 0%;
    }
    .card-text-left{
        margin: 0px 0px 58px 0px;
    }
    .simple-paragraph{
        font-family: ${Theme.lightFont};
        font-weight: 300;
        font-size: 16px;
        text-align: left;
        line-height: 1.38;
    }
    .card-text-top{
        width: 100%;
        justify-content: center;
        margin: 43px 0px 0px 0px;
        height: 38px;
        display: flex;
        align-items: center;
   
    }
    .first-line{
        padding: 0px;
    }
    .card-text-top p{
        width: 80%;
        font-family: 'Arvo', serif;
        font-size: 18px;
        color: #575b60;
    }
    .card-text{
        margin: 10px 0px 25px 0px;
    }
    .img-title{
        display: flex;
        flex-direction:row;
        align-items: center;
    }
    #only-line{
        margin: 42px 0px;
    }
    .second-col{
        width: 93%;
    }
    .second-block{
        display: flex;
        flex-direction: row;
        height: 384;
    } 

    .form-container{
       
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: ${Theme.white};

        margin: 0px;
        width: 356px;
        height: 100%;
        border: 1px solid ${Theme.grey};
        border-radius: 16px;
        box-shadow: ${Theme.shadow};
        padding: 40px 3em 35px 3em;
        position: relative;
        right: -17%;
        top: 120px;
        

        animation-name: form;
        animation-duration: 1.5s;
        animation-timing-function: ease;
        }

    @keyframes form {
        0%  {
                right:-100%;
                opacity: 0%; 
            }
        40% {   
                right:-100%;
                opacity: 0%; 

        }
        100% {
                right:-17%; 
                opacity: 100%; 
            }
    }

    .form-container-tablet{
       display: flex;
       flex-direction: column;
       justify-content: space-around;
       background-color: ${Theme.white};

       margin: 0px 0px 34px 0px;
       width: 356px;
       height: 100%;
       border: 1px solid ${Theme.grey};
       border-radius: 16px;
       box-shadow: ${Theme.shadow};
       padding: 40px 3em 35px 3em;
       opacity: 100%;

       position: relative;
       right: 0%;
        }
    .input-file{
        margin: 0px;
        padding: 11px 0px 11px 15px;
        width: 194px;
        height: 41px;
        border-radius: ${Theme.radius};
        border: 1px solid ${Theme.grey};
        font-family: ${Theme.secondaryFont};
        font-size: 0.8em;
        color: ${Theme.darkGrey};
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=number] {
        -moz-appearance: textfield;
    }
    .upload-btn-green{
        padding: 6px 2px;
        width: 32px;
        height: 32px;
        color: white;
        background-color: ${Theme.primaryColor};
        border: none;
        border-radius: ${Theme.radius};
    }
    .icon-upload{
        width: 54%;
        margin: 2px 0px 0px 1px;
    }
    .icon-message{
        margin: 0px 17px 0px 17px;
        width: 19.3px;
    }
    .form-message{
        display: flex;
        width: 100%;
        border: 1px solid ${Theme.grey};
        border-radius: ${Theme.radius};
        box-shadow: ${Theme.shadow};
    }
    .message-line{
        margin: 8px 0px;
        width: 280px;
        text-align: left;
        font-size: 10px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.4;
        font-family: ${Theme.secondaryFont};
        color: ${Theme.darkGrey};
    }
    .error-message{
        display: none;
        width: 100%;
        border: 1px solid ${Theme.grey};
        border-radius: ${Theme.radius};
        box-shadow: ${Theme.shadow};
        padding: 10px 5% 10px 3%;
    }
    .error-line{
        margin: 0;
        font-size: 0.7em;
        font-family: ${Theme.secondaryFont};
        color: ${Theme.darkGrey};
    }
    .steps-container{
        display: flex;
        justify-content: center;
        align-self: center;
        width: 100%;
        margin: 8px 0px 5px 0px;
        padding: 0px 41%
    }
    .form-step{
        height: 4px;
        width: 36px;
        border-radius: 5px;
        margin: 0px 6px;
    }
    .one-step{
        border: 1px solid ${Theme.primaryColor};
        background-color: ${Theme.primaryColor};
    }
    .step-one{
        border: 1px solid ${Theme.secondaryColor};
        background-color: ${Theme.secondaryColor};
    }
    .step-two{
        border: 1px solid ${Theme.secondaryColor};
        background-color: transparent;
    }
    .form-title{
        margin: 0px;
        font-family: ${Theme.titleFont};
        font-size: 1.5em;
        text-align: center;
        font-weight: 700;
        color: ${Theme.darkGrey};
    }
    .form-line{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 4px 0px;
        font-size: 10px;
    }
    .form-line-left{
        display: flex;
        justify-content: flex-end;
        margin-top: 11px;
    }
    .form-label{
        margin: 0px;
        width: 100%;
        font-size: 10px;
        font-family: ${Theme.secondaryFont};
        color: ${Theme.black};
        font-weight: 300;
        line-height: 1.4;
    }

    .file-field{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: flex-end;
    }
    .text-file-field{
        width: 85%;
        padding: 0px 0px 10px 0px;
        font-family: ${Theme.secondaryFont};
        color: grey;
        font-size: 11px;
        border: 0px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.16);
    }
    .text-file-field:focus{
        outline: none;
        border: 0px;
        border-bottom: 1px solid ${Theme.black};
    }
    .text-field{
        width: 100%;
        font-family: ${Theme.secondaryFont};
        font-size: 13px;
        padding: 3px 0px 8.5px 3px;
        border: 0px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.16);
        background: transparent;
    }
    .invalid-input{
        width: 100%;
        font-family: ${Theme.secondaryFont};
        font-size: 13px;
        padding: 3px 0px 8.5px 3px;
        border: 0px;
        background: transparent;
        border-bottom: 1px solid rgb(255, 0, 39) !important;
        color: rgb(255, 0, 39);
    }
    .text-field:focus{
        outline: none;
        border: 0px;
        border-bottom: 1px solid ${Theme.black};
    }
    .invalid-input:focus{
        outline: none;
        border: 0px;
        border-bottom: 1px solid rgb(255, 0, 39) !important;
        color: rgb(255, 0, 39);
    }
    .text-field-error{
        display: flex;
        width: 100%;
        font-family: ${Theme.secondaryFont};
        font-size: 9px;
        color: transparent;
        text-align: left;
    }
    .text-field-error-type{
        display: flex;
        width: 100%;
        font-family: ${Theme.secondaryFont};
        font-size: 9px;
        color: transparent;
        justify-content: center;
    }
    .select-field{
        width: 100%;
        padding: 0;
        font-family: ${Theme.secondaryFont};
        font-size:13px;
        padding: 9px 0px;
        border: 0px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.16);
        background-color: ${Theme.white}
    }
    #standard-error-helper-text{
        font-size: 0.7em;
    }
    .wrong{
        border: 1px solid red;
    } 
    .brands-div{
        padding: 35px 0px 30px 0px;
    }
    .brands-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }
    .brands-line{
        flex: 1 0 21%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap-reverse;
        justify-content: center;
    }
    .brand-logo{
        width: 120px;
        margin: 0px 20px;
    }
    .brand-slide{
        display: flex;
        align-items: center;
        height: 100px;
        width: 250px;
        margin: 0 20px;
    }
    .brand-track{
        animation: scroll 40s linear infinite;
        display: flex;
        align-items: center;
        height: 100%;
        width: 3500px;
    }

    .brands-scroll-container{
        overflow: hidden;
    }
    .brands-scroll-content{
        list-style: none;
        height: 100%;
        display: flex;
        animation: scroll 15s linear infinite;

    }
    @keyframes scroll {
        0%{
            transform: translateX(0vw)
        }
        100%{
            transform: translateX(-180.65vw)
        }
    }

    .brands-scroll-content li{

    }
 
    .footer{
        display: flex;
        display: -webkit-flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        background-color: ${Theme.lightGrey};
        width:100%;
        align-items: center;
    }
    .footer-first-col{

    }
    .footer-link{
        font-family: ${Theme.secondaryFont};
        text-decoration: none;
        font-size: 15px;
        color: ${Theme.black};
        line-height: 1.33;
        letter-spacing: normal;
        text-align: left;
        margin-bottom: 9px;
        font-weight: 500;
    }
    .footer-link:link{
        text-decoration: none; 
    }
    .footer-link:hover{ 
        color: black; 
        text-decoration: none;
        font-weight: 600;
    }
    .footer-link:visited{
        color: black;  
        text-decoration: none 
    }
    .footer-second-col{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .footer-col-left{
        display: flex;
        align-items: flex-end;
        width: 200px;
        margin: 68px 0px 0px 0px;
    }
    .footer-col-center{
        display: flex;
        flex-direction: column;
        align-items: space-between;
        width: 240px;
    }
    .footer-col-right{
        display: flex;
        align-items: flex-end;
        margin: 19px 0px 0px 0px;
    }
    .footer-row-center img{
        margin: 0px 0px 54px 0px;
    }
    .footer-copy-line{
        font-family: ${Theme.secondaryFont};
        font-size: 12px;
        color: ${Theme.blackFont}
    }
    .footer-third-col{
        display: flex;
        flex-direction: column; 
        align-items: flex-end;
        align-self: flex-start;
        padding: 43px 5% 0px 0px;
    }
    .footer-first-row{
        align-items: center;
        justify-content: space-between;
        margin: 0px 0px 9px 0px;
    }
    .footer-second-row{
        align-items: center;
    }
    .footer-third-row{
        display: flex;
        justify-content: space-between;
        width: 96px;
        margin: 58px 0px 0px 0px;
    }
    .footer-forth-row{
            display: none;
    }
    .ssn-logo{
        width: 88px;
        margin: 0px 0px 0px 8px;
    }
    .loading-modal{
        /* position: relative; */
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${Theme.white};
        border-radius: 6px;
        padding: 0;
        min-width: 509px;
        margin: auto;
        margin-top: 200px;
        text-align: center;
   
    }
    .loading-modal:focus{
        border: none;
    }
    .modal-icon{
        margin: 47px 0px 16px 0px;
        width: 30%;
    }
    .modal-title{
        font-family: ${Theme.primaryFont};
        font-size: 16px;
        color: ${Theme.greyFont};
        margin: 0px 0px 21px 0px;
    }
    .modal-text{
        font-family: ${Theme.primaryFont};
        font-size: 16px;
        font-weight: 300;
        color: ${Theme.greyFont};
        margin: 0px 78px 80px 78px;
    }

    /* .quotation-desktop{
        display: flex;
        flex-direction: column;
    }
    .quotation-tablet{
        display: none;
    }
    .quotation-mobile{
        display: none;
    } */

/* ---- BREAK POINT 1024 --- TABLET ---- */
@media only screen and (min-width: 768px) and (max-width: 1365px){
        .center{
            padding: 0px 5%;
        }
        .desktop-button{
            display: flex;
        }
        .mobile-button{
            display: none;
        }
        .nav-desktop{
            display: none;
        }
        .nav-tablet{
            display: block;
        }
        .logo-poolpo{
            padding: 10px 0px 10px 26px;
        }
        .logo-poolpo img{
            width: 111px;
             margin: 19px 0px 0px 47px;
        }
        .row-top{
            display: none;
        }
        .row-top-mobile{
            display: none;
        }
        .title-col{
            padding: 180px 0px 0px 10%;
            max-width: 660px;
        }
        .button-container{
            width: 89%;
        }
        .car-tablet{
            overflow: hidden;
            position: relative;
            right: -36%;
            top: 110px;
            width: 450px;
            animation-duration: 0.8s;
            animation-timing-function: ease;
        }

        @keyframes carTablet{
            0%  {
                    right: -36%;
                }
            10% {
                    right: -36%;
            }
            100% {
                    right: -100%; 
                }

        }
        .row-top-tablet{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            height: 600px;
            overflow: hidden;
            animation-duration: 0.8s;
            animation-timing-function: ease;
        }
            @keyframes rowTopTablet{
                0%  {
                        height: 600px;
                    }
                100% {
                        height: 800px; 
                    }
            }

            @keyframes rowTopShortTablet{
                    0%  {
                            height: 600px;
                        }
                    100% {
                            height: 755px; 
                        }
                }
        .col-tablet-container{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 1025px;
            margin: 50px 0px 0px 0px;
            animation-duration: 1.5s;
            animation-timing-function: ease;
       }
       .second-title-tablet{
            margin-top: 60px;
            margin-bottom: 36.4px;
            text-align: center;  
            font-family: ${Theme.primaryFont};
            font-size: 28px;
            font-weight: 300;
            line-height: 1.25;
            color: #222222;
        }
        .icon-back{
            top: 60px;
            left: 7%;
        }
        .form-title{
            width: 100%;
            font-family: ${Theme.primaryFont};
            font-size: 22px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            color: #222222;
        }
        .form-line{
            margin: 0px 0px -6px 0px;
        }
        .form-line-left{
            margin-top: 25px;
        }
        .text-field-error{
            margin: 5px 0px;
            text-align: left;
        }
        .span-light{
            position: relative;
            font-weight: 300;
        }
        .span-light::after{
            background-color: #56E0C2;
            content: '';
            width: 100%;
            height: 5px;
            position: absolute;
            bottom: -1px;
            left: 0;
            z-index: -1;
        }

        .header-title-tablet{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 440px;
            text-align: left;
        }
        h1{
            text-align: left;
            font-size: 34px;
        }
        .title-paragraph{
            width: 100%;
            font-family: ${Theme.primaryFont};
            text-align: left;
            font-size: 19px;
            font-weight: 400;
            font-style: normal;
            line-height: 1.45;
        }
        .fourth-section{
            display: none;
        }
        .fourth-section-tablet{
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
        }
        .square-cards-container{
            padding-bottom: 100px;
        }
        .square-card{
            justify-content: center;
            padding: 20px 3 17px 3%;
            margin: 0;
        }
        .icon-small{
            width: 35%;
            margin:0px;
        }
        .icon-secondary{
            margin:0px 10px 0px 0px;
        }
        #icon-secondary-one{
            margin-top: 18px;
            height: 100%;
        }
        #icon-secondary-two{
            width: 64px;
            height: 100%;
            margin: 0px 32px 0px 0px;
        }
        #icon-secondary-three{
            width: 30.5px; 
            height: 100%;
        }
        #icon-secondary-four{
            width: 38.5px;
            height: 100%;
        }
        .card-small{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .card-long{
            display: flex;
            flex-direction: column;
            padding: 19px 10% 56px 10%;
        }
        .card-wide{
            display: flex;
            flex-direction: column;
        }
        .title-left-long, .title-left{
            font-size: 16px;
        }
        .title-left-long{
            margin: 30px 0% 10px 0%;
        }
        .simple-paragraph{
            font-size: 12px;
        }
        
        .card-text-top{
            padding: 0px;
            text-align: center;
            margin: 18.5px 0px 0px 0px;
        }
        .card-text-top p{
            width: 128px;
            text-align: center;
            font-size: 13px;
        }
        .span1{
            position: relative;
        }
        .span1::after{
            background-color: #56E0C2;
            content: '';
            width: 100%;
            height: 38%;
            position: absolute;
            bottom: 2.5px;
            left: 0;
            z-index: -1;
        }
        .span2{
            position: relative;
        }
        .span2::after{
            background-color: #56E0C2;
            content: '';
            width: 100%;
            height: 5px;
            position: absolute;
            bottom: -1px;
            left: 0;
            z-index: -1;
        }
    .simple-card-col{
            text-align: -webkit-center;
        }
    .card-col{
        justify-content: center;  
    }
    #small-card{
        display: flex;
        width: 48%;
    }

    #small-card >.card-container{
        height: 225px;
        justify-content: space-around;
    }
    .bottom-title {
        width: 95%;
        font-size: 18px;
    }
    .small-button{
        padding: 14px 24px;
        font-size: 13px;
    }
    .social-media-icon{
        width: 31.9px;
        margin: 68.9px 5px 0px 5px;
    }
    .afip-logo{
        width: 36px;
        margin: 0px 12px 0px 0px;
    }
    .ssn-logo{
        width: 88px;
        margin: 0px 0px 0px 8px;
    }
    .ssl-logo{
        width: 96px;
        margin: 0;
    }
    
    .loading-modal{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${Theme.white};
        border-radius: 6px;
        padding: 0;
        min-width: 509px;
        margin: auto;
        margin-top: 200px;
    }
    .loading-modal:focus{
        border: none;
    }
    .modal-icon{
        margin: 47px 0px 16px 0px;
        
    }
    .modal-title{
        font-family: ${Theme.primaryFont};
        font-size: 16px;
        color: ${Theme.greyFont};
        margin: 0px 0px 21px 0px;
    }
    .modal-text{
        font-family: ${Theme.primaryFont};
        font-size: 16px;
        font-weight: 300;
        color: ${Theme.greyFont};
        margin: 0px 78px 80px 78px;
    }
    .button-container-bottom{
        justify-content: space-around;
        width: 48%;
    }
    .footer-third-row{
        margin: -4% 0px 0px 0px;
    }
 
    .footer-forth-row{
        display: none;
    }
    .footer-col-left{
        margin: 112px 0px 0px 0px;
    }
    .poolpo-tentacle{
        width: 79%;
    }
    #tentacle-right{
        width: 110%;
    }
}
/* 
    .quotation-desktop{
        display: none;
    }
    .quotation-tablet{
        display: flex;
        flex-direction: column;
    }
    .quotation-mobile{
        display: none;
    } */

/* ---- BREAK POINT --- TABLET SMALL ---- */

@media only screen and (min-width: 768px) and (max-width: 1025px){
    .center{
            padding: 0px 5%;
        }
    .car-tablet{
        overflow: hidden;
        position: relative;
        right: 4%;
        top: 110px;
        width: 450px;
        animation-duration: 0.8s;
        animation-timing-function: ease;
    }
    .button-container-bottom{
        width: 60%;
    }
    @keyframes carTablet{
            0%  {
                    right: 4%;
                }
            10% {
                    right: 4%;
            }
            100% {
                    right: -100%; 
                }

        }
}
@media only screen and (min-width: 1024px) and (max-width: 1200px){
    .center{
            padding: 0px 5%;
        }
    .title-col{
            padding: 180px 0px 0px 10%;
            max-width: 660px;
        }
    .car-tablet{
            overflow: hidden;
            position: relative;
            right: 4%;
            top: 110px;
            width: 450px;
            animation-duration: 0.8s;
            animation-timing-function: ease;
        }
        .button-container{
            width: 71%;
        }

        @keyframes carTablet{
            0%  {
                    right: 4%;
                }
            10% {
                    right: 4%;
            }
            100% {
                    right: -100%; 
                }

        }
}




/* ---- BREAK POINT 1024 --- MOBILE ---- */
@media only screen and (min-width: 240px) and (max-width: 767px){
        .center{
            padding: 0px 5%;
        }
        .title-col{
            padding: 99px 6% 0px 6%;
            max-width: 100%;
        }
       
        h1{
            font-size: 24px;
            font-weight: 300;
        }
        .small-card-container{
            flex-direction: column !important;
            margin: 10px -10% 10px -10%;
        }
        .third-section{
            margin: 0px 0px 30px 0px;
        }
        .brands-div{
            padding: 30px 0px 22px 0px;
        }
        .bottom{
            display: flex;
            flex-direction: column;
            padding: 0px 0px 30px 0px;
            flex-wrap: wrap;
            text-align: -webkit-center;
        }
        .bottom-title{
            width: 70%;
            display: flex;
            text-align: -webkit-center;
            text-align: center;
            font-size: 16px;
            margin: 15px 0px 0px 0px;
        }
        .desktop-button{
            display: none;
        }
        .mobile-button{
            display: flex;
        }

        .mobile-button > div > button {
            display: flex;
            justify-content: space-around;
        }
        h2{
            font-size: 18px;
        }
        .nav-desktop{
            display: none;
        }
        .nav-tablet{
            display: block;
        }
        .logo-poolpo{
            padding: 10px 0px 10px 26px;
        }
        .logo-poolpo img{
            width: 78px;
        }
        .second-title-tablet{
            font-size: 16px;
            font-weight: 300;
            margin: 15px 0px 0px 0px;
            text-align: center;
        }
        .col-tablet-container{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            margin: 50px 0px 0px 0px;
            animation-duration: 1.5s;
            animation-timing-function: ease;
       }
        .form-title{
            width: 100%;
            font-size: 18px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            color: #222222;
        }
        .form-container{
            position: inherit;
            margin: 30px 0px 30px 0px;
            width: 82%;
            padding: 20px 9% 20px 9%;
        }
        .steps-container{
            width: 100%;
            padding: 0;
        }
        .form-line{
            margin: 0px 0px -6px 0px;
        }
        .form-line-left{
            margin-top: 25px;
        }
        .text-field{
            padding-right: 0px;
        }
        .text-field-error{
            margin: 5px 0px;
            text-align: left;
        }
        .form-message{
            margin: 10px 0px 0px 0px;
        }
        .icon-message{
            margin: 0px 9px 0px 9px;
        }
        .message-line{
            font-size: 7px;
        }
        .icon-back{
            width: 25px;
            height: 25px;
            top: 13px;
            left: 7%;
        }

        .icon-small{
            width: 28px;
            height: 100%;
            margin: 0px;
        }
        .row-top{
            display: none;
        }
        .row-top-tablet{
            display: none;
        }
        .row-top-mobile{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            height: 390px;
            overflow: hidden;
            animation-duration: 0.8s;
            animation-timing-function: ease;
        }
        @keyframes rowTopMobile{
                0%  {
                        height: 600px;
                    }
                100% {
                        height: 800px; 
                    }
            }

        @keyframes rowTopShortMobile{
                0%  {
                        height: 600px;
                    }
                100% {
                        height: 755px; 
                    }
            }
        .header-title-tablet{
            height: 127px;
        }
        .title-paragraph-container{
            margin: 22px 0px -5px 0px;
        }
        .title-paragraph{
            width: 100%;
            font-size: 13px;
            max-width: 300px;
        }
        .button-container{
            flex-direction: column;
            margin-top: 19px;
            width: 100%;
            height: 100px;
        }
        .button-container-bottom{
            width: 90%;
        }
        .button{
            width: 100%;
            padding: 12.5px 21px 12.5px 21px;
            color: white;
            font-size: 13px;
        }
        .header-title-mobile{
            display: flex;
            flex-direction: column;
        }  
        .first-title{
            padding: 22px 0px 30px 0px;
        }
        .second-title{
            margin-top: 21px;
            margin-bottom: 25px;
        }
        .square-card{
            padding: 0px 0px 0px 11.7%;
            margin: 0px 0px 9px 0px;
            height: 50px;
        }
      
        .fourth-section{
            display: none;
        }
        .fourth-section-tablet{
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
        }
        .square-cards-container{
            flex-direction: column;
            padding-bottom: 33px;
        }
        .card-container{
            flex-direction: row;
            justify-content: flex-start;
        }
        .left{
            flex-direction: column;
            margin: 10px 0px 0px 0px;
        }
        
        .card-col{
            flex-direction: column-reverse;
            justify-content: center;  
            padding: 0;
        }
        .card-row{
            margin: 9px 0px 0px 0px;
        }
        .title-left{
            font-size: 14px;
            margin-top: 30px;
            margin-bottom: 0;

        }
        .icon-small{
            margin:0px;
        }
        .card-text-top{
            padding: 0px;
            margin: 0;
            text-align: center;
        }
        .card-text-top p{
            width: 80%;
            font-family: 'Arvo', serif;
            font-size: 10px;
            margin: 30px 0px 30px -20px;
        }
        .left{
            flex-direction: column;
            padding: 23px 9.5%;
        }
        .title-left-long{
            text-align: left;
            font-family: 'Arvo',serif;
            font-size: 18px;
            font-weight: 300;
        }
        #column{
            flex-direction: column;
        }
        #small-card{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px 15px 0px 15px;
            width: 38%;
        }
        .simple-paragraph{
            font-size: 10px;
        }
        #icon-secondary-one{
            margin: 0px;
            width: 44.5px;
        }
        #icon-secondary-two{
            width: 44.5px;
        } 
        #icon-secondary-three{
            width: 30.5px;
            height: 41px;
            left: -42%;
            top: 19.2px;
        } 
        #icon-secondary-four{
            width: 38.5px;
            height: 42px;
            left: -37%;
            top: 19.2px;
        }

        .bottom-title{    
            font-size: 16px;
            margin: 15px 50px 24.6px 50px;
            text-align: center;  
        }
        .pagination-container{
        display: flex;
        justify-content: center;
        /* justify-content: space-between;
        justify-self: center; */
        /* width: 26%; */
    }

        .footer-third-row{
        margin: -4% 0px 0px 0px;
        width: 79px;
        }
        .footer-second-col{
            align-self: flex-end;
        }
        .footer-col-left{
            margin: 0;
        }
        .poolpo-tentacle{
            width: 250%;
            position: relative;
            left: -67%;
        }

        .pagination-container{
            display: flex;
            justify-content: center;
            /* justify-content: space-between;
            justify-self: center; */
            /* width: 26%; */
        }
        .pagination-circle{
            border-radius: 50%;
            width: 9px;
            height: 9px;
            border: 1px solid ${Theme.primaryColor};
            margin: 0px 3px 0px 3px;
        }
        .pagination-circle-active{
            border-radius: 50%;
            width: 9px;
            height: 9px;
            background-color: ${Theme.primaryColor};
            border: 1px solid ${Theme.primaryColor};
            margin: 0px 3px 0px 3px;
        }
        .footer-none{
            display: none
        }
        .footer-link{
            font-size: 10px;
            line-height: 20px;
            letter-spacing: normal;
            text-align: left;
            margin-bottom: 9px;
            font-weight: 500;
        }
        .footer-link:link{
            text-decoration: none; 
        }
        .footer-link:hover{ 
            color: black; 
            text-decoration: none;
            font-weight: 600;
        }
        .footer-link:visited{
            color: black;  
            text-decoration: none 
        }

        .social-media-icon{
            width: 31.9px;
            margin: 68.9px 5px 0px 5px;
        }
        .afip-logo{
            width: 28px;
            margin: 0px 12px 0px 0px;
        }
        .ssn-logo{
            width: 69px;
            margin: 0px 0px 0px 8px;
        }
        .ssl-logo{
            width: 75px;
            margin: 0;
        }
        .footer-forth-row{
            display: flex;
        }
        .footer-third-col{
            padding: 26px 5% 0px 0px;
        }
        .footer-copy-line{
            font-size: 9px;
            margin: 28px 0px 0px;
        }
        .loading-modal{
            min-width: 282px;
            margin-top: 22vh;
            height: 283px;
            justify-content: center;
        } 
        .modal-text{
            font-family: ${Theme.primaryFont};
            font-size: 14px;
            font-weight: 300;
            color: ${Theme.greyFont};
            margin: 0px 38px 59px 38px;
        }
        /* .quotation-desktop{
        display: none;
        }
        .quotation-tablet{
            display: none;
        }
        .quotation-mobile{
            display: flex;
            flex-direction: column;
        } */
}
`

export default GlobalStyle
