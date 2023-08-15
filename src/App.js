import { useState } from 'react';
import PlaceCreate from './components/PlaceCreate';
import PlaceList from './components/PlaceList';

function App() {
  const [places, setPlaces] = useState([]);

  const editPlaceById = (id, newName) => {
    const updatedPlaces = places.map((place) => {
      if (place.id === id) {
        return { ...place, name: newName };
      }

      return place;
    });

    setPlaces(updatedPlaces);
  };

  const deletePlaceById = (id) => {
    const updatedPlaces = places.filter((place) => {
      return place.id !== id;
    });

    setPlaces(updatedPlaces);
  };

  const createPlace = (name) => {
    const updatedPlaces = [
      ...places,
      { id: Math.round(Math.random() * 999999), name: name },
    ];
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
