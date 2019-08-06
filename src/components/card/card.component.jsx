import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <h2> {props.item.name} </h2>
    <p> {props.item.telephone}</p>
  </div>
);

