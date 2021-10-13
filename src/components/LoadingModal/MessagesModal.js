import React, { Component } from 'react'
import CarMoving from './CarMoving.js'
import Styled from 'styled-components'
import Theme from '../../Styles/Theme.js'

const ModalContainer = Styled.div`
    position: fixed;
    background-color: ${Theme.modalBackground};
    top: 0px;
    width: 100%;
    height: 100%;
    margin: 0px;
    z-index: 9999;
`
export default class MessagesModal extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <ModalContainer>
                <div className="loading-modal col-xs-11 col-sm-5 col-md-5 col-lg-5 white">
                    <CarMoving />
                    <h2 className="modal-title">Estamos procesando tus datos</h2>
                    <p className="modal-text" id="modal-message">Nuestro objetivo es que pagues siempre el mejor precio. ¡Siempre!</p>
                </div>
            </ModalContainer>
        )
    }
}
