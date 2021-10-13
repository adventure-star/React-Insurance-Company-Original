import React, { Component } from 'react'
import HomeForm from '../HomeForm/HomeForm.js'
import AmplitudeButton from '../Button/AmplitudeButton'

export default class HomeHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            policy: '',
            step: 0,
            tablet: false
        }
        this.handleLoading = this.handleLoading.bind(this)
    }
    componentDidMount() {
        if (this.props.policy !== '') {
            this.setState({ policy: this.props.policy })
        }
    }
    componentDidUpdate(prevProps) {
        // Uso tipico (no olvides de comparar las props):
        if (this.props.policy !== prevProps.policy) {
            this.setState({ policy: this.props.policy });
        }
    }

    getFormPolicy() {
        this.setState({ ...this.state, policy: true });
    }

    getFormNoPolicy() {
        this.setState({ ...this.state, policy: false });
    }

    getFormPolicyTablet() {
        this.setState({ ...this.state, policy: true, tablet: true });
    }

    getFormNoPolicyTablet() {
        this.setState({ ...this.state, policy: false, tablet: true });
    }

    getCar() {
        return <img src="/assets/body/poolpo-chico.png" alt="auto" ref={refId => this.car = refId} className="car" />
    }
    handleLoading(bool) {
        this.props.loading(bool)
    }


    getForm() {
        //console.log("render form", this.props.policy, this.state.step)
        if (this.state.policy === false && this.car && this.rowTop) {
            this.car.style.animationName = 'car';
            this.rowTop.style.animationName = 'rowTop';
            this.rowTop.style.height = '880px'
            setTimeout(() => { if(this.car) this.car.style.display = 'none' }, 700);
            return (
                <div>
                    <HomeForm policy={this.state.policy} loading={this.handleLoading} step={this.state.step} />
                </div>
            )
        } else if (this.state.policy === true && this.state.policy !== '' && this.car && this.rowTop) {
            this.car.style.animationName = 'car';
            this.rowTop.style.animationName = 'rowTopShort';
            this.rowTop.style.height = '700px'
            setTimeout(() => { if(this.car) this.car.style.display = 'none' }, 700);
            return (
                <div>
                    <HomeForm policy={this.state.policy} loading={this.handleLoading} step={this.state.step} />
                </div>
            )
        }
    }
    getCarTablet() {
        return <img src="/assets/body/poolpo-chico.png" alt="auto" ref={refId => this.car = refId} className="car" />
    }

    getFormTablet() {
        if (this.state.policy === false && this.state.tablet === true) {
            console.log("sin poliza")
        } else if (this.state.policy === true && this.state.policy !== '' && this.state.tablet === true) {
            console.log("con poliza")
        }
    }


    render() {
        return (
            <div>
                <div className="row-top" ref={rowTop => this.rowTop = rowTop}>
                    <div className="title-col col-xs-12 col-sm-7 col-md-6 col-lg-6">
                        <div className="header-title">
                            <h1 id="header-title"><span className="span1">Tu <b className="bold-h1">recomendador</b></span></h1>
                            <h1><span className="span1">de seguros <b className="bold-h1">inteligente</b></span></h1>
                            <div className="title-paragraph-container">
                                <p className="title-paragraph">El seguro de tu vehículo al mejor precio,</p>
                                <p className="title-paragraph">mismas condiciones y con las mejores compañías.</p>
                            </div>
                        </div>
                        <div className="button-container">
                            <AmplitudeButton className="green-button" id="header-btn-green" bg={"green"} text={"Cotizar con mi póliza"} action={() => this.getFormPolicy()} />
                            <AmplitudeButton className="red-button" id="header-btn-red" bg={"red"} text={"Cotizar sin póliza"} action={() => this.getFormNoPolicy()} />
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-5 col-md-6 col-lg-6">
                        {this.getCar()}
                        {this.getForm()}
                    </div>
                </div>
            </div>
        )
    }
}

