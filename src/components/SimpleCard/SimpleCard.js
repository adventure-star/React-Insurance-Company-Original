import React, {Component} from 'react'
import Styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
const CardContainer = Styled.div`
    text-align: center;
    border: 1px solid grey;
    border-radius: 12px;
    padding: 20px;

    img{
        width: 100px;
        margin: auto;
    }
    p{
        text-align:center;
    }
`
export default class SimpleCard extends Component {
    constructor(props){
        super(props)
        this.state = this.props.data
    }
 
    render(){
        console.log(this.state.image, "imagen")
        return (
                <CardContainer>
                    <img src={this.state.image}/>
                    {console.log("holi")}
                </CardContainer>
        )
    }    
}
