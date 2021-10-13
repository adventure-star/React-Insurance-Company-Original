import React, { Component } from 'react'
import AmplitudeButton from '../Button/AmplitudeButton.js'
import { Provinces } from '../../utils/data.js'
import { validName, validEmail, validPhone, validDni, validAge, validOption2, validZipcode } from '../../utils/FormValidation.js'
import Autocomplete from '../Input/Autocomplete'
import PhoneInput from '../Input/PhoneInput';
import NumberFormat from 'react-number-format';

export default class HomeFormFirst extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validated: true,
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            phone: localStorage.getItem('phone'),
            age: localStorage.getItem('age'),
            dni: '',
            province: null,
            zipcode: '',
            warning: '',
        }
    }
    componentDidUpdate() {
        if (this.state.formCompleted) {
            validName(this.state.name, this.name, this.nameError)
            validEmail(this.state.email, this.email, this.emailError)
            validPhone(this.state.phone, this.phone, this.phoneError)
            validDni(this.state.dni, this.dni, this.dniError)
            validAge(this.state.age, this.age, this.ageError)
            validOption2(this.state.province, this.provinceError)
        }
    }

    handleClick(e) {
        e.preventDefault()
        const name = validName(this.state.name, this.name, this.nameError)
        const email = validEmail(this.state.email, this.email, this.emailError)
        const phone = validPhone(this.state.phone, this.phone, this.phoneError)
        const dni = validDni(this.state.dni, this.dni, this.dniError)
        const age = validAge(this.state.age, this.age, this.ageError)
        const province = validOption2(this.state.province, this.provinceError)
        const zipcode = validZipcode(this.state.zipcode, this.zipcode, this.zipcodeError)

        if (name && email && phone && dni && age && province && zipcode) {
            localStorage.setItem('name', this.state.name)
            localStorage.setItem('email', this.state.email)
            localStorage.setItem('phone', this.state.phone)
            localStorage.setItem('age', this.state.age)
            this.setState({ validated: true })
            this.props.nextStep(1)
            this.props.getData(this.state.name, this.state.email, this.state.phone, this.state.dni, this.state.age, this.state.province, this.state.zipcode)
        } else {
            this.setState({ ...this.state, formCompleted: true })
        }
    }

    handleName(e) {
        this.setState({ name: e.target.value })
    }
    handleEmail(e) {
        this.setState({ email: e.target.value })
    }
    handlePhone(value) {
        this.setState({ phone: value.replace(/\ |\-/g, "") })
    }
    handleDni(e) {
        this.setState({ dni: e.target.value.split(".").join("")})
    }
    handleAge(e) {
        if(e.target.value.match("^[0-9]*$") != null){
            this.setState({ age: e.target.value })
        }
    }
    handleProvince(newValue) {
        console.log(newValue);
        this.setState({ province: newValue })
    }
    handleZipcode(e) {
        this.setState({ zipcode: e.target.value })
        if (this.state.formCompleted) {
            validZipcode(e.target.value, this.zipcode, this.zipcodeError)
        }
    }

    getOptions() {
        let options = Provinces
        return options.map((item, i) => item.name
        )
    }



    render() {
        return (
            <form className="form-container">
                <p className="form-title">Tus Datos</p>
                <div className="steps-container">
                    <div className="form-step step-one"></div>
                    <div className="form-step step-two"></div>
                </div>
                <div className="form-line">
                    <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                    <input className="text-field" type="text" id="name" onChange={(e) => this.handleName(e)} ref={name => this.name = name} value={this.state.name} />
                    <p className="text-field-error" ref={nameError => this.nameError = nameError}>Colocá correctamente tu nombre completo</p>
                </div>
                <div className="form-line">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input className="text-field" type="email" id="email" onChange={(e) => this.handleEmail(e)} ref={email => this.email = email} value={this.state.email} />
                    <p className="text-field-error" ref={emailError => this.emailError = emailError}>Colocá correctamente tu email (Ej: juan.perez@gmail.com)</p>
                </div>
                <div className="form-line" ref={phone => this.phone = phone}>
                    <label htmlFor="phone" className="form-label">Celular</label>
                    <PhoneInput className="text-field" type="tel" id="phone" onChange={(e) => this.handlePhone(e)} value={this.state.phone} />
                    <p className="text-field-error" ref={phoneError => this.phoneError = phoneError}>Colocá correctamente tu celular (Ej: 1165299315)</p>
                </div>
                <div className="form-line" ref={dni => this.dni = dni}>
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <NumberFormat thousandSeparator="." decimalSeparator="," decimalScale="0" className="text-field" type="text" maxLength="10" id="dni" onChange={(e) => this.handleDni(e)}  value={this.state.dni}/>
                    <p className="text-field-error" ref={dniError => this.dniError = dniError}>Colocá los números de tu DNI sin puntos</p>
                </div>
                <div className="form-line">
                    <label htmlFor="age" className="form-label">Edad</label>
                    <input className="text-field" type="text" maxLength="2" pattern="[0-9{2}]" id="age" onChange={(e) => this.handleAge(e)} ref={age => this.age = age} value={this.state.age} />
                    <p className="text-field-error" ref={ageError => this.ageError = ageError}>Colocá tu edad</p>
                </div>
                <div className="form-line">
                    <Autocomplete label="Provincia" options={Provinces.map(item => item.name)} onChange={(e) => this.handleProvince(e)} />
                    <p className="text-field-error" ref={provinceError => this.provinceError = provinceError}>Elegí tu provincia de residencia</p>
                </div>
                <div className="form-line">
                    <label htmlFor="zipcode" className="form-label">Código Postal</label>
                    <input className="text-field" type="text" pattern="\d*" id="zipcode" onChange={(e) => this.handleZipcode(e)} ref={zipcode => this.zipcode = zipcode} />
                    <p className="text-field-error" ref={zipcodeError => this.zipcodeError = zipcodeError}>Colocá correctamente tu código postal (Ej: 1054)</p>
                </div>
                <div className="form-line">
                    <div className="form-message" ref={messageBorder => this.messageBorder = messageBorder}>
                        <img src="/assets/icons/info.svg" alt="políticas de privacidad" className="icon-message" />
                        <p className="message-line">Poolpo es un sitio seguro. Toda tu información la mantenemos protegida. No la compartimos con terceros.</p>
                    </div>
                </div>
                <div className="form-line-left">
                    <AmplitudeButton action={(e) => this.handleClick(e)} bg={"green"} text={"Siguiente"} size={"medium"} active={true} />
                </div>
            </form>
        )
    }
}
