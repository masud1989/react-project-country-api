import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country-container'>
            <h2>Name: {props.name} </h2>
            <img src={props.flag} alt="" />
            <h3>Official Name: {props.official} </h3>
            <h4>Official Name: {props.population} </h4>
            <h3>Region : {props.region} </h3>
        </div>
    );
};

export default Country;