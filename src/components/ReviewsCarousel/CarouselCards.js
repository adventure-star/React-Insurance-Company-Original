import React, { Component } from 'react'
import Styled from 'styled-components'
import Theme from '../../Styles/Theme.js'
import StarsRatings from './StarsRatings.js'

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
        // console.log("id", this.props.id, "current", this.props.currentCard)
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
        {/* <div 
        className={this.props.id === this.props.currentCard ? 'active' : 'white'}
        // className={this.state.active ? 'hovered' : 'white'} --- Other option
        onMouseOver={() => this.checkCurrentCard()} 
        onMouseOut={() => this.mouseOut()}> */}
            {this.props.id === this.props.currentCard ?
            <img src="/assets/body/globo-centro.svg" alt="globo-opiniones" className="active"/>
            : <img src="/assets/body/globo-2.svg" alt="globo-opiniones" className="white"/> }
            <div className={ this.props.id === this.props.currentCard ? "data-container-active" : "data-container"}>
                <p className="bubble-text">{this.props.item.text}</p>
                <div className="bubble-footer">
                    <div className="footer-first-line">
                        <img className="bubble-img" alt="globo-opiniones" src={this.props.item.img} />
                        <p className="bubble-name">{this.props.item.name}</p>
                    </div>
                    <div className="footer-second-line">
                        <p className="score">{`${this.props.item.stars}.0`}</p>
                        <div className="stars-container">
                        <StarsRatings className="stars"
                            color={this.props.id === this.props.currentCard ? '#fff' : '#7CDDC9'}
                            stars={this.props.item.stars}
                            // color ={!this.state.active ? '#7CDDC9' : '#fff'}
                        /> 
                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
        </Bubble>
    )
    }
}


// export default React.memo(CarouselCards)
export default CarouselCards

const Bubble = Styled.div`
            .white{
            position: relative;
            box-sizing: border-box;
            margin: 38px 15px 0px 15px;
            width: 30vw;
            }
            .active{
                box-sizing: border-box;
                margin: 38px 15px 0px 15px;
                position: relative;
                width: 33vw;
            }
            .data-container-active{
                position: relative;
                top: -284px;
                width: 72%;
                font-family: ${Theme.secondaryFont};
                font-size: 13px;
                margin: 23px 25px 0px 25px;
                padding: 42px 35px 0px 35px;
            }
            .data-container-active p:nth-child(2), .data-container-active p:nth-child(1) {
                color: ${Theme.white};
                font-size: 13px;
                line-height: 18px;
            }
            .data-container{
                position: relative;
                top: -241px;
                width: 74%;
                font-family: ${Theme.secondaryFont};
                font-size: 13px;
                margin: 23px 25px 0px 25px;
                padding: 20px 35px 0px 35px;
            }
            .data-container p:nth-child(2), .data-container p:nth-child(1) {
                font-size: 11px;
                line-height: 15px;
            }
            .bubble{
                width: 100%;
            }
            .footer-first-line{
                display: flex;
                align-items: center;
            }
            .footer-second-line{
                display: flex;
                align-items: space-between;
                margin: 0px 0px 0px 4px;
                width: 50%;
            }
            .bubble-name{
                margin: 0px 0px 0px 8px;
            }
            .bubble-text{
                text-align: left;
                margin: 0 0 25px 0;
            }
            .bubble-img{
                width: 9%;
            }
            .score{
                font-size: 13px;
                font-weight: 600;
                margin: 0.3em 0 0 0;
            }
            .stars-container{
                margin: 5px 0px 0px 14px;
            }
    `