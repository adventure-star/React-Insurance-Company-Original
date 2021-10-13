import React, { Component } from 'react'
import Styled from 'styled-components'
import { Press } from '../utils/data.js' 
import PressCard from '../components/PressCards/PressCard.js'

const PressScreenContainer = Styled.section`
    margin: 160px 5% 0px 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        font-size: 41px;
        line-height: 50px;
        font-weight: 300;
        margin-bottom: 52px;
    }
    .press-cards-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }
    @media only screen and (max-width: 1365px){
        margin: 117px 0px 0px 0px;

    }
    @media only screen and (max-width: 767px){
        h2{
        font-size: 30px;
        line-height: 37px;
        font-weight: 300;
        margin-bottom: 51px;
        }
        .press-cards-container{
        margin-bottom: 24px;
    }
    }

`


export default class PressScreen extends Component {
    constructor(props){
        super(props)

    }

    renderCards(){
        let items = Press
        return items.map( (item, i) => <PressCard title={item.title} img={item.img} alt={item.alt} isImg={item.isImg} text={item.text} link={item.link} align={item.align} date={item.date} key={`press ${i}`}/>)
    }

    render() {
        return (
            <div>
            <PressScreenContainer>
                <div>
                    <h2 className="press-title">
                        <span className="span1">Poolpo en Prensa</span>
                    </h2>
                </div>
                <div className="press-cards-container">
                    {this.renderCards()}
                </div>
            </PressScreenContainer>
            </div>
        )
    }
}
