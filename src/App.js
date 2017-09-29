import React, { Component } from 'react';
import './App.scss';

class App extends Component {

    constructor (props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState () {
        return {}
    }
    
    render () {
        return (
            <div className="container-fluid">
                <h4 data-selenium-id="wpng-header-prefix">6-2</h4>
                <h2 data-selenium-id="wpng-header-title">Apply Inventory Cost Flow Methods and Discuss Their Financial Effects</h2>
            </div>
        );
    }
}

export default App;
