import React, { Component } from 'react'
import Styled from 'styled-components'
import Theme from '../../Styles/Theme.js'

const DetailsContainer = Styled.div`
`

export default class QuotationDetails extends Component{
        constructor(props){
            super(props)
            this.state = {
                coverageId: this.props.coverageId,  
            }
        }
    
    componentDidMount(){
        if(this.props.coverageId === 1){
            this.setState({
                ...this.state,
                fire: false,
                partialDamage: false,
                hail: false,
                totalDamage: false,
                theft: false,
                wheels: false,
                assistance: false,
                cristals: false, 
            })
        } else if(this.props.coverageId === 2) {
            this.setState({
                ...this.state,
                fire: true,
                partialDamage: false,
                hail: false,
                totalDamage: true,
                theft: true,
                wheels: false,
                assistance: false,
                cristals: false
            })
        }else if(this.props.coverageId === 3) {
            this.setState({
                ...this.state,
                fire: true,
                partialDamage: false,
                hail: false,
                totalDamage: true,
                theft: true,
                wheels: false,
                assistance: false,
                cristals: false
            })
        } else if (this.props.coverageId === 4){
            this.setState({
                ...this.state,
                fire: true,
                partialDamage: false,
                hail: true,
                totalDamage: true,
                theft: true,
                wheels: true,
                assistance: true,
                cristals: true
            })
        } else if (this.props.coverageId === 5){
            this.setState({
                ...this.state,
                fire: true,
                partialDamage: true,
                hail: true,
                totalDamage: true,
                theft: true,
                wheels: true,
                assistance: true,
                cristals: true
            })
        }
    }



    render(){
        return (
            <DetailsContainer>
                <div className="icon-column">
                    
                </div>
                <div className="detail-line">
                    <div className="icon-container">
                        <img src="/assets/icons/quotation/responsabilidad-civil.svg" alt="responsabilidad-civil"/>
                    </div>
                    <p>Responsabilidad Civil</p>
                </div>
                <div className="detail-line">
                    <div className="icon-container">
                        <img 
                        src={this.state.fire ? "/assets/icons/quotation/incendio.svg" : "/assets/icons/quotation/incendio-gris.svg"} 
                        alt="incendio"/>
                    </div>
                    <p style={{color: `${this.state.fire ? Theme.black : Theme.grey}`}}>Incendio Parcial y Total</p>
                </div>
                <div className="detail-line">
                    <div className="icon-container">
                        <img 
                        src={this.state.partialDamage ? "/assets/icons/quotation/dano-parcial.svg" : "/assets/icons/quotation/dano-parcial-gris.svg"} 
 
                        alt="daño parcial"/>
                    </div>
                    <p style={{color: `${this.state.partialDamage ? Theme.black : Theme.grey}`}}>Daño Parcial</p>
                </div>
                <div className="detail-line">
                    <div className="icon-container">
                        <img 
                        src={this.state.hail ? "/assets/icons/quotation/granizo.svg" : "/assets/icons/quotation/granizo-gris.svg"} 
                        alt="granizo"/>
                    </div>
                    <p style={{color: `${this.state.hail ? Theme.black : Theme.grey}`}}>Granizo</p>
                </div>
                <div className="detail-line">
                    <div className="icon-container">
                        <img 
                        src={this.state.totalDamage ? "/assets/icons/quotation/dano-total.svg" : "/assets/icons/quotation/dano-total-gris.svg"} 
                        alt="daño total"/>
                    </div>
                    <p style={{color: `${this.state.totalDamage ? Theme.black : Theme.grey}`}}>Daño Total</p>
                </div>
                <div className="detail-line">
                    <div className="icon-container">
                        <img 
                        src={this.state.theft ? "/assets/icons/quotation/Robo-total.svg" : "/assets/icons/quotation/robo-total-gris.svg"} 
                        alt="robo de ruedas"/>
                    </div>
                    <p style={{color: `${this.state.theft ? Theme.black : Theme.grey}`}}>Robo Total</p>
                </div>
                <div className="detail-line">
                    <div className="icon-container">
                        <img 
                        src={this.state.wheels ? "/assets/icons/quotation/robo-ruedas.svg" : "/assets/icons/quotation/robo-ruedas-gris.svg"} 
                        alt="robo de ruedas"/>
                    </div>
                    <p style={{color: `${this.state.wheels ? Theme.black : Theme.grey}`}}>Robo de Ruedas</p>
                </div>
                <div className="detail-line">
                    <div className="icon-container">
                        <img 
                        src={this.state.assistance ? "/assets/icons/quotation/auxilio.svg" : "/assets/icons/quotation/auxilio-gris.svg"} 
                        alt="auxilio"/>
                    </div>
                    <p style={{color: `${this.state.assistance ? Theme.black : Theme.grey}`}}>Auxilio S.O.S</p>
                </div>
                <div className="detail-line">
                    <div className="icon-container">
                        <img 
                        src={this.state.cristals ? "/assets/icons/quotation/cristales.svg" : "/assets/icons/quotation/cristales-gris.svg"}  
                        alt="cristales"/>
                    </div>
                    <p style={{color: `${this.state.cristals ? Theme.black : Theme.grey}`}}>Cristales</p>
                </div>
            </DetailsContainer>
        )
    }
}
