import React, { Component } from 'react';
import { validOption, validDomain } from '../../utils/FormValidation.js'
import {getModelsByBrand, getYearsByModel, getRegisteredVehicle, sendVehicleData, scrollUp, getBrandOptions } from '../../utils/data.js'
import Theme from '../../Styles/Theme.js';
import { Form } from 'react-bootstrap'
import Styled from 'styled-components'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AmplitudeButton from '../Button/AmplitudeButton.js';

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

export default class AccordionFormVehicle extends Component{
  constructor(props){
    super(props)
      this.state = {
          brandOptions: null,
          modelsOptions: null, 
          yearsOptions: null,
          brand: '',
          model: '',
          domain: '',
          year: '',
          isNew: '',
          isCar: '',
          chassis: '',
          engine: '',
          expanded: true,
          formCompleted: false,
          currentDate: '',
          messages: ''
      }
  }

  componentDidMount(){
    // let LeadID = this.props.vehicleData.LeadID
    // let VehicleID = this.props.vehicleData.VehicleID
    // let QuoteID = this.props.vehicleData.QuoteID
    // console.log("las props en vehicle", this.props)
    // this.getBrandsOptions()
    // alert("this.props.vehicleData.vehicleId"+this.props.vehicleData.vehicleId)
      this.setState({
        ...this.state,
        vehicleID: this.props.vehicleData.vehicleId,
        brand: this.props.vehicleData.brand,
        model: this.props.vehicleData.model,
        year: this.props.vehicleData.year,
        domain: this.props.vehicleData.domain === null ? "" : this.props.vehicleData.domain,
        isNew: this.props.vehicleData.isNew,
        isCar: this.props.vehicleData.isCar,
        chassis: this.props.vehicleData.chassis === null ? "" : this.props.vehicleData.chassis,
        engine: this.props.vehicleData.engine === null ? "" : this.props.vehicleData.engine,
        QuoteID: this.props.vehicleData.QuoteID
      })
      console.log("datos del vehículo", this.props.vehicleData)
  }    
  componentDidUpdate(prevProps){
    if (this.props.vehicleData !== prevProps.vehicleData) {
      //console.log(prevProps, this.props.vehicleData, "COMPONENTE ACTUALIZADO ACORDION FORM VEHICLE")
      this.setState({
        ...this.state,
        vehicleID: this.props.vehicleData.VehicleId,
        brand: this.props.vehicleData.brand,
        model: this.props.vehicleData.model,
        year: this.props.vehicleData.year,
        domain: this.props.vehicleData.domain === null ? "" : this.props.vehicleData.domain,
        chassis: this.props.vehicleData.chassis === null ? "" : this.props.vehicleData.chassis,
        engine: this.props.vehicleData.engine === null ? "" : this.props.vehicleData.engine,
        isNew: this.props.vehicleData.isNew,
        isCar: this.props.vehicleData.isCar,
        QuoteID: this.props.vehicleData.QuoteID
      })
      console.log("datos del vehículo 2", this.props.vehicleData)
    }
    // alert("this.props.vehicleData.vehicleId"+this.props.vehicleData.vehicleId)
    
    if(this.state.formCompleted){
      validOption(this.state.brand, this.brand, this.brandError)
      validOption(this.state.model, this.model, this.modelError)
      validDomain(this.state.domain, this.domain, this.domainError)
      validOption(this.state.year, this.year, this.yearError)
      validOption(this.state.chassis, this.chassis, this.chassisError)
      validOption(this.state.engine, this.engine, this.engineError)
      this.isNew && validOption(this.state.isNew, this.isNew, this.isNewError)
    }
  }

  getBrandsOptions(){
  getBrandOptions()
    .then(res => {
      console.log("getBrands", res)
        this.setState({...this.state, brandOptions: res})
    })
}

  handleBrand(e){
    e.preventDefault()
    this.setState({brand: e.target.value, model: '', year: ''})
    this.getModels(e.target.value)
  }
  handleModel(e){
    e.preventDefault()
    if(!this.state.handleModel){
        this.setState({model: e.target.value, handleModel: true, yearsOptions: null})
        setTimeout(() => {
            this.getYears(this.state.brand, this.state.model)
        }, 1000);
    }
  }

  handleDomain(e){
    e.preventDefault()
    this.setState({domain: e.target.value})
  }
  handleYear(e){
    this.setState({year: e.target.value})
  }
  handleIsNew(e){
    this.setState({isNew: e.target.value})
  }
  handleChassis(e){
    e.preventDefault()
    this.setState({chassis: e.target.value})
  }
  handleEngine(e){
    e.preventDefault()
    this.setState({engine: e.target.value})
  }
  handleClick(e){
    e.preventDefault()
    // alert(this.props.vehicleData.vehicleId)
    const brand = validOption(this.state.brand, this.brand, this.brandError)
    const model = validOption(this.state.model, this.model, this.modelError)
    const domain = validDomain(this.state.domain, this.domain, this.domainError)
    const year = validOption(this.state.year, this.year, this.yearError)
    const isNew = this.isNew ? validOption(this.state.isNew, this.isNew, this.isNewError) : false
    if( brand && model && year && domain && this.state.isNew !== '' && this.state.isCar !== ''){
        console.log("envio de datos del vehiculo " + this.props.vehicleData.vehicleId)
        this.setState({...this.state, expanded: false, validated: true})
        this.props.getVehicleData(this.props.vehicleData.vehicleId, this.state.brand, this.state.model, this.state.domain, this.state.year, this.state.chassis, this.state.engine, this.state.isCar, this.state.isNew);        
        sendVehicleData(this.props.vehicleData.vehicleId, this.state.brand, this.state.model, this.state.domain, this.state.year, this.state.isNew, this.state.chassis, this.state.engine, this.state.isCar)
        .then(res => {
          if(res.error === false){
            console.log("SEND VEHICLE ERRORS FALSE")
            this.setState({...this.state, expanded: false, validated: true, formCompleted: true})
            this.props.getVehicleData(this.props.vehicleData.vehicleId, this.state.brand, this.state.model, this.state.domain, this.state.year, this.state.chassis, this.state.engine, this.state.isCar, this.state.isNew);        
            this.renderValidFields()
            scrollUp()
          } else if(res.errors){
            this.renderServerErrors(res.errors)
            console.log("los errores que me llegan", res)
            this.setState({...this.state, expanded: true, validated: false, formCompleted: true})
            this.props.getVehicleData(this.state.vehicleID, this.state.brand, this.state.model, this.state.domain, this.state.year, this.state.chassis, this.state.engine, this.state.isCar, this.state.isNew);        
          }
        })
    } else {
      this.setState({...this.state, formCompleted: true})
      this.props.getVehicleData(this.state.vehicleID, this.state.brand, this.state.model, this.state.domain, this.state.year, this.state.chassis, this.state.engine, this.state.isCar, this.state.isNew);        
    }
  }

  renderServerErrors(errors){
    console.log("renderServerErrors", errors)
    for (let key in errors) {
      if(key === "Brand"){
        this.renderErrorField(this.brand, this.brandError, errors[key])
        console.log( key, "y sus errores son", errors[key])
      }
      if(key === "Model"){
        this.renderErrorField(this.model, this.modelError, errors[key])
        console.log( key, "y sus errores son", errors[key])
      }
      if(key === "Domain"){
        this.renderErrorField(this.domain, this.domainError, errors[key])
        console.log( key, "y sus errores son", errors[key])
      }
      if(key === "Year"){
        this.renderErrorField(this.year, this.yearError, errors[key])
        console.log( key, "y sus errores son", errors[key])
      }
      if(key === "isNew"){
        this.renderErrorField(this.isNew, this.isNewError, errors[key])
        console.log( key, "y sus errores son", errors[key])
      }
      if(key === "Chassis"){
        this.renderErrorField(this.chassis, this.chassisError, errors[key])
        console.log( key, "y sus errores son", errors[key])
      }
      if(key === "Engine"){
        this.renderErrorField(this.engine, this.engineError, errors[key])
        console.log( key, "y sus errores son", errors[key])
      }
    }
  }

  renderErrorField(ref, refError, errorText){
    console.log("renderErrorField", ref, refError, errorText)
    ref.style.border = 'none'
    ref.style.borderBottom = `${Theme.warningBorder}`
    ref.style.color = `${Theme.warning}` 
    refError.style.color = `${Theme.warning}`
    let newErrors = document.createElement('div')
    newErrors.className = 'new-errors'
    refError.append(newErrors)
    for(let i = 0; i < errorText.length; i++){
      console.log("error text", errorText)
      let newErrorElement = document.createElement('p')
      newErrorElement.className = "new-text-field-error"
      // newErrorElement.innerText = errorText[i]
      newErrors.append(newErrorElement)
      newErrors.append(newErrorElement)
    }
  }

  renderValidFields(){
    console.log("rendervalidfields")
    let allErrorFields = document.getElementsByClassName('text-field-error')
    let allTextFields = document.getElementsByClassName('text-field')
    let allSelectFields = document.getElementsByClassName('select-field')
    let allNewErrors = document.getElementsByClassName('new-text-field-error')
    for(let i = 0; i < allErrorFields.length ; i++){
      allErrorFields[i].style.color = 'transparent'
    }
    for(let i = 0; i < allTextFields.length ; i++){
      allTextFields[i].style.color = 'none'
      allTextFields[i].style.borderBottom = `1px solid ${Theme.grey}`
      allTextFields[i].style.color = `${Theme.blackFont}`
    }
    for(let i = 0; i < allSelectFields.length ; i++){
      allSelectFields[i].style.color = 'none'
      allSelectFields[i].style.borderBottom = `1px solid ${Theme.grey}`
      allSelectFields[i].style.color = `${Theme.blackFont}`
    }
    for(let i = 0; i < allNewErrors.length ; i++){
      allNewErrors[i].style.display = 'none'
    }
  }

  renderErrors(){
    if(this.state.messages !== ''){
      return this.state.messsage.map((item, i) => <p>{item}</p>)
    }
  }

  renderBrandOptions(){
    if(this.state.brandOptions !== null){
      let options = this.state.brandOptions
      return options.map((item,i) => <option key={`option ${i}`} value={item}>{item}</option>)
    }
  }

  getModels(brand){
    return getModelsByBrand(brand)
    .then(res => {
        console.log("res res", res)
        this.setState({...this.state, modelsOptions: res })
        return res
    })
    .catch(e => console.log(e))
  }
  renderModelsOptions(){
    let modelsOptions = this.state.modelsOptions
    return modelsOptions.map((item,i) => <option key={`option ${i}`} value={item}>{item}</option>)
  }

  async getYears(brand, model){
    try{
        const result = await getYearsByModel(brand, model)
        console.log("result try catch", result)
        this.setState({...this.state, yearsOptions: result, handleModel: false})
    } catch (err){
        console.log("error en catch", err)
        this.setState({...this.state, handleModel: false})
    }
  }
  renderYearOptions(){
      let yearsOptions = this.state.yearsOptions
      if(yearsOptions !== undefined && yearsOptions !== null){
          return yearsOptions.map((item,i) => <option key={`option ${i}`} value={item}>{item}</option>)
      } else {
          console.log("error en años", yearsOptions)
      }
  }
  isExpanded(){
    return this.state.expanded
  }
  handleChange(expanded){
    if(this.state.validated){
    this.setState({...this.state, expanded: !expanded})
    }
  }

  render(){
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
          <p className="form-title" id="accordion-title">Datos de tu Vehículo</p>
        </AccordionSummary>
        <AccordionDetails>
        <form>
                <div className="form-line">
                    <label htmlFor="brand" className="form-label">Marca de tu auto</label>
                    {this.state.brand !== '' ? 
                    <Form.Control 
                    as="select" 
                    onChange={(e) => this.handleBrand(e)} 
                    className="select-field" 
                    ref={ brand => this.brand = brand} 
                    value={this.state.brand}
                    disabled={this.state.brand !== '' ? true : false}>
                        <option value={this.state.brand}>{this.state.brand}</option>
                    </Form.Control>
                    :
                    <Form.Control 
                    as="select" 
                    onChange={(e) => this.handleBrand(e)} 
                    className="select-field" 
                    ref={ brand => this.brand = brand} 
                    value={this.state.brand}
                    disabled={this.state.brand !== '' ? true : false}>
                        <option value=''>Elegí una opción</option>
                        {this.renderBrandOptions()}
                    </Form.Control>
                    }
                    <p className="text-field-error" ref={ brandError => this.brandError = brandError}>Elegí una opción</p>
                </div>
                <div className="form-line">
                    <label htmlFor="model" className="form-label">Modelo</label>
                    {this.state.modelsOptions !== null ? 
                    <Form.Control as="select" 
                    onChange={(e) => this.handleModel(e)} 
                    className="select-field" 
                    ref={ model => this.model = model}
                    value={this.state.model}
                    disabled={this.state.model !== '' ? true : false}
                    >
                        <option value=''>Elegí una opción</option>
                        {this.renderModelsOptions()}
                    </Form.Control> :
                    <Form.Control 
                    as="select" 
                    onChange={(e) => this.handleModel(e)} 
                    className="select-field" 
                    ref={ model => this.model = model} 
                    value={this.state.model}
                    disabled
                    >
                      <option value={this.state.model}>{this.state.model}</option>
                    </Form.Control> }
                    <p className="text-field-error" ref={ modelError => this.modelError = modelError}>Elegí una opción</p>
                </div>
                <div className="form-line">
                    <label htmlFor="domain" className="form-label">Patente</label>
                    <input className="text-field" t
                    ype="text"
                    id="domain" 
                    onChange={(e) => this.handleDomain(e)} 
                    ref={  domain => this.domain = domain} 
                    value={this.state.domain}
                    placeholder="Completar"/>
                    <p className="text-field-error" ref={ domainError => this.domainError = domainError}>Colocá la patente de tu vehículo sin espacios (Ej: AA123ZZ)</p>
                </div>

                <div className="form-line">
                    <label htmlFor="year" className="form-label">Año</label>
                    {this.state.yearsOptions !== null && (this.state.year === '' || this.state.year === null)? 
                    <Form.Control 
                    as="select" 
                    onChange={(e) => this.handleYear(e)} 
                    className="select-field" 
                    ref={ year => this.year = year}
                    disabled
                    >
                        <option value="0">Elegí una opción</option>
                        {this.renderYearOptions()}
                    </Form.Control> : 
                    <Form.Control as="select" 
                    onChange={(e) => this.handleYear(e)} 
                    className="select-field" 
                    ref={ year => this.year = year} 
                    value={this.state.year}
                    disabled>
                        <option value={this.state.year}>{this.state.year}</option>
                    </Form.Control> }
                    <p className="text-field-error" ref={ yearError => this.yearError = yearError}>Elegí una opción</p>
                </div>
                {this.state.year > 2019 && 
                    <div className="form-line">
                    <label htmlFor="isNew" className="form-label">Es 0KM?</label>
                    <Form.Control 
                    as="select" 
                    onChange={(e) => this.handleIsNew(e)} 
                    className="select-field" 
                    ref={ isNew => this.isNew = isNew}
                    value={this.state.isNew}
                    disabled
                    >
                        <option value="0">Elegí una opción</option>
                        <option value={true}>Si</option>
                        <option value={false}>No</option>
                    </Form.Control>
                    <p className="text-field-error" ref={ isNewError => this.isNewError = isNewError}>Elegí una opción</p>
                    </div>
                    }
                <div className="form-line">
                    <label htmlFor="chassis" className="form-label">Número de chasis o cuadro</label>
                    <input className="text-field" 
                    type="text"
                    id="chassis" 
                    onChange={(e) => this.handleChassis(e)} 
                    ref={ chassis => this.chassis = chassis} 
                    value={this.state.chassis} 
                    maxLength="17" 
                    placeholder="Completar"/>
                    <p className="text-field-error" ref={ chassisError => this.chassisError = chassisError}>Colocá el número de chasis o cuadro sin espacios</p>
                </div>
                <div className="form-line">
                    <label htmlFor="engine" className="form-label">Número de motor</label>
                    <input className="text-field" 
                    type="text"
                    id="engine" 
                    onChange={(e) => this.handleEngine(e)} 
                    ref={ engine => this.engine = engine} 
                    value={this.state.engine !== null ? this.state.engine : ''} 
                    maxLength="17"
                    placeholder="Completar"
                    />
                    <p className="text-field-error" ref={ engineError => this.engineError = engineError}>Colocá el número de motor sin espacios</p>
                </div>
                {this.state.messages !== '' ?
                  <div>{this.renderErrors()}</div>
                :
                null
                }
                <div className="form-line">
                    <AmplitudeButton action={(e) => this.handleClick(e)} bg={"red"} text={"Guardar"} event="Vehiculo" active={true} special={true}/>
                </div>
            </form>
        </AccordionDetails>
      </Accordion>
    </AccordionContainer>
  );
}
}
