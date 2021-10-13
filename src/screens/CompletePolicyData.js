import React, { Component } from 'react'
import Styled from 'styled-components'
import Theme from '../Styles/Theme.js'
import { Form } from 'react-bootstrap'
import MessagesModal from '../components/LoadingModal/MessagesModal.js'
import { validOption2, validName, validDni, validModel, validZipcode, validChassis, validEngine, validStartDatePolicy, validEndDatePolicy, validExpirationDatePolicy } from '../utils/FormValidation.js'
import { getBrandByName, getYearsByBrandID, getGroupsByBrandYear, getModelsByBrandYear, validateFields, getBrandOptions, completeFields } from '../utils/data.js'
import Autocomplete from '../components/Input/Autocomplete.js'
import AmplitudeButton from '../components/Button/AmplitudeButton.js'
import NumberFormat from 'react-number-format';

const CompletePolicyContainer = Styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: ${Theme.primaryFont};
    .policy-error-title-container{
        margin: 113px 0px 16px 0px;
    }
    .first-line-title{
        font-size: 32px;
        color: ${Theme.primaryColor};
    }
    .second-line-title{
        font-size: 32px;
        color: ${Theme.black};
        margin-bottom: 22px;
    }
    .policy-error-paragraph{
        font-family: ${Theme.secondaryFont};
        font-size: 18px;
        margin: 0px 18% 22px 18%;
    }
    .policy-error-form-container{
        display: flex;
        flex-direction: column;
        width: 25vw;
        height: 100%;
        border: 1px solid ${Theme.lightGrey};
        border-radius: ${Theme.radius};
        box-shadow: ${Theme.shadow};
        padding: 3%;
        margin: 0px 25px
    }
    .policy-error-forms-container{
        display: flex;
        margin: 0px 14% 19px 14%;
    }
    .policy-error-img-container{
        align-self: center;
        text-align: center;
        border-radius: 50%;
        box-shadow: ${Theme.shadow};
        margin: 26px 0px 22px 0px;
        width: 120px;
        height: 120px;
    }
    .policy-error-img-container > img{
        width: 60%;
        margin: 17% 6% 0px 0px;
    }
    #img-vehicle{
        margin: 37% 3% 0px 0px;
    }
    #img-policy{
        margin: 23% 2% 0px 0px;
    }
    .button{
        margin-bottom: 42px;
    }
    @media (max-width: 1365px){
    .policy-error-forms-container{
        flex-direction: column;
        width: 75%;
        align-items: center;
    }
    .policy-error-form-container{
        width: 100%;
        padding: 3% 6%;
        margin-bottom: 34px;
    }
    .first-line-title{
        font-size: 22px;
    }
    .second-line-title{
        font-size: 22px;
    }
    .policy-error-paragraph{
        font-size: 14px;
        margin: 0px 10% 19px 10%;
    }
    }
    .text-left{text-align:left;}
`

export default class CompletePolicyData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            formCompleted: false,
            userCompleted: false,
            vehicleCompleted: false,
            policyCompleted: false,
            name: null,
            nameChecked: false,
            last: '',
            dni: null,
            dniChecked: false,
            zipCode: null,
            zipCodeChecked: false,
            brand: null,
            brandOptions: [],
            brandChecked: false,
            model: null,
            modelOptions: [],
            modelChecked: false,
            allModels: null,
            group: null,
            groupOptions: [],
            year: null,
            yearOptions: [],
            yearChecked: false,
            engine: null,
            engineChecked: false,
            chassis: null,
            chassisChecked: false,
            insurer: null,
            insurerOptions: null,
            insurerChecked: false,
            coverage: null,
            coveragesOptions: null,
            fromDate: '',
            fromDateChecked: false,
            toDate: '',
            toDateChecked: false,
            expirationDate: '',
            expirationDateChecked: false,
            quote: null,
            quoteChecked: false,
            userExpanded: true,
            vehicleExpanded: true,
            policyExpanded: true,
            yearReady: true,
            groupReady: true,
            modelReady: true
        }
    }

    componentDidMount() {
        let LeadID = this.props.match.params.leadId
        let VehicleID = this.props.match.params.vehicleId
        validateFields(LeadID, VehicleID)
            .then(res => {
                console.log(res)
                if (!res.error) {
                    this.setState({
                        ...this.state,
                        leadID: LeadID,
                        vehicleID: VehicleID,
                        name: `${res.lead.name} ${res.lead.last}`,
                        last: res.lead.last,
                        dni: res.lead.dni,
                        zipCode: res.lead.cp,
                        coveragesOptions: res.coverages
                    })
                    // RENDER BRAND LOGIC
                    if (res.brands !== undefined && res.brands.length > 0) {
                        this.setState({ brandOptions: res.brands })
                    }
                    if (res.lead.vehicles !== undefined && !!res.lead.vehicles[0].brand) {
                        this.setState({ brand: res.lead.vehicles[0].brand })
                        getBrandByName(res.lead.vehicles[0].brand).then(res => {
                            console.log(res)
                            this.setState({ brandID: res.id })
                        })
                    }

                    // RENDER YEAR LOGIC // añadido pero no pude comprobar que esté funcionando
                    if (!!res.years) this.setState({ yearOptions: res.years })
                    if (!!res.lead.vehicles[0] && res.lead.vehicles[0].year !== 0) this.setState({ year: res.lead.vehicles[0].year })


                    // RENDER GROUP LOGIC // si trae un array de opciones, no muestro la opción dentro de lead.vehicles
                    if (res.groups.length > 0) {
                        this.setState({
                            groupOptions: res.groups,
                        })
                    } else if (res.lead.vehicles !== undefined || res.lead.vehicles[0].group !== null && res.groups !== undefined && res.groups.length > 0) {
                        this.setState({
                            group: res.lead.vehicles[0].group,
                            groupOptions: res.groups,
                        })
                    } else if (res.lead.vehicles !== undefined || res.lead.vehicles[0].group !== null) {
                        this.setState({
                            group: res.lead.vehicles[0].group,
                        })
                    }

                    // RENDER MODEL LOGIC // si trae un array de opciones, no muestro la opción dentro de lead.vehicles
                    if (res.models.length > 0) {
                        this.setState({
                            model: res.lead.vehicles[0].model,
                            modelOptions: res.models,
                            modelCode: res.lead.vehicles[0].code
                        })
                    } else if (res.lead.vehicles !== undefined || res.lead.vehicles[0].model !== null && res.models !== undefined && res.models.length > 0) {
                        this.setState({
                            model: res.lead.vehicles[0].model,
                            modelOptions: res.models,
                            modelCode: res.lead.vehicles[0].code
                        })
                    } else if (res.lead.vehicles !== undefined || res.lead.vehicles[0].model !== null) {
                        this.setState({
                            model: res.lead.vehicles[0].model,
                            modelCode: res.lead.vehicles[0].code
                        })
                    }



                    // RENDER ENGINE LOGIC
                    if (res.lead.vehicles[0] !== undefined && res.lead.vehicles[0].engine !== null) {
                        this.setState({
                            engine: res.lead.vehicles[0].engine,
                        })
                    }

                    // RENDER CHASSIS LOGIC
                    if (res.lead.vehicles[0] !== undefined && res.lead.vehicles[0].chassis !== null) {
                        this.setState({
                            chassis: res.lead.vehicles[0].chassis,
                        })
                    }

                    // RENDER POLICY LOGIC
                    if (res.lead.vehicles !== undefined && res.lead.vehicles[0].policies !== undefined && res.lead.vehicles[0].policies[0].insurer !== null && res.lead.vehicles[0].policies[0].insurer.name !== undefined && res.insurers !== undefined) {
                        this.setState({
                            insurer: res.lead.vehicles[0].policies[0].insurer.name,
                            insurerOptions: res.insurers
                        })
                    } else if (res.insurers !== undefined && res.insurers.length > 0) {
                        this.setState({
                            insurerOptions: res.insurers
                        })
                    }

                    // RENDER FROM DATE LOGIC

                    if (res.lead.vehicles !== undefined && res.lead.vehicles[0].policies !== undefined && res.lead.vehicles[0].policies[0] && res.lead.vehicles[0].policies[0].fromDate !== undefined && res.lead.vehicles[0].policies[0].fromDate !== null && res.lead.vehicles[0].policies[0].fromDate !== 'null' && res.lead.vehicles[0].policies[0].fromDate !== '') {
                        console.log("from date que llega", res.lead.vehicles[0].policies[0].fromDate)
                        this.renderFromDate(res.lead.vehicles[0].policies[0].fromDate)
                    } else {
                        this.setState({
                            ...this.state,
                            fromDate: null,
                        })
                    }

                    // RENDER TO DATE LOGIC

                    if (res.lead.vehicles !== undefined && res.lead.vehicles[0].policies !== undefined && res.lead.vehicles[0].policies[0] !== null && res.lead.vehicles[0].policies[0].expirationDate !== undefined && res.lead.vehicles[0].policies[0].expirationDate !== null && res.lead.vehicles[0].policies[0].expirationDate !== '') {
                        this.renderToDate(res.lead.vehicles[0].policies[0].expirationDate)
                    } else {
                        this.setState({
                            ...this.state,
                            toDate: null,
                        })
                    }

                    // RENDER quote LOGIC
                    if (res.lead.vehicles !== undefined && res.lead.vehicles[0].policies !== undefined && res.lead.vehicles[0].policies[0] !== null && res.lead.vehicles[0].policies[0].quote !== undefined && res.lead.vehicles[0].policies[0].quote !== null && res.lead.vehicles[0].policies[0].quote !== '') {
                        this.setState({
                            quote: res.lead.vehicles[0].policies[0].quote
                        })
                    }
                } else {
                    this.setState({ ...this.state, leadID: LeadID, vehicleID: VehicleID })
                }
            })
    }

    componentDidUpdate() {
        if (this.state.userCompleted || this.state.formCompleted) {
            validName(this.state.name, this.name, this.nameError)
            validDni(this.state.dni, this.dni, this.dniError)
        }
        if (this.state.vehicleCompleted || this.state.formCompleted) {
            validOption2(this.state.brand, this.brandError)
            // validModel(this.state.model, this.state.modelCode, this.model, this.modelError)
            validOption2(this.state.model, this.modelError)
            validOption2(this.state.year, this.yearError)

        }
    }

    getBrands() {
        return getBrandOptions()
            .then(res => {
                console.log(res)
                this.setState({ ...this.state, brandOptions: res })
            })
    }
    renderBrandOptions() {
        let options = this.state.brandOptions
        if (options) {
            return options.map((item, i) => <option key={`option ${i}`} id={i} value={item.name}>{item.name}</option>)
        }
    }

    getModels() {
        var brandID = this.state.brandID;
        var groupID = this.state.groupOptions.find(item => item.name == this.state.group).id;
        var year = this.state.year
        return getModelsByBrandYear(brandID, year, groupID)
            .then(res => {
                console.log("res res", res)
                this.setState({ ...this.state, modelOptions: res, modelReady: true })
                return res
            })
            .catch(e => console.log(e))
    }
    renderModelOptions() {
        let options = this.state.modelOptions
        if (options !== null && options !== undefined) {
            return options.map((item, i) => <option key={`option ${i}`} value={item.name ?? item.description}>{item.name ?? item.description}</option>)
        } else if (this.state.brand !== null && this.state.brand !== undefined && this.state.group !== null && this.state.group !== undefined) {
            var brandID = this.state.brandID;
            var groupID = this.state.groupOptions.find(item => item.name == this.state.group).id
            var year = this.state.year
            getModelsByBrandYear(brandID, year, groupID)
                .then(res => {
                    if (res !== undefined) {
                        return res.map((item, i) => <option key={`option ${i}`} value={item.name}>{item.name}</option>)
                    }
                })
        }
    }
    renderGroupOptions() {
        let options = this.state.groupOptions
        if (options !== null && options !== undefined) {
            return options.map((item, i) => <option key={`option ${i}`} value={item.name}>{item.name}</option>)
        } else if (this.state.brand !== null && this.state.brand !== undefined && this.state.brandOptions) {
            var currentbrand = this.state.brandOptions.find(item => item.name == this.state.brand);
            if (currentbrand) getGroupsByBrandYear(currentbrand.id, this.state.year)
                .then(res => {
                    console.log('groups-----')
                    if (res !== undefined) {
                        return res.map((item, i) => <option key={`option ${i}`} value={item.name}>{item.name}</option>)
                    }
                })
        }
    }
    renderAllModels() {
        let options = this.state.allModels
        setTimeout(() => {
            if (options) {
                return options.map((item, i) => <option key={`option ${i}`} value={item}>{item}</option>)
            }
        }, 2000);
    }
    async getYears() {
        try {
            const result = await getYearsByBrandID(this.state.brandID)
            this.setState({ ...this.state, yearOptions: result, yearReady: true })
        } catch (err) {
        }
    }

    getGroups(brand, year) {
        return getGroupsByBrandYear(this.state.brandID, year)
            .then(res => {
                console.log("groups =====", res)
                this.setState({ ...this.state, groupOptions: res, groupReady: true })
                return res
            })
            .catch(e => console.log(e))
    }
    renderYearOptions() {
        let options = this.state.yearOptions
        if (options) {
            return options.map((item, i) => <option key={`option ${i}`} value={item}>{item}</option>)
        }
    }

    renderInsurerOptions() {
        let options = this.state.insurerOptions
        if (options) {
            return options.map((item, i) => <option key={`option ${i}`} value={item.name}>{item.name}</option>)
        }
    }

    renderCoverageOptions() {
        let options = this.state.coveragesOptions
        if (options) {
            return options.map((item, i) => <option key={`option ${i}`} value={item.name}>{item.name}</option>)
        }
    }

    renderFromDate(fromDate) {
        if (fromDate !== '' && fromDate !== undefined && fromDate !== null) {
            let from = new Date(fromDate)
            let fromDateDay = from.getDate()
            if (fromDateDay < 10) {
                fromDateDay = `0${fromDateDay}`
            }
            let fromDateMonth = from.getMonth() + 1
            if (fromDateMonth < 10) {
                fromDateMonth = `0${fromDateMonth}`
            }
            let fromDateYear = from.getUTCFullYear()
            let resultDate = `${fromDateYear}-${fromDateMonth}-${fromDateDay}`
            this.setState({ ...this.state, fromDate: resultDate })
            console.log("from date", resultDate)
        }
    }

    renderToDate(toDate) {
        if (toDate !== '' && toDate !== undefined && toDate !== null) {
            let from = new Date(toDate)
            let toDateDay = from.getDate()
            if (toDateDay < 10) {
                toDateDay = `0${toDateDay}`
            }
            let toDateMonth = from.getMonth() + 1
            if (toDateMonth < 10) {
                toDateMonth = `0${toDateMonth}`
            }
            let toDateYear = from.getUTCFullYear()
            let resultDate = `${toDateYear}-${toDateMonth}-${toDateDay}`
            this.setState({ ...this.state, toDate: resultDate })
            console.log("to date", resultDate)
        }
    }
    ModelsByYear() {
        var brandID = this.state.brandID;
        var groupID = this.state.groupOptions.find(item => item.name == this.state.group).id;
        var year = this.state.year
        return getModelsByBrandYear(brandID, year, groupID)
            .then(res => {
                console.log("res res", res)
                this.setState({ ...this.state, modelOptions: res, modelReady: true })
                return res
            })
            .catch(e => console.log(e))
    }
    groupsByBrandYear(year) {
        console.log('current brand', this.state.brand)
        var brandID = this.state.brandID;
        return getGroupsByBrandYear(brandID, year)
            .then(res => {
                console.log("res res", res)
                this.setState({ ...this.state, groupOptions: res, groupReady: true })
                return res
            })
            .catch(e => console.log(e))
    }
    async YearsByBrand(brand) {
        try {
            let brandID = this.state.brandID;
            const result = await getYearsByBrandID(brandID)
            this.setState({ ...this.state, yearOptions: result, yearReady: true })
        } catch (err) {
        }
    }
    handleClick(e) {
        e.preventDefault()
        const name = validName(this.state.name, this.name, this.nameError)
        const dni = validDni(this.state.dni, this.dni, this.dniError)
        const zipCode = validZipcode(this.state.zipCode, this.zipCode, this.zipCodeError)
        const brand = validOption2(this.state.brand, this.brandError)
        // const model = validModel(this.state.model, this.state.modelCode, this.model, this.modelError)
        const model = this.state.modelOptions.find(item => item.name == this.state.model);

        const year = validOption2(this.state.year, this.yearError)

        if (name && dni && zipCode && brand && model && year) {
            this.setState({ ...this.state, formCompleted: true })
            this.sendCompleteFields(model)
        } else {
            this.setState({ ...this.state, formCompleted: true })
        }
    }
    async sendCompleteFields(model) {
        console.log("datos en form", this.state.leadID, this.state.vehicleID, this.state.dni, this.state.zipCode, this.state.brand, this.state.model, this.state.year, this.state.engine, this.state.chassis, this.state.insurer, this.state.fromDate, this.state.toDate, this.state.quote)
        try {
            const result = await completeFields(this.state.leadID, this.state.vehicleID, this.state.dni, this.state.zipCode, this.state.brand, model.name, this.state.year, this.state.engine, this.state.chassis, this.state.insurer, this.state.fromDate, this.state.toDate, this.state.quote, model.id)
            console.log("result try catch", result)
            if (!result.error) {
                this.setState({ ...this.state, loading: true })
            } else {
                console.log("error en catch complete fields")
                console.log(result);
            }
        } catch (err) {
            console.log("error en catch complete fields", err)
            this.setState({ ...this.state, loading: false })
            // redirigir a pantalla de error
        }
    }


    handleName(e) {
        this.setState({ ...this.state, name: e.target.value })
    }
    handleDni(e) {
        this.setState({ dni: e.target.value.split(".").join("")})
    }
    handleZipCode(e) {
        this.setState({ ...this.state, zipCode: e.target.value })
        if (this.state.formCompleted) {
            validZipcode(e.target.value, this.zipCode, this.zipCodeError)
        }
    }
    handleBrand(value) {
        console.log('old brand', this.state.brand)
        this.setState({ brand: value, brandCompleted: true, modelOptions: [], yearOptions: [] })
        getBrandByName(value).then(res => this.setState({ brandID: res.id })).then(() => {
            if (this.state.year != null) this.groupsByBrandYear(this.state.year)
            if (value) this.YearsByBrand(value)
        });
    }
    handleModel(value) {
        var modelCode = null
        if (value) modelCode = this.state.modelOptions.find(item => item.name == value).id
        this.setState({ model: value, modelCode: modelCode, modelCompleted: true })
    }
    handleGroup(value) {
        this.setState({ group: value, groupCompleted: true, modelOptions: [] })
        if (value) setTimeout(() => {
            this.ModelsByYear()
        }, 500);
    }

    handleYear(value) {
        this.setState({ year: value, yearCompleted: true, modelOptions: [], groupOptions: [] })
        var year = value
        if (value) setTimeout(() => {
            this.groupsByBrandYear(year)
        }, 1000);
        this.setState({ isNew: null })
    } handleChassis(e) {
        this.setState({ ...this.state, chassis: e.target.value })
    }
    handleEngine(e) {
        this.setState({ ...this.state, engine: e.target.value })
    }
    handleInsurer(e) {
        this.setState({ ...this.state, insurer: e.target.value })
    }
    handleCoverage(e) {
        this.setState({ ...this.state, coverage: e.target.value })
    }
    handleFromDate(e) {
        this.setState({ ...this.state, fromDate: e.target.value })
    }
    handleToDate(e) {
        this.setState({ ...this.state, toDate: e.target.value })
    }
    handleExpirationDate(e) {
        this.setState({ ...this.state, expirationDate: e.target.value })
    }
    handleQuote(e) {
        this.setState({ ...this.state, quote: e.target.value })
    }
    handleChangeUser(expanded) {
        const name = validName(this.state.name, this.name, this.nameError)
        const dni = validDni(this.state.dni, this.dni, this.dniError)
        const zipCode = validZipcode(this.state.zipCode, this.zipCode, this.zipCodeError)
        if (name && dni && zipCode) {
            this.setState({ ...this.state, userExpanded: !expanded })
        } else {
            this.setState({ ...this.state, userCompleted: true })
        }
    }
    handleChangeVehicle(expanded) {
        const brand = validOption2(this.state.brand, this.brandError)
        const model = validOption2(this.state.model, this.modelError)
        const year = validOption2(this.state.year, this.yearError)
        if (brand && model && year) {
            this.setState({ ...this.state, vehicleExpanded: !expanded })
        } else {
            this.setState({ ...this.state, vehicleCompleted: true })
        }
    }
    handleChangePolicy(expanded) {
        this.setState({ ...this.state, policyExpanded: !expanded })
    }

    render() {
        return (
            <CompletePolicyContainer>
                <div className="policy-error-title-container">
                    <p className="first-line-title">Ups!</p>
                    <p className="second-line-title">Nos faltó algún dato...</p>
                    <p className="policy-error-paragraph">Poolpo leyó toda esta información de tu póliza, aún así para poder encontrar las mejores alternativas necesitamos que completes los siguientes campos.</p>
                    <p className="policy-error-paragraph">También podés corregir los datos leídos si encontrás algún error.</p>
                </div>
                <div className="policy-error-forms-container">
                    <form className="policy-error-form-container">
                        <p className="policy-error-form-title">Tus <span className="span2">datos</span></p>
                        <div className="policy-error-img-container">
                            <img src="/assets/icons/policy-form/tus-datos.svg" alt="Tus datos" />
                        </div>
                        <div className="form-line">
                            <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                            <input
                                className="text-field"
                                type="text"
                                id="name"
                                onChange={(e) => this.handleName(e)}
                                ref={name => this.name = name}
                                value={this.state.name !== null ? `${this.state.name}` : ''}
                                placeholder="Completar"
                            />
                            <p className="text-field-error" ref={nameError => this.nameError = nameError}>Colocá tu nombre completo</p>
                        </div>
                        <div className="form-line" ref={dni => this.dni = dni}>
                            <label htmlFor="dni" className="form-label">DNI</label>
                            <NumberFormat thousandSeparator="." decimalSeparator="," decimalScale="0" className="text-field" type="text" maxLength="10" id="dni" onChange={(e) => this.handleDni(e)} value={this.state.dni} />
                            <p className="text-field-error" ref={dniError => this.dniError = dniError}>Colocá los números de tu DNI sin puntos</p>
                        </div>
                        <div className="form-line">
                            <label htmlFor="zipcode" className="form-label">Código Postal</label>
                            <input
                                className="text-field"
                                type="text"
                                pattern="\d*"
                                id="zipcode"
                                onChange={(e) => this.handleZipCode(e)}
                                ref={zipCode => this.zipCode = zipCode}
                                value={this.state.zipCode !== null ? this.state.zipCode : ''}
                                placeholder="Completar"
                            />
                            <p className="text-field-error" ref={zipCodeError => this.zipCodeError = zipCodeError}>Colocá correctamente tu código postal (Ej: 1054)</p>
                        </div>
                    </form>
                    <form className="policy-error-form-container">
                        <p className="policy-error-form-title">Tu <span className="span2">vehículo</span></p>
                        <div className="policy-error-img-container">
                            <img src="/assets/icons/policy-form/tu-vehiculo.svg" alt="Tu vehículo" id="img-vehicle" />
                        </div>
                        <div className="form-line">
                            <Autocomplete label="Marca de tu auto" default={this.state.brand} options={this.state.brandOptions.map(item => item.name)} onChange={(e) => this.handleBrand(e)} loading={false} />
                            <p className="text-field-error" ref={brandError => this.brandError = brandError}>Elegí una opción</p>
                        </div>
                        <div className="form-line">
                            <Autocomplete label="Año" default={this.state.year} options={this.state.yearOptions.map(item => item)} onChange={(e) => this.handleYear(e)} loading={!this.state.yearReady} />
                            <p className="text-field-error" ref={yearError => this.yearError = yearError}>Elegí una opción</p>
                        </div>
                        <div className="form-line">
                            <Autocomplete label="Grupo" default={this.state.group} options={this.state.groupOptions.map(item => item.name)} onChange={(e) => this.handleGroup(e)} loading={!this.state.groupReady} />
                            <p className="text-field-error" ref={groupError => this.groupError = groupError}>Elegí una opción</p>
                        </div>

                        <div className="form-line">
                            <Autocomplete label="Modelo y versión" default={this.state.model} options={this.state.modelOptions.map(item => item.name ?? item.description)} onChange={(e) => this.handleModel(e)} loading={!this.state.modelReady} />
                            <p className="text-field-error" ref={modelError => this.modelError = modelError}>Elegí una opción</p>
                        </div>

                        {/* {this.state.brandOptions !== null ?
                            <div className="form-line">
                                <label htmlFor="brand" className="form-label">Marca</label>
                                <Form.Control as="select"
                                    onChange={(e) => this.handleBrand(e)}
                                    className="select-field"
                                    ref={brand => this.brand = brand}
                                    value={this.state.brand !== null && this.state.brand}
                                >
                                    {this.state.brand !== null && this.state.brand !== '' ?
                                        (!this.state.brandOptions.find(item => item.name == this.state.brand) && <option key="" value={this.state.brand}>{this.state.brand}</option>)
                                        :
                                        <option key="" value="">Elegí una opción</option>
                                    }
                                    {this.renderBrandOptions()}
                                </Form.Control>
                                <p className="text-field-error" ref={brandError => this.brandError = brandError}>Elegí una opción</p>
                            </div>
                            :
                            <div className="form-line">
                                <label htmlFor="brand" className="form-label">Marca</label>
                                <Form.Control as="select" onChange={(e) => this.handleBrand(e)} className="select-field" ref={brand => this.brand = brand}>
                                    <option key="" value={this.state.brand}>{this.state.brand}</option>
                                </Form.Control>
                                <p className="text-field-error" ref={brandError => this.brandError = brandError}>Elegí una opción</p>
                            </div>
                        }

                        {this.state.yearOptions !== null ?
                            <div className="form-line">
                                <label htmlFor="year" className="form-label">Año</label>
                                <Form.Control as="select"
                                    onChange={(e) => this.handleYear(e)}
                                    className="select-field"
                                    ref={year => this.year = year}
                                    value={this.state.year}
                                >
                                    {this.state.year !== null && this.state.year !== '' ?
                                        (!this.state.yearOptions.find(item => item == this.state.year) && <option key="" value={this.state.year}>{this.state.year}</option>)
                                        :
                                        <option key="" value="">Elegí una opción</option>
                                    }
                                    {this.renderYearOptions()}
                                </Form.Control>
                                <p className="text-field-error" ref={yearError => this.yearError = yearError}>Elegí una opción</p>
                            </div>
                            :
                            <div className="form-line">
                                <label htmlFor="year" className="form-label">Año</label>
                                <Form.Control as="select"
                                    onChange={(e) => this.handleYear(e)}
                                    className="select-field"
                                    ref={year => this.year = year}>
                                    <option key="" value="">Elegí una opción</option>
                                    {this.renderYearOptions()}
                                </Form.Control>
                                <p className="text-field-error" ref={yearError => this.yearError = yearError}>Elegí una opción</p>
                            </div>
                        }

                        {this.state.groupOptions !== null ?
                            <div className="form-line">
                                <label htmlFor="group" className="form-label">Grupo</label>
                                <Form.Control as="select"
                                    onChange={(e) => this.handleGroup(e)}
                                    className="select-field"
                                    ref={group => this.group = group}
                                    value={this.state.group}
                                >
                                    {this.state.group !== null && this.state.group !== '' ?
                                        (!this.state.groupOptions.find(item => item.name == this.state.group) && <option key="" value={this.state.group}>{this.state.group}</option> )
                                        :
                                        <option key="" value="">Elegí una opción</option>
                                    }
                                    {this.renderGroupOptions()}
                                </Form.Control>
                                <p className="text-field-error" ref={groupError => this.groupError = groupError}>Elegí una opción</p>
                            </div>
                            :
                            <div className="form-line">
                                <label htmlFor="group" className="form-label">Grupo</label>
                                <Form.Control as="select"
                                    onChange={(e) => this.handleGroup(e)}
                                    className="select-field"
                                    ref={group => this.group = group}>
                                    <option key="" value="">Elegí una opción</option>
                                    {this.renderGroupOptions()}
                                </Form.Control>
                                <p className="text-field-error" ref={groupError => this.groupError = groupError}>Elegí una opción</p>
                            </div>
                        }

                        {this.state.modelOptions !== null ?
                            <div className="form-line">
                                <label htmlFor="model" className="form-label">Modelo</label>
                                <Form.Control as="select"
                                    onChange={(e) => this.handleModel(e)}
                                    className="select-field"
                                    ref={model => this.model = model}
                                    value={this.state.model !== null && this.state.model}
                                >
                                    {this.state.model !== null && this.state.model !== '' ?
                                        (!this.state.modelOptions.find(item => item.name = this.state.model) && <option key="" value={this.state.model}>{this.state.model}</option>)
                                        :
                                        <option key="" value="">Elegí una opción</option>
                                    }
                                    {this.renderModelOptions()}
                                </Form.Control>
                                <p className="text-field-error" ref={modelError => this.modelError = modelError}>Indicá el modelo exacto de tu vehículo</p>
                            </div>
                            :
                            <div className="form-line">
                                <label htmlFor="model" className="form-label">Modelo</label>
                                <Form.Control as="select"
                                    onChange={(e) => this.handleModel(e)}
                                    className="select-field"
                                    ref={model => this.model = model}>
                                    <option key="" value={this.state.model}>{this.state.model}</option>
                                    {this.renderModelOptions()}
                                </Form.Control>
                                <p className="text-field-error" ref={modelError => this.modelError = modelError}>Indicá el modelo exacto de tu vehículo</p>
                            </div>
                        } */}

                        {this.state.engine !== null && this.state.engine !== '' ?
                            <div className="form-line">
                                <label htmlFor="engine" className="form-label">Número de motor</label>
                                <input
                                    className="text-field"
                                    type="text"
                                    id="engine"
                                    onChange={(e) => this.handleEngine(e)}
                                    ref={engine => this.engine = engine}
                                    value={this.state.engine}
                                />
                                <p className="text-field-error" ref={engineError => this.engineError = engineError}>Colocá el número de motor sin espacios</p>
                            </div>
                            :
                            <div className="form-line"></div>
                        }
                        {this.state.chassis !== null && this.state.chassis !== '' ?
                            <div className="form-line">
                                <label htmlFor="chassis" className="form-label">Número de chasis o cuadro</label>
                                <input
                                    className="text-field"
                                    type="text"
                                    id="chassis"
                                    onChange={(e) => this.handleChassis(e)}
                                    ref={chassis => this.chassis = chassis}
                                    value={this.state.chassis}
                                />
                                <p className="text-field-error" ref={chassisError => this.chassisError = chassisError}>Colocá el número de chasis o cuadro sin espacios</p>
                            </div>
                            :
                            <div className="form-line">
                            </div>
                        }
                    </form>
                    {this.state.insurer === null && this.state.coverage === null && (this.state.fromDate === null || this.state.fromDate === '') && (this.state.toDate === null || this.state.toDate === "") && this.state.quote === null ?
                        <div></div>
                        :
                        <form className="policy-error-form-container">
                            <p className="policy-error-form-title">Tu <span className="span2">seguro</span></p>
                            <div className="policy-error-img-container">
                                <img src="/assets/icons/policy-form/tu-poliza.svg" alt="Tu seguro" id="img-policy" />
                            </div>
                            {this.state.insurer !== null && this.state.insurer !== '' ?
                                <div>
                                    {this.state.insurerOptions !== null ?
                                        <div className="form-line">
                                            <label htmlFor="company" className="form-label">Compañía aseguradora</label>
                                            <Form.Control as="select"
                                                onChange={(e) => this.handleInsurer(e)}
                                                className="select-field"
                                                ref={insurer => this.insurer = insurer}
                                                value={this.state.insurer !== null && this.state.insurer}
                                            >
                                                {this.state.insurer !== null && this.state.insurer !== '' ?
                                                    <option key="" value={this.state.insurer}>{this.state.insurer}</option>
                                                    :
                                                    <option key="" value="">Elegí una opción</option>
                                                }
                                                {this.state.insurerOptions !== null && this.renderInsurerOptions()}
                                            </Form.Control>
                                            <p className="text-field-error" ref={insurerError => this.insurerError = insurerError}>Elegí el nombre de la compañía aseguradora</p>
                                        </div>
                                        :
                                        <div className="form-line">
                                            <label htmlFor="company" className="form-label">Compañía aseguradora</label>
                                            <input className="text-field" type="text" id="company" onChange={(e) => this.handleCompany(e)} ref={insurer => this.insurer = insurer} placeholder="Completar" />
                                            <p className="text-field-error" ref={insurerError => this.insurerError = insurerError}>Colocá el nombre de la compañía aseguradora</p>
                                        </div>
                                    }
                                </div>
                                :
                                null
                            }
                            {this.state.coverage !== null && this.state.coverage !== '' ?
                                <div>
                                    {this.state.coveragesOptions !== null ?
                                        <div className="form-line">
                                            <label htmlFor="coverage" className="form-label">Cobertura actual</label>
                                            <Form.Control as="select"
                                                onChange={(e) => this.handleCoverage(e)}
                                                className="select-field"
                                                ref={coverage => this.coverage = coverage}
                                                value={this.state.coverage !== null && this.state.coverage}
                                            >
                                                {this.state.coverage !== null && this.state.coverage !== '' ?
                                                    <option key="" value={this.state.coverage}>{this.state.coverage}</option>
                                                    :
                                                    <option key="" value="">Elegí una opción</option>
                                                }
                                                {this.state.coverageOptions !== null && this.renderCoverageOptions()}
                                            </Form.Control>
                                            <p className="text-field-error" ref={coverageError => this.coverageError = coverageError}>Elegí el tipo de cobertura actual</p>
                                        </div>
                                        :
                                        <div className="form-line">
                                            <label htmlFor="coverage" className="form-label">Cobertura actual</label>
                                            <Form.Control as="select"
                                                onChange={(e) => this.handleCoveragex(e)}
                                                className="select-field"
                                                ref={coverage => this.coverage = coverage}
                                                value={this.state.coverage !== null && this.state.coverage}
                                                disabled>
                                                <option key="" value="">Elegí una opción</option>
                                            </Form.Control>
                                            <p className="text-field-error" ref={coverageError => this.coverageError = coverageError}>Elegí el tipo de cobertura actual</p>
                                        </div>

                                    }
                                </div> : null}
                            {this.state.fromDate !== null && this.state.formDate !== "" ?
                                <div className="form-line">
                                    <label htmlFor="valid-start" className="form-label">Vigencia desde</label>
                                    <input className="text-field" type="date" id="valid-start" onChange={(e) => this.handleFromDate(e)} ref={fromDate => this.fromDate = fromDate}
                                        value={this.state.fromDate}
                                    />
                                    <p className="text-field-error" ref={fromDateError => this.fromDateError = fromDateError}>Colocá la fecha de inicio de vigencia</p>
                                </div>
                                :
                                <div></div>
                            }
                            {this.state.toDate !== null && this.state.toDate !== '' ?
                                <div className="form-line">
                                    <label htmlFor="valid-end" className="form-label">Vigencia hasta</label>
                                    <input className="text-field" type="date" id="valid-snd" onChange={(e) => this.handleToDate(e)} ref={toDate => this.toDate = toDate} value={this.state.toDate} />
                                    <p className="text-field-error" ref={toDateError => this.toDateError = toDateError}>Colocá la fecha en la que termina la vigencia</p>
                                </div>
                                :
                                null
                            }
                            {this.state.quote !== null && this.state.quote !== '' ?
                                <div className="form-line">
                                    <label htmlFor="quote" className="form-label">Cuota</label>
                                    <input className="text-field" type="text" pattern="\d*" id="quote" onChange={(e) => this.handleQuote(e)} ref={quote => this.quote = quote} value={this.state.quote} />
                                    <p className="text-field-error" ref={quoteError => this.quoteError = quoteError}>Colocá el valor del premio</p>
                                </div>
                                :
                                null
                            }
                        </form>
                    }
                </div>
                <AmplitudeButton action={(e) => this.handleClick(e)}
                    bg={"green"}
                    text={"Cotizar"}
                    active={true}
                    className="button" />
                {this.state.loading === true ? <MessagesModal /> : null}
            </CompletePolicyContainer>
        )
    }
}
