import React, { useState, useRef } from 'react'
import Styled from 'styled-components'
import Theme from '../Styles/Theme.js'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '../components/Button/Button.js';
import { RadioGroup } from '@material-ui/core';
import ImageButton from '../components/Button/ImageButton';

import { validFile, validAddressNumber, validSinisterDate, validTextArea, validDomain } from '../utils/FormValidation.js';
import StaticModal from '../components/LoadingModal/StaticModal.js';
import MessagesModal from '../components/LoadingModal/MessagesModal.js';
import { partialReport } from '../utils/data.js';

const ReportPartialContainer = Styled.article`
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
    .main-div > span{
        margin-bottom:25px;
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
    .card{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        height:103px;
        width:132px;
        padding:20px;
        border-radius: 12px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        border: solid 1px #ffffff;
        background-color: #ffffff;
        cursor:pointer;
        margin-right:25px;
    }
    .card img{
        height:80px;
    }
    .card-without-label{
        padding:30px;
        border-radius: 12px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        border: solid 1px #ffffff;
        background-color: #ffffff;
        cursor:pointer;
        margin-right:25px;
        width:70px;
    }
    textarea{
        padding: 7px 13px;
        border-radius: 8px;
        border: solid 0.5px #a5aec6;
        resize:none;
        font-family: ${Theme.secondaryFont};
        font-size: 12px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.42;
        letter-spacing: normal;
        text-align: left;
        color: #222222;
        width:470px;
        height:180px;
    }
    textarea+p{
        font-family: ${Theme.secondaryFont};
        font-size: 12px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.42;
        letter-spacing: normal;
        text-align: left;
        color: #222222;
    }
    .radio-div{
        display: flex;
        flex-direction: column-reverse;
        align-items:center;
        margin-bottom:30px;
        margin-right: 15px;
    }
    .radio-div label {
        display: table-row;
        font-family: ${Theme.secondaryFont};
        font-size: 11px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.36;
        letter-spacing: normal;
        text-align: left;
        color: #222222;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .radio-div input{
        margin:20px 0 0 0;
        display: table-row;
        width: 100%;
    }
    input[type="radio"] {
        display: hidden;
    }
    input[type=radio]:not(old) {
        width: 18px;
        height: 18px;
        display: inline-block;
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        appearance: none;
        border-radius: 1em;
        border: 2px solid #60E1C3;
        outline: none !important;}
        
    input[type=radio]:not(old):checked{
        background-image: radial-gradient(circle at center, #60E1C3, #60E1C3 37.5%, #fff 40%, #fff 100%);
        outline: none;
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
    .car-div-1{
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center
    }
    .car-div-1 img{
        height:50px;
    }
    .car-div-2{
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center
    }
    .car-div-2 img{
        height:50px;
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
    .flex-box span, #third_party_label, .main-div > span{
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
    input[type="checkbox"] {
        display: none;
    }
    input[type="checkbox"] + *::before {
        float:left;
        margin-right:10px;
        content: "";
        display: inline-block;
        vertical-align: bottom;
        width: 1rem;
        height: 1rem;
        border-radius: 20%;
        border-style: solid;
        border-width: 1px;
        border-color: #57e0c1;
    }
    input[type="checkbox"]:checked + * {
        color: #57e0c1;
    }
    input[type="checkbox"]:checked + *::before {
        content: '✔';
        font-size:12px;
        text-align:center;
        vertical-align:center;
        color: #57e0c1;
        border-color: #57e0c1;
    }
    input[type="checkbox"] + * {
        display: inline-block;
        padding: 0.5rem 1rem;
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
    .custom-wrapper{
        display:none;
        min-width:100%;
    }
    .imageButton{
        width:200px;
        display:flex;
        flex-direction:column;
    }
    .imageButton2{
        width:157px;
        display:flex;
        flex-direction:column;
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
            width:500px;
            padding:35px;
        }
        .car-div-1{
            width:100%;
        }
        .car-div-1 img{
            height:30px;
        }
        .car-div-2 img{
            height:30px;
        }
        .car-div-2{
            width:100%;
        }
        .hide-md{
            color:white !important;
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
        .flex-form2 p.info{
            font-size:12px;
            margin-bottom:20px;
        }
        .card{
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            height:60px;
            width:80px;
            padding:15px;
            border-radius: 12px;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            border: solid 1px #ffffff;
            background-color: #ffffff;
            cursor:pointer;
            margin-right:25px;
            margin-bottom:25px;
        }
        .card img{
            height:40px;
        }
        .card-without-label{
            padding:20px;
            border-radius: 12px;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            border: solid 1px #ffffff;
            background-color: #ffffff;
            cursor:pointer;
            margin-right:25px;
            width:70px;
        }
        .card-box{
            flex-direction:row !important;
        }
        .card-box2{
            flex-direction:row !important;
            justify-content:center;
        }
        #third_party_label{
            font-size:12px;
        }
        label span{
            font-size:10px;
        }
        textarea{
            width:90%;
        }
        .textarea-div{
            width:100%;
        }
        .custom-wrapper{
            display:block;
        }
        .imageButton{
            width: 140px;
        }
        .imageButton{
            width: 137px;
        }
    }
`

export default function Report() {
    const [loading, setLoading] = useState(false)
    const [errorModal, setErrorModal] = useState(false)

    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [frontDni, setFrontDni] = useState('');
    const [backDni, setBackDni] = useState('');
    const [domain, setDomain] = useState('');
    const [description, setDescription] = useState('');

    const [image, setImage] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');

    const [damagedPart, setDamagedPart] = useState([
        front=>null, 
        back=>null, 
        left=>null, 
        right=>null
    ]);

    const setDamagedPartFromInput = (e, part) => {
        let temp = damagedPart;
        temp[part] = e.target.value;
        setDamagedPart(temp);
    }

    const handleClick = (e) => {
        e.preventDefault()
        const isDateValid = validSinisterDate(date, dateRef, dateErrorRef);
        const isAddressValid = validAddressNumber(address, addressRef, addressErrorRef);
        const isFrontDniValid = validFile(frontDni, frontDniRef, frontDniErrorRef);
        const isBackDniValid = validFile(backDni, backDniRef, backDniErrorRef);
        const isImagesValid = validFile(image, imageRef, imageErrorRef);
        const isDescriptionValid = validTextArea(description, descriptionRef, descriptionErrorRef);
        const isDomainValid = validDomain(domain, domainRef, domainErrorRef);
        if (isDateValid && isAddressValid && isImagesValid && isFrontDniValid && isBackDniValid && isDescriptionValid && isDomainValid) {
            setLoading(true);
            partialReport(date, address, frontDni, backDni, domain, damagedPart, image, image2, image3, image4, description).then(res => {
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
    var descriptionRef = useRef(null);
    var descriptionErrorRef = useRef(null);
    var domainRef = useRef(null);
    var domainErrorRef = useRef(null);
    
    var frontDniRef = useRef(null);
    var frontDniErrorRef = useRef(null);
    var backDniRef = useRef(null);
    var backDniErrorRef = useRef(null);
    
    var imageRef = useRef(null);
    var imageErrorRef = useRef(null);
    var image2Ref = useRef(null);
    var image2ErrorRef = useRef(null);
    var image3Ref = useRef(null);
    var image3ErrorRef = useRef(null);
    var image4Ref = useRef(null);
    var image4ErrorRef = useRef(null);


    return (
        <ReportPartialContainer>
            <a href="/Clientes/Siniestros" className='back-button'>
                <KeyboardBackspaceIcon style={{ color: "#56e0c2", fontWeight: 100 }} />
            </a>
            <img className="wheel-icon" src="/assets/body/partial.jpg" />
            <div className="main-div">
                <h1>Daños <span className='underlined-span'>parciales</span></h1>
                <div className="form-message description" >
                    <img src="/assets/icons/info.svg" alt="políticas de privacidad" className="icon-message" />
                    <p className="info">Es condición de cobertura tener la cuota al día al momento de ocurrido el siniestro</p>
                </div>
                <span>Registro de conducir</span>
                <div className="flex-box card-box">
                    <div class="imageButton">
                        <ImageButton onChange={image => setFrontDni(image)} >
                            <div className='card'>
                                <img className='report-category' src='/assets/body/front.jpg' alt='something' />
                                <span>Frente</span>
                            </div>
                        </ImageButton>
                        <p className="text-field-error" ref={e => frontDniErrorRef = e}>Adjuntá tu póliza en formato pdf, jpeg o png</p>
                    </div>
                    <div class="imageButton" >
                        <ImageButton onChange={image => setBackDni(image)} >
                            <div className='card'>
                                <img className='report-category' src='/assets/body/back.jpg' alt='something' />
                                <span>Dorso</span>
                            </div>
                        </ImageButton>
                        <p className="text-field-error" ref={e => backDniErrorRef = e}>Adjuntá tu póliza en formato pdf, jpeg o png</p>
                    </div>
                </div>
                <div className='flex-box flex-between'>
                    <div className='flex-form1'>
                        <label>Dia del choque</label>
                        <div className="input-with-icon">
                            <input className="text-field" type="date" required onChange={e => setDate(e.target.value)} ref={ref => dateRef = ref} />
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
                        <input className="text-field" type="text" onChange={e => setDomain(e.target.value)} ref={ref => domainRef = ref} />
                        <p className="info">Patente de tu vehículo</p>
                        <p className="text-field-error" ref={e => domainErrorRef = e}>este campo es requerido</p>
                    </div>
                </div>
                <span>Donde tiene el daño tu vehículo</span>
                <div className="flex-box flex-between">
                    <div className="col-md-5 col-12">
                        <div className="car-div-1">
                            <img src="/assets/body/car-front.jpg" />
                            <span>Frente</span>
                            <RadioGroup className="radio-group" row aria-label="position" name="crystal" defaultValue="front">
                                <div className="radio-div">
                                    <input id="radio1" type='radio' name='front' value='true' onChange={e => setDamagedPartFromInput(e, 'front')}/>
                                    <label>Derecho</label>
                                </div>
                                <div className="radio-div">
                                    <input id="radio2" type='radio' name='front' value='false' onChange={e => setDamagedPartFromInput(e, 'front')}/>
                                    <label>Izquierdo</label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="car-div-1">
                            <img src="/assets/body/car-back.jpg" />
                            <span>Atras</span>
                            <RadioGroup className="radio-group" row aria-label="position" name="crystal" defaultValue="back">
                                <div className="radio-div">
                                    <input id="radio1" type='radio' name='back' value='true' onChange={e => setDamagedPartFromInput(e, 'back')}/>
                                    <label style={{ color: "white" }}>Derecho</label>
                                </div>
                                <div className="radio-div">
                                    <input id="radio2" type='radio' name='back' value='false' onChange={e => setDamagedPartFromInput(e, 'back')}/>
                                    <label style={{ color: "white" }}>Izquierdo</label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="col-md-7 col-12">
                        <div className="car-div-2">
                            <img src="/assets/body/car-right.jpg" />
                            <span>Lateral derecho</span>
                            <RadioGroup className="radio-group" row aria-label="position" name="crystal" defaultValue="right">
                                <div className="radio-div">
                                    <input id="radio1" type='radio' name='right' value='true' onChange={e => setDamagedPartFromInput(e, 'right')}/>
                                    <label className="hide-md">Derecho</label>
                                </div>
                                <div className="radio-div">
                                    <input id="radio2" type='radio' name='right' value='false' onChange={e => setDamagedPartFromInput(e, 'right')}/>
                                    <label className="hide-md">Izquierdo</label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="car-div-2">
                            <img src="/assets/body/car-left.jpg" />
                            <span>Lateral izquierda</span>
                            <RadioGroup className="radio-group" row aria-label="position" name="crystal" defaultValue="left">
                                <div className="radio-div">
                                    <input id="radio1" type='radio' name='left' value='true' onChange={e => setDamagedPartFromInput(e, 'left')}/>
                                    <label style={{ color: "white" }}>Derecho</label>
                                </div>
                                <div className="radio-div">
                                    <input id="radio2" type='radio' name='left' value='false' onChange={e => setDamagedPartFromInput(e, 'left')}/>
                                    <label style={{ color: "white" }}>Izquierdo</label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>

                </div>
                <span>Adjunta fotos de los daños de tu vehículo</span>
                <div className="flex-box flex-between card-box2">
                    <div className="imageButton2">
                        <ImageButton onChange={image => setImage(image)} >
                            <img className="card-without-label" src="/assets/body/wheel3.jpg" alt="something" />
                        </ImageButton>
                        <p className="text-field-error" ref={e => imageErrorRef = e}>Adjuntá tu póliza en formato pdf, jpeg o png</p>
                    </div>
                    <div className="imageButton2">
                        <ImageButton onChange={image => setImage2(image)} >
                            <img className="card-without-label" src="/assets/body/wheel3.jpg" alt="something" />
                        </ImageButton>
                        <p className="text-field-error" ref={e => image2ErrorRef = e}>Adjuntá tu póliza en formato pdf, jpeg o png</p>
                    </div>
                    <div className="custom-wrapper"></div>
                    <div className="imageButton2">
                        <ImageButton onChange={image => setImage3(image)} >
                            <img className="card-without-label" src="/assets/body/wheel3.jpg" alt="something" />
                        </ImageButton>
                        <p className="text-field-error" ref={e => image3ErrorRef = e}>Adjuntá tu póliza en formato pdf, jpeg o png</p>
                    </div>
                    <div className="imageButton2">
                        <ImageButton onChange={image => setImage4(image)} >
                            <img className="card-without-label" src="/assets/body/wheel3.jpg" alt="something" />
                        </ImageButton>
                        <p className="text-field-error" ref={e => image4ErrorRef = e}>Adjuntá tu póliza en formato pdf, jpeg o png</p>
                    </div>
                </div>
                <div className="flex-box flex-between" style={{ alignItems: "start" }}>
                    <span style={{ marginBottom: "25px" }}>Descripcion</span>
                    <div className="textarea-div" style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                        <textarea placeholder="LoremImpsums" onChange={e => setDescription(e.target.value)} ref={ref => descriptionRef = ref} ></textarea>
                        <p className="info">Esto ayuda a resolver el siniestro mas rápido</p>
                        <p className="text-field-error" ref={e => descriptionErrorRef = e}>este campo es requerido</p>
                    </div>
                </div>

                <div style={{ display: "inline" }}>
                    <input type="checkbox" id="third_party" />
                    <label for="third_party" id="third_party_label" style={{ paddingLeft: "0", marginBottom: "30px" }}>
                        Hubo terceros involucrados? &nbsp;
                        <span>(Necesitamos los datos del conductor del otro vehículo)</span>
                    </label>
                </div>

                <div className="button-div">
                    <Button bg={"green"} text={"Enviar"} size={"default"} active={true} action={(e) => handleClick(e)} />
                </div>
            </div>
            {loading && <StaticModal number={0} />}
            {errorModal && <MessagesModal />}
        </ReportPartialContainer>
    )
}
