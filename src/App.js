import React, { useState } from 'react';
import TrainSchedule from './components/alltrains';
import SingleTrain from './components/SingleTrain';
import AllTrains from './components/alltrains';


function App() {
  const [page, setPage] = useState('trainSchedule');

  const renderPage = () => {
    if (page === 'alltrains') {
      return <AllTrains setPage={setPage} />;
    } else if (page === 'singleTrain') {
      return <SingleTrain setPage={setPage} />;
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;