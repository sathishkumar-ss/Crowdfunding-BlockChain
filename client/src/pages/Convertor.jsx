import React, { useState, useEffect } from 'react';
import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';
import axios from 'axios';

const Convertor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [priceData, setPriceData] = useState({});

  useEffect(() => {
    if(contract) fetchCampaigns();
    fetchPriceData();
  }, [address, contract]);

  const fetchPriceData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://alpha-vantage.p.rapidapi.com/query', {
        params: {
          interval: '5min',
          function: 'CRYPTO_INTRADAY',
          symbol: 'BTC',
          market: 'USD',
          datatype: 'json',
          output_size: 'compact'
        },
        headers: {
          'X-RapidAPI-Key': 'a875b115damshb147c1fba4d7210p1f57fcjsnc935f2df34fe',
          'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
      });
      setPriceData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div>
          <h2>Live Cryptocurrency Price Data</h2>
          <ul>
            {Object.keys(priceData['Time Series Crypto (5min)']).map((timestamp, index) => (
              <li key={index}>
                <p>{timestamp}</p>
                <p>Open: {priceData['Time Series Crypto (5min)'][timestamp]['1. open']}</p>
                <p>High: {priceData['Time Series Crypto (5min)'][timestamp]['2. high']}</p>
                <p>Low: {priceData['Time Series Crypto (5min)'][timestamp]['3. low']}</p>
                <p>Close: {priceData['Time Series Crypto (5min)'][timestamp]['4. close']}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <DisplayCampaigns campaigns={campaigns} />
    </>
  );
};

export default Convertor;
