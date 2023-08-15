import { useState } from 'react';

function PlaceEdit({ place, onSubmit }) {
  const [name, setName] = useState(place.name);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(place.id, name);
  };

  return (
    <form onSubmit={handleSubmit} className='place-edit'>
      <label>Name</label>
      <input className='input' value={name} onChange={handleChange} />
      <button className='button is-primary'>Save</button>
    </form>
  );
}

export default PlaceEdit;
