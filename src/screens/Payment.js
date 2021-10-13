import React, { Component } from 'react'
import Styled from 'styled-components'
import Theme from '../Styles/Theme'
import { Form, Select } from 'react-bootstrap'
import { allowedPaymentMethod, getQuote } from '../utils/data.js'
import Button from '../components/Button/Button.js'
import StaticModal from '../components/LoadingModal/StaticModal.js'
import SelectedQuotationCard from '../components/BuyPolicyComponents/SelectedQuotationCard.js'
import SelectedQuotationCardMobile from '../components/BuyPolicyComponents/SelectedQuotationCardMobile.js'
import CreditCard from '../components/CreditCard/CreditCard.js'
import CBU from '../components/CBU/CBU.js'
import { Amplitude } from "@amplitude/react-amplitude";

const PaymentContainer = Styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 7% 0px 7%;
    @media (max-width: 1365px) {
    margin: 0px 6%;
    height: 1065px;
    }
    @media (max-width: 676px) {
        margin: 0;
        padding: 0px 5%;
        min-height: 920px;
    }
`
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
        font-size: 16px;
        margin: 0px;
        font-weight: 300;
    }
    }
`

const PaymentSection = Styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 49px;
    .method-container{
        display: flex;
        flex-direction: column;
        background-color: #fff;
        margin: 0px 0px 44px 0px;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 13px;
        box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.14);
    } 
    .method-form-title{
      font-family: ${Theme.primaryFont};
      font-size: 20px;
      text-align: left;
      color: ${Theme.secondaryColor};
      margin: 25px 0px 0px 55px; 
    }
    .method-form{
        padding: 30px 55px 30px 55px;
    }
    .card-form-container{
        width: 65%;
    }
    .payment-container-mobile{
        display: none;
    }
    @media (max-width: 1365px) {
    .card-form-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .payment-container{
        display: flex;
        justify-content: center;
        width: 50%
    }
    .payment-container-mobile{
        display: none;
    }
    }
    @media (max-width: 767px) {
        flex-direction: column-reverse;
        align-items: center;
        .card-form-container{
            width:100%;
            align-items: center;
            margin-bottom: 0px;
            margin-top: 23px;
        }
        .method-form{
            padding: 30px 10px 0px 10px;
        }
        .method-form-title{
            margin: 25px 0px 0px 10px;
            font-size: 16px;
        }
        .method-container{
            border: none;
            box-shadow: none;
    } 
        .payment-container{
            display: none;
        }
        .payment-container-mobile{
        display: flex;
    }
    }
`

export default class Payment extends Component {
    constructor() {
        super()
        this.state = {
            btnActive: false,
            paymentMethod: '',
            selectMethod: '',
            loading: false
        }
        this.loading = this.loading.bind(this)
    }
    componentDidMount() {
        console.log(this.props)
        let customerId = this.props.match.params.customerId
        let name = localStorage.getItem('Name')
        let quoteId = this.props.match.params.quoteId
        this.setState({ ...this.state, name, customerId, quoteId })
        getQuote(quoteId)
            .then(res => {
                this.setState({ selectedPolicy: res })
            })
        allowedPaymentMethod(customerId, quoteId).then(res => {
            if (res.length > 1) {
                this.setState({ ...this.state, customerId, name, paymentMethod: res })
            } else {
                this.setState({ ...this.state, customerId, name, selectMethod: res[0] })
            }
        })
    }
    renderSelectedQuotation() {
        let option = this.state.selectedPolicy
        if (option !== undefined && option !== null) {
            return <SelectedQuotationCard
                brand={option.insurerObj.id}
                policy={option.coverage.name}
                coverageId={option.coverage.id}
                price={option.price}
                description={option.description}
                sumInsured={option.sumInsured}
                key={option.id}
            />
        }
    }
    renderSelectedQuotationMobile() {
        let option = this.state.selectedPolicy
        if (option !== undefined && option !== null) {
            return <SelectedQuotationCardMobile
                brand={option.insurerObj.id}
                policy={option.coverage.name}
                coverageId={option.coverage.id}
                price={option.price}
                description={option.description}
                sumInsured={option.sumInsured}
                key={option.id}
            />
        }
    }
    handleMethod(e) {
        this.setState({ ...this.state, selectMethod: e.target.value })
    }
    loading(bool) {
        this.setState({ ...this.state, loading: bool })
    }
    render() {
        return (
            <div>
                <PaymentContainer>
                    <QuotationTitle>
                        <p className="title-text"><span>{`${this.state.name}, `}</span>excelente elección</p>
                        <p className="title-text">cada vez falta menos para que tengas el seguro de tu auto</p>
                    </QuotationTitle>
                    <PaymentSection>
                        <div className="card-form-container">
                            {this.state.paymentMethod.length === 2 ?
                                <div className="method-container">
                                    <p className="method-form-title" >Datos de Pago</p>
                                    <form className="method-form">
                                        <div className="form-line">
                                            <label htmlFor="method" className="form-label">Método de pago</label>
                                            <Amplitude eventProperties={inheritedProps => ({ ...inheritedProps })}>
                                                {({ logEvent }) => (
                                                    <select onChange={ e => {logEvent(e.target.value); this.handleMethod(e)}} className="select-field" ref={brand => this.brand = brand}>
                                                        <option value="">Elegí una opción</option>
                                                        <option value="CBU">CBU</option>
                                                        <option value="Credit Card">Tarjeta de crédito</option>
                                                    </select>
                                                    // <ul className="select-field" ref={brand => this.brand = brand}>
                                                    //     <li onClick={instrument('CBU', handleMethod('CBU'))}>CBU</li>
                                                    //     <li onClick={instrument('CBU', handleMethod('Credit Card'))}>Tarjeta de crédito</li>
                                                    // </ul>
                                                )}
                                            </Amplitude>

                                            <p className="text-field-error" ref={methodError => this.methodError = methodError}>Colocá tu nombre y apellido completos (Ej: Juan Pérez)</p>
                                        </div>
                                    </form>
                                </div>
                                : <div></div>}
                            {this.state.selectMethod === 'CBU' && <CBU customerId={this.state.customerId} name={this.state.name} quoteId={this.state.quoteId} loading={this.loading} />}
                            {this.state.selectMethod === 'Credit Card' && <CreditCard customerId={this.state.customerId} name={this.state.name} quoteId={this.state.quoteId} loading={this.loading} />}
                        </div>
                        <div className="payment-container">
                            {this.renderSelectedQuotation()}
                        </div>
                        <div className="payment-container-mobile">
                            {this.renderSelectedQuotationMobile()}
                        </div>
                    </PaymentSection>
                </PaymentContainer>
                {this.state.loading && <StaticModal number={1} />}
            </div>
        )
    }
}
