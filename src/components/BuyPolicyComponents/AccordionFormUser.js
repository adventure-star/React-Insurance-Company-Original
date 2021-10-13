import React, { Component } from 'react';
import { validName, validEmail, validPhone, validDni, validCuit, validOption, validZipcode, validAddressNumber, validStartDate } from '../../utils/FormValidation.js'
import { Provinces, customerSignUp } from '../../utils/data.js'
import Theme from '../../Styles/Theme.js';
import { Form } from 'react-bootstrap'
import Styled from 'styled-components'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AmplitudeButton from '../Button/AmplitudeButton.js';
import PhoneInput from '../Input/PhoneInput';
import NumberFormat from 'react-number-format';

const AccordionContainer = Styled.div`
    width: 100%;
    margin: 0px 0px 30px 0px;
    .form-title#accordion-title{
      font-family: ${Theme.primaryFont};
      font-size: 17px;
      font-weight: 700;
      color: ${Theme.secondaryColor};
      text-align: left;
    }
    form{
      width: 100%;
      padding: 0px 7% 0px 0px;
    }
    .button{
      background-color: white;
      border: 1px solid ${Theme.secondaryColor};
      color: ${Theme.secondaryColor};
      font-size: 11px;
      margin: 30px 0px 0px 0px;
    }
    .text-field-error{
      display: flex;
      flex-direction: column;
    }
    .new-text-field-error{
      font-family: ${Theme.secondaryFont};
      font-size: 9px;
      color: ${Theme.warning};
      text-align: left;
    }
    @media (max-width: 1365px) {
      .form-title#accordion-title{
        font-size: 15px;
        margin: 0px 0px 0px 0px;
    }
    }
    @media (max-width: 767px) {
      .form-title#accordion-title{
        text-align: center;
        margin: 0px 0px 0px 0px;
    }
    }
`

const accordionStyle = {
  border: `1px solid #acacac`,
  boxShadow: "0 3px 6px 0 #00000029",
  padding: "6px 0px 6px 7%",
  borderRadius: "12px",
}

export default class AccordionFormUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      person: '',
      surname: '',
      birth: '',
      email: '',
      phone: '',
      dni: '',
      province: '',
      address: '',
      addressNumber: '',
      addressFloor: '',
      addressDepartment: '',
      city: '',
      zipCode: '',
      expanded: true,
      validated: false,
      hiringDate: '',
      today: new Date(),
      messages: ''
    }
  }

  componentDidMount() {
    if (this.props.userData) {
      this.setState({
        ...this.state,
        name: this.props.userData.name,
        surname: this.props.userData.surname,
        email: this.props.userData.email,
        phone: this.props.userData.phone,
        dni: this.props.userData.dni,
        address: this.props.userData.address,
        province: this.props.userData.province,
        zipCode: this.props.userData.zipCode,
        leadId: this.props.userData.leadId,
        quoteId: this.props.userData.quoteId,
      })
      console.log("props en accordion user", this.props)
      this.renderHiringDate(this.props.userData.hiringDate)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        ...this.state,
        name: this.props.userData.name,
        surname: this.props.userData.surname,
        email: this.props.userData.email,
        phone: this.props.userData.phone,
        dni: this.props.userData.dni,
        address: this.props.userData.address,
        province: this.props.userData.province,
        zipCode: this.props.userData.zipCode,
        leadId: this.props.userData.leadId,
        quoteId: this.props.userData.quoteId,
      })
    }
    if (this.state.formCompleted) {
      validOption(this.state.person, this.person, this.personError)
      validName(this.state.name, this.name, this.nameError)
      validEmail(this.state.email, this.email, this.emailError)
      validPhone(this.state.phone, this.phone, this.phoneError)
      validName(this.state.address, this.address, this.addressError)
      validAddressNumber(this.state.addressNumber, this.addressNumber, this.addressNumberError)
      validOption(this.state.province, this.province, this.provinceError)
      validName(this.state.city, this.city, this.cityError)
      validStartDate(this.state.hiringDate, this.state.originalDate, this.hiringDate, this.hiringDateError)
      if (this.state.person === 'fisica' || this.state.person === '') {
        validName(this.state.surname, this.surname, this.surnameError)
        validName(this.state.birth, this.birth, this.birthError)
        validDni(this.state.dni, this.dni, this.dniError)
      } else if (this.state.person === 'juridica') {
        validCuit(this.state.dni, this.cuit, this.cuitError)
      }
    }
  }

  handlePerson(e) {
    this.setState({ person: e.target.value })
  }

  handleName(e) {
    this.setState({ name: e.target.value })
  }
  handleSurname(e) {
    this.setState({ surname: e.target.value })
  }
  handleBirth(e) {
    this.setState({ birth: e.target.value })
  }
  handleEmail(e) {
    this.setState({ email: e.target.value })
  }
  handlePhone(value) {
    this.setState({ phone: value.replace(/\ |\-/g, "") })
  }
  handleDni(e) {
    this.setState({ dni: e.target.value.split(".").join("") })
  }
  handleCuit(e) {
    this.setState({ dni: e.target.value })
  }
  handleAddress(e) {
    this.setState({ address: e.target.value })
  }
  handleAddressNumber(e) {
    this.setState({ addressNumber: e.target.value })
  }
  handleAddressFloor(e) {
    this.setState({ addressFloor: e.target.value })
  }
  handleAddressDepartment(e) {
    this.setState({ addressDepartment: e.target.value })
  }
  handleProvince(e) {
    this.setState({ province: e.target.value })
  }
  handleCity(e) {
    this.setState({ city: e.target.value })
  }
  handleZipCode(e) {
    this.setState({ zipCode: e.target.value })
    if (this.state.formCompleted) {
      validZipcode(e.target.value, this.zipCode, this.zipCodeError)
    }
  }
  handleHiringDate(e) {
    this.setState({ hiringDate: e.target.value })
    console.log(e.target.value)
  }
  handleClick(e) {
    e.preventDefault()
    const person = validOption(this.state.person, this.person, this.personError)
    const name = validName(this.state.name, this.name, this.nameError)
    const surname = this.state.person === 'juridica' || this.state.person === '' ? true : validName(this.state.surname, this.surname, this.surnameError)
    const birth = this.state.person === 'juridica' || this.state.person === '' ? true : validName(this.state.birth, this.birth, this.birthError)
    const email = validEmail(this.state.email, this.email, this.emailError)
    const phone = validPhone(this.state.phone, this.phone, this.phoneError)
    const dni = this.state.person === 'juridica' ? validCuit(this.state.dni, this.cuit, this.cuitError) : validDni(this.state.dni, this.dni, this.dniError)
    const address = validName(this.state.address, this.address, this.addressError)
    const addressNumber = validAddressNumber(this.state.addressNumber, this.addressNumber, this.addressNumberError)
    const addressFloor = true
    const province = validOption(this.state.province, this.province, this.provinceError)
    const city = validName(this.state.city, this.city, this.cityError)
    const zipCode = validZipcode(this.state.zipCode, this.zipCode, this.zipCodeError)
    const startDate = validStartDate(this.state.hiringDate, this.state.originalDate, this.hiringDate, this.hiringDateError)
    if (person && name && surname && birth && email && phone && dni && province && address && addressNumber && addressFloor && province && city && zipCode && startDate) {
      customerSignUp(this.state.leadId, this.state.quoteId, this.state.person, this.state.name, this.state.surname, this.state.email, this.state.phone, this.state.dni, this.state.birth, this.state.address, this.state.addressNumber, this.state.addressFloor, this.state.addressDepartment, this.state.city, this.state.zipCode, this.state.hiringDate)
        .then(res => {
          console.log("lo que devuelve customerSignUp", res)
          if (res.error === false) {
            console.log("error false", res)
            this.setState({ ...this.state, expanded: false, validated: true })
            this.props.getUserData(this.state.person, this.state.name, this.state.surname, this.state.birth, this.state.email, this.state.phone, this.state.dni, this.state.address, this.state.addressNumber, this.state.addressFloor, this.state.addressDepartment, this.state.province, this.state.city, this.state.zipCode, this.state.hiringDate, this.state.validated)
            this.renderValidFields()
            this.props.getCustomerId(res.customerId)
          } else if (res.errors) {
            this.renderServerErrors(res.errors)
            console.log("los errores que me llegan", res)
            this.setState({ ...this.state, expanded: true, validated: false })
            this.props.getUserData(this.state.person, this.state.name, this.state.surname, this.state.birth, this.state.email, this.state.phone, this.state.dni, this.state.address, this.state.addressNumber, this.state.addressFloor, this.state.addressDepartment, this.state.province, this.state.city, this.state.zipCode, this.state.hiringDate, this.state.validated)
          }
        })
    } else {
      this.setState({ ...this.state, formCompleted: true, validated: false })
      this.props.getUserData(this.state.person, this.state.name, this.state.surname, this.state.birth, this.state.email, this.state.phone, this.state.dni, this.state.address, this.state.addressNumber, this.state.addressFloor, this.state.addressDepartment, this.state.province, this.state.city, this.state.zipCode, this.state.hiringDate)
    }
  }

  renderServerErrors(errors) {
    console.log("renderServerErrors", errors)
    for (let key in errors) {
      if (key === "personType") {
        this.renderErrorField(this.person, this.personError, errors[key])
        console.log(key, "y sus errores son", errors[key])
      }
      if (key === "Name") {
        this.renderErrorField(this.name, this.nameError, errors[key])
        console.log(key, "y sus errores son", errors[key])
      }
      if (key === "Last") {
        this.renderErrorField(this.surname, this.surnameError, errors[key])
        console.log(key, "y sus errores son", errors[key])
      }
      if (key === "Email") {
        this.renderErrorField(this.email, this.emailError, errors[key])
        console.log(key, "y sus errores son", errors[key])
      }
      if (key === "Phone") {
        this.renderErrorField(this.phone, this.phoneError, errors[key])
        console.log(key, "y sus errores son", errors[key])
      }
      if (key === "DNI") {
        this.renderErrorField(this.dni, this.dniError, errors[key])
        console.log(key, "y sus errores son", errors[key])
      }
      if (key === "BirthDate") {
        this.renderErrorField(this.birth, this.birthError, errors[key])
        console.log(key, "y sus errores son", errors[key])
      }
      if (key === "AddressNumber") {
        this.renderErrorField(this.addressNumber, this.addressNumberError, errors[key])
        console.log(key, "y sus errores son", errors[key])
      }
      if (key === "Address") {
        this.renderErrorField(this.address, this.addressError, errors[key])
        console.log(key, "y sus errores son", errors[key])
      }
      if (key === "City") {
        this.renderErrorField(this.city, this.cityError, errors[key])
        console.log(key, "y sus errores son", errors[key])
      }
      if (key === "PostalCode") {
        this.renderErrorField(this.zipCode, this.zipCodeError, errors[key])
        console.log(key, "y sus errores son", errors[key])
      }
      if (key === "HiringDate") {
        console.log("renderServerErrors hiring date", errors)
        this.renderErrorField(this.hiringDate, this.hiringDateError, errors[key])
        console.log(key, "y sus errores son", errors[key])
      }
    }
  }

  renderErrorField(ref, refError, errorText) {
    console.log("renderErrorField", ref, refError, errorText)
    ref.style.border = 'none'
    ref.style.borderBottom = `${Theme.warningBorder}`
    ref.style.color = `${Theme.warning}`
    refError.style.color = `${Theme.warning}`
    let newErrors = document.createElement('div')
    newErrors.className = 'new-errors'
    refError.append(newErrors)
    for (let i = 0; i < errorText.length; i++) {
      console.log("error text", errorText)
      let newErrorElement = document.createElement('p')
      newErrorElement.className = "new-text-field-error"
      newErrorElement.innerText = errorText[i]
      newErrors.append(newErrorElement)
      newErrors.append(newErrorElement)
    }
  }

  renderValidFields() {
    let allErrorFields = document.getElementsByClassName('text-field-error')
    let allTextFields = document.getElementsByClassName('text-field')
    let allSelectFields = document.getElementsByClassName('select-field')
    let allNewErrors = document.getElementsByClassName('new-text-field-error')
    for (let i = 0; i < allErrorFields.length; i++) {
      allErrorFields[i].style.color = 'transparent'
    }
    for (let i = 0; i < allTextFields.length; i++) {
      allTextFields[i].style.color = 'none'
      allTextFields[i].style.borderBottom = `1px solid ${Theme.grey}`
      allTextFields[i].style.color = `${Theme.blackFont}`
    }
    for (let i = 0; i < allSelectFields.length; i++) {
      allSelectFields[i].style.color = 'none'
      allSelectFields[i].style.borderBottom = `1px solid ${Theme.grey}`
      allSelectFields[i].style.color = `${Theme.blackFont}`
    }
    for (let i = 0; i < allNewErrors.length; i++) {
      allNewErrors[i].style.display = 'none'
    }
  }

  renderProvinceOptions() {
    let options = Provinces
    return options.map((item, i) => <option key={`option${i}`} value={item.name}>{item.name}</option>
    )
  }

  renderErrors() {
    if (this.state.messages !== '') {
      return this.state.messsage.map((item, i) => <p>{item}</p>)
    }
  }

  renderHiringDate(date) {
    let formatedDate = date.slice(0, 10)
    console.log(formatedDate)
    this.setState({ ...this.state, originalDate: formatedDate, hiringDate: formatedDate })
  }

  isExpanded() {
    return this.state.expanded
  }
  handleChange(expanded) {
    if (this.state.validated) {
      this.setState({ ...this.state, expanded: !expanded })
    }
  }

  render() {
    return (
      <AccordionContainer>
        <Accordion
          style={accordionStyle}
          expanded={this.state.expanded === true}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            onClick={() => this.handleChange(this.state.expanded)}
          >
            <p className="form-title" id="accordion-title">Completá con tus datos personales!</p>
          </AccordionSummary>
          <AccordionDetails>
            <form>
              <div className="form-line">
                <label htmlFor="brand" className="form-label">Tipo de persona</label>
                <Form.Control as="select" onChange={(e) => this.handlePerson(e)} className="select-field" ref={person => this.person = person}>
                  <option value="">Elegí una opción</option>
                  <option value="fisica">Física</option>
                  <option value="juridica">Jurídica</option>
                </Form.Control>
                <p className="text-field-error" ref={personError => this.personError = personError}>Elegí una opción</p>
              </div>
              <div className="form-line">
                <label htmlFor="name" className="form-label">{this.state.person === 'juridica' ? "Razón social" : "Nombre"}</label>
                <input className="text-field" type="text" id="name" onChange={(e) => this.handleName(e)} ref={name => this.name = name} value={this.state.name} placeholder="Completar" />
                <p className="text-field-error" ref={nameError => this.nameError = nameError}>Colocá tu nombre</p>
              </div>
              {this.state.person === 'fisica' || this.state.person === '' ?
                <div className="form-line">
                  <label htmlFor="surname" className="form-label">Apellido</label>
                  <input className="text-field" type="text" id="surname" onChange={(e) => this.handleSurname(e)} ref={surname => this.surname = surname} value={this.state.surname !== null && this.state.surname !== "false" ? this.state.surname : ''} placeholder="Completar" />
                  <p className="text-field-error" ref={surnameError => this.surnameError = surnameError}>Colocá tu apellido</p>
                </div>
                : <div></div>}
              {this.state.person === 'fisica' || this.state.person === '' ?
                <div className="form-line">
                  <label htmlFor="birth" className="form-label">Fecha de nacimiento</label>
                  <input className="text-field" type="date" id="birth" onChange={(e) => this.handleBirth(e)} ref={birth => this.birth = birth} value={this.state.birth} />
                  <p className="text-field-error" ref={birthError => this.birthError = birthError}>Colocá correctamente tu fecha de nacimiento</p>
                </div>
                : <div></div>}
              <div className="form-line">
                <label htmlFor="email" className="form-label">Email</label>
                <input className="text-field" type="email" id="email" onChange={(e) => this.handleEmail(e)} ref={email => this.email = email} value={this.state.email} placeholder="Completar" />
                <p className="text-field-error" ref={emailError => this.emailError = emailError}>Colocá correctamente tu email (Ej: juan.perez@gmail.com)</p>
              </div>
              <div className="form-line" ref={phone => this.phone = phone}>
                <label htmlFor="phone" className="form-label">Celular</label>
                <PhoneInput className="text-field" type="tel" id="phone" onChange={(e) => this.handlePhone(e)} value={this.state.phone} placeholder="Completar" />
                <p className="text-field-error" ref={phoneError => this.phoneError = phoneError}>Colocá correctamente tu celular (Ej: 1165299315)</p>
              </div>
              {this.state.person === 'fisica' || this.state.person === '' ?
                <div className="form-line" ref={dni => this.dni = dni}>
                  <label htmlFor="dni" className="form-label">DNI</label>
                  <NumberFormat thousandSeparator="." decimalSeparator="," decimalScale="0" className="text-field" type="text" maxLength="10" id="dni" onChange={(e) => this.handleDni(e)} value={this.state.dni} placeholder="Completar" />
                  <p className="text-field-error" ref={dniError => this.dniError = dniError}>Colocá los números de tu DNI sin puntos</p>
                </div>
                :
                <div className="form-line">
                  <label htmlFor="cuit" className="form-label">CUIT</label>
                  <input className="text-field" type="text" pattern="\d*" id="cuit" onChange={(e) => this.handleCuit(e)} ref={cuit => this.cuit = cuit} value={this.state.cuit} placeholder="Completar" />
                  <p className="text-field-error" ref={cuitError => this.cuitError = cuitError}>Colocá el número de CUIT sin puntos ni guiones</p>
                </div>
              }
              <div className="form-line">
                <label htmlFor="address" className="form-label">Domicilio</label>
                <input className="text-field" type="text" id="address" onChange={(e) => this.handleAddress(e)} ref={address => this.address = address} value={this.state.address} placeholder="Completar" />
                <p className="text-field-error" ref={addressError => this.addressError = addressError}>Colocá tu domicilio</p>
              </div>
              <div className="form-line">
                <label htmlFor="address-number" className="form-label">Número</label>
                <input className="text-field" type="text" id="address-number" onChange={(e) => this.handleAddressNumber(e)} ref={addressNumber => this.addressNumber = addressNumber} value={this.state.addressNumber} placeholder="Completar" />
                <p className="text-field-error" ref={addressNumberError => this.addressNumberError = addressNumberError}>Colocá el número de tu domicilio</p>
              </div>
              <div className="form-line">
                <label htmlFor="address-floor" className="form-label">Piso</label>
                <input className="text-field" type="text" id="address-floor" onChange={(e) => this.handleAddressFloor(e)} ref={addressFloor => this.addressFloor = addressFloor} value={this.state.addressFloor} placeholder="Completar" />
                <p className="text-field-error" ref={addressFloorError => this.addressFloorError = addressFloorError}>Colocá el piso</p>
              </div>
              <div className="form-line">
                <label htmlFor="address-department" className="form-label">departamento</label>
                <input className="text-field" type="text" id="address-department" onChange={(e) => this.handleAddressDepartment(e)} ref={addressDepartment => this.addressDepartment = addressDepartment} value={this.state.addressDepartment} placeholder="Completar" />
                <p className="text-field-error" ref={addressDepartmentError => this.addressDepartmentError = addressDepartmentError}>Colocá el piso</p>
              </div>
              <div className="form-line">
                <label htmlFor="province" className="form-label">Provincia</label>
                <Form.Control as="select" onChange={(e) => this.handleProvince(e)} className="select-field" ref={province => this.province = province} value={this.state.province}>
                  <option key="select-an-option" value="">Elegí una opción</option>
                  {this.renderProvinceOptions()}
                </Form.Control>
                <p className="text-field-error" ref={provinceError => this.provinceError = provinceError}>Elegí tu provincia de residencia</p>
              </div>
              <div className="form-line">
                <label htmlFor="city" className="form-label">Ciudad</label>
                <input className="text-field" type="text" id="city" onChange={(e) => this.handleCity(e)} ref={city => this.city = city} value={this.state.city} placeholder="Completar" />
                <p className="text-field-error" ref={cityError => this.cityError = cityError}>Colocá tu ciudad de residencia</p>
              </div>
              <div className="form-line">
                <label htmlFor="zipCode" className="form-label">Código Postal</label>
                <input className="text-field" type="text" pattern="\d*" id="zipCode" onChange={(e) => this.handleZipCode(e)} ref={zipCode => this.zipCode = zipCode} value={this.state.zipCode} placeholder="Completar" />
                <p className="text-field-error" ref={zipCodeError => this.zipCodeError = zipCodeError}>Colocá tu código postal (Ej: 1407)</p>
              </div>
              <div className="form-line">
                <label htmlFor="hiringDate" className="form-label">¿A partir de cuándo querés contratar la cobertura?</label>
                <input className="text-field" type="date" id="hiringDate"
                  onChange={(e) => this.handleHiringDate(e)}
                  ref={hiringDate => this.hiringDate = hiringDate}
                  value={this.state.hiringDate}
                  min={this.state.originalDate}
                  placeholder={"dd/mm/aaaa"}
                />
                <p className="text-field-error" ref={hiringDateError => this.hiringDateError = hiringDateError}>Elegí una fecha válida de lunes a viernes</p>
              </div>
              {this.state.messages !== '' ?
                <div>{this.renderErrors()}</div>
                :
                null
              }
              <div className="form-line">
                <AmplitudeButton action={(e) => this.handleClick(e)} bg={"red"} text={"Guardar"} event="Datos personales" active={true} special={true} />
              </div>
            </form>
          </AccordionDetails>
        </Accordion>
      </AccordionContainer>
    );
  }
}
