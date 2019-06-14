import React from 'react';
import { Link, } from 'react-router-dom';
import SmurfItem from './StyledComponents/SmurfItem';
import PropTypes from 'prop-types';

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

Smurf.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
}

export default Smurf;

