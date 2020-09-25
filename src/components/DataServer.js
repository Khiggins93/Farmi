import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'

export default class DataServer extends Component {
    constructor(){
        super();
        this.state= {
            response: false,
            endpoint: "http://10.0.0.11:4001"
        };
    }

    componentDidMount(){
        const {endpoint} = this.state;
        const socket = socketIOClient(endpoint);
        
        socket.on('MqttAPI', (dataESP32) => {
            this.setState({response: dataESP32}
            )        
        });
}
        
    

    render() {
        const {response} = this.state;
        return (
            <div>
                {response ? 
                <p>
                    This is data in Farmi Robotic is:
                    <div>Tempuerature: {response.temp} °C</div>
                    <div>Humidity: {response.hum} %</div>
                    <div>Latitude: {response.lat} </div>
                    <div>Longitude: {response.lgt} </div>
                    <div>Speed: {response.spd} m/s</div>
                </p>:
                <p>Waiting for data from Farmi Robotic..</p>
                }
            </div>
        );
    }
}
