import { createGlobalStyle } from 'styled-components';
import Theme from './Theme.js'

const GlobalStyle = createGlobalStyle`
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
    .container{
        margin: 0px;
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
    .quotation-container{
        display: flex;
    }
    .first-title{
        padding: 54px 0px 30px 0px;  
        text-align: center;
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
    p{
        text-align: center;
        font-weight: 600;
        font-size: 1em;
        margin: 0;
        color: #575A5F;
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



/* ---- BREAK POINT 1024 --- TABLET ---- */
@media only screen and (min-width: 768px) and (max-width: 1365px){
        .center{
            padding: 0px 8%;
        }
       .second-title-tablet{
            margin-top: 106px;
            margin-bottom: 36.4px;
            text-align: center;  
            font-family: ${Theme.primaryFont};
            font-size: 28px;
            font-weight: 300;
            line-height: 1.25;
            color: #222222;
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
    h1{
        text-align: left;
        font-size: 34px;
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
}

/* ---- BREAK POINT --- TABLET SMALL ---- */


/* ---- BREAK POINT 1024 --- MOBILE ---- */
@media only screen and (min-width: 240px) and (max-width: 767px){
        .center{
            padding: 0px 5.6%;
        }
        .title-col{
            padding: 99px 6% 0px 6%;
            max-width: 100%;
        }
       
        h1{
            font-size: 24px;
            font-weight: 300;
        }
        h2{
            font-size: 18px;
        }
        .loading-modal{
            min-width: 282px;
        } 
        .modal-text{
            font-family: ${Theme.primaryFont};
            font-size: 14px;
            font-weight: 300;
            color: ${Theme.greyFont};
            margin: 0px 38px 59px 38px;
        }
}
`

export default GlobalStyle
