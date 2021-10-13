import React, { Component } from 'react'

export default class StaticInfo extends Component {

    render() {
        return (
           <div>
                <div className="center">
                    <h2 className="second-title">Poolpo te <span className="span2">conviene</span>!</h2>
                </div>
                <div className="third-section center">
                    <div className="col-xs-12 col-sm-5 col-md-4 col-lg-4 card-container card-col left">
                        <img className="icon-small icon-secondary" id="icon-secondary-one" src="/assets/body/i-1.svg" alt="logo"/>
                        <div className="card-text-left">
                            <p className="title-left-long">Ahorrás plata y tiempo</p>
                            <p className="simple-paragraph">Nuestro sistema de inteligencia artificial lee tu póliza y busca el mejor precio para asegurar tu auto. Cotizamos con las mejores compañías de seguros y te mostramos solamente el mejor costo de cada cobertura </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-7 col-md-8 col-lg-8 card-col mejores-costos">
                        <div className="card-container left">
                            <div className="img-title">
                                <img className="icon-small icon-secondary" id="icon-secondary-two" src="/assets/body/i-2.svg" alt="logo"/>
                                <p className="title-left-long">Mejores costos de renovación</p>
                            </div>
                            <div className="card-text">
                                <p className="simple-paragraph">Nos aseguramos que, ante la renovación de tu póliza, vuelva a correr el proceso para garantizarte los mejores costos con la cobertura que mejor se adapte a vos.</p>
                            </div>
                        </div>
                        <div className="card-row">
                            <div className="card-col col-md-6" id="small-card">
                                <div className="card-container small-card-container">
                                    <div className="img-title" id="column">
                                        <img className="icon-small icon-secondary" id="icon-secondary-three" src="/assets/body/i-3.svg" alt="logo"/>
                                        <p className="title-left">Tu credencial digital en un click</p>
                                    </div>
                                    <div className="card-text">
                                        <p className="simple-paragraph">Accedé a tu póliza, tarjeta de circulación digital y Mercosur con tu usuario desde donde estés</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-col col-md-6" id="small-card">
                            <div className="card-container small-card-container">
                                <div className="img-title" id="column">
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