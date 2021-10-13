import React, { Component } from 'react'
import Styled from 'styled-components'
import Theme from '../Styles/Theme.js'
import Carousel from "react-elastic-carousel";
import { getQuotations, getQuotesByVehicle, getLeadData } from '../utils/data.js'
// import '../Styles/QuotationTablet.css'
import QuotationCardTablet from '../components/QuotationCard/QuotationCardTablet.js'
import StaticModal from '../components/LoadingModal/StaticModal.js'
import Button from '../components/Button/Button.js'
import Resign from './Resign'

const QuotationDiv = Styled.div`
    display: flex;
    flex-direction: column;
    .quotation-desktop{
        display:flex;
        flex-direction: column;
    }
    .quotation-tablet{
        display:flex;
        flex-direction: column;
        margin-bottom: 98px;
        height: 965px;
    }
    .quotation-mobile{
        display:flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    .selected{
        transform: scale(1.05);
        animation: selected 0.5s;
    }
    .selected > div{
        border: 0.5px solid ${Theme.secondaryColor};
    }
    @keyframes selected{
        0%{
            transform: scale(1);
        }
        100%{
            transform: scale(1.05);
        }
    }
    .cAStEU, .kixxG{
        display: none;
    }
    .fZKcvR{
        width: 10px;
        height: 15px;
        border-radius: 50%;
        border: 1px solid ${Theme.secondaryColor};
        background-color: ${Theme.secondaryColor};
        box-shadow: 0 0 1px 1px ${Theme.secondaryColor};
    }
    .ewsWne{
        width: 10px;
        height: 15px;
        border-radius: 50%;
        border: 1px solid ${Theme.secondaryColor};
        background-color: ${Theme.white};
        box-shadow: 0 0 1px 1px ${Theme.grey};
    }
    
    .whatsapp-button{
        position: fixed;
        bottom: 20px;
        right: 20px;
     }
`
const QuotationCardsContainer = Styled.div`
    display: flex;
    justify-content: center;
    margin: 0px 0px 45px 0px;
    .quotation-card-container-tablet > div{
        overflow: hidden;
    }

    .rec-arrow, .rec-arrow:disabled,.rec-arrow:hover:enabled, .rec-arrow:focus:enabled {
        background: transparent;
        margin: 0px 80px 0px 80px;
        color: ${Theme.secondaryColor};
    }
    .rec-dot_active{
        background-color: ${Theme.secondaryColor} !important;
        box-shadow: 0 0 1px 0px ${Theme.secondaryColor};
        height: 12px;
    }
    .rec-dot{
        background-color: ${Theme.white};
        border: 1px solid ${Theme.secondaryColor};
        box-shadow: 0 0 1px 0px ${Theme.secondaryColor};
        height: 12px;
        margin: 0px 15px;
    }
`
const QuotationTitle = Styled.div`
    margin: 120px 0px 48px 0px;
    display: flex;
    justify-content: center;
    .title-text{
        font-family: ${Theme.primaryFont};
        font-size: 32px;
        font-weight: 100;
        color: ${Theme.black};
        margin: 0px 20%;
    }
    .title-text span{
        font-weight: 700;
        color: ${Theme.secondaryColor};
    }
    @media (max-width: 1365px) {
        .title-text{
        font-size: 22px;
        font-weight: 100;
        color: ${Theme.black};
        margin: 0px 14%;
        }
    }
`


const ResignButton = Styled.div`
    margin: 0px 0px 48px 0px;
    text-align: center;
    justify-content: center;
    .title-text{
        font-family: ${Theme.primaryFont};
        font-size: 24px;
        font-weight: 100;
        color: ${Theme.black};
        margin: 0px 20%;
    }
`
const breakPoints = [
    { width: 1, itemsToShow: 1},
    { width: 768, itemsToShow: 1, itemsToScroll: 3 }
  ];

export default class QuotationTablet extends Component {
    constructor(props){
        super(props)
            this.state = {
                leadID: '',
                name: '',
                quotationOptions: null,
                currentCard: 1,
                loading: true,
                isResign: false
            }
        this.getOption = this.getOption.bind(this)
    }

    abortController = new AbortController()

    componentDidMount(){
        let LeadID = this.props.match.params.leadId
        let VehicleID = this.props.match.params.vehicleId
        if(this.props.width < 1366 && this.props.width > 767 ){
          this.getAllData(LeadID, VehicleID)
        }
    }
    
    componentWillUnmount() {
        this.abortController.abort()
      }

    componentDidUpdate(prevProps){
        console.log("ancho en props update", this.props.width)
        if(this.props.width !== prevProps.width && this.props.width < 1366 && this.props.width > 767 ){
            this.setState({width: this.props.width})
            this.getAllData()
        }
    }
    getAllData(LeadID, VehicleID){
        getLeadData(LeadID)
        .then(res => {
            if(res && res.vehicles[0] !== undefined && res.vehicles[0] !== null){
                let currentVehicle = res.vehicles.filter((item)=> {
                    return item.hash === VehicleID
                })
                this.setState({...this.state, userVehicle: `${currentVehicle[0].brand} ${currentVehicle[0].model}`})
            }
        })
        if(LeadID && VehicleID){
        // console.log("getQuotesByVehicle")
        getQuotesByVehicle(VehicleID, LeadID, {signal: this.abortController.signal})
        .then(res => {
            if(res && res.quotationOptions !== undefined && res.quotationOptions.length > 0){
                console.log("lead data", res)
                this.setState({...this.state, name: res.name, quotationOptions: res.quotationOptions, leadID: LeadID, vehicleID: VehicleID, groupID: '', loading: false})
                console.log("pidiendo cotizaciones a quotesByVehicle", res.quotationOptions)
                localStorage.setItem('Name', res.name)
            } else {
                console.log("Falla acá: "+res)
                //window.location.href = "/Error"
            }
        })
        } else {
            window.location.href = "/"
        }
    }

    getQuotationOptions(VehicleID, GroupID){
        getQuotations(VehicleID, GroupID, {signal: this.abortController.signal})
        .then(res =>{
            console.log("cotizaciones en segunda vuelta", res)
            this.setState({...this.state, quotationOptions: res, loading: false})
        })
    }
    
    getOption(option){
        let quotationOptions = this.state.quotationOptions
        function filterOptions(quotationOptions){
            return quotationOptions.id === option
        }
        let selectedQuotation = quotationOptions.filter(filterOptions)
        console.log("opcion elegida", selectedQuotation)
        let selectedOption = JSON.stringify(selectedQuotation)
        localStorage.setItem('SelectedPolicy', selectedOption)
        window.location.href = `/Contratar/${this.state.leadID}/${this.state.vehicleID}/${option}`
    }

    renderCardsQuotationTablet(){
        let options = this.state.quotationOptions
        console.log(options)
        if(options.length > 0){
            return options.map ((item, i) =>{
                    console.log("ids", item.id)
                    // this.setState({...this.state, loading: false})
                    return( 
                    <div className="quotation-card-container-tablet" key={i}>
                        <QuotationCardTablet 
                            quoteId={item.id}
                            brand={item.insurerObj.id}
                            policy={item.coverage.name}
                            coverageId={item.coverage.id}
                            price={item.price}
                            description={item.description}
                            franchise={item.franchise}
                            sumInsured={item.sumInsured}
                            getOption={this.getOption}
                            key={i}
                            id={i}
                            isHighlighted={item.isHighlighted}
                            months={item.months}
                            />
                    </div>
                        )
            } 
            )
        } else {
            //window.location.href = "/Error"
        }
    }
    handleClick(){
            // window.open('/como-tramitar-la-baja', '_blank');
            this.setState({'isResign': true})
    }
    render() {
        return (
            <div>
            <QuotationDiv>   
                <div className="quotation-tablet">
                <QuotationTitle>
                <p className="title-text"><span>{`${this.state.name}`}</span>, 
                        aprovechá estas ofertas para tu <span>{` ${this.state.userVehicle}`} </span>
                        y empezá a ahorrar hoy mismo!
                        </p>

                </QuotationTitle>
                { this.state.quotationOptions !== null ?
                    <QuotationCardsContainer>
                    <Carousel breakPoints={breakPoints}>
                        {this.renderCardsQuotationTablet()}
                    </Carousel>
                    </QuotationCardsContainer> 
                : false }
                </div>
                
            </QuotationDiv>
                {this.state.loading && <StaticModal number={0} /> }

                <ResignButton>
                    <Button className="button" text={"¿Cómo dar de baja el seguro actual?"} bg={"red"} action={() => this.handleClick()} />
                </ResignButton>
                {this.state.isResign && <Resign dismissModal={() => this.setState({'isResign': false})}/>}
            </div>

        )
    }
}