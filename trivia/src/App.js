import React, { useEffect } from 'react';
import './App.css';

const App = () => {

  const [data, setData] = useState([]);

  useEffect( () => {
    fetch('https://opentdb.com/api.php?amount=10&type=boolean')
      .then(response => response.json)
      .then(data => setData(data.results))
  }
);

  return (
    <div>
      <h1>WE HAVE BEGUN</h1>
    </div>
  );
};

export default App;