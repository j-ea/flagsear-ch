import React, { useState } from 'react';
import Flag from './flag';
import Search from './search';

import '../App.css';

const App = () => {
  const [flags, setFlags] = useState([]);

  const search = searchValue => {

    fetch('./flagData.jason')
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setFlags(jsonResponse.Search);
        }
      });
  	};

  return (
    <div className="App">
      <header className="App-header">
          Flag Search
      </header>
      <div>
        <Search search={search}/>
      </div>
      <div>
        {flags.map((flag, index) => (
          <Flag key={`${index}-${flag.displayName}`} flag={flag} />
        ))}
      </div>
    </div>
  );
}

export default App;
