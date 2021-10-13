import React, { Component } from 'react'
import Styled from 'styled-components'
import Theme from '../Styles/Theme.js'
import Button from '../components/Button/Button.js'

const CongratsContainer = Styled.div`
    margin: 150px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 618px;
    .congrats-title{
        font-family: ${Theme.primaryFont};
        font-weight: 700;
        color: ${Theme.primaryColor};
        font-size: 32px;
        text-align: center;
        margin-bottom: 18px;
    }
    .congrats-first-paragraph{
        font-family: ${Theme.primaryFont};
        font-weight: 200;
        color: ${Theme.black};
        font-size: 29px;
        text-align: center;
        margin-bottom: 26px;
        width: 450px;
    }
    .congrats-second-paragraph{
        font-family: ${Theme.primaryFont};
        font-weight: 200;
        color: ${Theme.black};
        font-size: 19px;
        text-align: center;
        margin-bottom: 30px;
        margin: 0px 20% 30px 20%;
    }
    .congrats-img{
        width: 250px;
        margin-bottom: 30px;
    }
    .congrats-button-container{
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        width: 100%;
    }
    @media only screen and (max-width: 1365px){
        height: 912px;
        justify-content: flex-start;
        .congrats-second-paragraph{
            margin: 0px 10% 30px 10%;
        }
    }
    @media only screen and (max-width: 1023px){
        height: 620px;
    }

    @media only screen and (max-width: 767px){
        margin: 73px 5% 0px 5%;
        height: auto;
        .congrats-title{
        font-size: 26px;
        margin-bottom: 28px;
        }
        .congrats-first-paragraph{
        margin: 0px 12% 30px 12%;
        width: 100%;
        font-size: 19px;
        }
        .congrats-second-paragraph{
        font-size: 16px;
        width: 100%;
    }
    }
`

export default class Congrats extends Component {
    constructor(){
        super()
        this.state = {
            name: ''
        }

    }
    componentDidMount(){
        let message = localStorage.getItem('Message')
        if(message !== 'true'){
            window.location.href = "/"
        }
    }
    handleLogIn(){
        // window.location.href = "/login"
    }
    handleHome(){
        window.location.href = "/"
    }

    render() {
        return (
            <CongratsContainer>
                <p className="congrats-title">¡Recibimos tu mensaje!</p>
                <p className="congrats-first-paragraph">Te contactaremos a la brevedad</p>
                <img src="/assets/body/poolpo-exito.svg" alt="Poolpo felicitaciones" className="congrats-img"/>
                <div className="congrats-button-container">
                    {/* <Button bg={"green"} text={"Log in"} action={()=> this.handleLogIn()}></Button> */}
                    <Button bg={"green"} text={"Home"} action={()=> this.handleHome()}></Button>
                </div>
            </CongratsContainer>
        )
    }
}
