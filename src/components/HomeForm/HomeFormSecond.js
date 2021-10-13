import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { validOption2, validType, validFranchise } from '../../utils/FormValidation.js'
import { getBrands, getYearsByBrandID, getGroupsByBrandYear, getModelsByBrandYear, getPoliciesCoverages, showMessage } from '../../utils/data.js'
import Styled from 'styled-components'
import Theme from '../../Styles/Theme.js'
import AmplitudeButton from '../Button/AmplitudeButton.js'
import Autocomplete from '../Input/Autocomplete'

export default class HomeFormSecond extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: true,
            brand: null,
            brandCompleted: false,
            group: null,
            model: null,
            year: null,
            isNew: false,
            isCar: true,
            currentPolicy: null,
            franchise: '0',
            validated: false,
            warning: '',
            brandOptions: [],
            modelsOptions: [],
            groupsOptions: [],
            yearsOptions: [],
            policyOptions: [],
            brandReady: false,
            yearReady: false,
            modelReady: false,
            groupReady: false,
            policyReady: false,
        }
    }

    componentDidMount() {
        this.getPolicyOptions()
        getBrands()
            .then(res => {
                showMessage("getBrands", res)
                this.setState({ ...this.state, brandOptions: res })
            })
    }
    componentDidUpdate() {
        if (this.state.formCompleted) {
            // validType(this.state.type, this.typeCar, this.typeMoto, this.typeError)     
            validOption2(this.state.brand, this.brandError)
            validOption2(this.state.model, this.modelError)
            validOption2(this.state.group, this.groupError)
            validOption2(this.state.year, this.yearError)
            this.isNew && validOption2(this.state.isNew, this.isNewError)
            // validOption2(this.state.currentPolicy, this.currentPolicy, this.currentPolicyError)
            this.franchise && validFranchise(this.state.franchise, this.franchiseError)
        }
    }

    renderBrandOptions() {
        let options = this.state.brandOptions
        return options.map((item, i) => <option key={`option ${i}`} value={item}>{item}</option>)
    }
    ModelsByYear() {
        var brandID = this.state.brandOptions.find(item => item.name == this.state.brand).id;
        var groupID = this.state.groupsOptions.find(item => item.name == this.state.group).id;
        var year = this.state.year
        return getModelsByBrandYear(brandID, year, groupID)
            .then(res => {
                showMessage("modelos disponibles: ", res)
                this.setState({ ...this.state, modelsOptions: res, modelReady: true })
                return res
            })
            .catch(e => showMessage(e))
    }
    groupsByBrandYear(year) {
        var brandID = this.state.brandOptions.find(item => item.name == this.state.brand).id;
        return getGroupsByBrandYear(brandID, year)
            .then(res => {
                showMessage("res res", res)
                this.setState({ ...this.state, groupsOptions: res, groupReady: true })
                return res
            })
            .catch(e => showMessage(e))
    }
    // getModels(brand){
    //     return getModelsByBrand(brand)
    //     .then(res => {
    //         showMessage("res res", res)
    //         this.setState({...this.state, modelsOptions: res })
    //         return res
    //     })
    //     .catch(e => showMessage(e))
    // }
    renderModelsOptions() {
        let modelsOptions = this.state.modelsOptions
        return modelsOptions.map((item, i) => <option key={`option ${i}`} value={item}>{item}</option>)
    }
    async YearsByBrand(brand) {
        try {
            let brandID = this.state.brandOptions.find(item => item.name == brand).id;
            const result = await getYearsByBrandID(brandID)
            this.setState({ ...this.state, yearsOptions: result, yearReady: true })
        } catch (err) {
        }
    }
    renderYearOptions() {
        let yearsOptions = this.state.yearsOptions
        if (yearsOptions !== undefined && yearsOptions !== null) {
            return yearsOptions.map((item, i) => <option key={`option ${i}`} value={item}>{item}</option>)
        } else {
            showMessage("error en años", yearsOptions)
        }
    }
    getPolicyOptions() {
        return getPoliciesCoverages()
            .then(res => {
                // showMessage("coberturas formulario")
                this.setState({ ...this.state, policyOptions: res, policyReady: true })
                return res
            })
    }
    renderPolicyOptions() {
        let policyOptions = this.state.policyOptions
        return policyOptions.map((item, i) => <option key={`policy ${i}`} value={item.id}>{item.name}</option>)
    }



    handleClick(e) {
        e.preventDefault()
        // const type = validType(this.state.type, this.typeCar, this.typeMoto, this.typeError)     
        const brand = validOption2(this.state.brand, this.brandError)
        const year = validOption2(this.state.year, this.yearError)
        const model = this.state.modelsOptions.find(item => item.name == this.state.model);
        const group = validOption2(this.state.group, this.groupError)
        const isNew = this.isNew ? validOption2(this.state.isNew, this.isNewError) : false
        // const currentPolicy = validOption2(this.state.currentPolicy, this.currentPolicyError)
        const franchise = this.franchise ? validFranchise(this.state.franchise, this.franchiseError) : "0"
        if (brand && model && year && group && franchise) {
            this.setState({ validated: true })
            this.props.nextStep(2)
            this.props.getCarData(this.state.type, this.state.brand, model.name, this.state.year, this.state.currentPolicy, this.state.isNew, this.state.franchise, model.id)
            this.messageBorder.style.border = `1px solid ${Theme.grey}`
            this.message.style.color = `${Theme.darkGrey}`
            return true
        } else {
            this.setState({ ...this.state, formCompleted: true })
        }
    }

    clickCar(e) {
        e.preventDefault()
        this.setState({
            ...this.state,
            type: true
        })
        this.typeCar.style.backgroundColor = `${Theme.secondaryColor}`
        this.iconCar.style.filter = 'brightness(1000%)'
        this.typeMoto.style.backgroundColor = `${Theme.white}`
        this.iconMoto.style.filter = 'none'
        validType('auto', this.typeCar, this.typeMoto, this.typeError)
    }

    clickMotorcycle(e) {
        e.preventDefault()
        this.typeMoto.style.backgroundColor = `${Theme.secondaryColor}`
        this.iconMoto.style.filter = 'brightness(1000%)'
        this.typeCar.style.backgroundColor = `${Theme.white}`
        this.iconCar.style.filter = 'none'
        validType('moto', this.typeCar, this.typeMoto, this.typeError)
        this.setState({
            ...this.state,
            type: false
        })
    }

    handleBrand(value) {
        this.setState({ brand: value, brandCompleted: true, modelsOptions: [], yearsOptions: [] })
        // this.getModels(e.target.value)
        if (this.state.year != null) this.groupsByBrandYear(this.state.year)
        if (value) this.YearsByBrand(value)
    }
    handleModel(value) {
        showMessage(value)
        this.setState({ model: value, modelCompleted: true })
    }
    handleGroup(value) {
        this.setState({ group: value, groupCompleted: true, modelsOptions: [] })
        if (value) setTimeout(() => {
            this.ModelsByYear()
        }, 500);
    }

    handleYear(value) {
        this.setState({ year: value, yearCompleted: true, modelsOptions: [], groupsOptions: [] })
        var year = value
        if (value) setTimeout(() => {
            this.groupsByBrandYear(year)
        }, 1000);
        this.setState({ isNew: null })
    }

    handleIsNew(e) {
        this.setState({ isNew: e.target.value })
    }

    handlePolicy(value) {
        let result = this.state.policyOptions.find(item => item.name === value);
        if (result)
            this.setState({ currentPolicy: result.id })
    }

    handleFranchise(e) {
        this.setState({ franchise: e.target.value })
    }

    render() {
        return (
            <form className="form-container">
                <p className="form-title">Los de tu vehículo</p>
                <div className="steps-container">
                    <div className="form-step step-one"></div>
                    <div className="form-step step-one"></div>
                </div>
                <TypeContainer>
                    <CircleButton onClick={(e) => this.clickCar(e)} ref={typeCar => this.typeCar = typeCar}><img src="/assets/icons/car.svg" alt="logo-auto" className="icon-vehicle" ref={iconCar => this.iconCar = iconCar} /></CircleButton>
                    <CircleButton onClick={(e) => this.clickMotorcycle(e)} ref={typeMoto => this.typeMoto = typeMoto}><img src="/assets/icons/motorcycle.svg" alt="logo-moto" className="icon-vehicle" ref={iconMoto => this.iconMoto = iconMoto} /></CircleButton>
                </TypeContainer>
                <p className="text-field-error-type" ref={typeError => this.typeError = typeError}>Elegí el tipo de vehículo</p>
                <div className="form-line">
                    <Autocomplete label="Marca de tu auto" options={this.state.brandOptions.map(item => item.name)} onChange={(e) => this.handleBrand(e)} loading={false} />
                    <p className="text-field-error" ref={brandError => this.brandError = brandError}>Elegí una opción</p>
                </div>
                <div className="form-line">
                    <Autocomplete label="Año" options={this.state.yearsOptions.map(item => item)} onChange={(e) => this.handleYear(e)} loading={!this.state.yearReady} />
                    <p className="text-field-error" ref={yearError => this.yearError = yearError}>Elegí una opción</p>
                </div>
                {this.state.year == "2021" &&
                    <div className="form-line">
                        <label htmlFor="isNew" className="form-label">Es 0KM?</label>
                        <Form.Control as="select" onChange={(e) => this.handleIsNew(e)} className="select-field" ref={isNew => this.isNew = isNew}>
                            <option value="">Elegí una opción</option>
                            <option value={true}>Si</option>
                            <option value={false}>No</option>
                        </Form.Control>
                        <p className="text-field-error" ref={isNewError => this.isNewError = isNewError}>Elegí una opción</p>
                    </div>
                }

                <div className="form-line">
                    <Autocomplete label="Modelo" options={this.state.groupsOptions.map(item => item.name)} onChange={(e) => this.handleGroup(e)} loading={!this.state.groupReady} />
                    <p className="text-field-error" ref={groupError => this.groupError = groupError}>Elegí una opción</p>
                </div>

                <div className="form-line">
                    <Autocomplete label="versión" options={this.state.modelsOptions.map(item => item.name)} onChange={(e) => this.handleModel(e)} loading={!this.state.modelReady} />
                    <p className="text-field-error" ref={modelError => this.modelError = modelError}>Elegí una opción</p>
                </div>
                <div className="form-line">
                    <Autocomplete label="Cobertura actual" options={this.state.policyOptions.map(item => item.name)} onChange={(e) => this.handlePolicy(e)} key="id" value="name" loading={!this.state.policyReady} />
                    <p className="text-field-error" ref={currentPolicyError => this.currentPolicyError = currentPolicyError}>Elegí una opción</p>
                </div>
                {this.state.currentPolicy == "5" &&
                    <div className="form-line">
                        <label htmlFor="franchise" className="form-label">Franquicia actual</label>
                        <input className="text-field" type="text" pattern="\d*" id="franchise" onChange={(e) => this.handleFranchise(e)} ref={franchise => this.franchise = franchise} />
                        <p className="text-field-error" ref={franchiseError => this.franchiseError = franchiseError}>Elegí una opción</p>
                    </div>
                }
                <div className="form-line">
                    <div className="form-message" ref={messageBorder => this.messageBorder = messageBorder}>
                        <img src="/assets/icons/info.svg" alt="políticas de privacidad" className="icon-message" />
                        <p className="message-line" ref={message => this.message = message}>Poolpo es un sitio seguro. Toda tu información la mantenemos protegida. No la compartimos con terceros.</p>
                    </div>
                </div>
                {/* <div className="form-line">
                    <div className="form-message" ref={ messageBorder => this.messageBorder = messageBorder }>
                        <div>
                            <p className="message-line" ref={ message => this.message = message }>{this.state.validated ? 'Poolpo es un sitio seguro. Toda tu información la mantenemos protegida.' : this.state.warning}</p>
                            {this.state.validated ? <p className="message-line">No la compartimos con terceros</p> : null}                        
                        </div>
                    </div>
                </div> */}
                <div className="form-line-left">
                    <AmplitudeButton bg={"green"}
                        text={"Cotizar"}
                        size={"medium"}
                        active={true}
                        action={(e) => this.handleClick(e)} />
                </div>
            </form>
        )
    }
}

const CircleButton = Styled.button`
        height: 61px;
        width: 61px;
        border: 1px solid transparent;
        background-color: ${Theme.white};
        border-radius: 50%;
        padding: 10px;
        color: ${Theme.secondaryColor};
        box-shadow: 0px 3px 3px 0 rgba(0,0,0,0.20);

    .selected{
        border: 1px solid transparent;
        background-color: ${Theme.secondaryColor};
        color: ${Theme.white};
    }
`

const TypeContainer = Styled.div`
    display: none;
    visibility: hidden;
    justify-content: space-between;
    width: 150px;
    margin: 10px auto;
`