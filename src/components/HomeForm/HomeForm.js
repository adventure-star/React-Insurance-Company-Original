import React, { Component } from 'react'
import HomeFormFirst from './HomeFormFirst.js'
import HomeFormSecond from './HomeFormSecond.js'
import HomeFormFirstPolicy from './HomeFormFirstPolicy.js'
import { registerLead, registerLeadPolicy } from '../../utils/data.js'

export default class HomeForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            step : this.props.step,
            validated: false
        }
        this.nextStep = this.nextStep.bind(this)
        this.getData = this.getData.bind(this)
        this.getCarData = this.getCarData.bind(this)
        this.getDataAndPolicy = this.getDataAndPolicy.bind(this)
    }

    componentDidMount(){
        console.log("props home form", this.props)
    }

    nextStep(step){
        this.setState({...this.state, step})
    }
    getData(name, email, phone, dni, age, address, zipCode){
        this.setState({...this.state, name, email, phone, dni, age, address, zipCode, step: 1})
    }
    getCarData(type, brand, model, year, policy, isNew, franchise, modelId){
        let name = this.state.name
        let email = this.state.email
        let phone = this.state.phone
        let dni = this.state.dni
        let age = this.state.age
        let address = this.state.address
        let zipCode = this.state.zipCode
        this.setState({...this.state, type, brand, model, year, policy, isNew, franchise, step: 2, loading: true})
        console.log("modelo corregido", model)
        registerLead.bind(this)(name, email, phone, dni, age, address, zipCode, brand, model, year, policy, isNew, franchise, type, modelId)
        this.props.loading(true)
    }
    getDataAndPolicy(name, email, phone, age, file){
        this.setState({...this.state, name, email, phone, file, loading: true})
        console.log("this state file", file)
        registerLeadPolicy.bind(this)(name, email, phone, age, file)
        this.props.loading(true)
        console.log("props en home form", this.props)
    }

    getForm(){
        if(this.state.step === 0 && this.props.policy === false){
            return <HomeFormFirst className="first-form" ref={refId => this.firstForm = refId} nextStep={this.nextStep} getData={this.getData}/>
        } else if (this.state.step > 0 && this.props.policy === false){
            return <HomeFormSecond nextStep={this.nextStep} getCarData={this.getCarData}/>
        } else if(this.props.policy === true){
            return <HomeFormFirstPolicy getDataAndPolicy={this.getDataAndPolicy}/>
        } else {
            return
        }
    }

    render() {
        return (
            <div>
                {this.getForm()}
            </div>
        )
    }
}


