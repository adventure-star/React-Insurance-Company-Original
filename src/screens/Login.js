import React, { useState, useRef } from 'react'
import Styled from 'styled-components'
import Theme from '../Styles/Theme.js'
import Button from '../components/Button/Button.js'
import { validEmail, validDni } from '../utils/FormValidation.js'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { customerLogin } from '../utils/data.js'
import StaticModal from '../components/LoadingModal/StaticModal.js';
import MessagesModal from '../components/LoadingModal/MessagesModal.js';

const LoginContainer = Styled.article`
    margin: 188px 0px 122px 0px;
    display:flex;
    justify-content:center;
    .loginDiv{
        display:flex;
        flex-direction:column;
        align-items:center;
        width: 305px;
        height: 300px;
        padding: 47px 78.3px 51px 78px;
        border-radius: 12px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        border: solid 1px #ffffff;
        background-color: #ffffff;    
    }
    .header{
        margin: 0 7.6px 41px 2px;
        font-family: Arvo;
        font-size: 25px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.24;
        letter-spacing: normal;
        text-align: center;
        color: #56e0c2;
    }
    .formContainer{
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
    }

    .forgetPassword{
        height: 14px;
        text-decoration:none;
        font-family: ${Theme.secondaryFont};
        font-size: 10px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.4;
        letter-spacing: normal;
        text-align: center;
        color: #56e0c2;
    }
    .forgetPassword:hover{
        text-decoration:underline;
    }
    input{
        margin: 5px 0 5px 0;
    }
    button{
        margin-top:25px;
    }
    i {
        position: absolute;
        right: 5%;
        top: 15%;
    }
    .pass-wrapper {
        position: relative;
        display: flex;
        width:100%;
    }
    i:hover {
    color: #00fcb6;
    cursor: pointer;
    }
    @media only screen and (max-width: 1365px){
        
    }
    @media only screen and (max-width: 767px){
        margin: 97px 0px 51px 0px;
        .loginDiv{
            display:flex;
            flex-direction:column;
            align-items:center;
            background-color: #ffffff;    
            padding: 0 34px 0px 34px;
            box-shadow: none;
            border: none;
        }
    }
`


export default function Login() {
    const [email, setemail] = useState('')
    const [dni, setdni] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    
    const [loading, setLoading] = useState(false)
    const [errorModal, setErrorModal] = useState(false)
    const toggleType = () => {
        setShowPassword(!showPassword);
    }
    const renderMembers = () => {

    }
    const handleClick = (e) => {
        e.preventDefault()
        const isEmailValid = validEmail(email, emailRef, emailErrorRef)
        // const isDniValid = validDni(dni, dniRef, dniErrorRef)
        const isDniValid = true;
        if(isEmailValid && isDniValid){
            setLoading(true);
            customerLogin(email, dni).then( res =>{
                setLoading(false);
                console.log(res)
                if(res.error){
                    setErrorModal(true)
                    document.getElementById('modal-message').innerHTML = res.msg
                    setTimeout(()=>setErrorModal(false), 8000)
                }
                else{
                    localStorage.setItem('token', res.token)
                    let returnUrl = res.returnUrl;
                    if(returnUrl==="") returnUrl = "/Clientes";
                    window.location.href =returnUrl;
                }
            })
        }
    }
    var emailRef=useRef('');
    var emailErrorRef=useRef('');
    var dniRef=useRef('');
    var dniErrorRef=useRef('');
    return (
        <LoginContainer>
            <div className="loginDiv">
                <div className="header">Ingresá a tu cuenta</div>
                <form className="formContainer">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input className="text-field" type="email" id="email" onChange={e => setemail(e.target.value)} ref={ref => emailRef = ref} />
                    <p className="text-field-error" ref={ ref => emailErrorRef = ref}>Colocá correctamente tu email (Ej: juan.perez@gmail.com)</p>

                    <label htmlFor="dni" className="form-label">DNI / Contraseña</label>
                    <div className="pass-wrapper">
                        <input className="text-field" type={showPassword ? "text" : 'password'} id="dni" maxLength="20" onChange={(e) => setdni(e.target.value)} ref={ref => dniRef = ref} />
                        <i style={{ fontSize:15}} onClick={() => toggleType()}>
                            {showPassword && <VisibilityOffIcon style={{ fontSize:15}}  />}
                            {!showPassword && <VisibilityIcon style={{ fontSize:15}} />}
                        </i>
                    </div>
                    <p className="text-field-error" ref={ ref => dniErrorRef = ref}>Colocá los números de tu DNI sin puntos</p>
                    <a href="#" className='forgetPassword'>¿Olvidaste tu contraseña?</a>
                    <Button bg={"green"} text={"Ingresar"} size={"default"} active={true} action={(e) => handleClick(e)} />
                </form>
            </div>
            {loading && <StaticModal number={0} /> }
            {errorModal && <MessagesModal /> }
        </LoginContainer>
    )
}
