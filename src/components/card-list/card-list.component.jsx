import React from 'react';
import './card-list.style.css'

import Card from '../card/card.component';

const CardList = (props) => {
    return (
        <div className="card-list">
           {
               props.data.map(theData => (
                   <Card 
                    key = {theData.key}
                    title={theData.title}
                    value={theData.value}
                   />)
               )
           }
        </div>
    );
}

export default CardList;
