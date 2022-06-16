import React, { Component } from 'react';
import Movies from "../src/component/Movies";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
    render() {
      return (
        <div className='main'>
          <Movies/>
        </div>  
      );
    }
}
export default App;