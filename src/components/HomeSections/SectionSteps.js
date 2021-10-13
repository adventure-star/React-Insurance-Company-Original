import React, { Component } from 'react'
import amplitude from "amplitude-js";

export default class SectionSteps extends Component {
    constructor(props) {
        super(props)
        this.goToSignup = this.goToSignup.bind(this)
    }
    goToSignup(){
        console.log("props-----", this.state);
        this.props.handleForms(true);
        // amplitude.getInstance().logEvent("Fill CBU form");
        // window.location.href = "/CotizarConPoliza"
    }
    render() {
        return (
            <div>
                <div className="center grey">
                    <h2 className="first-title">Subir tu seguro, es <span className="span2">muy fácil</span>!</h2>
                </div>
                <div className="center grey square-cards-container">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <div className="card-container square-card" style={{cursor:"pointer"}} onClick={this.goToSignup}>
                            <img className="icon-small" src="/assets/body/i-a.svg" alt="logo"/>
                            <div className="card-text-top first-line">
                                <p>Tené tu póliza a mano</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <div className="card-container square-card" style={{cursor:"pointer"}} onClick={this.goToSignup}>
                            <img className="icon-small" src="/assets/body/i-b.svg" alt="logo"/>
                            <div className="card-text-top">
                                <p>Elegí el mejor plan para vos</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <div className="card-container square-card" style={{cursor:"pointer"}} onClick={this.goToSignup}>
                            <img className="icon-small" src="/assets/body/i-c.svg" alt="logo"/>
                            <div className="card-text-top">
                                <p>Cargá los datos para pagar</p>
                            </div>
                        </div>
                    </div>
                        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                            <div className="card-container square-card" style={{cursor:"pointer"}} onClick={this.goToSignup}>
                                <img className="icon-small" src="/assets/body/i-d.svg" alt="logo"/>
                                <div className="card-text-top">
                                    <p>Listo! Ya estás asegurado</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}


