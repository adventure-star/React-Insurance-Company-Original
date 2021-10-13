import React from 'react'
import Styled from 'styled-components'
import Theme from '../../Styles/Theme.js'
import Button from '../Button/Button.js'

const Form = Styled.form`
    display: flex;
    flex-direction: column;
    width: 428px;
    height: 140px;
    margin: 56px 0px 30px 0px;
    padding: 27px 43px 0px 43px;
    font-family: ${Theme.titleFont};
    background-color: ${Theme.white};
    border-radius: 12px;
    .form-title{
        font-size: 0.7em;
        width: 50%;
        font-weight: 700;
    }
    .span2{
        position: relative;
        z-index: 0;
    }
    .span2::after{
        background-color: ${Theme.primaryColor};
        content: '';
        width: 100%;
        height: 3px;
        position: absolute;
        bottom: -1px;
        left: 0;
        z-index: -1;
        margin-top: 100px;
    }
    .second-line{
        display: flex;
        justify-content: space-between;
        align-items: center;    

    }
    .input-mail{
        width: 100%;
        height: 80%;
        border-radius: 12px;
        border: 1px solid ${Theme.grey};
        font-family: ${Theme.secondaryFont};
        font-size: 0.7em;
        color: ${Theme.black};
        padding: 11px 0px 11px 15px;
        margin-right: 17px
    }

`

export default function NewsletterForm() {
    return (
        <Form>
            <p className="form-title">Suscribite para recibir nuestras <span className="span2">novedades</span>
            </p>
            <div className="second-line">
                <input className="input-mail" type="email" placeholder="juan.perez@gmail.com"/>
                <Button style={{height: "45px"}} bg={"red"} text={"Siguiente"}/>
            </div>
        </Form>
    )
}


