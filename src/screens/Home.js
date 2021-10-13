import React, { Component } from 'react'
import Header from '../components/HomeSections/HomeHeader.js'
import HeaderTablet from '../components/HomeSections/HomeHeaderTablet.js'
import HeaderMobile from '../components/HomeSections/HomeHeaderMobile.js'
import SectionSteps from '../components/HomeSections/SectionSteps.js'
import SectionBenefits from '../components/HomeSections/SectionBenefits.js'
import SectionInsuranceBrands from '../components/HomeSections/SectionInsuranceBrands.js'
import SectionInsuranceBrandsMobile from '../components/HomeSections/SectionInsuranceBrandsMobile.js'
import Deck from '../components/ReviewsSlider/Deck.js'
import HomeFooter from '../components/HomeSections/HomeFooter.js'
import MessagesModal from '../components/LoadingModal/MessagesModal.js'


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            step: 0,
            policy: '',
            loading: true,
            lead: null,
        }
        this.handleLoading = this.handleLoading.bind(this)
        this.handleForms = this.handleForms.bind(this)
      }
      componentDidMount(){
        // if(window.location.href !== "/"){
        //   window.location.href = "/"
        // }
        this.setState({...this.state, step: this.props.step, policy: this.props.policy, loading: false})
      }

      componentDidUpdate(prevProps) {
        // Uso tipico (no olvides de comparar las props):
        if (this.props.policy !== prevProps.policy) {
          this.setState({policy: this.props.policy});
        }
        if(this.props.step !== prevProps.step){
          this.setState({step: this.props.step})
        }
      }
      
      handleLoading(bool){
        this.setState({...this.state, loading: bool})
        console.log("loading modal", true)
      }

      handleForms(policy){
        this.setState({...this.state, policy})
      }

      handleFooterClick(policy){
        this.setState({policy: policy})
      }

      renderHeader(){
        if(this.props.width > 1365){
          return <Header loading={this.handleLoading} step={this.state.step} policy={this.state.policy}/>
        } else if (this.props.width < 1366 && this.props.width > 767){
          return <HeaderTablet loading={this.handleLoading} step={this.state.step} policy={this.state.policy}/>
        } else if(this.props. width < 768){
          return <HeaderMobile loading={this.handleLoading} step={this.state.step} policy={this.state.policy}/>
        }
      }


    render() {
        return (
            <div>
                {this.renderHeader()}
                <SectionSteps handleForms = {this.handleForms}/>
                <SectionBenefits/>
                <SectionInsuranceBrands />
                <SectionInsuranceBrandsMobile />
                {/* <Deck /> */}
                {this.state.loading === true ? <MessagesModal /> : null}
            </div>
        );
    }
}

export default Home;