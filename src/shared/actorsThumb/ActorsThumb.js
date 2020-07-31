import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ActorsThumb.css';

const ActorsThumb = (props) => {
    return(
    <div className="rmdb-personthumb">
      {
      props.clickable ?
      <Link to={{pathname: `/actors/${props.personId}`, personName: `${props.personName}`}}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
             <img src={props.image} alt="personthumb" />
          </div>
          <div className="flip-card-back">
      <h1>{props.personId}</h1> 
            <p>Popularity</p>
            <p>Click for more Info</p>
          </div>
        </div>
      </div>
      </Link>
      :
      <img src={props.image} alt="personthumb" /> 
    }
    </div>
    )
}

ActorsThumb.propTypes = {
image:  PropTypes.string,
personId: PropTypes.number,
personName: PropTypes.string
}

export default ActorsThumb;