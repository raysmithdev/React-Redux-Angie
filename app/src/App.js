import React, { Component } from 'react'
import './App.css'
import DataButton from './containers/DataButton'
import UserWidget from './containers/UserWidget'
import Loader from './containers/Loader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataButton />
        <Loader />
        <UserWidget />
      </div>
    );
  }
}

export default App
