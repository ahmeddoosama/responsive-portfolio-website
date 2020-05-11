import React , {Component} from 'react';
import './App.css';

import Navbar    from './component/navbar';
import About     from './component/about';
import Portfolio from './component/portfolio';
import Contact   from './component/contact';
import Footer    from './component/footer';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Navbar />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
