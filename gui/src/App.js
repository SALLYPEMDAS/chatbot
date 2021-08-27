import React, { Component } from 'react';
import axios from 'axios';
import './App.css';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      prompt: '',
      samples: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      prompt: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();

    axios.get(`http://localhost:5000/sample?prompt=${this.state.prompt}`)
  .then( (response) => {
    console.log(response);
    this.setState({samples: [...this.state.samples, response.data]})
  })
  .catch( (error) => {
    console.log(error);
  });


    this.setState({
      prompt: ''
    });

  }

  render(){
    const samples = this.state.samples.map((sample) => 
              <li key={sample}>{sample}</li>
         );
    return (
      <div className="App">
        <header className="App-header">
          <h1>genpad</h1>
          
        </header>
         
         
          
        <ul>{samples}</ul>

        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.handleChange} />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
