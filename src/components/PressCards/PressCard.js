import React, { Component } from 'react'
import Styled from 'styled-components'
import Theme from '../../Styles/Theme.js'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const PressCardContainer = Styled.section`
    box-shadow: ${Theme.shadow}; 
    border-radius: 20px;
    width: 272px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    margin: 0px 21px 48px 21px;
    padding: 18px 18px 31px 18px;
    .press-img-container, .press-iframe{
        width: 100%;
        height: 207px;
        border-radius: 13px;
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: ${Theme.shadow};
    }
    .press-img{
        width: 100%;
    }
    .press-iframe{
        border-radius: 13px;
    }
    .press-card-title{
        font-family: ${Theme.primaryFont};
        font-weight: 700;
        color: ${Theme.blackFont};
        font-size: 18px;
        line-height: 21px;
        margin-bottom: 17px;
        padding: 0px 8px;
    }
    .press-card-text{
        font-family: ${Theme.secondaryFont};
        font-weight: 300;
        color: ${Theme.black};
        font-size: 12px;
        line-height: 17px;
        text-align: left;
        padding: 0px 8px;
    }
    .press-card-footer{
        display: flex;
        justify-content: space-between;
        align-items: space-between;
        position: relative;
        bottom: 0px;
        margin-top: 5px;
        padding: 0px 8px;
    }
    .press-link, .press-date{
        font-family: ${Theme.secondaryFont};
        font-size: 12px;
        line-height: 14px;
    }
    .press-link{
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${Theme.primaryColor};
    }
    .press-date{
        color: ${Theme.darkGrey}
    }
    @media only screen and (max-width: 1365px){
        height: auto;
        .press-card-title{
            font-size: 15px;
            line-height: 18px;
            margin-bottom: 18px;
            margin-top: 35px;
            padding: 0px 7px;
        }
        .press-card-text{
            font-size: 10px;
            line-height: 14px;
            padding: 0px 7px;
        }
        .press-card-footer{
            padding: 0px 7px;
        }
        .press-link, .press-date{
            font-size: 9px;
            line-height: 13px;
        }
    }
    @media only screen and (max-width: 767px){
        height: 256px;
        padding: 11px 9px 28px 9px;
        margin: 0px 21px 20px 21px;
        border-radius: 12px;
        .press-card-title{
            font-size: 11px;
            line-height: 14px;
            margin-bottom: 0px;
            margin-top: 23px;
            padding: 0px 6px;
        }
        .press-card-footer{
            padding: 0px 6px;
        }
        .press-card-text{
            display: none;
        }
        .press-img-container, .press-iframe{
            height: 152px;
            border-radius: 9px;
        }
        .press-link, .press-date{
            font-size: 9px;
            line-height: 13px;
        }
    }
`

export default class PressCard extends Component {
    // constructor(props){
    //     super(props)

    // }
    render() {
        return (
            <PressCardContainer>
                <div className="press-card-body">
                    {this.props.isImg === true ?
                    <div className="press-img-container" style={{backgroundImage: `url(${this.props.img})`, backgroundPosition: `${this.props.align}`
                }}>
                    </div>
                    :
                    <div>
                    <iframe className="press-iframe" width="100%" height="207" scrolling="no" frameBorder="no" allow="autoplay" src={this.props.img} title={this.props.alt}></iframe>
                    </div>
                    }
                    <h5 className="press-card-title">{this.props.title}</h5>
                    <p className="press-card-text">{this.props.text}</p>
                </div>
                <div className="press-card-footer">
                        <a className="press-link" href={this.props.link} target="_blank">
                            Ver más
                            <NavigateNextIcon style={{fontSize: '16px', marginLeft: '9px'}}/>
                        </a>
                    <p className="press-date">{this.props.date}</p>
                </div>
            </PressCardContainer>
        )
    }
}

