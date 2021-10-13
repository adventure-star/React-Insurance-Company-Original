import React, { Component } from 'react'
import {CarouselComponent} from 'react-swiping-carousel'
import { Reviews } from '../../utils/data'
 
export default class Example extends Component {


    renderCards(){
        let items = Reviews
        items.map(item => {
            return(
                <div>
                <div>
                    <p>You can insert any tag as child</p>
                </div>
                <p>Even a lonely p</p>
                <img src="/assets/body/globo-centro.svg" alt="Or an image" />
                </div>
            )
        })
    }

  render() {
    return (
        <CarouselComponent>
            <div>
                <div>
                    <p>You can insert any tag as child</p>
                </div>
                <p>Even a lonely p</p>
                <img src="/assets/body/globo-centro.svg" alt="Or an image" />
            </div>
            <div>
                <div>
                    <p>You can insert any tag as child</p>
                </div>
                <p>Even a lonely p</p>
                <img src="/assets/body/globo-centro.svg" alt="Or an image" />
            </div>
            <div>
                <div>
                    <p>You can insert any tag as child</p>
                </div>
                <p>Even a lonely p</p>
                <img src="/assets/body/globo-centro.svg" alt="Or an image" />
            </div>
            <div>
                <div>
                    <p>You can insert any tag as child</p>
                </div>
                <p>Even a lonely p</p>
                <img src="/assets/body/globo-centro.svg" alt="Or an image" />
            </div>
            <div>
                <div>
                    <p>You can insert any tag as child</p>
                </div>
                <p>Even a lonely p</p>
                <img src="/assets/body/globo-centro.svg" alt="Or an image" />
            </div>
            <div>
                <div>
                    <p>You can insert any tag as child</p>
                </div>
                <p>Even a lonely p</p>
                <img src="/assets/body/globo-centro.svg" alt="Or an image" />
            </div>
            <div>
                <div>
                    <p>You can insert any tag as child</p>
                </div>
                <p>Even a lonely p</p>
                <img src="/assets/body/globo-centro.svg" alt="Or an image" />
            </div>
            <div>
                <div>
                    <p>You can insert any tag as child</p>
                </div>
                <p>Even a lonely p</p>
                <img src="/assets/body/globo-centro.svg" alt="Or an image" />
            </div>
            <div>
                <div>
                    <p>You can insert any tag as child</p>
                </div>
                <p>Even a lonely p</p>
                <img src="/assets/body/globo-centro.svg" alt="Or an image" />
            </div>
        </CarouselComponent>
    )
  }
}