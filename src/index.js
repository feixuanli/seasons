import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeansonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = {
        lat: null,
        errMessage: '',
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errMessage: err.message})
        );
    }

    // specifically to react, required
    render() {
        if(this.state.errMessage) {
            return <div>Error: {this.state.errMessage}</div>;
        } else if (this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        return <Spinner message="Please accept location request"/>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);