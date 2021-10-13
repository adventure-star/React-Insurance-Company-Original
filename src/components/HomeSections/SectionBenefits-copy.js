import React, { Component } from 'react'

export default class StaticInfo extends Component {

    render() {
        return (
            <div className="third-section">
                <div className="center">
                    <h2 className="second-title">Poolpo te <span className="span2">conviene</span>!</h2>
                </div>
                <div className="center card-cols-container">
                    <div className="col-xs-12 col-sm-5 col-md-4 col-lg-4 card-col-left card-container card-long">
                        <img className="icon-small icon-secondary" id="icon-secondary-one" src="/assets/body/i-1.svg" alt="logo"/>
                            <div className="card-text-left">
                                <p className="title-left-long">Ahorrás plata y tiempo</p>
                                <p className="simple-paragraph">Nuestro sistema de inteligencia artificial lee tu póliza y busca el mejor precio para asegurar tu auto. Cotizamos con las mejores compañías de seguros y te mostramos solamente el mejor costo de cada cobertura </p>
                            </div>
                        </div>
                    <div className="col-xs-12 col-sm- col-md-8 col-lg-8 card-col-right">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 card-container-right">
                            <div className="card-container card-wide">
                                <div className="img-title">
                                    <img className="icon-small icon-secondary" id="icon-secondary-two" src="/assets/body/i-2.svg" alt="logo"/>
                                    <p className="title-left-long">Mejores costos de renovación</p>
                                </div>
                                <div className="card-text">
                                    <p className="simple-paragraph">Nos aseguramos que, ante la renovación de tu póliza, vuelva a correr el proceso para garantizarte los mejores costos con la cobertura que mejor se adapte a vos.</p>
                                </div>
                            </div>
                    </div>
                        <div className="card-row cards-second-line">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 card-col">
                                <div className="card-container card-small" id="card-left">
                                    <div className="img-title">
                                        <img className="icon-small icon-secondary" id="icon-secondary-three" src="/assets/body/i-3.svg" alt="logo"/>
                                        <p className="title-left">Tu credencial digital en un click</p>
                                    </div>
                                    <div className="card-text">
                                        <p className="simple-paragraph">Accedé a tu póliza, tarjeta de circulación digital y Mercosur con tu usuario desde donde estés</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 card-col">
                                <div className="card-container card-small" id="card-right">
                                    <div className="img-title">
                                        <img className="icon-small icon-secondary" id="icon-secondary-four" src="/assets/body/i-4.svg" alt="logo"/>
                                        <p className="title-left">Siniestros 100% online</p>
                                    </div>
                                    <div className="card-text">
                                        <p className="simple-paragraph">Gestioná cualquier denuncia y trámite relacionado a tu vehículo a través de nuestra plataforma 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        )
    }
}