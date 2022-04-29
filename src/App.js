import React, {Component} from 'react';
import './App.css';
import MyComponents from './components/MyComponents';
import MyComponentsFunc from './components/MyComponentsFunc';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <MyComponents name="ReactJS" age={150}/> 
        <MyComponentsFunc name = "함수형">
        <p>함수 칠드런</p>
        </MyComponentsFunc>
      </div>
    );
  }
}

export default App;
