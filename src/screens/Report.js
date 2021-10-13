import React from 'react'
import Styled from 'styled-components'
import Theme from '../Styles/Theme.js'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const ReportContainer = Styled.article`
    margin: 109px 0px 0px 0px;
    position: relative;
    display: flex;
    flex-direction:column;
    align-items:center;
    .back-button{
        text-decoration:none;
        position:absolute;
        display:flex;
        align-items:center;
        left: 70px;
        top: 20px;
        font-family: ${Theme.secondaryFont};
        font-size: 17px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.24;
        letter-spacing: normal;
        text-align: center;
        color: #302c42;
    }
    .back-button KeyboardBackspaceIcon{
        fontSize:50
    }
    h1{
        font-family: ${Theme.primaryFont};
        font-size: 32px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.22;
        letter-spacing: normal;
        text-align: center;
        color: #302c42;
        margin-bottom:18px;
    }
    p{
        font-family: ${Theme.secondaryFont};
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.38;
        letter-spacing: normal;
        text-align: center;
        color: #222222;
        margin-bottom:51px;
    }
    .divider{
        width:100%;
        height:0;
        display:none;
    }
    .underlined-span{
        position:relative;
    }
    .underlined-span::after{
        background-color: #60E1C3;
        content: '';
        width: 100%;
        height: 5px;
        position: absolute;
        bottom: -1px;
        left: 0;
        z-index: -1;
    }
    .flex-box{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        margin-bottom:130px;
    }
    .flex-item{
        display:flex;
        flex-direction:column;
        align-items:center;
        margin: 0 22.5px 0 22.5px;
        padding-top: 42px;
        width: 229px;
        height: 216px;
        border-radius: 12px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        border: solid 1px #ffffff;
        background-color: #ffffff;
    }
    .flex-item span{
        font-family: ${Theme.primaryFont};
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.17;
        letter-spacing: normal;
        text-align: center;
        color: #222222;
    }
    .flex-box a{
        text-decoration:none;
        color: #222222;
    }
    .report-category{
        height: 87px;
        margin-bottom: 51px;
    }
    @media only screen and (max-width: 1365px){
        margin:100px 0 40px 0;
        h1{
            font-size:22px;
        }
        p{
            font-size:14px;
        }
        .divider{
            display:block;
        }
        .back-button{
            top:15px;
            left:50px;
            font:14px;
        }
        .flex-item{
            margin: 14px 10px;
        }
        .back-button KeyboardBackspaceIcon{
            fontSize:30
        }
        .flex-box{
            margin-bottom:50px;
        }
    }
    @media only screen and (max-width: 767px){
        margin-top:70px;
        h1{
            margin-top:35px;
            font-size:18px;
        }
        p{
            font-size:12px;
            padding-left:15%;
            padding-right:15%;
        }
        .divider{
            display:block;
        }
        .back-button{
            top:0px;
            left:30px;
            font:12px;
        }
        .back-button KeyboardBackspaceIcon{
            fontSize:20
        }
        .flex-box{
            margin-bottom: 48px;
        }
        .flex-item{
            display:flex;
            flex-direction:column;
            align-items:center;
            margin: 14px 10px;
            padding-top: 22px;
            width: 141px;
            height: 127px;
        }
        .report-category{
            height:50px;
            margin-bottom:20px
        }
        .flex-item span{
            font-size: 10px;
        }
    }
`


export default function Report() {

    const renderMembers = () => {

    }


    return (
        <ReportContainer>
            <a href="/Clientes" className='back-button'>
                <KeyboardBackspaceIcon style={{color:"#56e0c2", fontWeight:100}}/>
                <span>Volver</span>
            </a>
            <h1>Denuncia tu <span className='underlined-span'>siniestro</span></h1>
            <p>¿Le paso algo a tu auto?  Quédate tranqui.. <br/>
Completá el formulario, adjuntá las fotos y nosotros te acompañamos en todo el proceso</p>
            <div className='flex-box'>
                <a className='flex-item' href="/Clientes/Siniestros/Parciales">
                    <img className='report-category' src='/assets/body/partial.jpg' alt='something'/>
                    <span>Daños parciales</span>
                </a>
                <a className='flex-item' href="/Clientes/Siniestros/Rueda">
                    <img className='report-category' src='/assets/body/wheel.jpg' alt='something'/>
                    <span>Robo de rueda</span>
                </a>
                <div className="divider"></div>
                <a className='flex-item' href="/Clientes/Siniestros/Cristales">
                    <img className='report-category' src='/assets/body/crystal.jpg' alt='something'/>
                    <span>Cristales</span>
                </a>
                <a className='flex-item' href="/Clientes/Siniestros/Cerradura">
                    <img className='report-category' src='/assets/body/lock.jpg' alt='something'/>
                    <span>Daños en cerradura<br/>por robo</span>
                </a>
            </div>
        </ReportContainer>
    )
}
