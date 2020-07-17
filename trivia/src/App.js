import React, { useEffect, useState } from 'react';
import './Styles/App.css';
import Loading from './Components/Loading';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    setLoading(true);
    fetch('https://opentdb.com/api.php?amount=10&type=boolean')
      .then(response => response.json())
      .then(data => {
          setData(data.results);
          setLoading(false);
      })
  }, []);

  return (
    <div>
        {loading ? <Loading/> :
            data.length > 0 && data[0].category
        }
      <h1>WE HAVE BEGUN</h1>
    </div>
  );
};

export default App;