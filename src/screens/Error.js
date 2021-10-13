import React, { Component } from 'react'
import Styled from 'styled-components'
import Theme from '..//Styles/Theme.js'
import Button from '../components/Button/Button.js'
const CongratsContainer = Styled.div`
    margin: 120px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 690 px;
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
        font-family: ${Theme.primaryFont};
        font-weight: 200;
        color: ${Theme.black};
        font-size: 19px;
        text-align: center;
        margin-bottom: 30px;
        margin: 0px 20% 30px 20%;
    }
    .error-img{
        width: 633px;
        margin-bottom: 30px;
    }
    .error-button-container{
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        width: 100%;
    }
    @media only screen and (max-width: 1365px){
        height: 947px;
        justify-content: flex-start;
        margin-top: 120px;
        .error-first-paragraph{
        margin: 0px 12% 100px 12%;
        width: 100%;
        font-size: 22px;
        }
        .error-img{
        width: 466px;
        margin-bottom: 30px;
    }
    }
    @media only screen and (max-width: 1023px){
        height: 670px;
    }

    @media only screen and (max-width: 767px){
        margin: 86px 5% 0px 5%;
        height: auto;
        .error-title{
        font-size: 18px;
        margin-bottom: 5px;
        }
        .error-first-paragraph{
        margin: 0px 12% 30px 12%;
        width: 100%;
        font-size: 26px;
        }
        .error-second-paragraph{
        font-size: 16px;
        width: 100%;
        }
        .error-img{
        width: 280px;
        margin-bottom: 30px;
    }
    }
`

export default class Error extends Component {
    handleHome(){
        window.location.href = "/"
    }
    render() {
        return (
            <CongratsContainer>
            <p className="error-title">Ups!</p>
            <p className="error-first-paragraph">Algo salió mal</p>
            <img src="/assets/body/poolpo-error.png" alt="Poolpo Error" className="error-img"/>
            <div className="error-button-container">
                <Button bg={"green"} text={"Volver a la Home"} action={()=> this.handleHome()}></Button>
            </div>
        </CongratsContainer>
        )
    }
}
