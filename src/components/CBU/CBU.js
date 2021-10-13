import React, { Component } from 'react';
import Styled from 'styled-components';
import Theme from '../../Styles/Theme.js'
import Button from '../Button/Button.js'
import { sendCbu } from '../../utils/data.js'
import { validCbu } from '../../utils/FormValidation.js';
import amplitude from "amplitude-js";

const CbuContainer = Styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin: 0px 0px 44px 0px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 13px;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.14);
    .cbu-form-title{
      font-family: ${Theme.primaryFont};
      font-size: 20px;
      text-align: left;
      color: ${Theme.secondaryColor};
      margin: 25px 0px 0px 55px; 
    }
    form{
        padding: 30px 55px 30px 55px;
    }
    .card-button{
      display: flex;
      justify-content: flex-end;
      margin-top: 27px;
      margin-bottom: 20px;
    }
    @media (max-width: 767px) {
      border: none;
      box-shadow: none;
      .cbu-form-title{
        font-size: 16px;
        margin: 10px 0px 25px 10px; 
      }
      .card-form-title{
        font-size: 16px;
        margin: 10px 0px 25px 10px; 
        align-self: flex-start;
      }
      .credit-card-container{
        padding-top: 0px;
      }
      form{
        width: 95%;
        padding: 30px 10px 30px 10px;
      }
      .card-button{
        margin-bottom: 0px;
      }

    }

`

export default class CBU extends Component {
    constructor(props){
        super(props)
        this.state = {
            cbu: '',
            name: '',
            formCompleted: false,
            loading: false
        }
    }
    componentDidMount(){
        let quoteId = localStorage.getItem('QuoteID')
        this.setState({...this.state, quoteId})
        console.log(this.props)
    }
    componentDidUpdate(){
      if(this.state.formCompleted){
        validCbu(this.state.cbu, this.cbu, this.cbuError)
      }
    }

    handleCbu(e){
        this.setState({...this.state, cbu: e.target.value})
    }

    handleClick(e){
        e.preventDefault()
        const cbu = validCbu(this.state.cbu, this.cbu, this.cbuError)
        console.log("validCbu", cbu)
        this.setState({formCompleted: true})
        if(cbu === true){
            this.props.loading(true)
            this.setState({loading: true})
            amplitude.getInstance().logEvent("Fill CBU form");
            sendCbu(this.state.cbu, this.props.customerId, this.state.quoteId)
            .then(res => {
              if(res.error === true){
                this.props.loading(false)
                // handle errors
              } else {
                return
              }
            }) 
        } 
      }

    render() {
        return (
            <CbuContainer>
                 <p className="cbu-form-title" >Completá los datos de tu CBU</p>
                 <form>
                    <div className="form-line">
                        <label for="cbu" className="form-label">Número de CBU</label>
                        <input className="text-field"
                        type="text"
                        pattern="\d*"
                        name="cbu"
                        id="cbu"
                        ref={ cbu => this.cbu = cbu}
                        onChange={(e) => this.handleCbu(e)}
                        maxLength="22"
                    />
                    <p className="text-field-error" ref={ cbuError => this.cbuError = cbuError}>Colocá los 22 dígitos de tu CBU sin espacios</p>
                    </div>
                    <div className="card-button">
                    <Button text={"Contratar"} bg={"green"} action={(e)=> this.handleClick(e)} active={this.state.btnActive} />
                  </div>
                </form>
            </CbuContainer>
        )
    }
}
