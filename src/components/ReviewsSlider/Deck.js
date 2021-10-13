import React, { Component } from 'react'
import Styled from 'styled-components'
import { Reviews } from '../../utils/data.js'
import CarouselCard from './CarouselCard.js'
import CarouselStyles from './CarouselStyles.js'

const ReviewsContainer = Styled.section`
        padding: 0;
        margin: 77px 0px;
        position: inherit;
        width: 100%;
        overflow: hidden;
`

export default class Deck extends Component {
    constructor(){
        super()
            this.state = {
                cards: '',
                currentCard: 7,
            }
            this.animationInProgress = false
            this.touchInProgress = false
    }

    componentDidMount(){
        console.log("did mount deck")
        let newCards = []
        let center = {
            x: parseFloat(this.deck.style.width) /2,
            y: parseFloat(this.deck.style.height) / 2,
        }
        let totalNumberOfCards = 13
        let middleCardByIndex = Math.floor(totalNumberOfCards / 2)
        this.setState({currentCard: middleCardByIndex + 1})
        console.log("middleCard", middleCardByIndex)
        let newX = 0
        let newY = 0
        let newZIndex = 0
        let newScale = 1

        for(let i = 0 ; i < reviews.length ; i++){
            if(i < middleCardByIndex){ // left side of deck
                // order the cards
                newX= center.x - (392.5 * (middleCardByIndex - i))
                newY= center.y

                // // cascade the cards
                newX = newX + ((-0.3 * 392.5) * (middleCardByIndex - i ))
                newZIndex = i

                // scale the cards
                newScale = Math.pow(0.90, (middleCardByIndex - i))
                
                
            } else { // right side of deck
                newX= center.x + (392.5 * (i - middleCardByIndex))
                newY= center.y
                
                // cascade the cards
                newX = newX - ((-0.3 * 392.5) * (i - middleCardByIndex))
                newZIndex = i * (-1.0)
                
                //scale the cards
                newScale = Math.pow(0.90, (i - middleCardByIndex))
            }
            newCards.push(
                <CarouselCard 
                key={i}
                id={i + 1}
                color={i === middleCardByIndex ? 'verde' : 'blanco'}
                x={newX}
                y={newY}
                zIndex={ i === middleCardByIndex ? 100 : newZIndex}
                scale={newScale}
                currenCard={this.state.currentCard}
                text={reviews[i].text}
                name={reviews[i].name}
                stars={reviews[i].stars}
                starsColor={i === middleCardByIndex ? 'white' : 'green'}
                img={reviews[i].img}
                class={i === middleCardByIndex ? 'data-container-active' : 'data-container'}
                />
            )
        }
        this.setState({cards: newCards})
        let newCardsToRender = this.state.newCards
        console.log(newCardsToRender)
        return this.state.cards
    }

    handleNext(clickValue = 1){
        console.log("next", clickValue)
        if(!this.animationInProgress){
            this.animationInProgress = true
            this.touchInProgress = true
            let lastCardsLeft = this.deck.children[this.deck.children.length - 1].style.left
            let lastCardsZIndex = this.deck.children[this.deck.children.length - 1].style.zIndex
            let lastCardsTransform = this.deck.children[this.deck.children.length - 1].style.transform
            let lastCardsClassName = this.deck.children[this.deck.children.length - 1].className
            
            if(this.state.currentCard + clickValue <= this.deck.children.length){
                this.setState({currentCard : this.state.currentCard + clickValue})
            } else {
                this.setState({currentCard : clickValue})
            }
            for(let i = this.deck.children.length - 1 ; i > 0 ; i--){
                console.log(clickValue)
                if(i >= clickValue) {
                    this.deck.children[i].style.left = this.deck.children[i - clickValue].style.left
                    this.deck.children[i].style.zIndex = this.deck.children[i - clickValue].style.zIndex
                    this.deck.children[i].style.transform = this.deck.children[i - clickValue].style.transform
                    this.deck.children[i].style.transitionDuration = '0.5s'
                    this.deck.children[i].style.backgroundImage = this.deck.children[i - clickValue].style.backgroundImage
                    this.deck.children[i].className = this.deck.children[i - clickValue].className
                }
            }
            // special case
            this.deck.children[0].style.transitionDuration = '0.2s'
            this.deck.children[0].style.transform = 'translate(-50%, -50%) scale(0)'
            // this.deck.children[0].style.backgroundImage = `url('/assets/body/globo-blanco.svg')`
            // this.deck.children[0].className = 'data-container'
            
            setTimeout(() => {
                this.deck.children[0].style.transitionDuration = '0s'
                this.deck.children[0].style.left = lastCardsLeft
                this.deck.children[0].style.zIndex = lastCardsZIndex
                this.deck.children[0].className = lastCardsClassName
                
                this.deck.appendChild(this.deck.children[0])
                
                setTimeout(() => {
                    this.deck.children[this.deck.children.length - 1].style.transitionDuration = '0.2s'
                    this.deck.children[this.deck.children.length - 1].style.transform = lastCardsTransform
                    this.animationInProgress = false
                    this.touchInProgress = false
                }, 100);
            }, 500);
        } else {
            return
        }
        
        
    }
    handlePrevious(clickValue = 1){
        if(!this.animationInProgress){
            this.animationInProgress = true
            this.touchInProgress = true
            let firstCardsLeft = this.deck.children[0].style.left
            let firstCardsZIndex = this.deck.children[0].style.zIndex
            let firstCardsTransform = this.deck.children[0].style.transform
            let firstCardsClassName = this.deck.children[0].className

            if(this.state.currentCard - clickValue >= 1){
                this.setState({currentCard : this.state.currentCard - clickValue})
            } else {
                this.setState({currentCard : this.deck.children.length})
            }

            for(let i = 0 ; i < this.deck.children.length - 1 ; i++){
                    this.deck.children[i].style.left = this.deck.children[i + 1].style.left
                    this.deck.children[i].style.zIndex = this.deck.children[i + 1].style.zIndex
                    this.deck.children[i].style.transform = this.deck.children[i + 1].style.transform
                    this.deck.children[i].style.transitionDuration = '0.5s'
                    this.deck.children[i].style.backgroundImage = this.deck.children[i + 1].style.backgroundImage
                    this.deck.children[i].className = this.deck.children[i + 1].className
            }
            
            // special case
            this.deck.children[this.deck.children.length - 1].style.transitionDuration = '0.2s'
            this.deck.children[this.deck.children.length - 1].style.transform = 'translate(-50%, -50%) scale(0)'
            
            setTimeout(() => {
                this.deck.children[this.deck.children.length - 1].style.transitionDuration = '0s'
                this.deck.children[this.deck.children.length - 1].style.left = firstCardsLeft
                this.deck.children[this.deck.children.length - 1].style.zIndex = firstCardsZIndex
                this.deck.children[this.deck.children.length - 1].className = firstCardsClassName
                this.deck.insertBefore(this.deck.children[this.deck.children.length - 1], this.deck.children[0])
                
                setTimeout(() => {
                    this.deck.children[0].style.transitionDuration = '0.2s'
                    this.deck.children[0].style.transform = firstCardsTransform

                    this.animationInProgress = false
                    this.touchInProgress = false
                }, 100);
            }, 500);
        } else {
            return
        }
    }

    renderPagination(){
        let items = reviews
        return items.map ( (item, i) => <div 
        className={this.state.currentCard >= i + 1 ? "pagination-circle-active" : "pagination-circle"} key={i} id={i + 1}
        onClick={() => this.handleClick(i + 1)}></div>)
    }

    handleClick(x){
        console.log("circulo clickeado", x)
        console.log("cantidad de reviews", this.deck.children.length)
        let differenceNext = this.state.currentCard - x
        let differencePrevious = x - this.state.currentCard
        if(x === this.state.currentCard){
            return
        } else if( x > this.state.currentCard && x + differenceNext <= this.deck.children.length){
            this.handleNext()
        } else if (x < this.state.currentCard && x + differenceNext <= this.deck.children.length){
            this.handlePrevious()
        }
    }

    handleClickStart(e){
        // if(!this.touchInProgress){
            let x = e.clientX
            this.setState({...this.state, touchStart: x})
            console.log("coordenadas start", x)
        // }
    }
    handleClickEnd(e){
        // if(!this.touchInProgress){
            let x = e.clientX
            this.setState({...this.state, touchEnd: x})
            this.handleSwipe(this.state.touchStart, this.state.touchEnd)
            this.touchInProgress = true
            console.log("coordenadas move", x)
        // }
    }
    handleTouchStart(e){
        // if(!this.touchInProgress){
            let x = e.touches[0].pageX
            this.setState({...this.state, touchStart: x})
            console.log("coordenadas start", x)
        // }
    }
    handleTouchMove(e){
        // if(!this.touchInProgress){
            let x = e.touches[0].pageX
            this.setState({...this.state, touchEnd: x})
            this.handleSwipe(this.state.touchStart, this.state.touchEnd)
            this.touchInProgress = true
            console.log("coordenadas move", x)
        // }
    }
    // handleTouchEnd(e){
    //     if(this.touchInProgress){
    //     let x = e
    //     console.log("coordenadas end", x)
    //     }
    // }
    handleSwipe(touchStart, touchEnd){
            // if(this.touchInProgress){
                if(touchStart < touchEnd){
                    this.handlePrevious()
                } else if (touchStart > touchEnd){
                    this.handleNext()
                }
            // }
    }



    render() {
        return (
            <ReviewsContainer>
                <div className="reviews-title">   
                    <h2 className="fourth-title">Lo que dicen de <span className="span2">nosotros</span></h2>
                </div>
                <div 
                ref={refId => this.deck = refId} 
                className = "reviews-cards-container" 
                style={styles.deck}
                onMouseDown={(e) => this.handleClickStart(e)}
                onMouseUp={(e) => this.handleClickEnd(e)}
                onTouchStart={(e) => this.handleTouchStart(e)}
                onTouchMove={(e) => this.handleTouchMove(e)}
                // onTouchEnd={(e)=> this.handleTouchEnd(e)}
                // onTouchEnd={(e) => this.handleTouchEnd(e)}
                >
                    {this.state.cards}
                </div>
                <div className="pagination-container">
                    {this.renderPagination()}
                </div>
            <CarouselStyles />
            </ReviewsContainer>
        )
    }
}

const styles = {

    deck:{
        position:'relative', 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, 0%)',
        height: '300px', 
        width: '500px',
        // backgroundColor: 'red',
    }
}

const colors = [
    'red',
    'blue',
    'green', 
    'yellow',
    'grey',
    'pink',
    'aquamarine',
    'crimson',
    'orange'
]

const reviews = Reviews
