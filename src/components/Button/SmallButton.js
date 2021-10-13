import React from 'react'
import Styled from 'styled-components'
import Theme from '../../Styles/Theme.js'

export default function Button(props) {
    const { bg, text, action, size, active } = props;
    
    const StyledButton = Styled.button`
        background: ${ bg ==='blu' ? Theme.secondaryColor : Theme.primaryColor};
        padding: 0.8em 0.8em;
        font-size: ${ size === 'small' ? '0.5em' : '0.9em' };
        font-family: ${Theme.titleFont};
        font-weight: 700;
        border: none;
        border-radius: 30px;
        color: ${Theme.white};
        -webkit-box-shadow: ${Theme.shadow};
        -moz-box-shadow: ${Theme.shadow};
        box-shadow: ;
        @media only screen and (max-width: 1200px){
            font-size: 0.9em;
        }
        @media only screen and (max-width: 5992px){
            font-size: 0.8em;
        }
        @media only screen and (max-width: 500px){
            font-size: 0.7em;
        }
        &:disabled {
            background: ${ bg ==='red' ? '#F8B4A9': '#ABEFE0'};
        }

        .white{
            border: black;

        }
    `

    function renderButton(){
    if(active === undefined || active === true ){
        return <StyledButton className={bg} onClick={action}>{text}</StyledButton>
    } else {
        return <StyledButton className={bg} disabled>{text}</StyledButton>
    }
    }
    
    return (
        <div>
            {renderButton()}
        </div>
    )

}