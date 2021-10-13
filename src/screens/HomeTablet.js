import React, { Component } from 'react'
import { HomeProvider } from '../contexts/LoadingContext.js'
import Header from '../components/HomeSections/HomeHeader.js'
import HeaderTablet from '../components/HomeSections/HomeHeaderTablet.js'
import SectionSteps from '../components/HomeSections/SectionSteps.js'
import SectionBenefits from '../components/HomeSections/SectionBenefits.js'
import SectionBenefits2 from '../components/HomeSections/SectionBenefits copy.js'
import SectionInsuranceBrands from '../components/HomeSections/SectionInsuranceBrands.js'
import SectionInsuranceBrandsMobile from '../components/HomeSections/SectionInsuranceBrandsMobile.js'
import ReviewsCarousel from '../components/ReviewsCarousel/ReviewsCarousel.js'
import HomeFooter from '../components/HomeSections/HomeFooter.js'


class Home extends Component {
    constructor(){
        super()
        this.state = {
            loading: false
        }
        this.handleLoading = this.handleLoading.bind(this)
      }
      
      handleLoading(bool){
        console.log(bool)
        this.setState({...this.state, loading: bool})
      }
      
      componentDidMount(){
        // if(window.location.href !== "/"){
        //   window.location.href = "/"
        // }
        this.setState({...this.state, policy: this.props.policy, loading: false})
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


    render() {
        return (
            <div>
                holi
                {/* <HomeProvider value={{handleLoading: this.handleLoading}}> */}
                    {/* <HeaderTablet /> */}
                    {/* <SectionSteps /> */}
                    {/* <SectionBenefits /> */}
                    {/* <SectionBenefits2 /> */}
                    {/* <SectionInsuranceBrands /> */}
                    {/* <SectionInsuranceBrandsMobile /> */}
                    {/* <ReviewsCarousel />
                    <HomeFooter /> */}
                {/* </HomeProvider> */}
            </div>
        );
    }
}

export default Home;