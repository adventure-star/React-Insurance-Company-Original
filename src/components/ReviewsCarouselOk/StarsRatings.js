import React , {Component} from 'react'
import StarRatings from 'react-star-ratings';
import Theme from '../../Styles/Theme.js'
 
 
export default function StarsRating(props) {
    const { color, stars } = props
    return (
      <StarRatings
        rating={stars}
        starDimension="25px"
        starSpacing="3px"
        starRatedColor={color}
        starEmptyColor={Theme.grey}
      />
    );
}