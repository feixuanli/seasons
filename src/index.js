import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // specifically to js , not must-have 
    // called any time the instance of this class is created
    constructor(props) { // automatically called with props object
        super(props); // must-have , a referrence to the parent's constructor function
        
        // initialize state 
        this.state = {
            lat: null,
            errMessage: '',
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude})
            },
            (err) => {
                this.setState({errMessage: err.message})
            }
        );
    }
    // specifically to react, required
    render() {
        if(this.state.errMessage) {
            return <div>Error: {this.state.errMessage}</div>;
        } else if (this.state.lat) {
            return <div> Latitude: {this.state.lat} </div>;
        }
        return <div>loading</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);