import React, { useState, useEffect } from 'react';
import './App.css';

const pictures = [
  {
    id: 1,
    height: 9,
    width: 6,
  },
  {
    id: 2,
    height: 10,
    width: 4,
  },
  {
    id: 3,
    height: 3,
    width: 3,
  },
];

function App() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('heights');

  useEffect(() => {
    const sortArray = type => {
      const types = {
        height: 'height',
        width: 'width',
      };
      const sortProperty = types[type];
      const sorted = [...pictures].sort((a, b) => {
          return b[sortProperty] - a[sortProperty];
      });
      setData(sorted);
    };
    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="App">
      <select onChange={e => setSortType(e.target.value)}>
        <option value="height">Height</option>
        <option value="width">Width</option>
      </select>
      {data.map(band => (
        <div key={band.id} style={{ margin: '30px' }}>
          <div>{`height: ${band.height}`}</div>
          <div>{`width: ${band.width}`}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
