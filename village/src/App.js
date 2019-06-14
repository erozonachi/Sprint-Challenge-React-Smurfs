import React, { useState, useEffect, } from 'react';
import Axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

export default function App(props) {
  const url = 'http://localhost:3333/smurfs'
  const [smurfs, setSmurfs] = useState([]);
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  const getSmurfs = () => {
    Axios.get(url)
    .then(response => {
      setSmurfs(response.data);
    })
    .catch(err => {
      //Die error
    })
  }

  const addSmurf = (newSmurf) => {
    Axios.post(url, newSmurf)
    .then(response => {
      setSmurfs(response.data);
    })
    .catch(err => {
      //Die error
    })
  }

  useEffect(() => {
    getSmurfs();
  }, []);
  
  return (
    <div className="App">
      <SmurfForm addHandler={addSmurf} />
      <Smurfs smurfs={smurfs} />
    </div>
  );
}
