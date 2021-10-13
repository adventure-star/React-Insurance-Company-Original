import React, { Component } from 'react'
import Styled from 'styled-components'
import Theme from '../Styles/Theme.js'
import SelectedQuotationCard from '../components/BuyPolicyComponents/SelectedQuotationCard.js'
import SelectedQuotationCardMobile from '../components/BuyPolicyComponents/SelectedQuotationCardMobile.js'
import AccordionFormUser from '../components/BuyPolicyComponents/AccordionFormUser.js'
import AccordionFormVehicle from '../components/BuyPolicyComponents/AccordionFormVehicle.js'
import AccordionFormPictures from '../components/BuyPolicyComponents/AccordionFormPictures.js'
import Button from '../components/Button/Button.js'
import { getDataToSignUp, getQuote } from '../utils/data.js'

const BuyPolicyContainer = Styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 15% 62px 15%;
    @media (max-width: 1365px) {
    margin: 0px 6% 46px 6%;
  }
  @media (max-width: 676px) {
    margin: 0px 5%;
  }
`;
const QuotationTitle = Styled.div`
    margin: 120px 0px 48px 0px;
    text-align: center;
    .title-text{
        font-family: ${Theme.primaryFont};
        font-size: 32px;
        font-weight: 100;
        color: ${Theme.black};
        margin: 0px 80px;
    }
    .title-text span{
        font-weight: 700;
        color: ${Theme.secondaryColor};
    }
    @media (max-width: 1365px) {
    margin: 120px 0px 48px 0px;
    .title-text{
        font-size: 24px;
        margin: 0px;
    }
    }
    @media (max-width: 767px) {
    margin: 120px 0px 48px 0px;
    .title-text{
        font-size: 20px;
        margin: 0px;
        font-weight: 300;
    }
    }
`
const BuyMainSection = Styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    .forms-container{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin: 0px;
        width: 55%;
    }
    .quotation-container{
        display: flex;
        justify-content: center;
        height: 624px;
        margin: 0px 0px 45px 0px;
        width: 36%
    }
    .quotation-container-mobile{
        display: none;
    }
    .msg-line{
        display: flex;
        width: 100%;
        margin-bottom: 23px;
        border: 1px solid ${Theme.grey};
        border-radius: ${Theme.radius};
        box-shadow: ${Theme.shadow};
    }
    .msg-line p{
        font-family: ${Theme.secondaryFont};
        font-size: 8px;
        color: ${Theme.darkGrey};
        text-align: left;
        margin: 8px 20px;
    }
    @media (max-width: 1365px) {
    .forms-container{
        width: 55%;
    }
    .quotation-container{
        width: 36%
    }
    .quotation-container-mobile{
        display: none;
    }
    }
    @media (max-width: 767px) {
        flex-direction: column-reverse;
        align-items: center;
        .forms-container{
        width:100%;
        align-items: center;
        margin-bottom: 37px;
        margin-top: 32px;
        }
        .quotation-container{
        display: none;
        }
        .quotation-container-mobile{
        display: flex;
    }
    }
`
export default class BuyPolicy extends Component {
    constructor(){
        super()
            this.state = {
                policyData: null,
                btnActive: false,
                SelectedQuotation: '',
                surname: '',
                brand: ''
            }
            this.getUserData = this.getUserData.bind(this)
            this.getVehicleData = this.getVehicleData.bind(this)
            this.getVehiclePictures = this.getVehiclePictures.bind(this)
    }
    componentDidMount(){
        let name = localStorage.getItem('Name')  
        let LeadID = localStorage.getItem('LeadID')
        let VehicleID = localStorage.getItem('VehicleID')
        let QuoteID = localStorage.getItem('QuoteID')
        console.log("en local", LeadID, VehicleID, QuoteID)
        if(LeadID !== null && VehicleID !== null && QuoteID !== null){
            getDataToSignUp(LeadID, VehicleID, QuoteID)
                .then( res =>{
                    console.log("res getData", res)
                    this.setState({
                        name: res.lead.name,
                        surname: res.lead.last,
                        email: res.lead.email,
                        phone: res.lead.phone,
                        dni: res.lead.dni,
                        province: res.lead.address,
                        zipCode: res.lead.cp,
                        LeadID: res.lead.hash,
                        hiringDate: res.dateToHire,
                        QuoteID
                    })
                    if(res.lead.vehicles[0]){
                        this.setState({
                            VehicleID,
                            brand: res.lead.vehicles[0].brand,
                            model: res.lead.vehicles[0].model,
                            domain: res.lead.vehicles[0].domain,
                            year: res.lead.vehicles[0].year,
                            chassis: res.lead.vehicles[0].chassis,
                            engine: res.lead.vehicles[0].engine,
                            isNew: res.lead.vehicles[0].isNew,
                            isCar: res.lead.vehicles[0].isCar
                        })
                    }
                    console.log(res)
                })
            getQuote(QuoteID)
            .then(res=> {
                this.setState({selectedPolicy: res})
                console.log("selected", res)
            })
        }
    }
    renderSelectedQuotation(){
        let option = this.state.selectedPolicy
        if(option !== undefined && option !== null){
            return <SelectedQuotationCard 
                        brand={option.insurerObj.id}
                        policy={option.coverage.name}
                        coverageId={option.coverage.id}
                        price={option.price}
                        description={option.description}
                        sumInsured={option.sumInsured}
                        franchise={option.franchise}
                        key={option.id}
                        isHigisHighlighted={option.isHighlighted}
                        />
        }
    } 
    renderSelectedQuotationMobile(){
        let option = this.state.selectedPolicy
        if(option !== undefined && option !== null){
            return <SelectedQuotationCardMobile 
                brand={option.insurerObj.id}
                policy={option.coverage.name}
                coverageId={option.coverage.id}
                price={option.price}
                description={option.description}
                sumInsured={option.sumInsured}
                key={option.id}
                isHigisHighlighted={option.isHighlighted}
                />
        }
    }
    getUserData(person, name, surname, birth, email, phone, dni, address, addressNumber, addressFloor, addressDepartment, province, city, zipCode, hiringDate){
        this.setState({...this.state, person, name, surname, birth, email, phone, dni, address, addressNumber, addressFloor, addressDepartment, province, city, zipCode, hiringDate, userValidated: true})
    }
    getVehicleData(brand, model, patent, year, chassis, motor, isNew, isCar){
        this.setState({...this.state, brand, model, patent, year, chassis, motor, vehicleValidated: true})

    }
    getVehiclePictures(fileOne = null, fileTwo = null, fileThree = null, fileFour = null, fileFive = null, fileSix = null){
        console.log("datos enviados")
        this.setState({...this.state, fileOne, fileTwo, fileThree, fileFour, fileFive, fileSix})
    }
    handleClick(){
        window.location.href = '/Pago'
    }
    render() {
        return (
            <BuyPolicyContainer>
                <QuotationTitle>
                        <p className="title-text"><span>{`${this.state.name !== undefined ? this.state.name : ''}, `}</span>excelente elección.</p> 
                        <p className="title-text">Cada vez falta menos para que tengas el seguro de tu auto</p>
                </QuotationTitle>
                <BuyMainSection>
                    <div className="forms-container">
                        <AccordionFormUser getUserData={this.getUserData} userData={this.state}/>
                        <AccordionFormVehicle getVehicleData={this.getVehicleData} vehicleData={this.state}/>
                        <AccordionFormPictures getVehiclePictures={this.getVehiclePictures}/>
                    <div className="msg-line">
                            <img src="/assets/icons/info.svg" alt="políticas de privacidad" className="icon-message" />
                            <p>Poolpo es un sitio seguro. Toda tu información la mantenemos protegida. No la compartimos con terceros.</p>
                    </div>
                        <Button text={"Contratar"} bg={"green"} 
                        action={()=> this.handleClick()}
                        active={this.state.vehicleValidated && this.state.userValidated ? true : false}
                        />
                    </div>
                    <div className="quotation-container">
                        {this.renderSelectedQuotation()}
                    </div>
                    <div className="quotation-container-mobile">
                        {this.renderSelectedQuotationMobile()}
                    </div>
                </BuyMainSection>
            </BuyPolicyContainer>
        )
    }
}
