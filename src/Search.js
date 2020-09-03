import React, { useState } from 'react';

const Search = props => {
  const [change, setChange] = useState('');
  function handleChange(event) {
    var name = event.target.value;
    setChange(name);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.searchProfile(change);
  }
  console.log(props);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            onChange={handleChange}
            type='text'
            placeholder='Enter your username'
            value={change}
          />
        </label>
      </form>
    </div>
  );
};
export default Search;
