import React, { useState } from "react";
import "./App.css";
import Header from "./header"
import countryData from "./countryData";
import CountryComponent from "./countryComponent";

export default function App() {
  const [searchValue, setSeachValue] = useState("");

  const filteredCountries =
    searchValue.length > 1
      ? countryData.map((country) => {
          const searchTokens = searchValue.split(/\s+/g).map((s) => s.trim());
          const searchRegex = new RegExp(
            searchTokens
              .map((token) => {
                return `(?=.*\\b${token}\\b)`;
              })
              .join("")
          );
          const isMatch = countryData.filter((countryToTest) => {
            return searchRegex.test(countryToTest.description);
          });
          return isMatch;
        })
      : countryData;

  const handleChange = (event) => {
    setSeachValue(event.target.value);
  };
  return (
    <div className="App">
      <Header />
      <input
        type="text"
        placeholder='Seach here. Try "blue white sun"'
        onChange={handleChange}
        value={searchValue}
      />
      <div className="FlagsContainer">
        {searchValue.length > 1
          ? filteredCountries[0].map((countryItem) => (
              <CountryComponent
                key={countryItem.iso_2cc}
                flag={countryItem.iso_2cc}
                name={countryItem.display_name}
              />
            ))
          : filteredCountries.map((countryItem) => (
              <CountryComponent
                key={countryItem.iso_2cc}
                flag={countryItem.iso_2cc}
              />
            ))}
      </div>
    </div>
  );
}