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

  querySample(prompt) {
    this.setState({isLoading: true});
    axios.get(`http://localhost:5000/sample?prompt=${prompt}`)
    .then( (response) => {
      this.setState({isLoading: false});
      console.log(response);
      this.setState({samples: [...this.state.samples, 
        { prompt: prompt, 
        body: response.data}]})
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const prompt = this.state.prompt;
    this.setState({prompt: ''});
    this.querySample(prompt);
  }

  render(){
    const samples = this.state.samples.map((sample) => 
              <li key={sample}>
                <button disabled={this.state.isLoading} className="prompt" onClick={() => this.querySample(sample.prompt)}>{sample.prompt}</button>
                <p> { sample.body } </p>
                </li>
         );

    return (
      <div className="App">
        <header className="App-header">
          <h1>genpad</h1>
        </header>
         
        <ul ClassName="samples">{samples}</ul>
        
        <form onSubmit={this.handleSubmit}>
          <Spinner loading={this.state.isLoading}/>
          <textarea onChange={this.handleChange} value={this.state.prompt}/>

          <input disabled={this.state.isLoading} type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
