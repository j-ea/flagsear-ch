import React from 'react';

let flagData = require('./flagData.json');

// credit to @neroux / Binary Passion on Medium for the country code to unicode conversion

const Flag = ({ flag }) => {
    return (
        <div className="FlagsContainer">
            {flagData.map(country => (
                <div className="Flag">
                    {country.iso_2cc.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397) )}
                </div>
            ))}
        </div>
    );
};

export default Flag