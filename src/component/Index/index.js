import React , {Component} from 'react';

import About      from './../About'
import Footer     from './../Footer'
import Portfolio  from './../Portfolio'


class Index extends Component {
    render() {
        return(
            <div>
                <About />
                <Portfolio />
                <Footer />
            </div>
        )
    }
}

export default Index;