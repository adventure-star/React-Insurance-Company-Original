import React from 'react'
import Styled from 'styled-components'
import Theme from '../../Styles/Theme.js'

    const StyledButton = Styled.button`
        padding: 14px 28px;
        font-size: 15px;
        font-family: ${Theme.titleFont};
        font-weight: 700;
        border: none;
        border-radius: 30px;
        color: ${Theme.white};
        -webkit-box-shadow: ${Theme.shadow};
        -moz-box-shadow: ${Theme.shadow};
        box-shadow: ${Theme.shadow};
        cursor: pointer;

        @media only screen and (max-width: 1365px){
            font-size: 13px;
            padding: 14px 25px;
        }
        @media only screen and (max-width: 1200px){
            font-size: 13px;
        }
        @media only screen and (max-width: 500px){
            font-size: 13px;
        }
        .white{
            border: black;
        }
    `
export default function Button (props){
    const { bg, text, action, size, active, type, margin, special, font} = props;



    function renderButton(){
    if(special === true){
        return <StyledButton 
        style={{ 
            background: 'white', 
            border: `1px solid ${Theme.secondaryColor}`, 
            color: `${Theme.secondaryColor}`, 
            padding: `${size === 'small'? '11.4px 20.6px': '14px 28px'}`, 
            fontSize: `${size === 'small' ? '10px' : font}`}}
        onClick={action}>{text}</StyledButton >
    }else if(active === undefined || active === true ){
        return <StyledButton 
        style={{ background: `${bg ==='red' ? Theme.secondaryColor : Theme.primaryColor}`, padding: `${size === 'small' ? '11.4px 20.6px': '14px 28px'}`, fontSize: `${size === 'small' ? '10px' : font}`}}
        className="button" 
        onClick={action}>{text}</StyledButton >
    } else {
        return <StyledButton 
        className={`${bg} ${type}`} 
        style={{background: `${ bg ==='red' ? '#F8B4A9': '#ABEFE0'}`,
        padding: `${size === 'small' ? '11.4px 20.6px' : '14px 28px'}`, 
        fontSize: `${size === 'small' ? '10px' : '15px'}`
    }}
        disabled>{text}</StyledButton>
    }}

        return (
            <div style={{margin: margin}}>
                {renderButton()}
            </div>
        )
}
