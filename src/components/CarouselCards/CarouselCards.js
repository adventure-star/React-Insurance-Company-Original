import React, { Component } from 'react'
import Styled from 'styled-components'
import Theme from '../../Styles/Theme.js'
import StarsRatings from '../StarsRatings/StarsRatings.js'

class CarouselCards extends Component {
    constructor(props){
        super(props)
        this.state= {
            active: false,
        }
    }

    componentDidMount(){
        // console.log(this.props)
    }

    checkCurrentCard(){
        console.log("id", this.props.id, "current", this.props.currentCard)
        if(this.props.id === this.props.currentCard){
            // console.log("currentCard")
            this.setState({ active: true })
        } else {
            // console.log("no es currentCard")
            this.setState({ active: false })
        }

    }
    
    mouseOut(){
        // console.log("out")
        this.setState({active: false})
    }

    render(){
    return (
        <Bubble>
        <div 
        className={this.props.id === this.props.currentCard ? 'active' : 'white'}
        // className={this.state.active ? 'hovered' : 'white'} --- Other option
        onMouseOver={() => this.checkCurrentCard()} 
        onMouseOut={() => this.mouseOut()}>
            <p className="bubble-text">{this.props.text}</p>
            <div className="bubble-footer">
                <div className="footer-first-line">
                    <img className="bubble-img" src="./logo192.png" alt="opiniones"/>
                    <p className="bubble-name">{this.props.name}</p>
                </div>
                <div className="footer-second-line">
                    <p className="score">{`${this.props.stars}.0`}</p>
                    <div className="stars-container">
                    <StarsRatings className="stars"
                        color={this.props.id === this.props.currentCard ? '#fff' : '#7CDDC9'}
                        stars={this.props.stars}
                        // color ={!this.state.active ? '#7CDDC9' : '#fff'}
                    /> 
                    </div>
                </div>
            </div>
        </div>
        </Bubble>
    )
    }
}


// export default React.memo(CarouselCards)
export default CarouselCards

const Bubble = Styled.div`
            .white{
            width: 500px;
            height: 270px;
            background-color: ${Theme.white};
            /* border: 2px solid #4C4C4C; */
            box-sizing: border-box;
            font-size: 0.8em;
            color: ${Theme.black};
            margin: 20px 20px;
            padding: 30px;

            transition: 0.5s;

            position: relative;
            border-radius: 1.4em;
            }
            .white:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 78%;
                width: 0;
                height: 0;
                border: 78px solid transparent;
                border-top-color: ${Theme.white};
                border-bottom: 0;
                border-right: 0;
                margin-left: -51px;
                margin-bottom: -62px;
                transform: rotate(270deg);
                transition: 0.5s;
            }

            .active{
                background-color: ${Theme.primaryColor};
                width: 525px;
                height: 283.5px;
                padding: 20px 35px;
                color: #fff;
                box-sizing: border-box;
                font-size: 0.8em;
                color: ${Theme.white};
                margin: 20px 20px;
                position: relative;
                border-radius: 1.4em;
            }
            .active:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 78%;
                width: 0;
                height: 0;
                border: 78px solid transparent;
                border-top-color: ${Theme.primaryColor};
                border-bottom: 0;
                border-right: 0;
                margin-left: -51px;
                margin-bottom: -62px;
                transform: rotate(270deg);
            }
            .buuble-footer{
                margin: 0px 0px 0px 35px;
            }
            .footer-first-line{
                display: flex;
                align-items: center;
            }
            .footer-second-line{
                display: flex;
                align-items: space-between;
                margin: 0px 0px 0px 9px;
                width: 50%;
            }
            .bubble-name{
                font-size: 1.2em;
                margin: 0px 0px 0px 20px;
            }
            .bubble-text{
                margin: 0 0 50px 0;
            }
            .bubble-img{
                width: 10%;
            }
            .score{
                font-size: 1.5em;
                font-weight: 600;
                margin: 0.3em 0 0 0;
            }
            .stars-container{
                margin: 5px 0px 0px 20px;;
            }
    `