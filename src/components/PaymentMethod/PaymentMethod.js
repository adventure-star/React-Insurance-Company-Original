import React, { Component } from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap'
import Theme from '../../Styles/Theme.js'
import Button from '../../components/Button/Button.js'
import { validOption } from '../../utils/FormValidation';
const PaymentMethodContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin: auto;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 13px;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.14);
    .payment-main-section{
      display: flex;
      width: 100%;
      margin-top: 36px;
    }
    .credit-card-container{
      width: 55%;
      padding-top: 30px;
    }
    .payment-form-title{
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
    @media (max-width: 1365px) {
      border: none;
      box-shadow: none;
      justify-content: center;
      align-items: center;
      .payment-main-section{
        flex-direction: column;
        align-items: center;
        margin: 0px;
      }
      .payment-form-title{
        margin: 0;
      }
      form{
        width: 300px;
        margin: 27px 0px 0px 0px;
      }
    }
    @media (max-width: 767px) {
      .payment-form-title{
        font-size: 16px;
        margin: 25px 0px 25px 0px; 
      }
      .payment-card-container{
        padding-top: 0px;
      }
      form{
        width: 256px;
      }
      .card-button{
        margin-bottom: 0px;
      }

    }
`

export default class PaymentMethod extends Component {
    render() {
        return (
            <PaymentMethodContainer>
                <p className="payment-form-title" >Datos de Pago</p>
                <div className="card-main-section">
                <form>
                <div className="form-line">
                        <label htmlFor="payment-method" className="form-label">Forma de pago</label>
                        <input className="text-field" type="tel" name="payment-method" id="payment-method" 
                        ref={ payment => this.payment = payment}
                        onChange={this.handleInputChangeCard}
                        onFocus={this.handleInputFocus}
                        pattern="/^[0-9]{16}$/"
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
                        <Form.Control as="select" onChange={(e) => this.handleBank(e)} className="select-field" ref={ bank => this.bank = bank} value={this.state.bank}>
                            <option key="select-an-option" value="0">Elegí una opción</option>
                            {this.renderBankOptions()}
                        </Form.Control>
                        <p className="text-field-error" ref={ bankError => this.bankError = bankError}>Elegí tu provincia de residencia</p>
                    </div>
                    <div className="form-line">
                        <label for="expiration-date" className="form-label">Fecha de vencimiento</label>
                        <input className="text-field" type="text" name="expiration-date" id="expiration-date" 
                        ref={ date => this.date = date}
                        onChange={(e) => this.handleDate(e)}/>
                        <p className="text-field-error" ref={ expirationError => this.expirationError = expirationError}>Colocá la fecha de vencimiento (Ej: 12/22)</p>
                    </div>
                    <div className="card-button">
                        <Button text={"Contratar"} bg={"green"} action={(e)=> this.handleClick(e)} active={this.state.btnActive} />
                    </div>
                </form>
                </div>
            </PaymentMethodContainer>
        )
    }
}
