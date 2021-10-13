import React from 'react'
import Styled from 'styled-components'
import Theme from '../Styles/Theme.js'
import Button from '../components/Button/Button'

const ModalContainer = Styled.div`
    position: fixed;
    background-color: ${Theme.modalBackground};
    top: 0px;
    width: 100%;
    height: 100%;
    margin: 0px;
    z-index: 9999;
`

export default function Resgin(props) {
    return (
        <ModalContainer>
            <div className="loading-modal col-xs-11 col-sm-5 col-md-5 col-lg-5 white" style={{height:'auto', marginTop:'100px', paddingTop:'20px', paddingBottom:'20px'}} >
                <img src="../../assets/about/poolpo-about.png" alt="nosotros" />
                <h2 className="modal-title">Cómo tramitar la baja de tu seguro actual</h2>
                <p className="modal-text" style={{textAlign:"left"}}>
                    Dar de baja tu póliza actual es super simple. Lo unico que tenes que hacer es enviar por mail la solicitud de baja a tu compañía o productor
                        (en caso que cuentes con uno) con la siguiente información.<br /><br />

                    <strong>[Fecha]</strong><br />
                        A quien corresponda <strong>[productor o compañía]</strong>:<br /><br />
                        Por medio de la presente solicito a partir del día <strong>[Fecha de baja]</strong> dar de baja la póliza nro <strong>[Número de póliza] </strong>
                        de mi vehiculo <strong>[Marca] [Modelo], [Patente]</strong>.
                        <br />Sin más, saluda atte.<br />
                    <strong>[Tu nombre y apellido], [Tu DNI]</strong>.<br />
                    <br />
                        Si te queda alguna duda contactate con nuestros expertos para un mejor asesoramiento a <a href="mailto:polizas@poolpo.in">polizas@poolpo.in</a>.
                    </p>

                {/* <section>
                <h2 className="center">Nuestro <span className="span2">&nbsp;equipo</span></h2>
                <div className="member-card-container">
                    <div className="member-card">
                        <div className="member-img-container">
                            <img className="member-img" src="./assets/about/martin.png" alt="Martin"/>
                        </div>
                        <div className="member-text-container">
                            <p className="member-name">Martin Kaler - COO &amp; Co founder</p>
                            <p className="member-description">Tercera generación de productores de seguros de un Broker con más de 60 años en el mercado. Se especializa en insurtech desde que entró en el mercado, siempre intentando buscar las mejores formas de cuidar al cliente.</p>
                        </div>
                    </div>
                    <div className="member-card">
                        <div className="member-img-container">
                            <img className="member-img" src="./assets/about/ariel.png" alt="Ariel"/>
                        </div>
                        <div className="member-text-container">
                            <p className="member-name">Ariel Lipschutz - CEO &amp; Co founder</p>
                            <p className="member-description">Especialista en innovación y transformación digital, es pionero en dedicarse a la inteligencia artificial en la región. Participó en diversos proyectos de transformación digital e inteligencia artificial para los bancos más grandes de Argentina, entre otros.</p>
                        </div>
                    </div>
                    <div className="member-card">
                        <div className="member-img-container">
                            <img className="member-img" src="./assets/about/josefina.png" alt="Josefina"/>
                        </div>
                        <div className="member-text-container">
                            <p className="member-name">Josefina Nasif - UX Design</p>
                            <p className="member-description">Mas de 10 años diseñando productos industriales  y más de 5 diseñando productos digitales.</p>
                            <p className="member-description"   >Pensadora y hacedora de diseño. <strong>Josefina</strong> ve cada nuevo proyecto como un desafío de tomar una idea grande y darle un enfoque nítido.</p>
                        </div>
                    </div>
                    <div className="member-card">
                        <div className="member-img-container">
                            <img className="member-img" src="./assets/about/sol.jpg" alt="Sol"/>
                        </div>
                        <div className="member-text-container">
                            <p className="member-name">Sol Pattoglio - Frontend Developer</p>
                            <p className="member-description">Argentina viviendo en Madrid. Desarrolladora Fullstack con background en diseño audiovisual. Apasionada por participar en proyectos digitales que contribuyan a mejorar la vida de las personas ofreciendo soluciones innovadoras a sus necesidades cotidianas.</p>
                        </div>
                    </div>
                    <div className="member-card">
                        <div className="member-img-container">
                            <img className="member-img" src="./assets/about/paula.png" alt="Paula"/>
                        </div>
                    <div className="member-text-container">
                        <p className="member-name">Paula Aibar - Quote Analyst</p>
                        <p className="member-description">Responsable del equipo de analistas de riesgo. Se encarga de entrenar a Poolpo para poder garantizar constantemente las mejores cotizaciones.</p>
                        <p className="member-description"><strong>Paula</strong>, puertas adentro, es conocida como el punta pie inicial de nuestra inteligencia artificial.</p>
                    </div>
                    </div>
                    <div className="member-card">
                        <div className="member-img-container">
                            <img className="member-img" src="./assets/about/betina.png" alt="Betina"/>
                        </div>
                        <div className="member-text-container">
                            <p className="member-name">Betina Lewitan - Board Member</p>
                            <p className="member-description">Presidenta en Lewitan &amp; Asoc.
                            Broker de seguros con más de 60 años de experiencia en el mercado, comercializa todo tipo de seguros.</p>
                            <p className="member-description">Le da a Poolpo asesoramiento constante y le brinda las excelentes relaciones generadas a lo largo de los años con las mejores compañías del mercado.</p>
                        </div>
                    </div>
                </div>
            </section> */}
            <Button className="button" text={"Volver a las  cotizaciones"} bg={"green"} action={() => props.dismissModal()} />
            </div>
        </ModalContainer>
    )
}
