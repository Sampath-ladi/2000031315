import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllTrains = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrainSchedule = async () => {
      try {
        const response = await axios.get('API_ENDPOINT_URL');
        const trainSchedule = response.data;
        setTrains(trainSchedule);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrainSchedule();
  }, []);

  return (
    <div className="all-trains">
      <h2>All Trains</h2>
      {trains.length > 0 ? (
        <ul className="train-list">
          {trains.map((train) => (
            <li key={train.id} className="train-item">
              <h3>{train.name}</h3>
              <p>Departure Time: {train.departureTime}</p>
              <p>Seats Available: {train.seatsAvailable}</p>
              <p>Price: {train.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading train schedule...</p>
      )}
    </div>
  );
};

export default AllTrains;