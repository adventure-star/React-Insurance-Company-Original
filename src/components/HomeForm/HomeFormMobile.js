import React, { Component } from 'react'
import HomeFormFirstMobile from './HomeFormFirstMobile.js'
import HomeFormSecondMobile from './HomeFormSecondMobile.js'
import HomeFormPolicyMobile from './HomeFormPolicyMobile.js'
import { registerLead, registerLeadPolicy } from '../../utils/data.js'

export default class HomeFormMobile extends Component {
    constructor(props){
        super(props)
        this.state = {
            step : 0,
            validated: false
        }
        this.nextStep = this.nextStep.bind(this)
        this.getData = this.getData.bind(this)
        this.getCarData = this.getCarData.bind(this)
        this.getDataAndPolicy = this.getDataAndPolicy.bind(this)
    }
    componentDidMount(){
        this.setState({...this.state, step: this.props.step})
    }

    nextStep(step){
        this.setState({...this.state, step})
    }
    previousStep(){
        this.setState({...this.state, step: this.state.step -1})
    }
    getData(name, email, phone, dni, age, province, zipCode){
        this.setState({...this.state, name, email, phone, dni, age, province, zipCode, step: 1})
    }
    getCarData(type, brand, model, year, policy, isNew, franchise, modelId){
        this.setState({...this.state, type, brand, model, year, policy, isNew, franchise, step: 2, loading: true})
        registerLead.bind(this)(this.state.name, this.state.email, this.state.phone, this.state.dni, this.state.age, this.state.province, this.state.zipCode, brand, model, year, policy, isNew, franchise, type, modelId)
        this.props.loading(true)
        console.log("envio de datos desde homeFormMobile2")
    }
    getDataAndPolicy(name, email, phone, age, file){
        this.setState({...this.state, name, email, phone, age, file, loading: true})
        registerLeadPolicy(name, email, phone, age, file)
        this.props.loading(true)
        console.log("envio de datos desde homeFormMobile")
    }

    getForm(){
        if(this.state.step === 0 && this.props.policy === false){
            return <HomeFormFirstMobile className="first-form" ref={refId => this.firstForm = refId} nextStep={this.nextStep} getData={this.getData}/>
        } else if (this.state.step > 0 && this.props.policy === false){
            return <HomeFormSecondMobile nextStep={this.nextStep} getCarData={this.getCarData}/>
        } else if(this.props.policy === true){
            return <HomeFormPolicyMobile getDataAndPolicy={this.getDataAndPolicy}/>
        } else {
            return
        }
    }
    HandleGoBack(){
        if(this.state.step === 0){
            this.props.previousStep(this.state.step)
            this.setState({...this.state, step: 0})
        } else {
            this.setState({...this.state, step: 0})
        }
    }

    render() {
        return (
            <div className="col-tablet-container">
                    <img src="/assets/icons/flecha-back.svg" 
                    alt="atrás" className="icon-back" 
                    onClick={() => this.HandleGoBack()}/>
                    <div className="row-title center">
                        <h2 className="second-title-tablet">Estás a un paso de conseguir <br/> La mejor oferta para el <span className="span-light">seguro de tu auto</span></h2>
                    </div>
               <div className="center">
                    {this.getForm()}
                </div>
            </div>
        )
    }
}


