import React from 'react';

const country = props => {
    return(
    <div className="Flag">
        {props.flag.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397) )}
        <br /><span className="CountryName">{props.name}</span>
    </div>
);}
  
  export default country;