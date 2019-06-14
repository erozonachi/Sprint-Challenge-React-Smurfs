import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id.trim();
    const smurf = this.id? this.props.getSmurf(this.id) : null;
    this.state = {
      name: smurf.name || '',
      age: smurf.age || '',
      height: smurf.height || ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    if(this.state.name.trim() !== '' && this.state.age.trim() !== '' && this.state.height.trim() !== '') {
      this.id? this.props.editHandler({...this.state}, this.id) : this.props.addHandler({...this.state});
    }

    this.setState({
      name: '',
      age: '',
      height: ''
    });
    this.props.history.push('/');
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
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
        </form>
      </div>
    );
  }
}

export default SmurfForm;
