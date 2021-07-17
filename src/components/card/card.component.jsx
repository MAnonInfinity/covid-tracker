import React from 'react';
import './card.style.css'

const Card = ({ title, value }) => {
    return (
        <div className="card">
            <div className="card-content">
                <p className="card-title">{title.toUpperCase()}</p>
                <p className="card-value">
                    {title==='lastupdatedtime'? value:value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
            </div>
        </div>
    );
}

export default Card;
