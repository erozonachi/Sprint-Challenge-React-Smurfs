import React, { useState, useEffect, } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

export default function App(props) {
  const [smurfs, setSmurfs] = useState([]);
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  
  return (
    <div className="App">
      <SmurfForm />
      <Smurfs smurfs={this.state.smurfs} />
    </div>
  );
}
