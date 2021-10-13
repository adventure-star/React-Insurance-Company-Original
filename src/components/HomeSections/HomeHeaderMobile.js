import React, { Component } from 'react'
import AmplitudeButton from '../Button/AmplitudeButton.js'
import HomeFormMobile from '../HomeForm/HomeFormMobile.js'

export default class HomeHeaderMobile extends Component {
    constructor(props){
        super(props)
        this.state = {
            step: 0,
            policy: '',
            tablet: false
        }
        this.previousStep = this.previousStep.bind(this)
        this.handleLoading = this.handleLoading.bind(this)
    }

    componentDidMount(){
        this.formMobile.style.display = 'none'
        if(this.props.policy !== ''){
            this.setState({policy: this.props.policy})
        }
        if(this.props.step !== 0 && this.props.policy){
            this.setState({step: this.props.step})
            this.getFormPolicyMobile()
        } else if (this.props.step !== 0 && !this.props.policy){
            this.setState({step: this.props.step})
            this.getFormNoPolicyMobile()
        }
    }
    componentDidUpdate(prevProps){
        if (this.props.policy !== prevProps.policy) {
          this.setState({policy: this.props.policy});
          if(this.props.step !== 0 && this.props.policy){
            this.setState({step: this.props.step})
            this.getFormPolicyMobile()
            } else if (this.props.step !== 0 && !this.props.policy){
                this.setState({step: this.props.step})
                this.getFormNoPolicyMobile()
            }
        }
        if(this.state.step === 0 && this.rowTopMobile !== null && this.formMobile !== null){
            setTimeout(() => { 
                if(this.rowTopMobile !== null && this.formMobile !== null){
                    this.rowTopMobile.style.display = 'flex'
                    this.formMobile.style.display = 'none'
                }
                }, 100); 
        }
    }
    previousStep(childStep){
        if(childStep === 0){
            this.setState({...this.state, step: this.state.step -1})
        } else {
            this.setState({...this.state, step: this.state.step -1})
        }
    }
    getFormPolicyMobile(){
        this.setState({...this.state, step: 1, policy: true});  
        setTimeout(() => this.getFormTablet(), 300)
    }

    getFormNoPolicyMobile(){
        this.setState({...this.state, step: 1, policy: false});
        setTimeout(() => this.getFormTablet(), 300)
        
    }


    getFormTablet(){
        if(this.state.step === 0){
            setTimeout(() => { 
                this.rowTopMobile.style.display = 'flex'
                this.formMobile.style.display = 'none'
                }, 700); 
        } else if((this.state.policy === false && this.state.step === 1)|| (this.state.policy === true && this.state.step === 1)){
            setTimeout(() => { 
                this.rowTopMobile.style.display = 'none'
                this.formMobile.style.display = 'flex'
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
                <div className="row-top-mobile" ref={rowTopMobile => this.rowTopMobile = rowTopMobile}>
                    <div className="title-col col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h1><span className="span1">Tu <b className="bold-h1">recomendador</b></span></h1> 
                            <h1><span className="span1">de seguros <b className="bold-h1">inteligente</b></span></h1>
                            <div className="title-paragraph-container">
                                <p className="title-paragraph">El seguro de tu vehículo al mejor precio,</p>
                                <p className="title-paragraph">mismas condiciones y con las mejores compañías.</p>
                            </div>
                        <div className="button-container" ref={buttonContainer => this.buttonContainer = buttonContainer}>
                            <AmplitudeButton className="green-button" id="header-btn-red" bg={"green"}  text={"Cotizar con mi póliza"} font={'13px'} action={() => this.getFormPolicyMobile() }/> 
                            <AmplitudeButton className="red-button" id="header-btn-green"bg={"red"}  text={"Cotizar sin póliza"} font={'13px'} action={() => this.getFormNoPolicyMobile() }/>
                        </div>              
                    </div>
                </div>
                <div className="form-tablet" ref={refId => this.formMobile = refId}>
                    <HomeFormMobile step={this.state.step} policy={this.state.policy} previousStep={this.previousStep} loading={this.handleLoading}/>
                </div>
            </div>
        )
    }
}