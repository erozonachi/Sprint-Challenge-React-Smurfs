import React, { Component } from 'react';
import FormContainer from './StyledComponents/FormContainer';

const initial = {
  name: '',
  age: '',
  height: '',
};

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id.trim();
    const smurf = this.id? this.props.getSmurf(this.id)[0] : initial;
    this.state = {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height,
    };
  }

  addSmurf = event => {
    event.preventDefault();
    if(this.state.name.trim() !== '' && 
      this.state.age.toString().trim() !== '' && 
      this.state.height.trim() !== '') {
      this.id? this.props.editHandler({...this.state}, this.id) : this.props.addHandler({...this.state});
    }

    this.setState({
      name: '',
      age: '',
      height: ''
    });
    this.props.history.push('/');
  }

  handleCancel = event => {
    event.preventDefault();
    this.id = null;
    this.props.history.push('/smurf-form/ ');
    this.setState({...initial});
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <FormContainer showCancel={this.id? true: false}>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">{this.id? 'Edit Smurf' : 'Add to the village'}</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      </FormContainer>
    );
  }
}

export default SmurfForm;
