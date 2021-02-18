import React, { useState } from 'react';
import { getData } from '../src/getData';

const App = () => {
  const [currency, setCurrency] = useState('');
  const [currData, setCurrData] = useState(null);

  const convertCurrency = async (e) => {
    e.preventDefault();
    try {
      const res = await getData(currency);
      setCurrData(res.data.bpi);
    } catch (error) {
      console.log(error);
    }
  };

  console.log('data', currData);

  return (
    <div>
      <form onSubmit={convertCurrency}>
        <input
          type="text"
          name="input"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        ></input>
        <button>Convert</button>
      </form>
      {currData && (
        <section>
          <div>
            <h4>{currData.USD.code}</h4>
            <h4>{currData.USD.rate}</h4>
          </div>

          <div>
            <h4>{currData[currency.toUpperCase()].code}</h4>
            <h4>{currData[currency.toUpperCase()].rate}</h4>
          </div>

        </section>
      )}
    </div>
  );
};

export default App;
