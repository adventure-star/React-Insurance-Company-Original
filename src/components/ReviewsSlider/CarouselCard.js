import React, { Component } from 'react'
import Styled from 'styled-components'
import Theme from '../../Styles/Theme.js'
import StarsRatings from './StarsRatings.js'
import './star-ratings.css'
import theme from '../../Styles/Theme.js'

class CarouselCards extends Component {
    constructor(props){
        super(props)
        this.state= {
            active: false,
            currentCard: this.props.currentCard,
            xDown: null  
        }
    }

    componentDidMount(){
    }
    componentDidUpdate(){
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
    
    // mouseOut(){
    //     // console.log("out")
    //     this.setState({active: false})
    // }
    // touchStart(e){
    //     // e.preventDefault();
    //     console.log("swipe")
    //     console.log(e)                                
    //     // yDown = firstTouch.clientY;      
    //     // var data = event.dataTransfer.getData("Text");
    //     // event.target.appendChild(document.getElementById(data));
    //     // document.getElementById("demo").innerHTML = "The p element was dropped";
    // }
    // touchEnd(e){
    //     // e.preventDefault();
    //     console.log("swipe2")
    //     console.log(e)
    //     // var data = event.dataTransfer.getData("Text");
    //     // event.target.appendChild(document.getElementById(data));
    //     // document.getElementById("demo").innerHTML = "The p element was dropped";
    // }
    // getTouches(e) {
    //     return e.touches ||             // browser API
    //            e.originalEvent.touches; // jQuery
    //   }  

    render(){
    return (
        <Bubble
            style={{
                left: `${this.props.x}px`,
                top: `${this.props.y}px`,
                zIndex: `${this.props.zIndex}`,
                transform: `translate(-50%, -50%) scale(${this.props.scale})`,
                backgroundImage: `url(/assets/body/globo-${this.props.color}.svg)`,
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover', 
                height: '280px'
                }}
                id={this.props.id}
                className={this.props.class}
            >
                <div className="content-container"
                  >
                    <p className="bubble-text">{this.props.text}</p>
                    <div className="bubble-footer">
                        <div className="footer-first-line">
                            <img className="bubble-img" src={this.props.img} />
                            <p className="bubble-name">{this.props.name}</p>
                        </div>
                        <div className="footer-second-line">
                            <p className="score">{`${this.props.stars}.0`}</p>
                            <div className="stars-container">
                            <StarsRatings className="stars"
                                // color={this.props.starsColor === 'white' ? '#fff' : '#7CDDC9'}
                                stars={this.props.stars} activeColor={`${this.props.scale === 1 ? Theme.white : Theme.primaryColor}`}
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
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 200px;
            width: 500px;
            box-sizing: border-box;
            width: 100%;
            height: auto;

            .white{
            position: relative;
            box-sizing: border-box;
            /* margin: 0px 15px 0px 15px; */
            }
            .active{
                box-sizing: border-box;
                /* margin: 0px 15px 0px 15px; */
                position: relative;

            }

            .data-container-active > .content-container{
                /* background-image: url('/assets/body/globo-verde.svg'); */
                background-color: transparent;
                width: 28vw;
                height: 15.52vw; 
                background-position: center; 
                background-repeat: no-repeat; 
                background-size: cover; 
                font-family: ${Theme.secondaryFont};
                font-size: 20px;
                padding: 38px 35px 0px 35px;
                margin: 10px 25px 0px 25px;
                padding: 42px 35px 0px 35px;
                position: relative;
                top: 0%;
                left: 0%;
            }
            .data-container-active > .content-container > p:nth-child(2), .data-container-active p:nth-child(1) {
                color: ${Theme.white};
                font-size: 13px;
                line-height: 18px;
                @media (max-width: 1365px){
                    font-size: 10px;
                    line-height: 14px;
                }
            }
            .data-container > .content-container{
                /* background-image: url('/assets/body/globo-blanco.svg'); */
                background-color: red; /* Used if the image is unavailable */
                width: 28vw;
                height: 15.52vw;/* You must set a specified height */
                background-position: center; /* Center the image */
                background-repeat: no-repeat; /* Do not repeat the image */
                background-size: cover; /* Resize the background image to cover the entire container */
                font-family: ${Theme.secondaryFont};
                font-size: 13px;
                margin: 0px 15px;
                padding: 38px 35px 0px 35px;
            }
            .data-container p:nth-child(2), .data-container p:nth-child(1) {
                font-size: 11px;
                line-height: 15px;
                @media (max-width: 1365px){
                font-size: 10px;
                line-height: 14px;
                }
            }
            .data-container p:nth-child(2){
                @media (max-width: 1365px){
                margin: -19px 0px;
                } 
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
                margin: 0px 0px 25px 0px;
                @media (max-width: 1365px){
                margin: -20px 0px 12px 0px;        
                }   
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

            @media (max-width: 767px){
                color: red;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: 200px;
                width: 500px;
                box-sizing: border-box;
                /* background-color: red; */
                width: 100%;
                height: auto;

            }
    `