import React, { useState, useRef } from 'react'
import Styled from 'styled-components'
import Theme from '../Styles/Theme.js'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '../components/Button/Button.js';
import ImageButton from '../components/Button/ImageButton';
import { wheelReport } from '../utils/data.js';
import { validSinisterDate, validFile, validAddressNumber } from '../utils/FormValidation.js';
import StaticModal from '../components/LoadingModal/StaticModal.js';
import MessagesModal from '../components/LoadingModal/MessagesModal.js';

const ReportWheelContainer = Styled.article`
    margin: 109px 0px 51px 0px;
    position: relative;
    display: flex;
    justify-content:center;
    .back-button{
        text-decoration:none;
        position:absolute;
        display:flex;
        align-items:center;
        left: 130px;
        top: 20px;
        font-family: ${Theme.secondaryFont};
        font-size: 17px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.24;
        letter-spacing: normal;
        text-align: center;
        color: #302c42;
    }
    .back-button KeyboardBackspaceIcon{
        fontSize:50
    }
    .wheel-icon{
        margin-top:150px;
        margin-right: 54px;
        height:80px;
        padding:10px;
        border-radius:50%;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
    }
    .main-div{
        width:750px;
        display:flex;
        flex-direction:column;
        align-items:left;
    }
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
        margin-bottom:52px;
        margin-left:-100px;
    }
    .description{
        display:flex;
        align-items:center;
        width:100%;
        padding:10px;
        margin-bottom:30px;
    }
    .description p{
        font-family: ${Theme.secondaryFont};
        font-size: 10px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.4;
        letter-spacing: normal;
        text-align: left;
        color: #838383;
    }
    .divider{
        width:100%;
        height:0;
        display:none;
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
        flex-wrap:wrap;
        margin-bottom:60px;
    }
    .flex-between{
        justify-content:space-between;
    }
    .flex-form1{
        display:flex;
        flex-direction:column;
        align-items:left;
        width:45%;
    }
    .flex-form1 label{
        font-family: ${Theme.secondaryFont};
        font-size: 10px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.4;
        letter-spacing: normal;
        text-align: left;
        color: #222222;
    }
    .flex-form1 p.info{
        font-family: ${Theme.secondaryFont};
        font-size: 10px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.3;
        letter-spacing: normal;
        text-align: left;
        color: #717171;
        margin-top: 5px;
    }
    .input-with-icon{
        position: relative;
        display: flex;
        width:100%;
    }
    .input-with-icon img{
        position: absolute;
        right: 8px;
        top: 15%;
    }
    .flex-form2{
        display:flex;
        flex-direction:column;
        align-items:left;
        width:250px;
        margin-right: 20px;
        margin-bottom:56px;
    }
    .flex-form2 img{
        height:70px;
        width:70px;
        padding:30px;
        border-radius: 12px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        border: solid 1px #ffffff;
        background-color: #ffffff;
        cursor:pointer;
    }
    .full-width{
        width:100%;
        margin-right: 0;
    }
    .flex-form2 p.info{
        font-family: ${Theme.secondaryFont};
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.36;
        letter-spacing: normal;
        text-align: left;
        color: #222222;
        margin-top:10px;
        margin-bottom:20px;
    }
    .flex-box span{
        font-family: ${Theme.secondaryFont};
        font-size: 14px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.36;
        letter-spacing: normal;
        text-align: left;
        color: #222222;
    }
    .button-div{
        display:flex;
        justify-content:center;
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
        color: rgba(0, 0, 0, 0);
        opacity: 1;
        display: block;
        background: url(/assets/body/calendar.svg) no-repeat;
        width: 13px;
        height: 13px;
        border-width: thin;
        cursor:pointer;
    }

    @media only screen and (max-width: 1365px){
        margin: 100px 0 40px 0;
        h1{
            font-size:22px;
            margin-left:0;
            margin-bottom:30px;
        }
        .wheel-icon{
            display:none;
        }
        .main-div{
            width:660px;
        }
        .flex-form2 img{
            height:63px;
            width:63px;
        }
        .back-button{
            top:15px;
            left:70px;
            font:14px;
        }
        .back-button KeyboardBackspaceIcon{
            fontSize:30
        }
        .flex-box{
            margin-bottom:50px;
        }
    }
    @media only screen and (max-width: 767px){
        margin-top:70px;
        margin-bottom:0;
        h1{
            margin-top:35px;
            font-size:18px;
            margin-bottom: 25px;
        }
        .main-div{
            width:100%;
            padding:25px;
        }
        .description{
            display:flex;
            align-items:center;
            width:80%;
            padding-left:10%;
            padding-right:10%;
            margin-bottom:30px;
        }
        .flex-form2 img{
            height:63px;
            width:63px;
        }
        .back-button{
            top:15px;
            left:40px;
            font:14px;
        }
        .back-button KeyboardBackspaceIcon{
            fontSize:30
        }
        .flex-box{
            flex-direction:column;
            margin-bottom:20px;
        }
        .flex-form1{
            width:100%;
            margin-bottom:25px;
        }
        .flex-form2{
            margin-bottom:20px;
        }
        .flex-form2 p{
            font-size:12px;
            margin-bottom:20px;
        }
    }
`


export default function Report() {
    const [ loading, setLoading ] = useState(false)
    const [ errorModal, setErrorModal ] = useState(false)
    
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');
    const [policyReport, setPolicyReport] = useState('');
    const [invoice, setInvoice] = useState('');

    const handleClick = (e) => {
        e.preventDefault()
        // const isEmailValid = validEmail(email, emailRef, emailErrorRef)
        // const isDniValid = validDni(dni, dniRef, dniErrorRef)
        const isDateValid = validSinisterDate(date, dateRef, dateErrorRef);
        const isAddressValid = validAddressNumber(address, addressRef, addressErrorRef);
        const isImageValid = validFile(image, imageRef, imageErrorRef);
        const isPolicyValid = validFile(policyReport, policyReportRef, policyReportErrorRef);
        if (isDateValid && isAddressValid && isImageValid && isPolicyValid) {
            setLoading(true);
            wheelReport(date, address, image, policyReport, invoice).then(res => {
                setLoading(false);
                console.log(res)
                if (res.error) {
                    setErrorModal(true)
                    document.getElementById('modal-message').innerHTML = res.msg
                    setTimeout(()=>setErrorModal(false), 8000)
                }
                else {

                }
            })
        }
    }

    var dateRef = useRef(null);
    var dateErrorRef = useRef(null);
    var addressRef = useRef(null);
    var addressErrorRef = useRef(null);
    var imageRef = useRef(null);
    var imageErrorRef = useRef(null);
    var policyReportRef = useRef(null);
    var policyReportErrorRef = useRef(null);
    var invoiceRef = useRef(null);

    return (
        <ReportWheelContainer>
            <a href="/Clientes/Siniestros" className='back-button'>
                <KeyboardBackspaceIcon style={{ color: "#56e0c2", fontWeight: 100 }} />
            </a>
            <img className="wheel-icon" src="/assets/body/wheel.jpg" />
            <div className="main-div">
                <h1>Denuncia el robo de tu  <span className='underlined-span'>rueda</span></h1>
                <div className="form-message description" >
                    <img src="/assets/icons/info.svg" alt="políticas de privacidad" className="icon-message" />
                    <p>Es condición de cobertura tener la cuota al día al momento de ocurrido el siniestro</p>
                </div>
                <div className='flex-box flex-between'>
                    <div className='flex-form1'>
                        <label>Dia del robo</label>
                        <div className="input-with-icon">
                            <input className="text-field" type="date"  required onChange={e => setDate(e.target.value)} ref={ref => dateRef = ref} />
                        </div>
                        <p className="text-field-error" ref={e => dateErrorRef = e}>Colocá una fecha de vencimiento válida(Ej: 12/23/2020)</p>
                    </div>
                    <div className='flex-form1'>
                        <label>Lugar</label>
                        <div className="input-with-icon">
                            <input className="text-field" type="text" onChange={e => setAddress(e.target.value)} ref={ref => addressRef = ref} />
                            <img src="/assets/body/pin.svg"></img>
                        </div>
                        <p className="info">Indique dónde ocurrió el choque. Dirección exacta o cruce,
                        Indique localidad / barrio.</p>
                        <p className="text-field-error" ref={e => addressErrorRef = e}>Colocá el número de tu domicilio</p>
                    </div>
                    <div className='flex-form1'>
                        <label>Patente</label>
                        <input className="text-field" type="text"/>
                        <p className="info">Patente de tu vehículo</p>
                    </div>
                </div>
                <div className="flex-box">
                    <div className='flex-form2'>
                        <span>Foto de la rueda</span>
                        <ImageButton onChange={image => setImage(image)}  >
                            <img className='report-category' src='/assets/body/wheel1.jpg' alt='something' />
                        </ImageButton>
                        <p className="text-field-error" ref={e => imageErrorRef = e}>Adjuntá tu póliza en formato pdf, jpeg o png</p>
                    </div>
                    <div className='flex-form2'>
                        <span>Adjunta denuncia policial</span>
                        <ImageButton onChange={policyReport => setPolicyReport(policyReport)}  >
                            <img className='report-category' src='/assets/body/wheel2.jpg' alt='something' />
                        </ImageButton>
                        <p className="text-field-error" ref={e => policyReportErrorRef = e}>Adjuntá tu póliza en formato pdf, jpeg o png</p>
                    </div>
                    <div className='flex-form2 full-width' id="policial">
                        <span>Factura provedor cristal</span>
                        <p className="info">Si elegiste gestionar el arreglo del cristal por tu cuenta adjunta la factura del proveedor y poolpo te ayuda a gestionar 
el reintegro de la misma con la compañía</p>
                        <ImageButton onChange={invoice => setInvoice(invoice)} >
                            <img className='report-category' src='/assets/body/wheel3.jpg' alt='something' />
                        </ImageButton>
                    </div>
                </div>
                <div className="button-div">
                    <Button bg={"green"} text={"Enviar"} size={"default"} active={true} action={(e) => handleClick(e)} />
                </div>
            </div>
            {loading && <StaticModal number={0} /> }
            {errorModal && <MessagesModal /> }

        </ReportWheelContainer>
    )
}
