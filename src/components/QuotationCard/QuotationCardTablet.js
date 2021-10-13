import React from 'react'
import Styled from 'styled-components'
import Theme from '../../Styles/Theme.js'
import QuotationDetails from './QuotationDetails.js'
import AmplitudeButton from '../Button/AmplitudeButton.js'


export default function QuotationCard(props) {

    const {brand, policy, coverageId, price, description, franchise, sumInsured, quoteId, getOption, isHighlighted, months} = props
    // console.log(props)

    const CardContainer = Styled.div`
        display: flex;
        flex-direction: column;
        background-color: ${Theme.white};   
        border: 0.5px solid #acacac;
        box-shadow: 0 3px 6px 0 #00000029;
        border-radius: 12px;
        box-sizing: border-box;
        align-items: center;
        text-align: center;
        padding: 21px 2% 21px 2%;
        margin: 50px 0px;
        width: 314px;
        height: 605px;
        justify-content: space-between;
        .quotation-highlighted{
            position: relative;
            left: 126%;
            top: -53%;
        }
        p{
            font-family: ${Theme.secondaryFont};
            font-size: 11px;
            font-weight: 600;
            line-height: 1.36;
            text-align: left;
            margin: 0px;
        }
        .brand-container{
            display: flex;
            align-self: center;
            width: 80px;
            height: 80px;
            padding: 2%;
            box-sizing: border-box;
            border: 7px solid ${Theme.lightGrey};
            border-radius: 50%;
            margin: 0px 0px 21px 0px;
        }
        .brand-container img{
            border-radius: 50%;
            width: 100%;
        }
        .policy-title, .coverage-subtitle{
            font-family: ${Theme.secondaryFont};
            font-size: 11px;   
            font-weight: 300;
            align-self: center;
        }
        .policy-title{
            margin-bottom: 11px;
        }
        .coverage-subtitle{
            align-self: flex-start;
            margin-left: 10%;
        }
        .bold{
            font-weight: bold;
        }
        .policy-price{
            margin-bottom: 15px;
            align-self: center;
        }
        .policy-price span{
            font-family: ${Theme.secondaryFont};
            font-size: 15px;  
            font-weight: bold;
            color: ${Theme.secondaryColor}
        }
        .sum-insured{
            font-family: ${Theme.secondaryFont};
            font-size: 11px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.36;
            letter-spacing: normal;
            text-align: left;
            color: ${Theme.black};
            margin-bottom: 0px;
            margin-left: 10%;
        }
        .sum-insured span{
            font-family: ${Theme.secondaryFont};
            font-weight: bold;
            color: ${Theme.secondaryColor}
        }
        .line{
            align-self: center;
            width: 80%;
            border-radius: 12px;
            border: solid 1px ${Theme.secondaryColor};
            margin-bottom: ${coverageId !== 5 ? '20px' : '8px'};
        }
        .policy-description{
            font-size: ${coverageId !== 5 ? '12px' : '11px'};
            text-transform: capitalize;
            align-self: flex-start;
            margin-bottom: 8px;
            margin-left: 10%;
        }
        #coverage-one{
            margin-left: 10%;
            margin-bottom: 3px;
        }
        .details-container{
            display: flex;
            width: 100%;
            margin-left: 7%;
        }
        .detail-line{
            display: flex;
            margin-bottom: 9px;
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
        .button{
            margin-top: 5px;
        }
        .section-one{
            display: flex;
            flex-direction: column;
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
    `

    
    const renderPolicy = (coverageId) => {
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
              policyTitle = "Terceros Completo";
              break;
            case 5:
               policyTitle = "Todo Riesgo";
          }
          return policyTitle
    }
    const renderDescription = (description, franchise) => {
        // console.log("descripcion", description, franchise)
        if( coverageId !== 5){
            let descriptionText = description.toLowerCase()
            return descriptionText
        } else if(coverageId === 5 && franchise < 100){
                let descriptionText = `Todo riesgo con franquicia del ${franchise}% sobre valor 0KM`
                return descriptionText
            } else {
                let price = new Intl.NumberFormat("de-DE").format(franchise)
                let descriptionText = `Todo riesgo con franquicia de $${price}`
                return descriptionText
            }   
    }
    const renderDetails = (coverageId) => {
        return <QuotationDetails coverageId={coverageId} />
    }

    const transformNumber = (price) => {
        return new Intl.NumberFormat('en-ES', { minimumFractionDigits: 2 }).format(price)
    }
    const renderBrandLogo = (brand)=>{
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
                brandLogo = "/assets/ImgBrands/meridional.svg";
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
                    brandLogo = "";       
                    break;
          }
          return brandLogo
    }
    const handleClick =(quoteId) => {
        console.log("opcion elegida", quoteId)
        localStorage.setItem('QuoteID', quoteId)
        getOption(quoteId)
    }
    return (
        <CardContainer>
            <div className="section-one">
                <div className="brand-container">
                    <img src={renderBrandLogo(brand)} alt="logo-aseguradora"/>
                    {isHighlighted &&
                    <img src="/assets/icons/quotation/crown.svg" alt="Cotización sugerida" className="quotation-highlighted"/>}
                </div>
                <p className="policy-title text-center">Tipo de cobertura: <span className="bold">{renderPolicy(coverageId)}</span></p>
                <p className="policy-price"><span>${transformNumber(price)}</span>/mes</p>
                {months>0 ? <span className="policy-title text-center">¡Precio fijo durante {months} {months>1?"meses":"mes"}!</span>:null}
                <div className="line"></div>
                <p className="policy-description" id={`${coverageId === 1 && "coverage-one"}`}>{renderDescription(description, franchise)}</p>
                {coverageId === 1 ? <p className="coverage-subtitle">Cobertura mínima para circulación</p> : null}
                {sumInsured > 0 && 
                <div className="sum-insured-container">
                    <p className="sum-insured">Suma asegurada: <span>{`$ ${transformNumber(sumInsured)}`}</span></p>
                </div>}
            </div>
            <div className="section-two">
                <div className="details-container">
                    {renderDetails(coverageId)}
                </div>
                <AmplitudeButton className="button" text={"Contratar"} bg={"green"} action={() => handleClick(quoteId)} />
            </div>
        </CardContainer>
    )
}
