import React, { Component } from 'react'

export default class QuotationDetails extends Component{
        constructor(props){
            super(props)
            this.state = {
                coverageId: this.props.coverageId,
            }
        }

    render(){
        return (
            <div>
                <div className="icon-column">
                    
                </div>
                <div className="detail-line">
                    <div className="icon-container">
                        <img src="/assets/icons/quotation/color/responsabilidad-civil.svg" alt="responsabilidad-civil"/>
                    </div>
                    <p>Responsabilidad Civil</p>
                </div>
                <div className="detail-line">
                    <div className="icon-container">
                        <img src="/assets/icons/quotation/color/incendio.svg" alt="incendio"/>
                    </div>
                    <p>Incendio Parcial y Total</p>
                </div>
                <div className="detail-line">
                    <div className="icon-container">
                        <img src="/assets/icons/quotation/color/dano-parcial.svg" alt="daño parcial"/>
                    </div>
                    <p>Daño Parcial</p>
                </div>
                <div className="detail-line">
                    <div className="icon-container">
                        <img src="/assets/icons/quotation/color/granizo.svg" alt="granizo"/>
                    </div>
                    <p>Granizo</p>
                </div>
                <div className="detail-line">
                    <div className="icon-container">
                        <img src="/assets/icons/quotation/color/dano-total.svg" alt="daño total"/>
                    </div>
                    <p>Daño Total</p>
                </div>
                <div className="detail-line">
                    <div className="icon-container">
                        <img src="/assets/icons/quotation/color/robo-ruedas.svg" alt="robo de ruedas"/>
                    </div>
                    <p>Robo de Ruedas</p>
                </div>
                <div className="detail-line">
                    <div className="icon-container">
                        <img src="/assets/icons/quotation/color/auxilio-s-o-s.svg" alt="auxilio"/>
                    </div>
                    <p>Auxilio S.O.S</p>
                </div>
                <div className="detail-line">
                    <div className="icon-container">
                        <img src="/assets/icons/quotation/color/cristales.svg" alt="cristales"/>
                    </div>
                    <p>Cristales</p>
                </div>
            </div>
        )
    }
}
