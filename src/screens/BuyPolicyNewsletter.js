import React, { Component } from 'react'
import Styled from 'styled-components'
import Theme from '../Styles/Theme.js'
import SelectedQuotationCard from '../components/BuyPolicyComponents/SelectedQuotationCard.js'
import SelectedQuotationCardMobile from '../components/BuyPolicyComponents/SelectedQuotationCardMobile.js'
import AccordionFormUser from '../components/BuyPolicyComponents/AccordionFormUser.js'
import AccordionFormVehicle from '../components/BuyPolicyComponents/AccordionFormVehicle.js'
import AccordionFormPictures from '../components/BuyPolicyComponents/AccordionFormPictures.js'
import AmplitudeButton from '../components/Button/AmplitudeButton.js'
import LoadingModal from '../components/LoadingModal/StaticModal.js'
import { getLeadData, getQuote, LeadID, getDataToSignUp, scrollUp } from '../utils/data.js'

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
export default class BuyPolicyNewsletter extends Component {
    constructor(props){
        super(props)
            this.state = {
                policyData: null,
                btnActive: false,
                SelectedQuotation: '',
                surname: '',
                brand: '',
                userDataReady: false,
                vehicleDataReady: false,
                leadId: null,
                vehicleId: null,
                quoteId: null, 
                loading: true
            }
            this.getUserData = this.getUserData.bind(this)
            this.getVehicleData = this.getVehicleData.bind(this)
            this.getVehiclePictures = this.getVehiclePictures.bind(this)
            this.getCustomerId = this.getCustomerId.bind(this)
    }
    componentDidMount(){
        let leadId = this.props.match.params.leadId
        let vehicleId = this.props.match.params.vehicleId
        let quoteId = this.props.match.params.quoteId
        this.setState({...this.state, leadId, vehicleId, quoteId})
        // localStorage.setItem('LeadID', this.props.match.params.leadId)
        // localStorage.setItem('VehicleID', this.props.match.params.vehicleId)
        // localStorage.setItem('QuoteID', this.props.match.params.quoteId)
        getDataToSignUp(leadId, vehicleId, quoteId)
        .then( res =>{
            console.log("respuesta buy policy newsletter", res)
            if(res !== undefined){
                this.setState({
                    name: res.lead.name,
                    surname: res.lead.last,
                    email: res.lead.email,
                    phone: res.lead.phone,
                    dni: res.lead.dni,
                    province: res.lead.province,
                    address: res.lead.address,
                    zipCode: res.lead.cp,
                    LeadID: res.lead.hash,
                    hiringDate: res.dateToHire,
                    quoteId,
                    userDataReady: true
                })
                localStorage.setItem('Name', res.lead.name)
                if(res.lead.vehicles[0]){
                    this.setState({
                        vehicleId,
                        brand: res.lead.vehicles[0].brand,
                        model: res.lead.vehicles[0].model,
                        domain: res.lead.vehicles[0].domain,
                        year: res.lead.vehicles[0].year,
                        chassis: res.lead.vehicles[0].chassis,
                        engine: res.lead.vehicles[0].engine,
                        isNew: res.lead.vehicles[0].isNew,
                        isCar: res.lead.vehicles[0].isCar,
                        vehicleDataReady: true
                    })
                }
                console.log("lo que llega a buypolicy", res)
            }
    getQuote(quoteId)
    .then(res=> {
        this.setState({selectedPolicy: res})
        console.log("selected", res)
    })
        console.log("lo que llega a buypolicy", res)
        this.setState({...this.state, loading:false})
    })
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
                        isHighlighted={option.isHighlighted}
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
                isHighlighted={option.isHighlighted}
                />
        }
    }
    getUserData(person, name, surname, birth, email, phone, dni, address, addressNumber, addressFloor, addressDepartment, province, city, zipCode, hiringDate, validated){
        scrollUp()    
        this.setState({...this.state, person, name, surname, birth, email, phone, dni, address, addressNumber, addressFloor, addressDepartment, province, city, zipCode, hiringDate, userValidated: validated})
    }
    getCustomerId(customerId){
        this.setState({...this.state, customerId})
    }
    getVehicleData(vehicleId, brand, model, domain, year, chassis, engine, isCar, isNew){
            this.setState({...this.state, brand, model, domain, year, chassis, engine, vehicleValidated: true})
    }
    getVehiclePictures(fileOne = null, fileTwo = null, fileThree = null, fileFour = null, fileFive = null, fileSix = null){
        console.log("datos enviados")
        this.setState({...this.state, fileOne, fileTwo, fileThree, fileFour, fileFive, fileSix})
    }
    handleClick(){
        window.location.href = `/Pago/${this.state.customerId}/${this.state.quoteId}`
    }
    render() {
        return (
            <div>
            {this.state.loading 
            ?
            null
            :
            <BuyPolicyContainer>
                <QuotationTitle>
                        <p className="title-text"><span>{`${this.state.name}, `}</span>excelente elección.</p> 
                        <p className="title-text">Cada vez falta menos para que tengas el seguro de tu auto</p>
                </QuotationTitle>
                <BuyMainSection>
                    <div className="forms-container">
                        {this.state.userDataReady === true ? <AccordionFormUser getUserData={this.getUserData} getCustomerId={this.getCustomerId} userData={this.state}/> : <div></div>}
                        {this.state.vehicleDataReady ? <AccordionFormVehicle getVehicleData={this.getVehicleData} vehicleData={this.state}/> : <div></div>}
                        {this.state.vehicleDataReady ? <AccordionFormPictures getVehiclePictures={this.getVehiclePictures}/> : <div></div>}
                    <div className="msg-line">
                            <img src="/assets/icons/info.svg" alt="políticas de privacidad" className="icon-message" />
                            <p>Poolpo es un sitio seguro. Toda tu información la mantenemos protegida. No la compartimos con terceros.</p>
                    </div>
                        <AmplitudeButton text={"Contratar"} bg={"green"} 
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
            }
            {/* {this.state.loading ? <LoadingModal /> : null} */}
            </div>
        )
    }
}
