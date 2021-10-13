import React, { Component } from 'react'
import AmplitudeButton from '../Button/AmplitudeButton'

export default class HomeFooter extends Component{

    handleClickPolicy(policy){
        if(window.location.href !== 'http://localhost:3000/' && window.location.href !== 'https://front.poolpo.in/'){
            window.location.href = '/CotizarConPoliza'
        }
        this.props.handleFooterClick(policy)
    }
    handleClickNoPolicy(policy){
        if(window.location.href !== 'http://localhost:3000/' && window.location.href !== 'https://front.poolpo.in/'){
            window.location.href = '/CotizarSinPoliza'
        }
        this.props.handleFooterClick(policy)
    }

    render(){
    return (
        <div className="center bottom grey">
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-6">
                <p className="bottom-title">Cotizá con o sin póliza y ahorrá hasta un 40% en el seguro de tu auto o moto.</p>
            </div>
            {/* <div className="col-xs-12 col-sm-7 col-md-7 col-lg-6 right"> */}
            <div className="button-container-bottom desktop-button">
                                <AmplitudeButton className="green-button" 
                                bg={"green"} 
                                text={"Cotizar con mi póliza"} 
                                action={() => this.handleClickPolicy(true) }
                                // type={'small-button'}
                                // size={'small'}
                                // action={() => context.handleForms(true)}
                                // action={ ()=> this.handleClick() }
                                /> 
                                <AmplitudeButton className="red-button" href="#header-title" id="header-btn-red" bg={"red"} text={"Cotizar sin póliza"} type={'small-button'}
                                 action={() => this.handleClickNoPolicy(false) }
                                />
            </div>  
                {this.props.width > 766 ? 
                <div className="button-container-bottom mobile-button">
                        <AmplitudeButton className="green-button" id="header-btn-green" bg={"green"} text={"Cotizar con póliza"} 
                        action={() => this.handleClickPolicy(true) }
                    /> 
                        <AmplitudeButton className="red-button" id="header-btn-red"bg={"red"} text={"Cotizar sin póliza"} 
                        action={() => this.handleClickNoPolicy(false) }
                    />
                </div>  
                :
                <div className="button-container-bottom mobile-button">
                    {/* <a href="#header-title"> */}
                        <AmplitudeButton className="green-button" id="header-btn-green" bg={"green"} size={"small"} text={"Cotizar con póliza"} 
                    action={() => this.handleClickPolicy(true) }
                    /> 
                    {/* </a> */}
                    {/* <a href="#header-title"> */}
                        <AmplitudeButton className="red-button" id="header-btn-red" bg={"red"} size={"small"} text={"Cotizar sin póliza"} 
                    action={() => this.handleClickNoPolicy(false) }
                    />
                    {/* </a> */}
                </div>  
                }
            {/* </div> */}
            
        </div>
    )
    }
}
