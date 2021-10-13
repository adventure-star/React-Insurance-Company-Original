import React, { Component } from 'react'
import CarouselCard from './CarouselCards.js'
import { Reviews } from '../../utils/data.js'
import Styled from 'styled-components'
import Theme from '../../Styles/Theme.js'

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import StarsRatings from './StarsRatings.js'

class ReviewsCarousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentCard: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        let firstCardClone = this.cardContainer.children[0].cloneNode(true);
        let secondCardClone = this.cardContainer.children[1].cloneNode(true)
        let lastCardClone = this.cardContainer.children[this.cardContainer.children.length -1 ].cloneNode(true);
    
        this.cardContainer.insertBefore(lastCardClone, this.cardContainer.children[0])
        this.cardContainer.append(firstCardClone)
        this.cardContainer.append(secondCardClone)
        this.cardContainer.style.transitionDuration = '0s';
        this.cardContainer.style.transform = `translate(-${1}%)`
        // this.cardContainer.style.transform = `translate(-${100}px)`

    }
    componentDidUpdate(){
        if(this.state.currentCard === 0){
        // this.cardContainer.style.transitionDuration = '0.5s';
        // this.cardContainer.style.transform = `translate(-${110}px)`

        }
    }

    handlePrevious = () => {
        if(this.state.currentCard > 0 || this.state.currentCard < this.state.currentCard === this.cardContainer.children.length -1){
            let newCurrentCard = this.state.currentCard - 1
            this.setState({...this.state, currentCard: newCurrentCard}, () => {
                this.cardContainer.style.transitionDuration = '0.8s';
                this.cardContainer.style.transform = `translate(-${540 * this.state.currentCard}px)`

                if(this.state.currentCard === 0){
                // setTimeout( () => {
                    this.cardContainer.style.transitionDuration = '0.8s';
                    this.cardContainer.style.transform = `translate(-${510 * (this.cardContainer.children.length -2)}px)`
                    this.setState({...this.state, currentCard : 0})
                // }, 800)
                }
            })
            } else {
                return
            }   
    }
    handleNext = () => {
        if(this.state.currentCard < this.cardContainer.children.length -1){
        let newCurrentCard = this.state.currentCard + 1
        this.setState({...this.state, currentCard: newCurrentCard}, () => {
            this.cardContainer.style.transitionDuration = '0.8s';
            this.cardContainer.style.transform = `translate(-${(647 * this.state.currentCard)-110}px)`
            
            if(this.state.currentCard === this.cardContainer.children.length -4){
            setTimeout( () => {
                this.cardContainer.style.transitionDuration = '0.8s';
                this.cardContainer.style.transform = `translate(-${650}px)`
                this.setState({...this.state, currentCard : 0})
            }, 502)
            }
        })

        } else {
            return
        }
    }

    getReviews(){
        let items = Reviews
        return items.map ( (item, i) => <CarouselCard key={i} id={i} item={item} currentCard={this.state.currentCard}/>
        )
    }
    renderPagination(){
        let items = Reviews
        return items.map ( (item, i) => <div className={this.state.currentCard >= i ? "pagination-circle-active" : "pagination-circle"} key={i} id={i}ref={circle => this.circle = circle} 
        onClick={() => this.handleClick(i)}></div>)
    }

    handleClick(i){
        console.log(i)
        if(i <= this.state.currentCard){
            this.handlePrevious(i)
        } else {
            this.handleNext(i)
        }
    }

    render() {
        return (
            <div className="fifth-section">
                <div>
                    <h2 className="second-title">Lo que dicen de <span className="span2">nosotros</span>!</h2>
                </div>
                <div className="carousel-container">
                    <ViewPort className="view-port">
                        <CardContainer ref={refId => this.cardContainer = refId}>
                        { this.getReviews() }
                        </CardContainer>
                    </ViewPort>
                    <div className="pagination-container">
                        { this.renderPagination() }
                    </div>
                    <button onClick={() => this.handlePrevious()}>Atrás</button>
                    <button onClick={() => this.handleNext()}>Adelante</button>
                </div>
            </div>
        )
    }
}

export default ReviewsCarousel


const ViewPort = Styled.div`
        display: flex;
        position: relative;
        bottom: 50%;
        left: 50%;
        transform: translate(-7.8%,0%);
        width: 100%;
        height: 400px;
        background-color: ${Theme.white};
        overflow: hidden;
`

const CardContainer = Styled.div`
        display: flex;
        width: fit-content;
`