import React, { useEffect, useState } from 'react';
import './Styles/App.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect( () => {
    fetch('https://opentdb.com/api.php?amount=10&type=boolean')
      .then(response => response.json())
      .then(data => setData(data.results))
  }, []);

  return (
    <div>
      <h1>WE HAVE BEGUN</h1>
        {data.length > 0 && data[0].category}
    </div>
  );
};

export default App;