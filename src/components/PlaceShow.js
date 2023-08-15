import { useState } from 'react';
import PlaceEdit from './PlaceEdit';

function PlaceShow({ place, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(place.id);
  };

  const handleEditclick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newName) => {
    setShowEdit(false);
    onEdit(id, newName);
  };

  let content = <h3>{place.name}</h3>;
  if (showEdit) {
    content = <PlaceEdit onSubmit={handleSubmit} place={place} />;
  }

  return (
    <div className='place-show'>
      <img
        src={`https://picsum.photos/seed/places${place.id}/300/200`}
        alt='places'
      />
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditclick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default PlaceShow;
