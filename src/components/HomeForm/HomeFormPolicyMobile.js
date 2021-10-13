import React, { Component } from 'react'
import AmplitudeButton from '../Button/AmplitudeButton.js'

import { validName, validEmail, validPhone, validAge, validFile } from '../../utils/FormValidation.js'
import PhoneInput from '../Input/PhoneInput';

export default class HomeFormFirst extends Component {
    constructor(props){
        super(props)
        this.state = {
            formCompleted: false,
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            phone: localStorage.getItem('phone'),
            age:localStorage.getItem('age'),
            validName: '',
            validEmail: '',
            validPhone: '',
            dni: '',
            validDni: '',
            file: '',
            fileName: "Subir un archivo",
            validFile: '',
            loading: false
        }
    }

    componentDidUpdate(){
        if(this.state.formCompleted){
            validName(this.state.name, this.name, this.nameError)     
            validEmail(this.state.email, this.email, this.emailError)
            validPhone(this.state.phone, this.phone, this.phoneError)
            validAge(this.state.age, this.age, this.ageError)
            validFile(this.state.file, this.file, this.fileError)
        }
    }

    handleClick(e){
        e.preventDefault()
        const name = validName(this.state.name, this.name, this.nameError)  
        const email = validEmail(this.state.email, this.email, this.emailError)
        const phone = validPhone(this.state.phone, this.phone, this.phoneError)
        const age = validAge(this.state.age, this.age, this.ageError)
        const file = validFile(this.state.file, this.file, this.fileError)
        console.log("valid file", file)
        if( name && email && phone && age && file){
            localStorage.setItem('name', this.state.name)
            localStorage.setItem('email', this.state.email)
            localStorage.setItem('phone', this.state.phone)
            localStorage.setItem('age', this.state.age)
            this.setState({...this.state, validName: name, formCompleted: true})
            this.props.getDataAndPolicy(this.state.name, this.state.email, this.state.phone, this.state.age, this.state.file)
            return true
        } else {
            this.setState({...this.state, formCompleted: true})
        }
    }

    handleName(e){
            this.setState({ name: e.target.value})
    }
    handleEmail(e){
            this.setState({ email: e.target.value})
    }
    handlePhone(value) {
        this.setState({ phone: value.replace(/\ |\-/g, "") })
    }
    handleAge(e) {
        if(e.target.value.match("^[0-9]*$") != null){
            this.setState({ age: e.target.value })
        }
    }
    handleSelectedFile(e){
        e.preventDefault()
        this.setState( { file: e.target.files[0], fileName: e.target.files[0].name})
    }

    render() {
        return (
            <form className="form-container">
                <p className="form-title">Tus Datos</p>
                <div className="steps-container">
                    <div className="form-step one-step"></div>
                </div>
                <div className="form-line">
                    <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                    <input className="text-field" type="text" id="name" onChange={(e) => this.handleName(e)} ref={ name => this.name = name} value={ this.state.name }/>
                    <p className="text-field-error" ref={ nameError => this.nameError = nameError}>Colocá correctamente tu nombre completo</p>
                </div>
                <div className="form-line">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input className="text-field" type="email"id="email" onChange={(e) => this.handleEmail(e)} ref={ email => this.email = email} value={ this.state.email }/>
                    <p className="text-field-error" ref={ emailError => this.emailError = emailError}>Colocá correctamente tu email (Ej: juan.perez@gmail.com)</p>
                </div>
                <div className="form-line" ref={phone => this.phone = phone}>
                    <label htmlFor="phone" className="form-label">Celular</label>
                    <PhoneInput className="text-field" type="tel" id="phone" onChange={(e) => this.handlePhone(e)} value={this.state.phone} />
                    <p className="text-field-error" ref={phoneError => this.phoneError = phoneError}>Colocá correctamente tu celular (Ej: 1165299315)</p>
                </div>
                <div className="form-line">
                    <label htmlFor="age" className="form-label">Edad</label>
                    <input className="text-field" type="text" maxLength="2" pattern="[0-9{2}]" id="age" onChange={(e) => this.handleAge(e)} ref={age => this.age = age} value={this.state.age} />
                    <p className="text-field-error" ref={ageError => this.ageError = ageError}>Colocá tu edad</p>
                </div>
                <div className="form-line">
                    <label htmlFor="policy" className="form-label">Adjuntar póliza</label>
                    <input 
                    type="file" 
                    id="policy" 
                    ref={fileInput => this.fileInput = fileInput}
                    onChange ={(e) => this.handleSelectedFile(e)}
                    hidden="hidden"
                    />
                    <div className="file-field">
                        <span className="text-file-field" id="file-name" ref={file => this.file = file}>{this.state.fileName.slice(0,20)}</span>
                        <button type="button" className="upload-btn-green" onClick={() => this.fileInput.click()}>
                            <img src="/assets/icons/upload.svg" className="icon-upload"/>
                        </button>
                    </div>
                    <p className="text-field-error" ref={ fileError => this.fileError = fileError}>Adjuntá tu póliza en formato pdf, jpeg o png</p>
                </div>
                <div className="form-line">
                    <div className="form-message" ref={ messageBorder => this.messageBorder = messageBorder }>
                            <img src="/assets/icons/info.svg" alt="políticas de privacidad" className="icon-message" />
                            <p className="message-line" ref={ message => this.message = message }>Poolpo es un sitio seguro. Toda tu información la mantenemos protegida. No la compartimos con terceros.</p>
                    </div>
                </div>
                <div className="form-line-left">
                        <AmplitudeButton bg={"green"} text={"Siguiente"} size={"small"} active={true}action={(e) => this.handleClick(e)}/>
                </div>
            </form>
        )
    }
}
