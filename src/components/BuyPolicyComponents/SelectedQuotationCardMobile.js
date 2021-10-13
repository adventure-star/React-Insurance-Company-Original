import React, { Component } from 'react'
import Styled from 'styled-components'
import Theme from '../../Styles/Theme.js'
import SelectedQuotationDetails from './QuotationDetails.js'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

    const CardContainer = Styled.div`
        display: flex;
        flex-direction: column;
        background-color: ${Theme.white};
        border: 0.5px solid ${Theme.secondaryColor};
        box-shadow: 0 3px 6px 0 #00000029;
        border-radius: 0px;
        box-sizing: border-box;
        align-items: center;
        text-align: center;
        width: 100%;
        justify-content: space-between;
        overflow: hidden;
        .quotation-highlighted{
            position: relative;
            left: 76%;
            top: -53%;
        }
        p{
            font-family: ${Theme.secondaryFont};
            font-size: 12px;
            font-weight: 600;
            line-height: 1.36;
            text-align: left;
            margin: 0px;
        }
        .brand-container{
            display: flex;
            align-self: center;
            padding: 2%;
            box-sizing: border-box;
            border: 4px solid ${Theme.lightGrey};
            border-radius: 50%;
        }
        .brand-container img{
            border-radius: 50%;
            width: 57px;
            height: 57px;
        }
        .policy-title, .policy-price{
            font-family: ${Theme.secondaryFont};
            font-size: 12px;   
            font-weight: 300;
            align-self: flex-start;
            width: 100%;
        }
        .policy-description{
            font-size: 12px;
            align-self: center;
            text-transform: capitalize;
            margin-bottom: 2px;
        }
        .coverage-subtitle{
            font-size: 10px;
            align-self: center;
            text-transform: capitalize;
            margin: 4px 0px;
            font-weight: 300;
        }
        .sum-insured-container{
            margin-bottom: 20px;
        }
        .sum-insured{
            font-family: ${Theme.secondaryFont};
            font-size: 12px;
            font-weight: 300;
        }
        .sum-insured > span{
            font-weight: 700;
            color: ${Theme.secondaryColor};
        }
        .policy-title{
            margin-bottom: 0px;
        }
        .bold{
            font-weight: bold;
        }
        .policy-price span{
            font-family: ${Theme.secondaryFont};
            font-size: 13px;  
            font-weight: bold;
            color: ${Theme.secondaryColor}
        }
        .section-one{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        .section-two{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-left: 16px;
        }
        .selected-quotation-details{
            display: flex;
            flex-direction: column;
            background-color: ${Theme.white};
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: auto;
            padding: auto;
            width: 100%;
        }
        .line{
            width: 100vw;
            border-radius: 12px;
            border-bottom: solid 1px ${Theme.secondaryColor};
            margin-bottom: 23px;
        }
        .detail-line{
            display: flex;
        }

        #coverage-one{
            margin: 0;
        }
        .details-container{
            display: flex;
            justify-content: center;
            width: 100%;
        }
        .detail-line{
            display: flex;
            margin-bottom: 9.7px;
            align-items: center;
        }
        .icon-container{
            width: 40px;
            margin-right: 24px;
        }
        .detail-line p{
            font-family: ${Theme.secondaryFont};
            font-size: 9px;
            align-self: flex-start;
            color: #222222;
            width: 120px;
        }
        .detail-line img{
            height: 16px;
        }
        .quotation-section-one{
            display: flex;
            align-items: center;
            width: 100%;
        }
        .section-two{
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        .section-two:first-child{
            justify-content: flex-start;
        }
        .quotation-highlighted{
            position: relative;
            left: 97%;
            top: -44%;
            width: 30px;
            height: 30px;
        }
    `
    const accordionStyle = {
        border: 'none',
        boxShadow: "none",
        padding: "0",
        borderRadius: "0",
        width: '100vw'
      }
    
    

export default class SelectedQuotationCardMobile extends Component{
    constructor(props){
        super(props)
        this.state ={
            expanded: false
        }
    }
    
    renderPolicy(coverageId){
        let policyTitle;
        switch (coverageId) {
            case 1:
                policyTitle = "Responsabilidad Civil";
                break;
                case 2:
                policyTitle = "Robo y daño total";
                break;
            case 3:
                policyTitle = "Terceros";
                break;
            case 4:
                policyTitle = "Tercero Completos";
                break;
            case 5:
                policyTitle = "Todo Riesgo";
                break;
            default:
                policyTitle = ""
          }
          return policyTitle
    }
    renderDescription(description){
        let descriptionText = description.toLowerCase()
        return descriptionText
    }
    renderDetails(coverageId){
        return <SelectedQuotationDetails coverageId={coverageId} />
    }

    transformNumber(price){
        return new Intl.NumberFormat('en-ES', { minimumFractionDigits: 2 }).format(price)
    }

    renderBrandLogo(brand){
        let brandLogo;
        switch (brand) {
            case 1:
                brandLogo = "/assets/header/logo-poolpo.svg";
            break;
            case 2:
                brandLogo = "/assets/ImgBrands/zurich.svg";
            break;
            case 3:
                brandLogo = "/assets/ImgBrands/federacion.svg";
            break;
            case 4:
                brandLogo = "/assets/header/logo-poolpo.svg";
            break;
            case 5:
                brandLogo = "/assets/ImgBrands/galeno.svg";
            break;
            case 6:
                brandLogo = "/assets/ImgBrands/sancor.svg";
            break;
            case 7:
                brandLogo = "/assets/ImgBrands/alianza.svg";
            break;
            case 8:
                brandLogo = "/assets/ImgBrands/zurich.svg";
            break;
            case 9:
                brandLogo = "/assets/ImgBrands/sura.svg";
            break;
            case 10:
                brandLogo = "/assets/ImgBrands/integrity.svg";
            break;
            case 11:
                brandLogo = "/assets/ImgBrands/chubb.svg";
            break;
            case 12:
                brandLogo = "/assets/ImgBrands/berkley.svg";
            break;
            case 13:
                brandLogo = "/assets/header/logo-poolpo.svg";
            break;
            case 15:
                brandLogo = "/assets/ImgBrands/hdi.svg";
            break;
            case 17:
                brandLogo = "/assets/ImgBrands/libra.svg";
                break;
            case 34:
                brandLogo = "/assets/ImgBrands/experta.svg";
                break;
            default:
                brandLogo = ""
          }
          return brandLogo
    }

    handleChange(expanded){
        this.setState({...this.state, expanded: !expanded})
      }

    render(){
    return (
    <CardContainer>
       <Accordion 
        style={accordionStyle} 
        expanded={this.state.expanded} 
        
       >
        <AccordionSummary
          onClick={() => this.handleChange(this.state.expanded)}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
            <div className="quotation-section-one">
                    {this.props.isHighlighted &&
                    <img src="/assets/icons/quotation/crown.svg" alt="Cotización sugerida" className="quotation-highlighted"/>}
                <div className="brand-container">
                    <img src={this.renderBrandLogo(this.props.brand)} alt="logo-aseguradora"/>
                </div>
                <div className="section-two">
                    <p className="policy-title">Tipo de cobertura: <span className="bold">{this.renderPolicy(this.props.coverageId)}</span></p>
                    <p className="policy-price"><span>${this.transformNumber(this.props.price)}</span>/mes</p>
                </div>
            </div>
        </AccordionSummary>
        <AccordionDetails style={{}}>
            <div className="selected-quotation-details">
            <div className="line"></div>
                <p className="policy-description" id={`${this.props.coverageId === 1 && "coverage-one"}`}>{this.renderDescription(this.props.description, this.props.franchise)}</p>
                {this.props.coverageId === 1 ? <p className="coverage-subtitle">Cobertura mínima para circulación</p> : null}
                {this.props.sumInsured > 0 && 
                <div className="sum-insured-container">
                    <p className="sum-insured">Suma asegurada: <span>{`$ ${this.transformNumber(this.props.sumInsured)}`}</span></p>                
                </div>}
                <div className="section-two">
                    <div className="details-container">
                        {this.renderDetails(this.props.coverageId)}
                    </div>
                </div>
            </div>
        </AccordionDetails>
      </Accordion>
            {/* <div className="section-one">
                <div className="brand-container">
                    <img src={renderBrandLogo(brand)} alt="logo-aseguradora"/>
                </div>
                <div className="section-two">
                    <p className="policy-title">Tipo de cobertura: <span className="bold">{renderPolicy(coverageId)}</span></p>
                    <p className="policy-price"><span>${transformNumber(price)}</span>/mes</p>
                </div>
            </div> */}
        </CardContainer>
    )
    }
}
