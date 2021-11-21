import React from 'react';


const Cards = ({ nom, img, type }) => {
    return (
        <li className="cards">
            {nom}
            <img src={img} alt="sprite pokemon" />
        </li>
    );
};

export default Cards;