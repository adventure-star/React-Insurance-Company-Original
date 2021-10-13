import React, { Component } from 'react'
import Styled from 'styled-components'
import Theme from '../Styles/Theme.js'
import Button from '../components/Button/Button.js'
import HomeFooter from '../components/HomeSections/HomeFooter.js'
import { validEmail, validName, validTextArea, validPhone } from '../utils/FormValidation.js'
import { sendContactMessage } from '../utils/data.js'


const ContactContainer = Styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 160px 28% 0px 28%;
    h2{
        font-size: 41px;
        line-height: 50px;
        font-weight: 300;
    }
    .contact-title{
        margin-bottom: 51px;
    }
    .contact-form{
        box-shadow: 0 3px 6px 0 ${Theme.lightGrey};
        border: 1px solid ${Theme.lightGrey};
        border-radius: 20px;
        margin-bottom: 20px;
        padding: 33px 12% 29px 12%;
    }
    .form-title{
        font-family: ${Theme.primaryFont};
        font-size: 20px;
        line-height: 25px;
        font-weight: 700;
        color: ${Theme.black};
        margin: 33px 5% 20px 5%;
    }
    .form-paragraph{
        font-family: ${Theme.primaryFont};
        font-size: 20px;
        line-height: 25px;
        font-weight: 300;
        color: ${Theme.black};
        margin-bottom: 18px;
    }
    .contact-button-container{
        display: flex;
        justify-content: flex-end;
        margin-top: 33px;
    }
    .text-area{
        font-family: ${Theme.secondaryFont};
        font-size: 11px;
        padding: 2%;
        width: 100%;
        margin-top: 15px;
        border: 1px solid ${Theme.grey};
        border-radius: 8px;
    }

@media only screen and (max-width: 1365px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 111px 10.9% 37px 10.9%;
    .contact-title{
        margin-bottom: 33px;
    }
    .contact-form{
        margin-bottom: 122px;
    }
}
@media only screen and (max-width: 767px){
    margin: 111px 10.9% 0px 10.9%;
    .contact-title{
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 18px;
    }
    .contact-form{
        box-shadow: none;
        border: none;
        margin-bottom: 20px;
        padding: 0;
    }
    .form-title{
        font-size: 16px;
        line-height: 19px;
        margin: 0px 0px 36px 0px;
    }
    .contact-button-container{
        justify-content: center;
        margin-top: 25px;
        margin-bottom: 20px;
    }
}

`

export default class Contact extends Component {
    constructor(){
        super()
        this.state= {
            formCompleted: false,
            name: '',
            email: '',
            phone: '',
            message: '',
        }
    }
    componentDidUpdate(){
        if(this.state.formCompleted){
            validName(this.state.name, this.name, this.nameError)
            validEmail(this.state.email, this.email, this.emailError)
            validTextArea(this.state.message, this.message, this.messageError)
        }
    }
    handleClick(e){
        e.preventDefault()
        let name = validName(this.state.name, this.name, this.nameError)
        let email = validEmail(this.state.email, this.email, this.emailError)
        // let phone = validPhone(this.state.phone, this.phone, this.phoneError)
        let message = validTextArea(this.state.message, this.message, this.messageError)
        if(name && email && message){
            this.setState({formCompleted: true})
            sendContactMessage(this.state.name, this.state.email, this.state.message)
        } else {
            this.setState({formCompleted: true})
        }
    }
    handleName(e){
        this.setState({name: e.target.value})
    }
    handleEmail(e){
        this.setState({email: e.target.value})
    }
    handlePhone(e){
        this.setState({phone: e.target.value})
    }
    handleMessage(e){
        this.setState({message: e.target.value})
    }


    render() {
        return (
            <div>
            <ContactContainer>
                <div className="contact-title">
                    <h2><span className="span1">Contacto</span></h2>
                </div>
                <form className="contact-form">
                <div className="contact-form-title">
                    <p className="form-title">Completá el formulario y nos comunicaremos con vos a la brevedad</p>
                    <p className="form-paragraph">¡Dejanos tu mensaje!</p>

                </div>
                <div className="form-line">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input className="text-field" type="text" id="name" onChange={(e) => this.handleName(e)} ref={ name => this.name = name}/>
                    <p className="text-field-error" ref={ nameError => this.nameError = nameError}>Colocá tu nombre</p>
                </div>
                <div className="form-line">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input className="text-field" type="email" id="email" onChange={(e) => this.handleEmail(e)} ref={ email => this.email = email}/>
                    <p className="text-field-error" ref={ emailError => this.emailError = emailError}>Colocá correctamente tu email (Ej: juan.perez@gmail.com)</p>
                </div>
                {/* <div className="form-line">
                    <label htmlFor="phone" className="form-label">Celular</label>
                    <input className="text-field" type="text" id="phone" onChange={(e) => this.handlePhone(e)} ref={ phone => this.phone = phone}/>
                    <p className="text-field-error" ref={ phoneError => this.phoneError = phoneError}>Colocá correctamente tu celular (Ej: 1165299315)</p>
                </div> */}
                <div className="form-line">
                    <label htmlFor="message" className="form-label">Mensaje</label>
                    <textarea className="text-area" id="message" rows="10" onChange={(e) => this.handleMessage(e)} placeholder="Escribe aquí..." ref={ message => this.message = message}/>
                    <p className="text-field-error" ref={ messageError => this.messageError = messageError}>Escribí tu mensaje</p>
                </div>
                <div className="contact-button-container">
                    <Button color={'green'} text={'Enviar'} action={(e) => this.handleClick(e)}/>
                </div>
                </form>
            </ContactContainer>
            </div>
        )
    }
}
