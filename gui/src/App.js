import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Spinner from './Spinner'




class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      prompt: '',
      samples: [],
      isLoading: false,
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
    this.setState({isLoading: true});
    const prompt = this.state.prompt;
    this.setState({prompt: ''});
    axios.get(`http://localhost:5000/sample?prompt=${prompt}`)
  .then( (response) => {
    this.setState({isLoading: false});
    console.log(response);
    this.setState({samples: [...this.state.samples, response.data]})
  })
  .catch( (error) => {
    console.log(error);
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
          <Spinner loading={this.state.isLoading}/>
          <textarea onChange={this.handleChange} value={this.state.prompt}/>

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
