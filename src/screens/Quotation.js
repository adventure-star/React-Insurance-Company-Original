import React, { Component } from 'react'
import Styled from 'styled-components'
import Theme from '../Styles/Theme.js'
import QuotationStyles from '../Styles/QuotationStyles.js'
import { getQuotesByVehicle, getLeadData } from '../utils/data.js'
import QuotationCard from '../components/QuotationCard/QuotationCard.js'
import StaticModal from '../components/LoadingModal/StaticModal.js'
import Button from '../components/Button/Button.js'
import Resign from './Resign'

const QuotationDiv = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    .quotation-desktop{
        display:flex;
        flex-direction: column;
    }
    .quotation-tablet{
        display:flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    .quotation-mobile{
        display:flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
`
const QuotationCardsContainer = Styled.div`
    display: flex;
    justify-content: center;
    // height: 624px;
    margin: 0px 0px 45px 0px;
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
`
const ResignButton = Styled.div`
    margin: 10px 0px 30px 0px;
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
export default class Quotation extends Component {
    constructor(props){
        super(props)
            this.state = {
                leadID: '',
                groupID: '',
                vehicleID: '',
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
        if(this.props.width > 1365){
          this.getAllData(LeadID, VehicleID)
        }
    }

    componentDidUpdate(prevProps){
        console.log("ancho en props update", this.props.width)
        if(this.props.width !== prevProps.width && this.props.width > 1365){
            this.setState({width: this.props.width})
            this.getAllData()
        }
    }

    componentWillUnmount() {
        this.abortController.abort()
      }

    getAllData(LeadID, VehicleID){
        getLeadData(LeadID)
        .then(res => {
            if(res.vehicles[0] !== undefined && res.vehicles[0] !== null){
                let currentVehicle = res.vehicles.filter((item)=> {
                    return item.hash === VehicleID
                })
                this.setState({...this.state, userVehicle: `${currentVehicle[0].brand} ${currentVehicle[0].model}`})
            }
        })
        if(LeadID && VehicleID){
        console.log("getQuotesByVehicle")
        getQuotesByVehicle(VehicleID, LeadID, {signal: this.abortController.signal})
        .then(res => {
            if(res.quotationOptions !== undefined && res.quotationOptions.length > 0){
                console.log("lead data", res)
                this.setState({...this.state, name: res.name, quotationOptions: res.quotationOptions, leadID: LeadID, vehicleID: VehicleID, groupID: '', loading: false})
                console.log("pidiendo cotizaciones a quotesByVehicle", res.quotationOptions)
                localStorage.setItem('Name', res.name)
            } else {
                console.log(res)
                //window.location.href = "/Error"
            }
        })
        } else {
            window.location.href = "/"
        }
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

    renderCardsQuotation(){
                let options = this.state.quotationOptions
                console.log("opciones de cotizacion", options)
                if(options.length > 0){
                return options.map((item, i) =>{
                        return( <QuotationCard 
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
                            isHighlighted={item.isHighlighted}
                            months={item.months}
                            />)
                })
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
                <div className="quotation-desktop">
                    <QuotationTitle>
                        {/* <p className="title-text"><span>{`${this.state.name}, `}</span>estas son las recomendaciones inteligentes que conseguimos para vos y tu auto</p> */}
                        <p className="title-text"><span>{`${this.state.name}`}</span>, 
                        aprovechá estas ofertas para tu <span>{` ${this.state.userVehicle}`} </span>
                        y empezá a ahorrar hoy mismo!
                        </p>
                    </QuotationTitle>
                    { this.state.quotationOptions !== null ?
                    <QuotationCardsContainer>
                        {this.renderCardsQuotation()}
                    </QuotationCardsContainer> 
                    : false }

                </div>

            </QuotationDiv>
                {this.state.loading === true && <StaticModal number={0}/> }

            
                <ResignButton>
                    <Button className="button" text={"¿Cómo dar de baja el seguro actual?"} bg={"red"} action={() => this.handleClick()} />
                </ResignButton>
            <QuotationStyles />
            {this.state.isResign && <Resign dismissModal={() => this.setState({'isResign': false})}/>}
            </div>
        )
    }
}