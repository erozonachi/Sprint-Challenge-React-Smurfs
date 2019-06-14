import React, { useState, useEffect, } from 'react';
import Axios from 'axios';
import {BrowserRouter as Router, Route, NavLink, } from 'react-router-dom';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import AppContainer from './StyledComponents/AppContainer';

export default function App(props) {
  const url = 'http://localhost:3333/smurfs'
  const [smurfs, setSmurfs] = useState([]);
  
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

  const deleteSmurf = (id) => {
    Axios.delete(`${url}/${id}`)
    .then(response => {
      setSmurfs(response.data);
    })
    .catch(err => {
      //Die error
    })
  }

  const editSmurf = (smurf, id) => {
    Axios.put(`${url}/${id}`, smurf)
    .then(response => {
      setSmurfs(response.data);
    })
    .catch(err => {
      //Die error
    })
  }

  const getASmurf = (id) => {
    return smurfs.filter((smurf) => smurf.id === parseInt(id,10));
  }

  useEffect(() => {
    getSmurfs();
  }, []);
  
  return (
    <Router>
      <AppContainer>
        <nav>
          <NavLink to='/'>Smurfs</NavLink>
          <NavLink to='/smurf-form/ '>Add Smurf</NavLink>
        </nav>
        <Route 
          exact
          path='/' 
          render={props => <Smurfs smurfs={smurfs} delHandler={deleteSmurf} {...props} />}
        />
        <Route 
          path='/smurfs/:id' 
          render={props => <Smurf {...getASmurf(props.match.params.id)[0]} delHandler={deleteSmurf} {...props} />}
        />
        <Route 
          path='/smurf-form/:id' 
          render={props => <SmurfForm 
            addHandler={addSmurf} 
            editHandler={editSmurf} 
            getSmurf={getASmurf}
            {...props} />}
        />
      </AppContainer>
    </Router>
  );
}
