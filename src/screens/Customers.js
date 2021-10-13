import React, { useState } from 'react'
import Styled from 'styled-components'
import Theme from '../Styles/Theme.js'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '../components/Button/Button.js';
import { getPolicy, getMercosur } from '../utils/data.js';
import StaticModal from '../components/LoadingModal/StaticModal.js'

const CustomersContainer = Styled.article`
    margin: 109px 0px 0px 0px;
    display: flex;
    flex-direction:column;
    align-items:center;

    h1{
        font-family: ${Theme.primaryFont};
        font-size: 32px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.22;
        letter-spacing: normal;
        text-align: center;
        color: #302c42;
        margin-bottom:18px;
    }
    h2{
        font-family: ${Theme.primaryFont};
        font-size: 29px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.34;
        letter-spacing: normal;
        text-align: center;
        color: #222222;
        margin-bottom:47px;
    }
    h2 span{
        font-weight: bold;
        color: #57e0c1;
    }

    .underlined-span{
        position:relative;
    }
    .underlined-span::after{
        background-color: #60E1C3;
        content: '';
        width: 100%;
        height: 5px;
        position: absolute;
        bottom: -1px;
        left: 0;
        z-index: -1;
    }
    .flex-box{
        display:flex;
        justify-content:center;
        margin-bottom:59px;
    }
    .flex-item{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: space-between;
        margin: 0 37.5px 0 37.5px;
        padding-top: 42px;
        padding-bottom:41px;
        width: 253px;
        height: 295px;
        border-radius: 12px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        border: solid 1px #ffffff;
        background-color: #ffffff;
    }
    .flex-item span{
        font-family: ${Theme.primaryFont};
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.17;
        letter-spacing: normal;
        text-align: center;
        color: #222222;
    }

    .full-width-item{
        display:flex;
        justify-content:space-between;
        align-items: center;
        width: 800px;
        height: 87px;
        padding: 41px 54.7px 38px 53px;
        border-radius: 12px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
        margin-bottom:69px;
    }
    .full-width-item p{
        width: 70%;
        font-family: ${Theme.secondaryFont};
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.38;
        letter-spacing: normal;
        text-align: left;
        color: #222222;
        margin-bottom:25px
    }

    .sub-flex-div{
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .customers-category{
        height: 111px;
        margin-bottom:50px;
    }
    @media only screen and (max-width: 1365px){
        margin-top:95px;
        h1{
            font-size: 26px;
        }
        h2{
            font-size: 20px;
            margin-bottom:35px;
        }
        .flex-item{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content: space-between;
            margin: 0 13px 0 13px;
            padding-top: 37px;
            padding-bottom:41px;
            width: 214px;
            height: 270px;
            border-radius: 12px;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            border: solid 1px #ffffff;
            background-color: #ffffff;
        }
        .flex-box{
            margin-bottom:36px;
        }
        .full-width-item{
            width: 620px;
            margin: 36px 37px 40px;
            padding: 20px 52.7px 19px 29px;
            margin-bottom:40px;
        }
        .full-width-item p{
            font-size: 12px;
        }
        .customers-category{
            margin-bottom:30px;
        }
    }
    @media only screen and (max-width: 767px){
        margin-top:70px:
        h1{
            font-size: 18px;
            margin-bottom:14px;
        }
        h2{
            font-size: 15px;
            margin-bottom:25px;
        }
        .flex-box{
            width:100%;
            flex-direction: column;
            align-items:center;
            margin-bottom:0;
        }
        .flex-item{
            width: 80%;
            height: 112px;
            margin-bottom:25px;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16)
        }
        .sub-flex-div{
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
        }
        .customers-category{
            height:50px;
            margin-bottom: 0px;
            margin-right: 40px;
        }
        .full-width-item{
            box-shadow:none;
            height:auto;
            border:none;
            width:80%;
            padding:0;
            flex-direction:column;
            margin-bottom:40px
        }
        .full-width-item p{
            width: 100%;
        }
    }
`


export default function Customers() {
    const [ loading, setLoading ] = useState(false)
    const renderMembers = () => {

    }

    const goToReport = () => {
        window.location.href = '/Clientes/Siniestros'
    }
    const goToPolicy = () => {
        setLoading(true)
        getPolicy().then( res =>{
            setLoading(false)
            console.log(res)
            if(res.error){
                
            }
            else{
                window.open(res.msg, "_blank")
            }
        })
    }
    const goToMercosur = () => {
        setLoading(true)
        getMercosur().then( res =>{
            setLoading(false)
            console.log(res)
            if(res.error){
                
            }
            else{
                window.open(res.msg, "_blank")
            }
        })
    }
    const parseJwt  = () =>  {
        const token = localStorage.getItem('token')
        var base64Url = token.split('.')[1]
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''))
    
        let jwt =  JSON.parse(jsonPayload);
        let data = [
            name=>"",
            vehicle=>"",
            date=>""
        ]
        for (var key in jwt) {
            console.log(key);
            if (key.endsWith('name') && jwt.hasOwnProperty(key)) { data["name"] = jwt[key] }
            if (key == "Vehicle" && jwt.hasOwnProperty(key)) { data["vehicle"] = jwt[key] }
            if (key == "expiricyDate" && jwt.hasOwnProperty(key)) { data["date"] = jwt[key] }
        }
        return data
    }

    return (
        <CustomersContainer>
            <h1>Hola <span className='underlined-span'>{parseJwt()["name"]}</span></h1>
            <h2>El seguro de tu <span className='highlighted-span'>{parseJwt()["vehicle"]}</span><br/>
tiene vigencia hasta el {parseJwt()["date"]}</h2>
            <div className='flex-box'>

                {/* TODO: link api
                /customers/api/account/policy */}
                <div className='flex-item'>
                    <div className="sub-flex-div">
                        <img className='customers-category' src='/assets/body/customers-category1.jpg' alt='something'/>
                        <span>Tu poliza digital</span>
                    </div>
                    <Button bg={"green"} text={"Accedé a tu polizia"} size={"default"} active={true} action={()=>goToPolicy()}/>
                </div>

                {/* TODO: link api
                /customer/api/account/mercosur */}
                <div className='flex-item'>
                    <div className="sub-flex-div">
                        <img className='customers-category' src='/assets/body/customers-category2.jpg' alt='something'/>
                        <span>Certificado de <br/>Mercosur </span>
                    </div>
                    <Button bg={"green"} text={"Descargar"} size={"default"} active={true} action={()=>goToMercosur()}/>
                </div>
                <div className='flex-item'>
                    <div className="sub-flex-div">
                        <img className='customers-category' src='/assets/body/customers-category3.jpg' alt='something'/>
                        <span>Denuncia un <br/>siniestro</span>
                    </div>
                    <Button bg={"green"} text={"Ingresar"} size={"default"} active={true} action={()=>goToReport()}/>
                </div>
            </div>

            {/*TODO:  link to following url
            https://api.whatsapp.com/send/?phone=5491130528064&text=Hola+Poolpo%21+Tengo+una+consulta+sobre+mi+seguro */}
            <div className='full-width-item'>
                <p>Al momento de la renovación de tu seguro nuestro sistema, automáticamente, 
                te busca las mejores condiciones. Si tenes alguna consulta o queres modificar algo
                antes del vencimiento, hace click en el siguiente botón que un asesor de nuestro 
                equipo te va a ayudar.</p>
                <Button bg={"green"} text={"Ingresar"} size={"default"} active={true} action={()=>window.open("https://api.whatsapp.com/send/?phone=5491130528064&text=Hola+Poolpo%21+Tengo+una+consulta+sobre+mi+seguro", "_blank")}/>
            </div>
            {loading && <StaticModal number={0} /> }
            
        </CustomersContainer>
    )
}
