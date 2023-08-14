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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Place</label>
        <input value={place} onChange={handleChange} />
        <button>Create</button>
      </form>
    </div>
  );
}

export default PlaceCreate;
