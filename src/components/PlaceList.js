import PlaceShow from './PlaceShow';

function PlaceList({ places, onDelete, onEdit }) {
  const renderedPlaces = places.map((place) => {
    return (
      <PlaceShow
        onEdit={onEdit}
        onDelete={onDelete}
        key={place.id}
        place={place}
      />
    );
  });

  return <div className='place-list'>{renderedPlaces}</div>;
}

export default PlaceList;
