import React, { Component } from 'react'
import AmplitudeButton from '../Button/AmplitudeButton.js'
import HomeFormTablet from '../HomeForm/HomeFormTablet.js'

export default class HomeHeaderTablet extends Component {
    constructor(props){
        super(props)
        this.state = {
            step: 0,
            policy: '',
            tablet: false,
        }
        this.previousStep = this.previousStep.bind(this)
        this.handleLoading = this.handleLoading.bind(this)
    }

    componentDidMount(){
        this.formTablet.style.display = 'none'
        if(this.props.policy !== ''){
            this.setState({policy: this.props.policy})
        }
        if(this.props.step !== 0 && this.props.policy){
            console.log("props home header tablet", this.props)
            this.setState({step: this.props.step})
            this.getFormPolicyTablet()
            console.log("this props step", this.props.step)
        } else if (this.props.step !== 0 && !this.props.policy){
            this.setState({step: this.props.step})
            this.getFormNoPolicyTablet()
        }
    }
    componentDidUpdate(prevProps){
        console.log("props home header tablet", this.props)
        if (this.props.policy !== prevProps.policy) {
            this.setState({policy: this.props.policy});
          }
        if(this.props.step !== prevProps.step){
            this.setState({step: this.props.step})
        }
          setTimeout(() => { 
            if(this.state.step === 0 && this.rowTopTablet !== null && this.carTablet !== null && this.formTablet !== null){
                    this.rowTopTablet.style.display = 'flex'
                    this.carTablet.style.display = 'flex' 
                    this.carTablet.style.animationName = '';
                    this.formTablet.style.display = 'none'
                }
                }, 500); 
    }
    previousStep(childStep){
        if(childStep === 0){
            this.setState({...this.state, step: this.state.step -1})
        } else {
            this.setState({...this.state, step: this.state.step -1})
        }
    }

    getFormPolicyTablet(){
        this.setState({...this.state, step: 1, policy: true});  
        setTimeout(() => this.getFormTablet(), 300)
    }

    getFormNoPolicyTablet(){
        this.setState({...this.state, step: 1, policy: false});
        setTimeout(() => this.getFormTablet(), 300)
        
    }
    getCarTablet(){
        return <img src="/assets/body/poolpo-chico.png" alt="auto" ref={refId => this.carTablet = refId} className="car-tablet"/> 
    }   

    getFormTablet(){
        if(this.state.step === 0){
            setTimeout(() => { 
                this.rowTopTablet.style.display = 'flex'
                this.carTablet.style.display = 'flex' 
                this.carTablet.style.animationName = '';
                this.formTablet.style.display = 'none'
                }, 700); 
        } else if(this.state.policy === false || this.state.policy === true){
            this.carTablet.style.animationName = 'carTablet';
            setTimeout(() => { 
                this.rowTopTablet.style.display = 'none'
                this.carTablet.style.display = 'none' 
                this.formTablet.style.display = 'flex'
                }, 700); 
        } else {
            console.log("con poliza")
        }
    }
    handleLoading(bool){
        this.props.loading(bool)
    }
    render() {
        return(
            <div>
                <div className="row-top-tablet" ref={rowTopTablet => this.rowTopTablet = rowTopTablet}>
                    <div className="title-col col-xs-12 col-sm-8 col-md-8 col-lg-6">
                        <div className="header-title-tablet" ref={headerTitle => this.headerTitle = headerTitle}>
                            <h1 id="header-title"><span className="span1">Tu <b className="bold-h1">recomendador</b></span></h1> 
                            <h1><span className="span1">de seguros <b className="bold-h1">inteligente</b></span></h1>
                            <div className="title-paragraph-container">
                                <p className="title-paragraph">El seguro de tu vehículo al mejor precio,</p>
                                <p className="title-paragraph">mismas condiciones y con las mejores compañías.</p>
                            </div>
                        </div>
                        <div className="button-container" ref={buttonContainer => this.buttonContainer = buttonContainer}>
                            <AmplitudeButton className="green-button" id="header-btn-green" bg={"green"} text={"Cotizar con mi póliza"} action={() => this.getFormPolicyTablet() }/> 
                            <AmplitudeButton className="red-button" id="header-btn-red"bg={"red"} text={"Cotizar sin póliza"} action={() => this.getFormNoPolicyTablet() }/>
                        </div>              
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6">
                        {this.getCarTablet()}
               
                    </div>
                </div>
                <div className="form-mobile" ref={refId => this.formTablet = refId}>
                    <HomeFormTablet step={this.state.step} policy={this.state.policy} previousStep={this.previousStep} loading={this.handleLoading}/>
                {/* {this.getFormTablet()} */}
                </div>
            </div>
        )
    }
}