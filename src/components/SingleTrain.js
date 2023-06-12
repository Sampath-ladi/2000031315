import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SingleTrain.css';

const SingleTrain = () => {
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrain = async () => {
      try {
        const response = await axios.get('API_ENDPOINT_URL');
        const trainData = response.data;
        setTrain(trainData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrain();
  }, []);

  return (
    <div className="single-train">
      {train ? (
        <>
          <h2>Train Details</h2>
          <h3>{train.name}</h3>
          <p>Departure Time: {train.departureTime}</p>
          <p>Seats Available: {train.seatsAvailable}</p>
          <p>Price: {train.price}</p>
        </>
      ) : (
        <p>Loading train details...</p>
      )}
    </div>
  );
};

export default SingleTrain;