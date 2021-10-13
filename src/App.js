import React, { Component } from 'react';
import GlobalStyle from './Styles/GlobalStyles.js'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from '../src/components/NavBar/NavBar.js'
import Home from '../src/screens/Home'
import HomeFooter from './components/HomeSections/HomeFooter.js'
import Footer from '../src/components/Footer/Footer.js'
import Quotation from './screens/Quotation.js'
import QuotationTablet from './screens/QuotationTablet.js'
import QuotationMobile from './screens/QuotationMobile.js'
import QuotationStyles from './Styles/GlobalStyles.js'
import BuyPolicy from './screens/BuyPolicy.js'
import BuyPolicyNewsletter from './screens/BuyPolicyNewsletter.js'
import Payment from './screens/Payment.js'
import Congrats from './screens/Congrats.js'
import MessageSent from './screens/MessageSent.js'
import Faq from './screens/Faq.js'
import About from './screens/About.js'
import Error from './screens/Error.js'
import ErrorPolicy from './screens/ErrorPolicy.js'
import CompletePolicyData from './screens/CompletePolicyData.js'
import CompletePolicyDataTablet from './screens/CompletePolicyDataTablet.js'
import Contact from './screens/Contact.js'
import Press from './screens/Press.js'
import PressMobile from './screens/PressMobile.js'
import ErrorNoQuotes from './screens/ErrorNoQuotes.js';
import Login from './screens/Login.js';
import Resign from './screens/Resign.js';

import Customers from './screens/Customers.js';

import Report from './screens/Report.js';
import ReportWheel from './screens/ReportWheel.js';
import ReportPartial from './screens/ReportPartial.js';
import ReportCrystals from './screens/ReportCrystals.js';
import ReportLock from './screens/ReportLock.js';
import ReportCongrat from './screens/ReportCongrat.js';
import amplitude from "amplitude-js";
import { AmplitudeProvider } from "@amplitude/react-amplitude";

const AMPLITUDE_KEY = require("./config")['amplitudeKey'];

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => localStorage.getItem('token')
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/Login', state: { from: props.location } }} />}
    />
  )
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Nombre',
      leadID: null,
      quoteId: null,
      desktop: true,
      tablet: false,
      mobile: false,
      loading: false,
      width: null,
      policy: '',
      step: 0
    }
    console.log(AMPLITUDE_KEY)
    this.handleFooterClick = this.handleFooterClick.bind(this)
  }

  componentDidMount() {
    let width = window.innerWidth;
    this.setState({ width })
    window.addEventListener('resize', () => {
      let width = window.innerWidth;
      this.setState({ width })
    });
  }
  componentDidUpdate() {
    //console.log("ancho", this.state.width)
  }
  renderCompletePolicyData() {
    // let name = localStorage.getItem('Name')
    let leadID = localStorage.getItem('LeadID')
    console.log("render complete policy data")
    if (leadID !== null && this.state.width > 1365) {
      return (<div>
        <CompletePolicyData name={this.state.name} />
      </div>)
    } else if (leadID !== null && this.state.width < 1366) {
      return (<div>
        <CompletePolicyDataTablet name={this.state.name} />
      </div>)
    } else {
      window.location.href = "/"
    }
  }
  renderPress() {
    if (this.state.width < 768) {
      return (<div>
        <PressMobile />
        <HomeFooter width={this.props.width} handleFooterClick={this.handleFooterClick} />
      </div>)
    } else {
      return (<div>
        <Press />
        <HomeFooter width={this.props.width} handleFooterClick={this.handleFooterClick} />
      </div>)
    }
  }

  getWidth() {
    let width = window.innerWidth;
    this.setState({ width })
  }

  handleLoading(loading) {
    this.setState({ loading })
  }
  checkUser() {
    let leadID = localStorage.getItem('LeadID')
    if (leadID) {
      return true
    } else {
      return false
    }
  }
  handleFooterClick(policy) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    setTimeout(() => {
      this.setState({ policy: policy, step: 1 })
    }, 500);
  }
  render() {
    return (
      <div className="app">
        <AmplitudeProvider
          amplitudeInstance={amplitude.getInstance()}
          apiKey={AMPLITUDE_KEY}
        >
          <Router>
            <NavBar className="nav" desktop={this.state.desktop} />
            <Switch>
              <Route exact path="/Login">
                <Login />
              </Route>
              <Route path="/" exact>
                <Home width={this.state.width} handleLoadingData={this.handleLoadingData} policy={this.state.policy} step={this.state.step} />
                <HomeFooter width={this.props.width} handleFooterClick={this.handleFooterClick} />
              </Route>
              <Route path="/CotizarConPoliza" exact>
                <Home width={this.state.width} handleLoadingData={this.handleLoadingData} policy={true} step={1} />
                <HomeFooter width={this.props.width} handleFooterClick={this.handleFooterClick} />
              </Route>
              <Route path="/CotizarSinPoliza" exact>
                <Home width={this.state.width} handleLoadingData={this.handleLoadingData} policy={false} step={1} />
                <HomeFooter width={this.props.width} handleFooterClick={this.handleFooterClick} />
              </Route>
              {/* <Route exact path="/Cotizacion">
              {this.state.width > 1365 && <Quotation name={this.state.name} width={this.state.width}/>}
              {this.state.width < 1366 && this.state.width > 767 ? <QuotationTablet name={this.state.name}  width={this.state.width}/> : null}
              {this.state.width < 768 ? <QuotationMobile name={this.state.name}  width={this.state.width}/> : null}
              <HomeFooter width={this.props.width} handleFooterClick={this.handleFooterClick}/>
              <QuotationStyles />
            </Route> */}
              {/* Render CompleteData with screen width */}
              {this.state.width > 1365 && <Route exact path="/cargardatos/:leadId/:vehicleId" component={CompletePolicyData} />}
              {this.state.width < 1366 && <Route exact path="/cargardatos/:leadId/:vehicleId" component={CompletePolicyDataTablet} />}
              {/* Quotations with leadID and vehicleID */}
              {this.state.width > 1365 && <Route exact path="/Cotizacion/:leadId/:vehicleId" component={(props) => <Quotation {...props} width={this.state.width} />} />}
              {this.state.width < 1366 && this.state.width > 767 ? <Route exact path="/Cotizacion/:leadId/:vehicleId" component={(props) => <QuotationTablet {...props} width={this.state.width} />} /> : null}
              {this.state.width < 768 ? <Route exact path="/Cotizacion/:leadId/:vehicleId" component={(props) => <QuotationMobile {...props} width={this.state.width} />} /> : null}

              {/* BuyPolicy with leadID, vehicleID and quoteID */}
              <Route exact path="/Contratar/:leadId/:vehicleId/:quoteId" component={BuyPolicyNewsletter} />
              <Route exact path="/Pago/:customerId/:quoteId" component={Payment} />
              <Route exact path="/Nosotros">
                <About />
                <HomeFooter width={this.props.width} handleFooterClick={this.handleFooterClick} />
              </Route>
              <Route exact path="/PreguntasFrecuentes">
                <Faq width={this.state.width} />
                <HomeFooter width={this.props.width} handleFooterClick={this.handleFooterClick} />
              </Route>
              <Route exact path="/Contacto">
                <Contact />
                <HomeFooter width={this.props.width} handleFooterClick={this.handleFooterClick} />
              </Route>
              <Route exact path="/Prensa">
                {() => this.renderPress()}
              </Route>
              <Route exact path="/Felicitaciones">
                <Congrats />
              </Route>
              <Route exact path="/MensajeEnviado" component={MessageSent} />
              <Route exact path="/Error" component={Error} />
              <Route exact path="/ErrorPoliza" component={ErrorPolicy} />
              <Route exact path="/ErrorCotizaciones" component={ErrorNoQuotes} />
              <Route exact path="/como-tramitar-la-baja" component={Resign} />

              <PrivateRoute exact path="/Clientes" component={Customers} />
              <PrivateRoute exact path="/Clientes/Siniestros" component={Report} />
              <PrivateRoute exact path="/Clientes/Siniestros/siniestroCargado" component={ReportCongrat} />

              <PrivateRoute exact path="/Clientes/Siniestros/Parciales" component={ReportPartial} />
              <PrivateRoute exact path="/Clientes/Siniestros/Rueda" component={ReportWheel} />
              <PrivateRoute exact path="/Clientes/Siniestros/Cristales" component={ReportCrystals} />
              <PrivateRoute exact path="/Clientes/Siniestros/Cerradura" component={ReportLock} />

            </Switch>
            <Footer />
            <GlobalStyle />
          </Router>
        </AmplitudeProvider>
      </div>
    );
  }
}

export default App;
