import React, {Component} from 'react';
import './App.css';
import MyComponents from './components/MyComponents';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <MyComponents name="ReactJS"/>      
      </div>
    );
  }
}

export default App;
