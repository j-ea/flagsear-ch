import React, { useState } from "react";
import "./App.css";
import Header from "./header"
import countryData from "./countryData";
import CountryComponent from "./countryComponent";
import Fuse from "fuse.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function App() {
  const [searchValue, setSeachValue] = useState("");
  
  const fuse = new Fuse(countryData, {
    keys: ["display_name", "description"]
  });
  const results = fuse.search(searchValue);
  //Fuse returns a refIndex. An array with only the items should be returned for the component.
  const countryResults = searchValue
    ? results.map((country) => country.item)
    : countryData;

  const handleChange = (event) => {
    setSeachValue(event.target.value);
  };

  const searchIcon = <FontAwesomeIcon icon={faSearch} />

  return (
    <div className="App">
      <Header />
      <div className="SearchBarContainer">
        <div className="SearchBar">
          <input
            type="text"
            onChange={handleChange}
            value={searchValue}
            required
          />
          <span className="FloatingLabel">Try "red circle parrot"</span>
          <span className="SearchIcon">{searchIcon}</span>
        </div>
      </div>
      <div className="FlagsContainer">
        {countryResults.map((countryItem) => (
          <CountryComponent
            key={countryItem.iso_2cc}
            flag={countryItem.iso_2cc}
            name={countryItem.display_name}
            className="Flag"
          />
        ))}
      </div>
    </div>
  );
}