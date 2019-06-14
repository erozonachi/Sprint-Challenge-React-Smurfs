import React from 'react';
import { Link, } from 'react-router-dom';
import SmurfItem from './StyledComponents/SmurfItem';

const Smurf = props => {

  const handleDelete = () => {
    props.delHandler(props.id);
  }

  return (
    <SmurfItem>
      <Link to={`/smurfs/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div>
        <button onClick={handleDelete}>Delete</button>
        <Link to={`/smurf-form/${props.id}`}>
          <button>Edit</button>
        </Link>
      </div>
    </SmurfItem>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

