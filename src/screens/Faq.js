import React, { Component } from 'react'
import Styled from 'styled-components'
import Theme from '../Styles/Theme.js'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HomeFooter from '../components/HomeSections/HomeFooter.js'
const AccordionContainer = Styled.section`
    width: 80%;
    margin: 150px 10% 30px 10%;
    .first-title{
      padding: 0px 0px 42px 0px;
      font-size: 32px;
      font-weight: 300;
    }
    .faq-title{
      font-family: ${Theme.primaryFont};
      font-size: 18px;
      line-height: 21px;
      font-weight: 700;
      text-align: left;
      color: ${Theme.black};
    }
    .span2::after{
      bottom: -2px; 
      height: 2px;
    }
    .faq-detail{
      font-family: ${Theme.secondaryFont};
      font-size: 21px;
      line-height: 28px;
      font-weight: 400;
      color: ${Theme.black};
      margin: 15px 2% 15px 0%;
      text-align: left;
    }
    .MuiAccordion-root:before{
      background-color: transparent;
    }
    .button{
      background-color: white;
      border: 1px solid ${Theme.secondaryColor};
      color: ${Theme.secondaryColor};
      font-size: 11px;
      margin: 30px 0px 0px 0px;
    }
    ul li::marker {
      color: ${Theme.primaryColor};
      font-size: 15px;
    }
    ul li {
      padding-left: 10px;
      margin-bottom: 3px;
      font-family: ${Theme.secondaryFont};
      font-size: 21px;
      line-height: 28px;
    }
    .dictionary{
      display: flex;
      flex-direction: row;
      margin: 30px 0px;
    } 
    .faq-dictionary-container{
      box-shadow: 0 3px 6px 0 #00000029;
      border: 1px solid ${Theme.lightGrey};
      padding: 36px 2.7% 63px 2.7%;
      border-radius: 20px;
      margin-bottom: 20px;
    }
    .dictionary-title{
      font-family: ${Theme.primaryFont};
      font-weight: bold;
      font-size: 30px;
      margin-bottom: 52px;
    }
    .dictionary-span{
      position: relative;
    }
    .dictionary-span::after{
      background-color: ${Theme.primaryColor};
      content: '';
      width: 100%;
      height: 12%;
      position: absolute;
      bottom: -1.5px;
      left: 0;
      z-index: -1;
    }
    .dictionary-details{
      flex-direction: column;
      margin-bottom: 30px;
    }
    .dictionary-item{
      width: 20%;
      font-family: ${Theme.primaryFont};
      font-size: 18px;
      line-height: 21px;
      font-weight: 700;
      text-align: left;
      margin-right: 10%;
    }
    .dictionary-description{
      font-family: ${Theme.secondaryFont};
      font-weight: 300;
      text-align: left;
      font-size: 21px;
      line-height: 28px;
      color: ${Theme.black};
      width: 66%;
    }
    @media only screen and (max-width: 1365px) {
      margin: 150px 5vw 30px 5vw;
      width: 90vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .first-title{
        padding: 0px 0px 42px 0px;
        font-size: 41px;
        flex-direction: row;
      }
      .faq-title{
        font-size: 18px;
        line-height: 21px;
        margin: 0px 0px 0px 21px;
      }
    .faq-detail{
      font-size: 16px;
      line-height: 22px;
      margin: 9px 2% 9px 0%;
    }
    ul{
      margin: 0px;
    }
    ul li {
      padding-left: 10px;
      margin-bottom: 3px;
      font-family: ${Theme.secondaryFont};
      font-size: 16px;
      line-height: 22px;
    }
    .dictionary{
      flex-direction: column;
      margin: 25px 0px;
    } 
    .dictionary-span::after{
        height: 12%;
        bottom: -1.5px;
    }
    .dictionary-item{
      margin-bottom: 19px;
      width: 100%;
      margin-right: 0;
    }
    .dictionary-description{
      width: 95%;
    }
    }
    @media only screen and (max-width: 767px) {
      margin: 150px auto 30px auto;
      width: 90%;
      overflow: hidden;
      .first-title{
        flex-direction: column;
      }
      h2{
        display: flex;
        flex-direction: column;
        width: 59%;
        justify-content: center;
        align-self: center;
        align-items: center;
        height: 72%;
        font-size: 32px;
        line-height: 45px;
      }
      .faq-title{
        font-size: 12px;
        margin: 0px 0px 0px 18px;
      }
      .faq-detail{
        font-size: 12px;
        line-height: 17px;
        margin: 7px 2% 7px 0%;
      }
      ul li {
      font-size: 12px;
      line-height: 17px;
      }
      .dictionary-title{
        font-size: 23px;
        margin-bottom: 24px;
      }
      .dictionary-span::after{
        height: 12%;
        bottom: -1.5px;
      }
      .dictionary-item{
        width: 100%;
        font-size: 14px;
        line-height: 16px;
      }
      .dictionary-description{
        width: 98%;
        font-size: 12px;
        line-height: 17px;
      }
    }
`

const accordionStyle = {
  boxShadow: "0 3px 6px 0 #00000029",
  border: `1px solid ${Theme.lightGrey}`,
  padding: "6px 0px 6px 2%",
  borderRadius: "20px",
  marginBottom: '20px'
}
const iconStyle = {
  color: `${Theme.primaryColor}`,
  fontSize: '30px'
}
const summaryStyle = {
  padding: '0px'
}
export default class Faq extends Component {
  constructor(props){
    super(props)
    this.state = {
      expanded: true
    }
  }
  handleChange(expanded){
    if(this.state.validated){
    this.setState({...this.state, expanded: !expanded})
    }
  }
    render() {
        return (
          <div>
            <AccordionContainer>
                <h2 className="first-title"><span className="span1">Preguntas&nbsp;</span><span className="span1"> frecuentes</span></h2>
                <Accordion 
                style={accordionStyle} 
                onClick={() => this.handleChange(this.state.expanded)}
                elevation={0}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={iconStyle}/>}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    style={summaryStyle}
                    >
                        <p className="faq-title">??Qu?? es Poolpo?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div>
                      <p className="faq-detail">Somos un broker de seguros digital, o como nos gusta llamarnos un E-Broker.</p> 
                      <ul>
                        <li>Lector inteligente de p??lizas para obtener los datos r??pido y casi sin esfuerzo.</li>
                        <li>Multi-cotizaci??n online con las mejores compa????as</li>
                        <li>A trav??s de la inteligencia artificial se ofrecen las tres alternativas que mejor se adecuan a vos.</li>
                      </ul>
                      <p className="faq-detail">Si alguna no te convence, ??podemos seguir buscando!</p>
                      </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                style={accordionStyle} 
                onClick={() => this.handleChange(this.state.expanded)}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={iconStyle} />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    style={summaryStyle}
                    >
                        <p className="faq-title">??C??mo hago para contratar un seguro para mi auto?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div>
                        <p className="faq-detail">Sub?? tu p??liza o seleccion?? el modelo, la marca, y a??o de tu veh??culo.</p>
                        <p className="faq-detail">Coloc?? tus datos personales.</p>
                        <p className="faq-detail">Eleg?? entre la cobertura que hoy ten??s a un mejor precio (o hayas elegido como principal), una opci??n que la mejora por ???un poquito m??s??? o una tercera donde ahorres lo m??ximo posible, aunque se bajando la cobertura.</p> 
                        <p className="faq-detail">Te damos la posibilidad que un asesor comercial se contacte con vos por tel??fono o whatsapp para ayudarte a elegir la compa????a y cobertura que m??s se adapte a lo que vos quer??s.</p>
                      </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                style={accordionStyle} 
                onClick={() => this.handleChange(this.state.expanded)}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={iconStyle} />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    style={summaryStyle}
                    >
                        <p className="faq-title">??Qu?? debo hacer frente a un siniestro?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div>
                        <p className="faq-detail">Denuncialo directamente en poolpo.in/miseguro</p>
                        
                        <p className="faq-detail">Si ten??s alguna duda o no podes ingresar a la p??gina en el momento, mandanos un whatsapp o un mail y te acompa??amos en el proceso.</p>
                      </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                style={accordionStyle} 
                onClick={() => this.handleChange(this.state.expanded)}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={iconStyle} />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    style={summaryStyle}
                    >
                        <p className="faq-title">??C??mo cobro un siniestro?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="faq-detail">Una vez hecha la denuncia te informaremos el tiempo estimado donde vas a ver en tu cuenta bancaria el importe estipulado por los da??os. </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                style={accordionStyle} 
                onClick={() => this.handleChange(this.state.expanded)}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={iconStyle} />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    style={summaryStyle}
                    >
                        <p className="faq-title">??Qu?? debo hacer en caso que el monto a pagar de mi seguro sea diferente al del mes anterior?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="faq-detail">Si tu cuota no coincide con lo ofrecido por Poolpo o bien var??a al mes siguiente, comunicate con el Centro de Soluciones de lunes a viernes de 9 hs a 18  hs y o env??anos tu consulta a hola@poolpo.in</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                style={accordionStyle} 
                onClick={() => this.handleChange(this.state.expanded)}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={iconStyle} />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    style={summaryStyle}
                    >
                        <p className="faq-title">??Por qu?? puede aumentar la cuota de mi seguro?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="faq-detail">
                        <ul>
                          <li>Por la variaci??n de la suma asegurada (el valor de mercado) de tu auto.</li>
                          <li>Por haber modificado alg??n dato de la p??liza ya emitida: domicilio del asegurado, versi??n del auto, la ampliaci??n y/o modificaci??n de cobertura, etc.</li>
                        </ul>
                      </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                style={accordionStyle} 
                onClick={() => this.handleChange(this.state.expanded)}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={iconStyle} />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    style={summaryStyle}
                    >
                        <p className="faq-title">??Qu?? hago si me rechazan el pago de una cuota?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="faq-detail">Comunicate con nuestros asesores cuanto antes para poder ayudarte a recuperar la cobertura financiera del seguro de tu auto.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                style={accordionStyle} 
                onClick={() => this.handleChange(this.state.expanded)}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={iconStyle} />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    style={summaryStyle}
                    >
                        <p className="faq-title">Si anulo la p??liza de mi seguro antes de que se termine la vigencia, ??Tengo que seguir pagando?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="faq-detail">Solo por el tiempo que utilices el seguro. Si se da de baja antes de cumplir la totalidad del mes ya pagado, se te devolver?? el proporcional por los d??as que no lo usaste. </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                style={accordionStyle} 
                onClick={() => this.handleChange(this.state.expanded)}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={iconStyle} />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    style={summaryStyle}
                    >
                        <p className="faq-title">??C??mo se solicita la baja de mi seguro?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="faq-detail">Envianos un mail con los datos del auto y el por qu?? de la baja que autom??ticamente nos comunicaremos con vos para iniciar el tr??mite. </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                style={accordionStyle} 
                onClick={() => this.handleChange(this.state.expanded)}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={iconStyle} />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    style={summaryStyle}
                    >
                        <p className="faq-title">??Qu?? pasa con el seguro si vendo mi auto?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="faq-detail">
                        <ul>
                          <li>Avisanos ni bien sepas cu??ndo ser?? la venta para solicitar que no te debiten m??s la cuota de tu seguro.</li>
                          <li>Avisale al comprador que pod??s transferir el seguro solo con comunicarse con nosotros. El costo puede variar seg??n la persona y la zona donde resida. </li>
                        </ul>
                      </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                style={accordionStyle} 
                onClick={() => this.handleChange(this.state.expanded)}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={iconStyle} />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    style={summaryStyle}
                    >
                        <p className="faq-title">??Puedo viajar a pa??ses Mercosur con el seguro de mi auto?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="faq-detail">Con el env??o de la p??liza te va a llegar el Certificado Mercosur con el cual podes viajar sin problemas. Record?? que podes descargarlo las 24 hs. los 7 d??as de la semana en poolpo.in/miseguro</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                style={accordionStyle} 
                onClick={() => this.handleChange(this.state.expanded)}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={iconStyle} />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    style={summaryStyle}
                    >
                        <p className="faq-title">??Con qu?? aseguradoras trabajamos y por qu???</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div>
                        <p className="faq-detail">Dentro de las mejores compa????as de plaza, elegimos a aquellas que se lograron posicionar seg??n 5 requisitos que consideramos fundamentales:</p>
                        <ul>
                          <li>Velocidad de respuesta</li>
                          <li>Pago de siniestros</li>
                          <li>Calificaci??n mundial</li>
                          <li>Solvencia econ??mica</li>
                          <li>Relaci??n comercial con PoolPo</li>
                        </ul>
                        <p className="faq-detail">Compa????as:</p>
                        <ul>
                          <li>Allianz Seguros</li>
                          <li>Berkley</li>
                          <li>Federacion Patronal</li>
                          <li>Galeno Seguros</li>
                          <li>HDI</li>
                          <li>Mapfre Seguros</li>
                          <li>Zurich</li>
                          <li>Meridional Seguros</li>
                          <li>Sancor Seguros</li>
                          <li>Seguros Sura</li>
                        </ul>
                      </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                style={accordionStyle} 
                onClick={() => this.handleChange(this.state.expanded)}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={iconStyle} />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    style={summaryStyle}
                    >
                        <p className="faq-title">Si necesito algo fuera del horario de atenci??n, ??Qu?? hago?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="faq-detail">Nuestros horarios de atenci??n son de Lunes a Viernes de 9 hs a 18 hs.
                      Fuera de ese horario podes dejar tu consulta via e-mail a hola@poolpo.in o denunciar tu siniestro desde poolpo.in/me</p>
                    </AccordionDetails>
                </Accordion>
                  <section className="faq-dictionary-container">
                      <p className="dictionary-title"><span className="dictionary-span">Diccionario</span> de Seguros</p>
                      <div className="dictionary">
                          <p className="dictionary-item">P??LIZA DE SEGURO</p>
                          <p className="dictionary-description">La prueba legal de que existe un contrato de seguro. Es emitido por la compa????a aseguradora a favor del asegurado y/o tomador, y debe reunir todos los requisitos establecidos en la ley 17.418.</p>
                      </div>
                      <div className="dictionary">
                          <p className="dictionary-item">SUMA ASEGURADA</p>
                          <p className="dictionary-description">Monto m??ximo por el cual una aseguradora fija su responsabilidad frente al asegurado. Pueden estar expresadas en distintos tipos de moneda.</p>
                      </div>
                      <div className="dictionary">
                          <p className="dictionary-item">VIGENCIA</p>
                          <p className="dictionary-description">Per??odo por el cual se contrata el seguro y es obligaci??n que figure en la p??liza.</p>
                      </div>
                      <div className="dictionary">
                          <p className="dictionary-item">COTIZACI??N</p>
                          <p className="dictionary-description">Monto designado en las p??lizas de seguro, que incluye recargos, adicionales y rebajas, resultando de tal modo el costo, premio o precio de la cobertura.</p>
                      </div>
                      <div className="dictionary">
                          <p className="dictionary-item">PRIMA</p>
                          <p className="dictionary-description">Pago convenido con las compa????as para contratar y mantener vigente el seguro.</p>
                      </div>
                      <div className="dictionary">
                          <p className="dictionary-item">PREMIO</p>
                          <p className="dictionary-description">Es el monto a pagar por el asegurado en concepto del seguro. Prima pura + gastos de explotaci??n (derechos de emisi??n y recargos administrativos), + recargos financieros + comisiones, impuestos, tasas y contribuciones.</p>
                      </div>
                      <div className="dictionary">
                          <p className="dictionary-item">CERTIFICADO DE COBERTURA</p>
                          <p className="dictionary-description">Documento que especifica el tipo de cobertura que es emitido por la compa????a para ser utilizado mientras la p??liza este en proceso de emisi??n.</p>
                      </div>
                      <div className="dictionary">
                          <p className="dictionary-item">SINIESTRO</p>
                          <p className="dictionary-description">Ocurrencia de alguno de los sucesos cubiertos en la p??liza a partir del cual la compa????a debe indemnizar al asegurado, en general, con dinero. Otras formas: prestaci??n de servicios, asistencia m??dica, jur??dica, mec??nicas, etc.</p>
                      </div>
                      <div className="dictionary">
                          <p className="dictionary-item">FRANQUICIA</p>
                          <p className="dictionary-description">Importe declarado en p??liza el cual, ante un siniestro, el asegurado debe hacerse cargo. De sobrepasar ese valor, la compa????a se har?? cargo del monto restante.</p>
                      </div>
                      <div className="dictionary">
                          <p className="dictionary-item">ENDOSOS</p>
                          <p className="dictionary-description">Son todas las modificaciones, inclusiones, exclusiones y correcciones que se realizan en un contrato de seguro durante su vigencia.</p>
                      </div>
                  </section>
            </AccordionContainer>
          </div>
        )
    }
}
