import React, { Component } from 'react'
import Styled from 'styled-components'
import Theme from '..//Styles/Theme.js'
import Button from '../components/Button/Button.js'
const CongratsContainer = Styled.div`
    margin: 150px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 740px;
    .error-title{
        font-family: ${Theme.primaryFont};
        font-weight: 700;
        color: ${Theme.primaryColor};
        font-size: 32px;
        text-align: center;
        margin-bottom: 5px;
    }
    .error-first-paragraph{
        font-family: ${Theme.primaryFont};
        font-weight: 700;
        color: ${Theme.black};
        font-size: 32px;
        text-align: center;
        margin-bottom: 36px;
        width: 450px;
    }
    .error-second-paragraph{
        font-family: ${Theme.secondaryFont};
        font-weight: 200;
        color: ${Theme.black};
        font-size: 19px;
        text-align: center;
        margin-bottom: 30px;
        margin: 0px 20% 30px 20%;
    }
    .error-img{
        width: 500px;
        margin-bottom: 30px;
    }
    .error-button-container{
        display: flex;
        justify-content: space-between;
        margin-bottom: 60px;
        width: 410px;
    }
    @media only screen and (max-width: 1365px){
        height: 912px;
        justify-content: flex-start;
        margin-top: 150px;
        .error-first-paragraph{
        margin: 0px 12% 100px 12%;
        width: 100%;
        font-size: 26px;
        }
        .error-second-paragraph{
            margin: 0px 10% 30px 10%;
        }
    }
    @media only screen and (max-width: 1024px){
        height: 910px;
        .error-second-paragraph{
            margin: 0px 10% 30px 10%;
        }
    }

    @media only screen and (max-width: 767px){
        margin: 73px 5% 0px 5%;
        height: auto;
        .error-title{
        font-size: 18px;
        margin-bottom: 5px;
        }
        .error-first-paragraph{
        margin: 0px 12% 30px 12%;
        width: 100%;
        font-size: 18px;
        }
        .error-second-paragraph{
        font-size: 14px;
        width: 100%;
        }
        .error-img{
        width: 250px;
        margin-bottom: 30px;
        }
        .error-button-container{
            flex-direction: column;
            width: 56%;
            height: 112px;
        }
        .error-button-container > div > button{
            font-size: 11px !important;
        }

    }
`

export default class ErrorPolicy extends Component {
    handleHome(){
        window.location.href = "/"
    }
    render() {
        return (
            <CongratsContainer>
            <p className="error-title">Ups!</p>
            <p className="error-first-paragraph">Hasta un día de playa puede salir mal</p>
            <img src="/assets/body/poolpo-error-policy.png" alt="Poolpo Error" className="error-img"/>
            <p className="error-second-paragraph">Hay algo en tu archivo que no pudimos leer. Por eso vamos a tomarnos un tiempito para solucionar el problema y poder darte la mejor cotización para el seguro de tu auto.</p>
            <p className="error-second-paragraph">Si querés volver a intentar subir tu póliza o adjuntar otro archivo, probemos con mejor suerte. Si preferís cotizar sin póliza podés hacerlo también.</p>
            <div className="error-button-container">
                <Button bg={"green"} text={"Volver a la home"} action={()=> this.handleHome()}></Button>
                <Button bg={"red"} text={"Cotizar sin póliza"} action={()=> this.handleHome()}></Button>
            </div>
        </CongratsContainer>
        )
    }
}
