import React, { Component } from 'react';
import { Provinces, getLeadData, sendVehicleFile, scrollUp } from '../../utils/data.js'
import { validFile } from '../../utils/FormValidation.js'
import Theme from '../../Styles/Theme.js';
import AmplitudeButton from '../Button/AmplitudeButton.js'
import Styled from 'styled-components'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    .form-img-container{
      width: 70px;
      margin: 0px 10px 22px 0px;
      display: flex;
      justify-content: center
    }
    .form-img-container>img{
      width: 100%;
    }
    form div:first-child{
      
    }
    .form-text{
      font-family: ${Theme.secondaryFont};
      font-size: 12px;
      font-weight: 300;
      color: ${Theme.black};
      text-align: left;
      margin-bottom: 37px;
    }
    .form-line{
      display: flex;
      flex-direction: row;
      justify-content: center;
      
    }
    .car-pic{
      width: 60px;
      margin-right: 8px;
    }
    .input-line{
      width: 100%;
    }
    .text-field-error{
      display: 'none'
    }
    .button{
      background-color: white;
      border: 1px solid ${Theme.secondaryColor};
      color: ${Theme.secondaryColor};
      font-size: 11px;
      margin: 30px 0px 0px 0px;
    }
    .upload-btn-red{
      background-color: ${Theme.white};
      color: ${Theme.secondaryColor};
      border: 1px solid ${Theme.secondaryColor};
      padding: 9.5px 0px;
      width: 32px;
      height: 32px;
      border-radius: ${Theme.radius};
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

export default class AccordionFromPictures extends Component{
  constructor(props){
    super(props)
      this.state ={
          fileNameOne: 'Subir imagen',
          fileNameTwo: 'Subir imagen',
          fileNameThree: 'Subir imagen',
          fileNameFour: 'Subir imagen',
          fileNameFive: 'Subir imagen',
          fileNameSix: 'Subir imagen',
          expanded: true,
          validated: false,
      }
  }

  componentDidMount(){
    let LeadID = localStorage.getItem('LeadID')
    let VehicleID = localStorage.getItem('VehicleID')
    getLeadData(LeadID).then(res => {
      console.log(res)
      this.setState({
        ...this.state,
      name: res.name,
      email: res.email,
      phone: res.phone,
      dni: res.dni,
      VehicleID
    })
    })
  }
  handleSelectedFileOne(e){
      e.preventDefault()
      console.log("nombre foto subida", e.target.files[0].name)
      let fileName = 'Lateral derecho'
      this.setState({ fileOne: e.target.files[0], fileNameOne : e.target.files[0].name})
      sendVehicleFile(e.target.files[0], fileName, this.state.VehicleID)
      .then(res =>{
        if(res.error === true){
          validFile(this.state.fileOne, this.fileInputOne, this.fileErrorOne)
        }
        console.log(res)
      })
  }
  handleSelectedFileTwo(e){
    e.preventDefault()
    let fileName = 'Lateral izquierdo'
    this.setState( { fileTwo: e.target.files[0], fileNameTwo: e.target.files[0].name})
    sendVehicleFile(e.target.files[0], fileName, this.state.VehicleID)
    .then(res =>{
      if(res.error === true){
        validFile(this.state.fileTwo, this.fileInputTwo, this.fileErrorTwo)
      }
      console.log(res)
    })
  }
  handleSelectedFileThree(e){
    e.preventDefault()
    let fileName = 'Frente'
    this.setState( { fileThree: e.target.files[0], fileNameThree: e.target.files[0].name})
    sendVehicleFile(e.target.files[0], fileName, this.state.VehicleID)
    .then(res =>{
      if(res.error === true){
        validFile(this.state.fileThree, this.fileInputThree, this.fileErrorThree)
      }
      console.log(res)
    })
  }
  handleSelectedFileFour(e){
    e.preventDefault()
    let fileName = 'Atrás'
    this.setState( { fileFour: e.target.files[0], fileNameFour: e.target.files[0].name})
    sendVehicleFile(e.target.files[0], fileName, this.state.VehicleID)
    .then(res =>{
      if(res.error === true){
        validFile(this.state.fileFour, this.fileInputFour, this.fileErrorFour)
      }
      console.log(res)
    })
  }
  handleSelectedFileFive(e){
    e.preventDefault()
    let fileName = 'Tablero'
    this.setState( { fileFive: e.target.files[0], fileNameFive: e.target.files[0].name})
    sendVehicleFile(e.target.files[0], fileName, this.state.VehicleID)
    .then(res =>{
      if(res.error === true){
        validFile(this.state.fileFive, this.fileInputFive, this.fileErrorFive)
      }
      console.log(res)
    })
  }
  handleSelectedFileSix(e){
    e.preventDefault()
    console.log("nombre foto subida", e.target.files[0].name)
    let fileName = 'Rueda de auxilio'
    this.setState( { fileSix: e.target.files[0], fileNameSix: e.target.files[0].name})
    sendVehicleFile(e.target.files[0], fileName, this.state.VehicleID)
    .then(res =>{
      if(res.error === true){
        validFile(this.state.fileSix, this.fileInputSix, this.fileErrorSix)
      }
      console.log(res)
    })
  }

  handleClick(e){
    e.preventDefault()
    scrollUp()
    this.setState({...this.state, expanded: false, validated: true})
    this.props.getVehiclePictures(this.state.fileOne, this.state.fileTwo, this.state.fileThree, this.state.fileFour, this.state.fileFive, this.state.fileSix)
  }

  renderProvinceOptions(){
    let options = Provinces
    return options.map ((item, i) => <option key={`option${i}`}value={item.name}>{item.name}</option>
    )
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
       expanded={this.state.expanded === true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          onClick={() => this.handleChange(this.state.expanded)}
        >
          <p className="form-title" id="accordion-title">Fotos de tu vehículo</p>
        </AccordionSummary>
        <AccordionDetails>
        <form>
              <div>
                  <p className="form-text">Necesitamos 6 fotos de tu vehículo para que evites la inspección física de la unidad.<br></br>
                  <strong>(Tendrías que llevar el auto a que sea inspeccionado ¡y no queremos que pierdas tiempo!)</strong>
                  <br></br>
                  Tené en cuenta que si no subís las fotos, el tramite comienza igual. Aunque será necesario que las subas luego, para poder generar la poliza del seguro.</p>
              </div>
              <div className="form-line">
                <div className="form-img-container">
                    <img className="car-pic-right" src="/assets/icons/car-views/lateral-derecho.svg" alt="foto lateral"/>
                </div>
                    <div className="input-line">
                      <label htmlFor="car-pic1" className="form-label">Lateral derecho</label>
                      <input 
                      type="file" 
                      id="car-pic1"
                      ref={fileInputOne => this.fileInputOne = fileInputOne}
                      onChange ={(e) => this.handleSelectedFileOne(e)}
                      hidden="hidden"
                      />
                      <div className="file-field">
                          <span className="text-file-field" id="file-name" ref={fileOne => this.fileOne = fileOne}>{this.state.fileNameOne.slice(0,20)}</span>
                          <button type="button" className="upload-btn-red" onClick={() => this.fileInputOne.click()}>
                              <img src="/assets/icons/upload-red.svg" className="icon-upload-red" alt="subir archivo"/>
                          </button>
                      </div>
                      <p className="text-field-error" ref={ fileErrorOne => this.fileErrorOne = fileErrorOne}>Adjuntá tu póliza en formato pdf, jpeg o png</p>
                    </div>
                 
              </div>
              <div className="form-line">
                <div className="form-img-container">
                    <img className="car-pic-left" src="/assets/icons/car-views/lateral-derecho.svg" alt="foto lateral"/>
                </div>
                    <div className="input-line">
                      <label htmlFor="car-pic2" className="form-label">Lateral izquierdo</label>
                      <input 
                      type="file" 
                      id="car-pic2" 
                      ref={fileInputTwo => this.fileInputTwo = fileInputTwo}
                      onChange ={(e) => this.handleSelectedFileTwo(e)}
                      hidden="hidden"
                      />
                      <div className="file-field">
                          <span className="text-file-field" id="file-name" ref={fileTwo => this.fileTwo = fileTwo}>{this.state.fileNameTwo.slice(0,20)}</span>
                          <button type="button" className="upload-btn-red" onClick={() => this.fileInputTwo.click()}>
                              <img src="/assets/icons/upload-red.svg" className="icon-upload-red" alt="subir archivo"/>
                          </button>
                      </div>
                      <p className="text-field-error" ref={ fileErrorTwo => this.fileErrorTwo = fileErrorTwo}>Adjuntá tu póliza en formato pdf, jpeg o png</p>
                    </div>
                 
              </div>
              <div className="form-line">
                <div className="form-img-container">
                    <img className="car-pic-front" src="/assets/icons/car-views/frontal.svg" alt="foto delantera"/>
                </div>
                    <div className="input-line">
                      <label htmlFor="car-pic3" className="form-label">Frente</label>
                      <input 
                      type="file" 
                      id="car-pic3" 
                      ref={fileInputThree => this.fileInputThree = fileInputThree}
                      onChange ={(e) => this.handleSelectedFileThree(e)}
                      hidden="hidden"
                      />
                      <div className="file-field">
                          <span className="text-file-field" id="file-name" ref={fileThree => this.fileThree = fileThree}>{this.state.fileNameThree.slice(0,20)}</span>
                          <button type="button" className="upload-btn-red" onClick={() => this.fileInputThree.click()}>
                              <img src="/assets/icons/upload-red.svg" className="icon-upload-red" alt="subir archivo"/>
                          </button>
                      </div>
                      <p className="text-field-error" ref={ fileErrorThree => this.fileErrorThree = fileErrorThree}>Adjuntá tu póliza en formato pdf, jpeg o png</p>
                    </div>
                 
              </div>
              <div className="form-line">
                <div className="form-img-container">
                    <img className="car-pic-back" src="/assets/icons/car-views/atras.svg" alt="foto trasera"/>
                </div>
                    <div className="input-line">
                      <label htmlFor="car-pic4" className="form-label">Atrás</label>
                      <input 
                      type="file" 
                      id="car-pic4" 
                      ref={fileInputFour => this.fileInputFour = fileInputFour}
                      onChange ={(e) => this.handleSelectedFileFour(e)}
                      hidden="hidden"
                      />
                      <div className="file-field">
                          <span className="text-file-field" id="file-name" ref={fileFour => this.fileFour = fileFour}>{this.state.fileNameFour.slice(0,20)}</span>
                          <button type="button" className="upload-btn-red" onClick={() => this.fileInputFour.click()}>
                              <img src="/assets/icons/upload-red.svg" className="icon-upload-red" alt="subir archivo"/>
                          </button>
                      </div>
                      <p className="text-field-error" ref={ fileErrorFour => this.fileErrorFour = fileErrorFour}>Adjuntá tu póliza en formato pdf, jpeg o png</p>
                    </div>
                 
              </div>
              <div className="form-line">
                <div className="form-img-container">
                    <img className="car-pic-tablero" src="/assets/icons/car-views/tablero.svg" alt="foto tablero"/>
                </div>
                    <div className="input-line">
                      <label htmlFor="car-pic5" className="form-label">Tablero</label>
                      <input 
                      type="file" 
                      id="car-pic5" 
                      ref={fileInputFive => this.fileInputFive = fileInputFive}
                      onChange ={(e) => this.handleSelectedFileFive(e)}
                      hidden="hidden"
                      />
                      <div className="file-field">
                          <span className="text-file-field" id="file-name" ref={fileFive => this.fileFive = fileFive}>{this.state.fileNameFive.slice(0,20)}</span>
                          <button type="button" className="upload-btn-red" onClick={() => this.fileInputFive.click()}>
                              <img src="/assets/icons/upload-red.svg" className="icon-upload-red" alt="subir archivo"/>
                          </button>
                      </div>
                      <p className="text-field-error" ref={ fileErrorFive => this.fileErrorFive = fileErrorFive}>Adjuntá tu póliza en formato pdf, jpeg o png</p>
                    </div>
                 
              </div>
              <div className="form-line">
                    <div className="form-img-container">
                      <img className="car-pic-wheel" src="/assets/icons/car-views/rueda-auxilio.svg" alt="foto rueda de auxilio"/>
                    </div>
                    <div className="input-line">
                      <label htmlFor="car-pic6" className="form-label">Rueda de auxilio</label>
                      <input 
                      type="file" 
                      id="car-pic6" 
                      ref={fileInputSix => this.fileInputSix = fileInputSix}
                      onChange ={(e) => this.handleSelectedFileSix(e)}
                      hidden="hidden"
                      />
                      <div className="file-field">
                          <span className="text-file-field" id="file-name" ref={fileSix => this.fileSix = fileSix}>{this.state.fileNameSix.slice(0,20)}</span>
                          <button type="button" className="upload-btn-red" onClick={() => this.fileInputSix.click()}>
                              <img src="/assets/icons/upload-red.svg" className="icon-upload-red" alt="subir archivo"/>
                          </button>
                      </div>
                      <p className="text-field-error" ref={ fileErrorSix => this.fileErrorSix = fileErrorSix}>Adjuntá tu póliza en formato pdf, jpeg o png</p>
                    </div>
                 
              </div>
                <div className="form-line">
                    <AmplitudeButton action={(e) => this.handleClick(e)} bg={"red"} text={"Guardar"}  active={true} className="button" special={true}/>
                </div>
            </form>
        </AccordionDetails>
      </Accordion>
    </AccordionContainer>
  );
}
}
