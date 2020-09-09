import React from 'react';

const country = props => {
    return(
    <div className="Flag">
        <p>{props.flag.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397) )}</p>
        <p className="CountryName">{props.name}</p>
    </div>
);}
  
  export default country;