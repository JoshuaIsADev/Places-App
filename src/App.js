import { useState, useEffect } from 'react';
import axios from 'axios';
import PlaceCreate from './components/PlaceCreate';
import PlaceList from './components/PlaceList';

function App() {
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async () => {
    const response = await axios.get('http://localhost:3001/places');

    setPlaces(response.data);
  };

  //DONT DO THIS:
  // fetchPlace(); it will cause an infinite loop, app will re render and fetchplaces will be called, then app will re render... and so on

  const editPlaceById = async (id, newName) => {
    const response = await axios.put(`http://localhost:3001/places/${id}`, {
      name: newName,
    });

    const updatedPlaces = places.map((place) => {
      if (place.id === id) {
        return { ...place, ...response.data };
      }

      return place;
    });

    setPlaces(updatedPlaces);
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  const deletePlaceById = async (id) => {
    await axios.delete(`http://localhost:3001/places/${id}`);

    const updatedPlaces = places.filter((place) => {
      return place.id !== id;
    });

    setPlaces(updatedPlaces);
  };

  const createPlace = async (name) => {
    const response = await axios.post('http://localhost:3001/places', {
      name: name,
    });

    const updatedPlaces = [...places, response.data];
    setPlaces(updatedPlaces);
  };

  return (
    <div className='app'>
      <h1>Places</h1>
      <PlaceList
        onEdit={editPlaceById}
        places={places}
        onDelete={deletePlaceById}
      />
      <PlaceCreate onCreate={createPlace} />
    </div>
  );
}

export default App;
