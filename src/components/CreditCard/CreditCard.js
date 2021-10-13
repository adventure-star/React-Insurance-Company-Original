import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import './CreditCard.css'
import styled from 'styled-components';
import Theme from '../../Styles/Theme.js'
import Button from '../Button/Button.js'
import { sendCreditCard } from '../../utils/data.js'
import { validOption, validName, validCard, validExpirationDate } from '../../utils/FormValidation';
import amplitude from "amplitude-js";

const CreditCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin: auto;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 13px;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.14);
    .card-main-section{
      display: flex;
      width: 100%;
      margin-top: 36px;
    }
    .credit-card-container{
      width: 55%;
      padding-top: 30px;
    }
    .card-form-title{
      font-family: ${Theme.primaryFont};
      font-size: 20px;
      text-align: left;
      color: ${Theme.secondaryColor};
      margin: 25px 0px 0px 55px; 
    }
    form{
      width: 50%;
      margin-right: 5%;
    }
    .card-button{
      display: flex;
      justify-content: flex-end;
      margin-top: 27px;
      margin-bottom: 41px;
    }
    @media (max-width: 1365px) {
      justify-content: center;
      align-items: center;
      .card-main-section{
        flex-direction: column;
        align-items: center;
        margin: 0px;
      }
      .card-form-title{
        margin: 25px 0px 0px 55px;
        display: none;
      }
      .credit-card-container{
        width: 100%;
      }
      form{
        width: 300px;
        margin: 27px 0px 0px 0px;
      }
    }
    @media (max-width: 767px) {
      width:95%;
      padding: 0px 10px;
      border: none;
      box-shadow: none;
      .card-form-title{
        font-size: 16px;
        margin: 25px 0px 25px 0px; 
        align-self: flex-start;
      }
      .credit-card-container{
        padding-top: 0px;
      }
      form{
        width: 100%;
        padding: 30px 10px 30px 10px;
      }
      .card-button{
        margin-bottom: 0px;
      }

    }
`


export default class CreditCard extends Component {
  constructor(props){
    super(props)
      this.state = {
          cvc: '',
          expiry: '',
          focus: '',
          name: '',
          number: '',
          bank: '',
          date: '',
          formCompleted: false,
          acceptedCards: ['visa', 'mastercard', 'amex'],
        };
        this.handleInputFocus = this.handleInputFocus.bind(this)
  }

      componentDidMount = () => {
        let customerId = this.props.customerId
        let quoteId = this.props.quoteId
        let name = this.props.name
        this.setState({...this.state, quoteId, customerId, name})
        console.log(this.props)
      }

      componentDidUpdate = () => {
        if(this.state.formCompleted){
          validCard(this.state.number, this.number, this.numberError)
          validName(this.state.name, this.name, this.nameError)
          validOption(this.state.bank, this.bank, this.bankError)
          validExpirationDate(this.state.expirationDate, this.expirationDate, this.expirationError)
        }
      }

      handleInputChangeCard = (e) => {
        const { name, value } = e.target;
        if(value.length < 17){
          this.setState({ [name]: value });
        }
      }

      handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
      }
      
      handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      }

      handleBank(e){
        this.setState({bank: e.target.value})
      }
      handleDate(e){
        this.setState({expirationDate: e.target.value})
      }
     
      handleClick(e){
        e.preventDefault()
        const cardNumber = validCard(this.state.number, this.number, this.numberError)
        const name = validName(this.state.name, this.name, this.nameError)
        const bank = validOption(this.state.bank, this.bank, this.bankError)
        const expirationDate = validExpirationDate(this.state.expirationDate, this.expirationDate, this.expirationError)
        const prefix = this.state.number.slice(0,2)
        if(cardNumber && name && bank && expirationDate){
            this.setState({...this.state, expanded: false, validated: true})
            amplitude.getInstance().logEvent("Fill Credit Card form");
            this.props.loading(true)
            sendCreditCard(this.state.number, this.state.cardBrand, this.state.name, this.state.bank, this.state.expirationDate, this.props.customerId, this.state.quoteId) 
            .then(res => {
              console.log("respuesta credit card", res)
              if(res.error === true){
                this.props.loading(false)
                console.log("error enviando tarjeta", res)
                // handle errors
              }
            }) 
        } else {
          this.setState({...this.state, formCompleted: true})
        }
      }

      renderNumber(number){
        if(number.length < 17){
          return number
        }
      }
      
      render() {
        return (
          <CreditCardContainer>
            <p className="card-form-title" >Completá los datos de tu Tarjeta</p>
            <div className="card-main-section">
              <div className="credit-card-container">
                <Cards
                  cvc={this.state.cvc}
                  focused={this.state.focus}
                  name={this.state.name}
                  number={this.state.number}
                  placeholders={{name: 'TU NOMBRE'}}
                  acceptedCards={this.state.acceptedCards}
                />
              </div>
              <form>
              <div className="form-line">
                      <label htmlFor="number" className="form-label">Número de tarjeta</label>
                      <input className="text-field" name="number" id="number" 
                      ref={ number => this.number = number}
                      onChange={this.handleInputChangeCard}
                      onFocus={this.handleInputFocus}
                      type="text"
                      pattern="\d*"
                      maxLength="16"
                      />
                      <p className="text-field-error" ref={ numberError => this.numberError = numberError}>Colocá el número de tu tarjeta de crédito</p>
                  </div>
                  <div className="form-line">
                    <label for="name" className="form-label">Nombre y Apellido</label>
                    <input className="text-field"
                    type="text"
                    name="name"
                    id="name"
                    ref={ name => this.name = name}
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    maxLength="23"
                  />
                  <p className="text-field-error" ref={ nameError => this.nameError = nameError}>Colocá tu nombre y apellido completos (Ej: Juan Pérez)</p>
                  </div>
                  <div className="form-line">
                    <label for="bank" className="form-label">Banco</label>
                    <input className="text-field" type="text" name="bank" id="bank" 
                    ref={ bank => this.bank = bank}
                    onChange={(e) => this.handleBank(e)}/>
                      <p className="text-field-error" ref={ bankError => this.bankError = bankError}>Colocá el nombre de tu banco</p>
                  </div>
                  <div className="form-line">
                    <label for="expiration-date" className="form-label">Fecha de vencimiento</label>
                    <input className="text-field" type="text" name="expiration-date" id="expiration-date" 
                    ref={ expirationDate => this.expirationDate = expirationDate}
                    onChange={(e) => this.handleDate(e)}
                    placeholder="12/23"
                    />
                    <p className="text-field-error" ref={ expirationError => this.expirationError = expirationError}>Colocá una fecha de vencimiento válida(Ej: 12/23)</p>
                  </div>
                  <div className="card-button">
                    <Button text={"Contratar"} bg={"green"} action={(e)=> this.handleClick(e)} active={this.state.btnActive} />
                  </div>
              </form>
            </div>
          </CreditCardContainer>
        );
      }
}
