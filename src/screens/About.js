import React from 'react'
import Styled from 'styled-components'
import Theme from '../Styles/Theme.js'

const AboutContainer = Styled.article`
    margin: 144px 0px 0px 0px;
    h1{
        font-weight: 400;
        font-size: 41px;
        line-height: 1.2;
    }
    h2{
        font-size: 32px;
        font-weight: 700;
    }
    .about-first-section{
        display: flex;
        margin: 44px 9% 120px 9%;
        align-items: center;
    }
    img{
        width: 70%;
    }
    .about-img{
        width: 50%;
        text-align: center;
    }
    .about-text{
        width: 50%;
    }
    .member-card-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        margin: 55px 21.3%;
    }
    .member-card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 346px;
        margin-bottom: 43px;
    }
    .member-img-container{
        align-self: center;
        width: 181px;
    }
    .member-img{
        border-radius: 50%;
        width: 100%;
    }
    .member-name{
        font-family: ${Theme.secondaryFont};
        font-weight: 700;
        margin-top: 23px;
        margin-bottom: 11px;
        font-size: 20px;
        line-height: 27px;
        text-align: left;
    }
    .about-text > p, .member-description{
        font-family: ${Theme.secondaryFont};
        color: ${Theme.blackFont};
        text-align: left;
        font-size: 20px;
        line-height: 27px;
        font-weight: 300;
    }
    .about-text > p{
        margin-bottom: 30px;
    }
    @media only screen and (max-width: 1365px){
        h2{
            font-size: 29px;
        }
        .about-first-section{
        margin: 44px 5% 120px 5%;
        }
        .member-card-container{
            margin: 55px 13.8%;
        }
        .member-card{
            width: 217px;
        }
        .member-img-container{
            width: 169px;
        }
        .about-text > p, .member-description{
            font-size: 16px;
            line-height: 22px;
        }
        .member-description{
            width: 95%;
        }
    }
    @media only screen and (max-width: 767px){
            margin-top: 85px;
        .about-first-section{
            flex-direction: column;
            justify-content: center;
            margin: 44px 7.5% 50px 7.5%;
        }
        h2{
            margin-bottom: 0px;
        }
        .member-card-container{
            margin: 22px 7.5% 8px 7.5%;
        }
        .about-img{
            width: 100%;
            margin-bottom: 26px;
        }
        .about-text{
            width: 100%;    
        }
        .member-card{
            flex-direction: row;
            width: 100%;
        }
        .member-text-container{
            width: 68%;
        }
        .member-name, .member-description{
            font-size: 12px;
            line-height: 17px;
            width: 100%;
        }
        .member-img-container{
            flex-direction: row;
            align-self: flex-start;
            width: 25.5%;
            padding: 10px 7.5% 0px 0px;
        }
        .member-img{
            width: 100%;
        }

    }
`


export default function About() {

    const renderMembers = () => {

    }


    return (
        <AboutContainer>
                <h1 className="center"><span className="span1">Nosotros</span></h1>
            <section className="about-first-section">
                <div className="about-img">
                    <img src="./assets/about/poolpo-about.png" alt="nosotros"/>
                </div>
                <div className="about-text">
                    <p>PoolPo es un sistema de inteligencia artificial que lee e interpreta pólizas de seguros, obteniendo información sobre la persona, el vehículo y su seguro.</p>
                    <p>Conociendo esta información, nuestro sistema evalúa distintas propuestas en diferentes aseguradoras, con el fin de ofrecerle a nuestros usuarios la opción que se adecue mejor a sus necesidades.</p>
                </div>
            </section>
            <section>
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
            </section>
            
        </AboutContainer>
    )
}
