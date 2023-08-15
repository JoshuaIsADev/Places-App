import { useState } from 'react';

function PlaceCreate({ onCreate }) {
  const [place, setPlace] = useState('');

  const handleChange = (event) => {
    setPlace(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(place);
    setPlace('');
  };

  return (
    <div className='place-create'>
      <h3>Add a Place</h3>
      <form onSubmit={handleSubmit}>
        <label>Place</label>
        <input className='input' value={place} onChange={handleChange} />
        <button className='button'>Create</button>
      </form>
    </div>
  );
}

export default PlaceCreate;
