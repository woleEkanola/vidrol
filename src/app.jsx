import { clipboard, ipcRenderer, remote } from 'electron';
import React, { Component } from 'react';
import './video.css'


import Home from './pages/Home'
import Youtube from './pages/Youtube'
import LocalVideo from './pages/LocalVideo'
import About from './pages/About'

class App extends React.Component {

  render() {
    return (
<div> 
  <Home/>
</div>

    );
  }
}

export default App;