import { useState } from 'react';
import PlaceCreate from './components/PlaceCreate';

function App() {
  const [places, setPlaces] = useState([]);

  const createPlace = (place) => {
    console.log('Need to add a place with:', place);
  };

  return (
    <div>
      <PlaceCreate onCreate={createPlace} />
    </div>
  );
}

export default App;
