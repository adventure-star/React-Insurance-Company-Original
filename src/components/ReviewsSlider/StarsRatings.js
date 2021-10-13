import React , {Component} from 'react'
import StarRatings from 'react-star-ratings';
// import './star-ratings.css'
 
 
export default function StarsRating(props) {
    const { color, stars, activeColor } = props
    return (
      <StarRatings 
        rating={stars}
        starDimension="11px"
        starSpacing="3px"
        // starRatedColor={activeColor}
        // starEmptyColor={Theme.grey}
      />
    );
}