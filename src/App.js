import React , {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

import Navbar    from './component/Navbar'
import Index     from './component/Index'
import Contact   from './component/Contact'


class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Index} />
        <Route exact path='/contact' component={Contact} />
      </BrowserRouter>
    )
  }
}

export default App;
