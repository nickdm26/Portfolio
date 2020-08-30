import React, { Component } from 'react';


class temperature_api extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: null,
            error: null,
            isLoaded: false,
            JSON: []
        };
    }

    componentDidMount() {
        console.log('componentDidMount')
        const apiURL = 'http://api.openweathermap.org/data/2.5/weather?q=Dunedin&units=metric&appid=e255accb127713656a4d5d026720305d';
        fetch(apiURL)
            .then((res) => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    JSON: result
                });
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const { error, isLoaded, JSON } = this.state;
        if (error) {
            return <p>Error: {error.message}</p>;
        } else if (!isLoaded) {
            return <p>Loading...</p>;
        } else {
            return(
                <p>Temperature: {Math.round(JSON.main.temp)}°C</p>
            )
        }
    }
}

export default temperature_api;