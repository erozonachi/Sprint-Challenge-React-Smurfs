import React from 'react';

const Smurf = props => {

  const handleDelete = () => {
    props.delHandler(props.id);
  }

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

